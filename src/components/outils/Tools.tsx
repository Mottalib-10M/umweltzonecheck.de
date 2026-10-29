/**
 * Die sechs Prüfungen der Seite, alle aus demselben Motor (lib/engine) :
 *   PlaketteCalc  welche Plakette bekommt mein Fahrzeug ? (Kraftstoff, Abgasnorm oder Erstzulassung)
 *   StadtCalc     darf ich in diese Stadt ? (Ort, Plakette, Diesel-Norm, Datum)
 *   RouteCalc     welche Zonen liegen auf meiner Strecke ?
 *   ListeTool     aktive und aufgehobene Zonen, nach Land und Status gefiltert
 *   BussgeldCalc  was kostet die Fahrt ohne passende Plakette ?
 *   AusnahmeCalc  ist mein Fahrzeug von der Plakettenpflicht befreit ? (Anhang 3)
 * Erste Darstellung = Vorgaben und Tag des Builds (refDay), damit Server und Browser dasselbe zeigen
 * (RECETTE §17.5) ; die Adresse wird erst nach dem ersten Rendern gelesen. Nichts wird gesendet.
 */
import { useEffect, useMemo, useState, type ReactNode } from 'react';
import * as M from '../../lib/engine';
import { P, type SourceKey } from '../../lib/engine/params';
import { displayDate, formatMoney } from '../../lib/format';
import { LANG_TAGS } from '../../data/site-config';
import { readParams, str, updateURL } from '../../lib/url-state';
import SelectField from '../ui/SelectField';
import Toggle from '../ui/Toggle';
import { Shell, Head, Rows, Note, MethodLink, Row2, T, type L } from '../calc/kit';

const datum = (iso: string, l: L) => displayDate(iso, LANG_TAGS[l]);
const isIso = (s: string) => /^\d{4}-\d{2}-\d{2}$/.test(s);
const zName = (z: M.Zone, l: L) => z.name[l];
const Q = ({ k, l, children }: { k: SourceKey; l: L; children?: ReactNode }) => (
  <a href={P.sources[k].url} target="_blank" rel="nofollow noopener noreferrer" className="underline decoration-navy-300 hover:text-accent-700">{children ?? P.sources[k].label[l]}</a>
);
const Ext = ({ href, children }: { href: string; children: ReactNode }) => (
  <a href={href} target="_blank" rel="nofollow noopener noreferrer" className="underline decoration-navy-300 hover:text-accent-700">{children}</a>
);

function DateField({ id, label, value, onChange }: { id: string; label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div className="grid grid-rows-subgrid row-span-3 content-start gap-y-0">
      <label htmlFor={id} className="mb-1 block text-sm font-medium text-navy-700">{label}</label>
      <input id={id} type="date" value={value} min="2008-01-01" max="2030-12-31" onChange={(e) => { if (isIso(e.target.value)) onChange(e.target.value); }}
        className="h-12 w-full rounded-lg border border-navy-300 bg-white px-3 text-navy-900 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20" />
    </div>
  );
}

/* ------------------------------------------------------------------ Bezeichnungen */
const FARBE_NAME: Record<M.Farbe, Record<L, string>> = {
  gruen: { de: 'Grüne Plakette', en: 'Green sticker' }, gelb: { de: 'Gelbe Plakette', en: 'Yellow sticker' },
  rot: { de: 'Rote Plakette', en: 'Red sticker' }, keine: { de: 'Keine Plakette', en: 'No sticker' },
};
const KRAFTSTOFF: Array<{ value: M.Kraftstoff; de: string; en: string }> = [
  { value: 'benzin', de: 'Benzin (Ottomotor)', en: 'Petrol' }, { value: 'diesel', de: 'Diesel', en: 'Diesel' },
  { value: 'gas', de: 'Autogas oder Erdgas (LPG, CNG)', en: 'LPG or CNG' }, { value: 'elektro', de: 'Elektro oder Brennstoffzelle', en: 'Electric or fuel cell' },
];
const normOptions = (l: L, diesel: boolean) => [
  { value: '0', label: diesel ? T(l, 'Euro 1 nicht erreicht', 'below Euro 1') : T(l, 'ohne geregelten Katalysator', 'no regulated catalyst') },
  ...[1, 2, 3, 4, 5, 6].map((n) => ({ value: String(n), label: `Euro ${n}` })),
];
const gruppeOptions = (l: L) => ([4, 3, 2, 1] as M.Gruppe[]).map((g) => ({ value: String(g), label: `${FARBE_NAME[M.FARBE[g]][l]}${g > 1 ? ` (${T(l, 'Gruppe', 'group')} ${g})` : ''}` }));
const ortOptions = (l: L, leer?: string) => [...(leer ? [{ value: '', label: leer }] : []), ...M.ORTE.map((o) => ({ value: o.id, label: M.ortName(o.name, l) }))];
const asNorm = (s: string) => Math.max(0, Math.min(6, Number(s) || 0)) as M.Norm;
const asGruppe = (s: string) => (([1, 2, 3, 4] as const).includes(Number(s) as M.Gruppe) ? Number(s) : 4) as M.Gruppe;
const asKraft = (s: string): M.Kraftstoff => (KRAFTSTOFF.some((k) => k.value === s) ? s as M.Kraftstoff : 'benzin');

/** Hinweis auf Diesel-Verkehrsverbote einer Prüfung. */
function DieselHinweis({ p, l }: { p: M.Pruefung; l: L }) {
  if (!p.diesel.length || !p.zone) return null;
  return (
    <ul className="mt-3 space-y-1 text-sm text-amber-900">
      {p.diesel.map((d, i) => (
        <li key={i}>
          {d.gebiet === 'ganz' && T(l, `Diesel-Verkehrsverbot in der ganzen Zone für Diesel bis Euro ${d.bisNorm}, seit ${datum(d.ab, l)}`, `Diesel ban across the whole zone for diesels up to Euro ${d.bisNorm}, since ${datum(d.ab, l)}`)}
          {d.gebiet === 'kleine' && T(l, `Zusätzlich in der kleinen Umweltzone: Diesel bis Euro ${d.bisNorm}, seit ${datum(d.ab, l)}`, `Also in the small inner zone: diesels up to Euro ${d.bisNorm}, since ${datum(d.ab, l)}`)}
          {d.gebiet === 'strecke' && T(l, `Durchfahrtsverbot auf einzelnen Straßen für Diesel bis Euro ${d.bisNorm}, seit ${datum(d.ab, l)}`, `Ban on individual streets for diesels up to Euro ${d.bisNorm}, since ${datum(d.ab, l)}`)}
          {d.ausnahmeLiefer && T(l, ' (Lieferverkehr und Anwohner ausgenommen)', ' (deliveries and residents exempt)')}
        </li>
      ))}
    </ul>
  );
}
function ZonenQuelle({ z, l }: { z: M.Zone; l: L }) {
  return (
    <p className="mt-2 text-xs text-navy-600">
      {T(l, 'Quellen', 'Sources')}: <Q k="ubaListe" l={l}>{T(l, 'Liste des Umweltbundesamts', 'Federal Environment Agency list')}</Q>
      {z.quellen.slice(0, 2).map((u) => <span key={u}> · <Ext href={u}>{new URL(u).hostname.replace(/^www\./, '')}</Ext></span>)}
    </p>
  );
}

/* ------------------------------------------------------------------ Fahrzeug -> Plakette */
interface FzState { k: M.Kraftstoff; modus: 'norm' | 'datum'; norm: M.Norm; pms: boolean; ez: string; klasse: M.Klasse }
function useFahrzeug(def: Partial<FzState>) {
  const d: FzState = { k: 'diesel', modus: 'norm', norm: 4, pms: false, ez: '2005-06-01', klasse: 'pkw', ...def };
  const [s, setS] = useState<FzState>(d);
  useEffect(() => {
    const u = readParams(window.location.search);
    setS({ k: asKraft(str(u, 'k', d.k)), modus: str(u, 'm', d.modus) === 'datum' ? 'datum' : 'norm', norm: asNorm(str(u, 'n', String(d.norm))), pms: str(u, 'pms', d.pms ? '1' : '0') === '1', ez: isIso(str(u, 'ez', d.ez)) ? str(u, 'ez', d.ez) : d.ez, klasse: str(u, 'kl', d.klasse) === 'lkw' ? 'lkw' : 'pkw' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return [s, setS] as const;
}
function FahrzeugFelder({ s, set, l, id }: { s: FzState; set: (x: FzState) => void; l: L; id: string }) {
  const diesel = s.k === 'diesel';
  return (
    <>
      <Row2>
        <SelectField id={`${id}-k`} label={T(l, 'Kraftstoff', 'Fuel')} value={s.k} onChange={(v) => set({ ...s, k: asKraft(v) })} options={KRAFTSTOFF.map((k) => ({ value: k.value, label: k[l] }))} />
        <Toggle id={`${id}-kl`} label={T(l, 'Fahrzeug', 'Vehicle')} value={s.klasse} onChange={(v) => set({ ...s, klasse: v === 'lkw' ? 'lkw' : 'pkw' })} options={[{ value: 'pkw', label: T(l, 'Pkw', 'Car') }, { value: 'lkw', label: T(l, 'Lkw, Bus', 'Truck, bus') }]} />
      </Row2>
      {s.k !== 'elektro' && (
        <Row2>
          <Toggle id={`${id}-m`} label={T(l, 'Bestimmen nach', 'Work it out from')} value={s.modus} onChange={(v) => set({ ...s, modus: v === 'datum' ? 'datum' : 'norm' })} options={[{ value: 'norm', label: T(l, 'Norm', 'Euro norm') }, { value: 'datum', label: T(l, 'Datum', 'Date') }]} />
          {s.modus === 'norm'
            ? <SelectField id={`${id}-n`} label={T(l, 'Abgasnorm (Feld 14 der Papiere)', 'Euro norm (field 14 of the papers)')} value={String(s.norm)} onChange={(v) => set({ ...s, norm: asNorm(v) })} options={normOptions(l, diesel)} />
            : <DateField id={`${id}-ez`} label={T(l, 'Erstzulassung', 'First registration')} value={s.ez} onChange={(v) => set({ ...s, ez: v })} />}
        </Row2>
      )}
      {diesel && s.modus === 'norm' && s.norm >= 1 && s.norm <= 3 && (
        <Toggle id={`${id}-pms`} label={T(l, 'Partikelfilter nachgerüstet?', 'Particle filter retrofitted?')} value={s.pms ? '1' : '0'} onChange={(v) => set({ ...s, pms: v === '1' })} options={[{ value: '0', label: T(l, 'Nein', 'No') }, { value: '1', label: T(l, 'Ja', 'Yes') }]} />
      )}
    </>
  );
}
const toEingabe = (s: FzState): M.PlaketteEingabe => ({ kraftstoff: s.k, modus: s.modus, norm: s.norm, pms: s.pms, ez: s.ez, klasse: s.klasse });
const fzURL = (s: FzState) => ({ k: s.k, m: s.modus, n: s.modus === 'norm' ? s.norm : undefined, pms: s.pms ? 1 : undefined, ez: s.modus === 'datum' ? s.ez : undefined, kl: s.klasse === 'lkw' ? 'lkw' : undefined });

export function PlaketteCalc({ lang: l, id, methodHref, preset = {} }: { lang: L; id: string; methodHref?: string; preset?: Record<string, string> }) {
  const [s, setS] = useFahrzeug({ k: asKraft(preset.k ?? 'diesel'), modus: preset.m === 'datum' ? 'datum' : 'norm', norm: asNorm(preset.n ?? '4'), klasse: preset.kl === 'lkw' ? 'lkw' : 'pkw', ez: preset.ez ?? '2005-06-01' });
  const r = useMemo(() => M.plakette(toEingabe(s)), [s]);
  useEffect(() => { updateURL(fzURL(s)); }, [s]);
  const regel: Record<M.PlaketteErgebnis['regel'], string> = {
    elektro: T(l, 'Anhang 2 Abs. 3: Antrieb ohne Verbrennungsmotor', 'Annex 2(3): no combustion engine'),
    fremdNorm: T(l, 'Anhang 2 Abs. 2: Ottomotor mit geregeltem Katalysator', 'Annex 2(2): petrol engine with regulated catalyst'),
    fremdDatum: T(l, '§ 6 Abs. 4: Erstzulassung nach dem 31.12.1992', 'Section 6(4): first registered after 31 Dec 1992'),
    fremdLkwDatum: T(l, '§ 6 Abs. 4: für schwere Benziner nur mit Nachweis der Norm', 'Section 6(4): heavy petrol vehicles only with proof of the norm'),
    dieselNorm: T(l, 'Anhang 2 Abs. 1, vereinfachte Tabelle des Bundesumweltministeriums', 'Annex 2(1), Federal Environment Ministry simplified table'),
    dieselDatum: T(l, '§ 6 Abs. 3: Vermutung nach der Erstzulassung', 'Section 6(3): presumption from the first registration'),
  };
  const gruen = r.gruppe === 4;
  return (
    <Shell id={id} form={<FahrzeugFelder s={s} set={setS} l={l} id={id} />} result={<>
      <Head label={T(l, 'Ihr Fahrzeug bekommt', 'Your vehicle gets')} value={FARBE_NAME[r.farbe][l]} sub={r.gruppe > 1 ? `${T(l, 'Schadstoffgruppe', 'Emission group')} ${r.gruppe}` : T(l, 'Schadstoffgruppe 1: keine Plakette', 'Emission group 1: no sticker')} />
      <Rows rows={[
        [T(l, 'In die 35 aktiven Zonen', 'Into the 35 active zones'), gruen ? T(l, 'ja', 'yes') : T(l, 'nein', 'no'), true],
        [T(l, 'Grundlage', 'Legal basis'), regel[r.regel]],
        [T(l, 'Gebühr bei der Ausgabestelle', 'Fee at the issuing office'), `${formatMoney(P.gebuehr.min, 0, l)} – ${formatMoney(P.gebuehr.max, 0, l)}`],
      ]} />
      {s.k === 'diesel' && gruen && (s.modus === 'datum' || s.norm <= 5) && <Note>{T(l, 'Grün reicht nicht überall: Stuttgart sperrt Diesel bis Euro 4 (in der kleinen Zone bis Euro 5), München Diesel bis Euro 4.', 'Green is not enough everywhere: Stuttgart bans diesels up to Euro 4 (up to Euro 5 in the small zone), Munich diesels up to Euro 4.')}</Note>}
      {s.k === 'elektro' && <Note>{T(l, `Mit E-Kennzeichen seit ${datum(P.e_kennzeichen_ab, l)} ganz ohne Plakette (Anhang 3 Nr. 11).`, `With an e-plate no sticker at all since ${datum(P.e_kennzeichen_ab, l)} (Annex 3 no. 11).`)}</Note>}
      {s.modus === 'datum' && s.k !== 'elektro' && <Note>{T(l, 'Für ein in Deutschland zugelassenes Fahrzeug entscheidet die Schlüsselnummer in Feld 14.1, nicht das Datum.', 'For a vehicle registered in Germany the key number in field 14.1 decides, not the date.')}</Note>}
      <p className="mt-2 text-xs text-navy-600"><Q k="anhang2" l={l} /> · <Q k="bmuv" l={l}>{T(l, 'Tabelle des BMUV', 'BMUV table')}</Q></p>
      <MethodLink href={methodHref} lang={l} />
    </>} />
  );
}

/* ------------------------------------------------------------------ Darf ich hinein ? */
interface StadtState { ort: string; g: M.Gruppe; k: M.Kraftstoff; n: M.Norm; tag: string }
function useStadt(def: StadtState, prefix = '') {
  const [s, setS] = useState<StadtState>(def);
  useEffect(() => {
    const u = readParams(window.location.search);
    const ort = str(u, `${prefix}ort`, def.ort);
    const tag = str(u, 'tag', new Date().toISOString().slice(0, 10));
    setS({ ort: M.ortById(ort) ? ort : def.ort, g: asGruppe(str(u, 'g', String(def.g))), k: asKraft(str(u, 'k', def.k)), n: asNorm(str(u, 'n', String(def.n))), tag: isIso(tag) ? tag : def.tag });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return [s, setS] as const;
}
function PlaketteFelder({ s, set, l, id }: { s: Omit<StadtState, 'ort'>; set: (x: Partial<StadtState>) => void; l: L; id: string }) {
  return (
    <>
      <Row2>
        <SelectField id={`${id}-g`} label={T(l, 'Ihre Plakette', 'Your sticker')} value={String(s.g)} onChange={(v) => set({ g: asGruppe(v) })} options={gruppeOptions(l)} />
        <SelectField id={`${id}-k`} label={T(l, 'Kraftstoff', 'Fuel')} value={s.k} onChange={(v) => set({ k: asKraft(v) })} options={KRAFTSTOFF.map((k) => ({ value: k.value, label: k[l] }))} />
      </Row2>
      <Row2>
        {s.k === 'diesel'
          ? <SelectField id={`${id}-n`} label={T(l, 'Abgasnorm (für Dieselverbote)', 'Euro norm (for diesel bans)')} value={String(s.n)} onChange={(v) => set({ n: asNorm(v) })} options={normOptions(l, true)} />
          : <div />}
        <DateField id={`${id}-tag`} label={T(l, 'Tag der Fahrt', 'Date of the trip')} value={s.tag} onChange={(v) => set({ tag: v })} />
      </Row2>
    </>
  );
}
const fzOf = (s: Omit<StadtState, 'ort'>): M.Fahrzeug => ({ gruppe: s.g, kraftstoff: s.k, norm: s.k === 'diesel' ? s.n : null });

function antwortText(p: M.Pruefung, l: L, ortName: string): { head: string; sub: string } {
  const z = p.zone;
  switch (p.antwort) {
    case 'keineZone': return { head: T(l, 'Keine Umweltzone', 'No low-emission zone'), sub: T(l, `${ortName} steht nicht in der Liste des Umweltbundesamts.`, `${ortName} is not on the Federal Environment Agency list.`) };
    case 'aufgehoben': return { head: T(l, 'Ja, Zone aufgehoben', 'Yes, zone lifted'), sub: T(l, `Umweltzone ${zName(z!, l)} aufgehoben am ${datum(z!.aufhebung!, l)}.`, `${zName(z!, l)} zone lifted on ${datum(z!.aufhebung!, l)}.`) };
    case 'nochNicht': return { head: T(l, 'Ja, noch keine Pflicht', 'Yes, not yet required'), sub: T(l, `Die Zone galt an diesem Tag noch nicht.`, `The zone was not yet in force on that day.`) };
    case 'befreit': return { head: T(l, 'Ja, befreit', 'Yes, exempt'), sub: '' };
    case 'frei': return { head: p.diesel.some((d) => d.gebiet === 'ganz') ? T(l, 'Nein, Dieselverbot', 'No, diesel ban') : T(l, 'Ja, Einfahrt erlaubt', 'Yes, you may enter'), sub: T(l, `Umweltzone ${zName(z!, l)}: ${FARBE_NAME[M.FARBE[p.mindest!]][l].toLowerCase()} genügt.`, `${zName(z!, l)} zone: a ${FARBE_NAME[M.FARBE[p.mindest!]][l].toLowerCase()} is enough.`) };
    default: return { head: T(l, 'Nein, Einfahrt verboten', 'No, entry not allowed'), sub: T(l, `Umweltzone ${zName(z!, l)}: nötig ist die ${FARBE_NAME[M.FARBE[p.mindest!]][l].toLowerCase()}.`, `${zName(z!, l)} zone: you need a ${FARBE_NAME[M.FARBE[p.mindest!]][l].toLowerCase()}.`) };
  }
}

export function StadtCalc({ lang: l, id, refDay, methodHref, ort = 'berlin', preset = {} }: { lang: L; id: string; refDay: string; methodHref?: string; ort?: string; preset?: Record<string, string> }) {
  const [s, setS] = useStadt({ ort, g: asGruppe(preset.g ?? '4'), k: asKraft(preset.k ?? 'diesel'), n: asNorm(preset.n ?? '5'), tag: refDay });
  const set = (x: Partial<StadtState>) => setS({ ...s, ...x });
  const p = useMemo(() => M.pruefe(s.ort, fzOf(s), s.tag), [s]);
  useEffect(() => { updateURL({ ort: s.ort, g: s.g, k: s.k, n: s.k === 'diesel' ? s.n : undefined }); }, [s]);
  const o = M.ortById(s.ort);
  const oName = o ? M.ortName(o.name, l) : s.ort;
  const a = antwortText(p, l, oName);
  const z = p.zone;
  const rows: Array<[string, string] | [string, string, boolean]> = [];
  if (z) {
    rows.push([T(l, 'Zone', 'Zone'), zName(z, l)]);
    rows.push([T(l, 'Land', 'State'), M.LAENDER[z.land][l]]);
    if (z.stufe3) rows.push([T(l, 'Nur grün seit', 'Green only since'), datum(z.stufe3, l)]);
    rows.push([T(l, 'Status', 'Status'), z.status === 'aktiv' ? T(l, 'aktiv', 'active') : `${T(l, 'aufgehoben am', 'lifted on')} ${datum(z.aufhebung!, l)}`]);
  }
  if (p.antwort === 'verboten') rows.push([T(l, 'Bußgeld bei Verstoß', 'Fine if you enter'), `${formatMoney(P.bussgeld.betrag, 0, l)}, ${T(l, 'kein Punkt', 'no points')}`, true]);
  return (
    <Shell id={id} form={<>
      <SelectField id={`${id}-ort`} label={T(l, 'Stadt oder Gemeinde', 'City or town')} value={s.ort} onChange={(v) => set({ ort: v })} options={ortOptions(l)} />
      <PlaketteFelder s={s} set={set} l={l} id={id} />
    </>} result={<>
      <Head label={T(l, `Darf ich nach ${oName}?`, `May I drive into ${oName}?`)} value={a.head} sub={a.sub} />
      {rows.length > 0 && <Rows rows={rows} />}
      <DieselHinweis p={p} l={l} />
      {z && <ZonenQuelle z={z} l={l} />}
      {!z && <p className="mt-2 text-xs text-navy-600"><Q k="ubaListe" l={l} /></p>}
      <MethodLink href={methodHref} lang={l} />
    </>} />
  );
}

/* ------------------------------------------------------------------ Route */
export function RouteCalc({ lang: l, id, refDay, methodHref, orte = ['koeln', 'dortmund', 'hannover', 'berlin'] }: { lang: L; id: string; refDay: string; methodHref?: string; orte?: string[] }) {
  const def = [...orte, '', '', '', '', ''].slice(0, 5);
  const [stops, setStops] = useState<string[]>(def);
  const [s, setS] = useStadt({ ort: '', g: 4, k: 'diesel', n: 5, tag: refDay });
  useEffect(() => {
    const u = readParams(window.location.search);
    const r = (u.get('r') ?? '').split(',').filter((x) => M.ortById(x));
    if (r.length) setStops([...r, '', '', '', '', ''].slice(0, 5));
  }, []);
  const set = (x: Partial<StadtState>) => setS({ ...s, ...x });
  const res = useMemo(() => M.route(stops, fzOf(s), s.tag), [stops, s]);
  useEffect(() => { updateURL({ r: stops.filter(Boolean).join(','), g: s.g, k: s.k, n: s.k === 'diesel' ? s.n : undefined }); }, [stops, s]);
  const labels = [T(l, 'Start', 'Start'), T(l, 'Über', 'Via'), T(l, 'Über', 'Via'), T(l, 'Über', 'Via'), T(l, 'Ziel', 'Destination')];
  const head = res.verboten ? T(l, `${res.verboten} von ${res.zonen} Zonen gesperrt`, `${res.verboten} of ${res.zonen} zones closed to you`) : res.zonen ? T(l, `Alle ${res.zonen} Zonen frei`, `All ${res.zonen} zones open to you`) : T(l, 'Keine aktive Zone', 'No active zone');
  return (
    <Shell id={id} form={<>
      <div className="grid gap-3 sm:grid-cols-2">
        {stops.map((v, i) => <SelectField key={i} id={`${id}-s${i}`} label={labels[i]} value={v} onChange={(x) => setStops(stops.map((y, j) => (j === i ? x : y)))} options={ortOptions(l, T(l, '– kein Ort –', '– none –'))} />)}
      </div>
      <PlaketteFelder s={s} set={set} l={l} id={id} />
    </>} result={<>
      <Head label={T(l, 'Umweltzonen auf der Strecke', 'Low-emission zones on the route')} value={head} />
      <ul className="mt-4 space-y-2 text-sm">
        {res.schritte.map((x, i) => {
          const name = x.ort ? M.ortName(x.ort.name, l) : '';
          const a = antwortText(x.p, l, name);
          const rot = x.p.antwort === 'verboten' || (x.p.antwort === 'frei' && x.p.diesel.some((d) => d.gebiet === 'ganz'));
          return (
            <li key={i} className="border-b border-navy-100 pb-2">
              <span className="font-medium text-navy-900">{name}</span>{' '}
              <span className={rot ? 'font-semibold text-red-800' : 'text-navy-700'}>· {a.head}</span>
              {x.p.zone && <span className="block text-xs text-navy-600">{a.sub}</span>}
              <DieselHinweis p={x.p} l={l} />
            </li>
          );
        })}
      </ul>
      <Note>{T(l, 'Die Zone deckt meist nur einen Teil der Stadt ab. Autobahnen führen in der Regel daran vorbei; maßgeblich ist das Zeichen 270.1 am Rand der Zone.', 'A zone usually covers only part of the city. Motorways mostly run past it; sign 270.1 at the edge of the zone is what counts.')}</Note>
      <MethodLink href={methodHref} lang={l} />
    </>} />
  );
}

/* ------------------------------------------------------------------ Liste */
export function ListeTool({ lang: l, id, land = '', status = 'alle', methodHref }: { lang: L; id: string; land?: string; status?: string; methodHref?: string }) {
  const [f, setF] = useState({ land, status, q: '' });
  useEffect(() => {
    const u = readParams(window.location.search);
    setF({ land: str(u, 'land', land), status: str(u, 'status', status), q: '' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => { updateURL({ land: f.land || undefined, status: f.status !== 'alle' ? f.status : undefined }); }, [f]);
  const liste = M.ZONEN.filter((z) => (!f.land || z.land === f.land) && (f.status === 'alle' || z.status === f.status) && (!f.q || `${z.name.de} ${z.name.en} ${z.orte.join(' ')}`.toLowerCase().includes(f.q.toLowerCase())))
    .sort((a, b) => (a.status === b.status ? a.name.de.localeCompare(b.name.de, 'de') : a.status === 'aktiv' ? -1 : 1));
  const aktiv = liste.filter((z) => z.status === 'aktiv').length;
  return (
    <Shell id={id} form={<>
      <Row2>
        <SelectField id={`${id}-land`} label={T(l, 'Bundesland', 'State')} value={f.land} onChange={(v) => setF({ ...f, land: v })} options={[{ value: '', label: T(l, 'Alle Länder', 'All states') }, ...(Object.keys(M.LAENDER) as M.LandId[]).map((k) => ({ value: k, label: M.LAENDER[k][l] }))]} />
        <SelectField id={`${id}-st`} label={T(l, 'Status', 'Status')} value={f.status} onChange={(v) => setF({ ...f, status: v })} options={[{ value: 'alle', label: T(l, 'aktiv und aufgehoben', 'active and lifted') }, { value: 'aktiv', label: T(l, 'nur aktive', 'active only') }, { value: 'aufgehoben', label: T(l, 'nur aufgehobene', 'lifted only') }]} />
      </Row2>
      <div className="grid grid-rows-subgrid row-span-3 content-start gap-y-0">
        <label htmlFor={`${id}-q`} className="mb-1 block text-sm font-medium text-navy-700">{T(l, 'Ort suchen', 'Search a town')}</label>
        <input id={`${id}-q`} type="search" value={f.q} onChange={(e) => setF({ ...f, q: e.target.value })} placeholder={T(l, 'z. B. Essen', 'e.g. Essen')} className="h-12 w-full rounded-lg border border-navy-300 bg-white px-3 text-navy-900 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20" />
      </div>
      <div className="max-h-96 overflow-y-auto rounded-lg border border-navy-200">
        <table className="w-full text-sm"><thead className="sticky top-0 bg-navy-50"><tr><th scope="col" className="px-3 py-2 text-left">{T(l, 'Zone', 'Zone')}</th><th scope="col" className="px-3 py-2 text-left">{T(l, 'Status', 'Status')}</th></tr></thead>
          <tbody>{liste.map((z) => (
            <tr key={z.id} className="border-t border-navy-100"><td className="px-3 py-1.5 text-navy-900">{zName(z, l)}<span className="block text-xs text-navy-600">{M.LAENDER[z.land][l]}{z.orte.length > 1 ? ` · ${z.orte.length} ${T(l, 'Gemeinden', 'towns')}` : ''}</span></td>
              <td className="tabular-nums px-3 py-1.5 text-navy-800">{z.status === 'aktiv' ? `${T(l, 'aktiv, grün seit', 'active, green since')} ${z.stufe3 ? datum(z.stufe3, l) : '–'}` : `${T(l, 'aufgehoben am', 'lifted on')} ${datum(z.aufhebung!, l)}`}</td></tr>
          ))}</tbody></table>
      </div>
    </>} result={<>
      <Head label={T(l, 'Zonen in dieser Auswahl', 'Zones in this selection')} value={`${liste.length}`} sub={T(l, `davon ${aktiv} aktiv und ${liste.length - aktiv} aufgehoben`, `${aktiv} active and ${liste.length - aktiv} lifted`)} />
      <Rows rows={[
        [T(l, 'Aktiv in Deutschland', 'Active in Germany'), String(M.AKTIV.length), true],
        [T(l, 'Aufgehoben', 'Lifted'), String(M.AUFGEHOBEN.length)],
        [T(l, 'Stand der Liste', 'List as of'), datum(M.ZONEN_DATEN.stand, l)],
      ]} />
      <p className="mt-2 text-xs text-navy-600"><Q k="ubaListe" l={l} /></p>
      <MethodLink href={methodHref} lang={l} />
    </>} />
  );
}

/* ------------------------------------------------------------------ Bußgeld */
export function BussgeldCalc({ lang: l, id, refDay, methodHref, ort = 'berlin' }: { lang: L; id: string; refDay: string; methodHref?: string; ort?: string }) {
  const [s, setS] = useStadt({ ort, g: 3, k: 'diesel', n: 3, tag: refDay });
  const [aus, setAus] = useState('nein');
  const set = (x: Partial<StadtState>) => setS({ ...s, ...x });
  const r = useMemo(() => M.bussgeld({ ...fzOf(s), befreit: aus !== 'nein' }, s.ort, s.tag), [s, aus]);
  useEffect(() => { updateURL({ ort: s.ort, g: s.g, k: s.k, n: s.k === 'diesel' ? s.n : undefined }); }, [s]);
  const o = M.ortById(s.ort);
  const a = antwortText(r.pruefung, l, o ? M.ortName(o.name, l) : '');
  return (
    <Shell id={id} form={<>
      <SelectField id={`${id}-ort`} label={T(l, 'Stadt oder Gemeinde', 'City or town')} value={s.ort} onChange={(v) => set({ ort: v })} options={ortOptions(l)} />
      <PlaketteFelder s={s} set={set} l={l} id={id} />
      <SelectField id={`${id}-aus`} label={T(l, 'Ausnahme', 'Exemption')} value={aus} onChange={setAus} options={[{ value: 'nein', label: T(l, 'keine', 'none') }, { value: 'anhang3', label: T(l, 'Anhang 3 (z. B. Motorrad, H-Kennzeichen)', 'Annex 3 (e.g. motorcycle, H plate)') }, { value: 'genehmigung', label: T(l, 'Ausnahmegenehmigung der Stadt', 'City exemption permit') }]} />
    </>} result={<>
      <Head label={T(l, 'Bußgeld für diese Fahrt', 'Fine for this trip')} value={formatMoney(r.betrag, 0, l)} sub={a.head} />
      <Rows rows={[
        [T(l, 'Tatbestand', 'Offence'), `BKatV Nr. ${P.bussgeld.nr}`],
        [T(l, 'Punkte in Flensburg', 'Penalty points'), String(r.punkte), true],
        [T(l, 'Regelsatz', 'Standard fine'), formatMoney(P.bussgeld.betrag, 0, l)],
      ]} />
      {r.pruefung.diesel.length > 0 && <Note>{T(l, 'Für die Dieselverbote gilt ein eigenes Verkehrszeichen; der Rechner zählt nur das Fahren ohne passende Plakette.', 'Diesel bans have their own road sign; this check only counts driving without the right sticker.')}</Note>}
      <p className="mt-2 text-xs text-navy-600"><Q k="bkatv" l={l} /> · <Q k="fev13" l={l}>{T(l, 'FeV Anlage 13', 'FeV annex 13')}</Q></p>
      <MethodLink href={methodHref} lang={l} />
    </>} />
  );
}

/* ------------------------------------------------------------------ Ausnahmen */
const FALL_NAME: Record<M.Fall, Record<L, string>> = {
  pkw: { de: 'Gewöhnlicher Pkw', en: 'Ordinary car' }, wohnmobil: { de: 'Wohnmobil', en: 'Motorhome' }, motorrad: { de: 'Motorrad, Roller', en: 'Motorcycle, scooter' },
  dreirad: { de: 'Dreirädriges Kraftfahrzeug', en: 'Three-wheeler' }, oldtimerH: { de: 'Oldtimer mit H-Kennzeichen', en: 'Classic car with H plate' },
  oldtimer07: { de: 'Oldtimer mit rotem 07-Kennzeichen', en: 'Classic car with red 07 plate' }, eKennzeichen: { de: 'Elektroauto mit E-Kennzeichen', en: 'Electric car with e-plate' },
  elektroOhneE: { de: 'Elektroauto ohne E-Kennzeichen', en: 'Electric car without e-plate' }, schwerbehindert: { de: 'Merkzeichen aG, H oder Bl', en: 'Disability marks aG, H or Bl' },
  krankenwagen: { de: 'Krankenwagen', en: 'Ambulance' }, arzt: { de: 'Arztwagen „Arzt Notfalleinsatz“', en: 'Doctor’s car “Arzt Notfalleinsatz”' },
  sonderrechte: { de: 'Fahrzeug mit Sonderrechten (§ 35 StVO)', en: 'Vehicle with special rights (StVO s. 35)' }, traktor: { de: 'Land- oder forstwirtschaftliche Zugmaschine', en: 'Farm or forestry tractor' },
  arbeitsmaschine: { de: 'Arbeitsmaschine', en: 'Work machine' }, bundeswehr: { de: 'Ziviles Fahrzeug im Auftrag der Bundeswehr', en: 'Civilian vehicle on Bundeswehr duty' },
};
const BEDINGUNG: Partial<Record<M.Fall, Record<L, string>>> = {
  oldtimerH: { de: 'Oldtimer nach § 2 Nr. 22 FZV: mindestens 30 Jahre, Gutachten, H im Kennzeichen', en: 'Classic car under FZV s. 2 no. 22: at least 30 years old, expert report, H on the plate' },
  oldtimer07: { de: 'Rotes Oldtimerkennzeichen mit 07 (§ 43 FZV), nur für Veranstaltungen, Probe-, Überführungs- und Werkstattfahrten', en: 'Red classic plate starting 07 (FZV s. 43), only for events, test drives, transfers and workshop trips' },
  eKennzeichen: { de: 'E am Ende des Kennzeichens oder, bei ausländischer Zulassung, E-Plakette am Heck (§ 11 FZV)', en: 'E at the end of the plate or, for foreign registrations, the e-badge on the rear (FZV s. 11)' },
  schwerbehindert: { de: 'Merkzeichen im Schwerbehindertenausweis; den Ausweis bei jeder Fahrt mitführen', en: 'Mark in the severe-disability card; carry the card on every trip' },
  arzt: { de: 'Schild „Arzt Notfalleinsatz“ nach § 52 Abs. 6 StVZO', en: '“Arzt Notfalleinsatz” sign under StVZO s. 52(6)' },
  bundeswehr: { de: 'nur unaufschiebbare Fahrten für hoheitliche Aufgaben', en: 'urgent sovereign tasks only' },
};
export function AusnahmeCalc({ lang: l, id, refDay, methodHref, fall = 'oldtimerH' }: { lang: L; id: string; refDay: string; methodHref?: string; fall?: string }) {
  const asFall = (v: string): M.Fall => ((M.FAELLE as string[]).includes(v) ? v as M.Fall : 'oldtimerH');
  const [f, setF] = useState<M.Fall>(asFall(fall));
  const [tag, setTag] = useState(refDay);
  useEffect(() => {
    const u = readParams(window.location.search);
    setF(asFall(str(u, 'fall', fall)));
    const t = str(u, 'tag', new Date().toISOString().slice(0, 10)); setTag(isIso(t) ? t : refDay);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => { updateURL({ fall: f }); }, [f]);
  const r = M.ausnahme(f, tag);
  const head = r.befreit ? T(l, 'Befreit, keine Plakette nötig', 'Exempt, no sticker needed') : T(l, 'Plakette nötig', 'Sticker needed');
  const sub = r.befreit ? T(l, `Anhang 3 Nr. ${r.nr} der 35. BImSchV`, `Annex 3 no. ${r.nr} of the 35th BImSchV`) : r.vorE ? T(l, `Nr. 11 gilt erst ab ${datum(P.e_kennzeichen_ab, l)}`, `No. 11 only applies from ${datum(P.e_kennzeichen_ab, l)}`) : T(l, 'keine allgemeine Ausnahme in Anhang 3', 'no general exemption in Annex 3');
  return (
    <Shell id={id} form={<>
      <SelectField id={`${id}-fall`} label={T(l, 'Ihr Fahrzeug', 'Your vehicle')} value={f} onChange={(v) => setF(asFall(v))} options={M.FAELLE.map((x) => ({ value: x, label: FALL_NAME[x][l] }))} />
      <DateField id={`${id}-tag`} label={T(l, 'Tag der Fahrt', 'Date of the trip')} value={tag} onChange={setTag} />
    </>} result={<>
      <Head label={FALL_NAME[f][l]} value={head} sub={sub} />
      <Rows rows={[
        ...(BEDINGUNG[f] ? [[T(l, 'Bedingung', 'Condition'), BEDINGUNG[f]![l]] as [string, string]] : []),
        [T(l, 'Ohne Plakette in der Zone', 'Without sticker in a zone'), r.befreit ? formatMoney(0, 0, l) : `${formatMoney(P.bussgeld.betrag, 0, l)} ${T(l, 'Bußgeld', 'fine')}`, true],
        [T(l, 'Sonst möglich', 'Otherwise possible'), T(l, 'Ausnahmegenehmigung der Stadt (§ 1 Abs. 2)', 'city exemption permit (s. 1(2))')],
      ]} />
      {(f === 'pkw' || f === 'wohnmobil' || f === 'elektroOhneE') && <Note>{T(l, 'Grüne Plakette genügt für jede aktive Zone, sofern kein Dieselverbot greift.', 'A green sticker covers every active zone unless a diesel ban applies.')}</Note>}
      <Note>{T(l, 'Für die Dieselverbote in Stuttgart, München und Darmstadt gelten die Ausnahmen der jeweiligen Anordnung der Stadt.', 'For the diesel bans in Stuttgart, Munich and Darmstadt, the exemptions of each city’s own order apply.')}</Note>
      <p className="mt-2 text-xs text-navy-600"><Q k="anhang3" l={l} /> · <Q k="bgbl278" l={l}>BGBl. 2026 I Nr. 278</Q></p>
      <MethodLink href={methodHref} lang={l} />
    </>} />
  );
}

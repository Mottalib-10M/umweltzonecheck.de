/**
 * Umweltzonen : Liste des Umweltbundesamts (zonen.json), Stufen, Aufhebungen, Diesel-Verkehrsverbote.
 * Eine Zone deckt meist nur einen Teil des Stadtgebiets ab ; « Ort » heißt hier : die Gemeinde, in der
 * die Zone liegt (bei Verbundzonen wie dem Ruhrgebiet jede beteiligte Gemeinde).
 */
import { ZONEN_DATEN, P, type Zone, type LandId, type Lang } from './params';
import type { Gruppe, Kraftstoff, Norm } from './plakette';

export const ZONEN: Zone[] = ZONEN_DATEN.zonen;
export const AKTIV = ZONEN.filter((z) => z.status === 'aktiv');
export const AUFGEHOBEN = ZONEN.filter((z) => z.status === 'aufgehoben');
export const zoneById = (id: string) => ZONEN.find((z) => z.id === id);
export const LAENDER: Record<LandId, Record<Lang, string>> = {
  BW: { de: 'Baden-Württemberg', en: 'Baden-Württemberg' }, BY: { de: 'Bayern', en: 'Bavaria' }, BE: { de: 'Berlin', en: 'Berlin' },
  HB: { de: 'Bremen', en: 'Bremen' }, HE: { de: 'Hessen', en: 'Hesse' }, NI: { de: 'Niedersachsen', en: 'Lower Saxony' },
  NW: { de: 'Nordrhein-Westfalen', en: 'North Rhine-Westphalia' }, RP: { de: 'Rheinland-Pfalz', en: 'Rhineland-Palatinate' },
  SN: { de: 'Sachsen', en: 'Saxony' }, ST: { de: 'Sachsen-Anhalt', en: 'Saxony-Anhalt' }, TH: { de: 'Thüringen', en: 'Thuringia' },
};
/** Größere Städte ohne Eintrag in der Liste des Umweltbundesamts (Stand 26.08.2026) : keine Umweltzone. */
export const OHNE_ZONE = ['Hamburg', 'Dresden', 'Nürnberg', 'Chemnitz', 'Kiel', 'Lübeck', 'Rostock', 'Kassel', 'Saarbrücken', 'Würzburg', 'Ingolstadt', 'Braunschweig', 'Bielefeld', 'Wolfsburg', 'Potsdam', 'Göttingen', 'Oldenburg', 'Fürth', 'Erlangen', 'Trier', 'Koblenz', 'Ludwigshafen am Rhein', 'Schwerin', 'Jena', 'Gera'];
const EN_ORT: Record<string, string> = { 'München': 'Munich', 'Köln': 'Cologne', 'Nürnberg': 'Nuremberg', 'Hannover': 'Hanover' };
export const ortName = (o: string, lang: Lang) => (lang === 'en' ? EN_ORT[o] ?? o : o);

export interface Ort { id: string; name: string; zone?: string }
const slug = (s: string) => s.toLowerCase().replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
/** Alle Orte der Auswahllisten : jede Gemeinde einer Zone, dazu größere Städte ohne Zone. Alphabetisch. */
export const ORTE: Ort[] = (() => {
  const m = new Map<string, Ort>();
  for (const z of ZONEN) for (const o of z.orte) {
    const id = slug(o);
    const prev = m.get(id);
    // Eine Gemeinde in einer aktiven und einer aufgehobenen Zone : die aktive zählt.
    if (!prev || (zoneById(prev.zone!)?.status === 'aufgehoben' && z.status === 'aktiv')) m.set(id, { id, name: o, zone: z.id });
  }
  for (const o of OHNE_ZONE) { const id = slug(o); if (!m.has(id)) m.set(id, { id, name: o }); }
  return [...m.values()].sort((a, b) => a.name.localeCompare(b.name, 'de'));
})();
export const ortById = (id: string) => ORTE.find((o) => o.id === id);
export const ortIdOf = (name: string) => slug(name);

/** Mindestgruppe in einer Zone an einem Tag : 4 ab Stufe 3, 3 ab Stufe 2, 2 ab Stufe 1, sonst keine. */
export function mindestGruppe(z: Zone, tag: string): Gruppe | null {
  if (z.aufhebung && tag >= z.aufhebung) return null;
  if (z.stufe3 && tag >= z.stufe3) return 4;
  if (z.stufe2 && tag >= z.stufe2) return 3;
  if (z.stufe1 && tag >= z.stufe1) return 2;
  return null;
}

export type Antwort = 'keineZone' | 'aufgehoben' | 'nochNicht' | 'frei' | 'verboten' | 'befreit';
export interface Pruefung {
  antwort: Antwort;
  zone?: Zone;
  mindest: Gruppe | null;
  /** Diesel-Verkehrsverbot, das dieses Fahrzeug an diesem Tag trifft (ganz, kleine Zone, Strecke). */
  diesel: Array<{ gebiet: 'ganz' | 'kleine' | 'strecke'; ab: string; bisNorm: number; ausnahmeLiefer: boolean }>;
}
export interface Fahrzeug { gruppe: Gruppe; kraftstoff: Kraftstoff; norm: Norm | null; befreit?: boolean }

/** Darf dieses Fahrzeug an diesem Tag in die Zone dieses Orts ? */
export function pruefe(ortId: string, fz: Fahrzeug, tag: string): Pruefung {
  const o = ortById(ortId);
  const z = o?.zone ? zoneById(o.zone) : undefined;
  if (!z) return { antwort: 'keineZone', mindest: null, diesel: [] };
  if (z.aufhebung && tag >= z.aufhebung) return { antwort: 'aufgehoben', zone: z, mindest: null, diesel: [] };
  const mindest = mindestGruppe(z, tag);
  if (mindest == null) return { antwort: 'nochNicht', zone: z, mindest, diesel: [] };
  const diesel = (z.diesel ?? []).filter((d) => tag >= d.ab && fz.kraftstoff === 'diesel' && (fz.norm == null || fz.norm <= d.bisNorm))
    .map(({ gebiet, ab, bisNorm, ausnahmeLiefer }) => ({ gebiet, ab, bisNorm, ausnahmeLiefer }));
  if (fz.befreit) return { antwort: 'befreit', zone: z, mindest, diesel };
  return { antwort: fz.gruppe >= mindest ? 'frei' : 'verboten', zone: z, mindest, diesel };
}

/** Route : jeder Ort der Liste, in Reihenfolge, mit seiner Prüfung ; doppelte Zonen nur einmal. */
export function route(ortIds: string[], fz: Fahrzeug, tag: string) {
  const seen = new Set<string>();
  const schritte = ortIds.filter(Boolean).map((id) => ({ ort: ortById(id), p: pruefe(id, fz, tag) }))
    .filter((s) => { const k = s.p.zone?.id; if (!k) return true; if (seen.has(k)) return false; seen.add(k); return true; });
  const zonen = schritte.filter((s) => s.p.zone && (s.p.antwort === 'frei' || s.p.antwort === 'verboten' || s.p.antwort === 'befreit'));
  const verboten = schritte.filter((s) => s.p.antwort === 'verboten' || (s.p.antwort !== 'keineZone' && s.p.antwort !== 'aufgehoben' && s.p.diesel.some((d) => d.gebiet === 'ganz')));
  return { schritte, zonen: zonen.length, verboten: verboten.length };
}

/** Bußgeld : Nr. 153 BKatV, 100 €, kein Punkt (FeV Anlage 13 nennt die Nr. 153 nicht). */
export function bussgeld(fz: Fahrzeug, ortId: string, tag: string) {
  const p = pruefe(ortId, fz, tag);
  const faellig = p.antwort === 'verboten';
  return { pruefung: p, betrag: faellig ? P.bussgeld.betrag : 0, punkte: P.bussgeld.punkte };
}

/** Zonen eines Landes, aktive zuerst, dann nach Name. */
export const zonenImLand = (land: LandId) => ZONEN.filter((z) => z.land === land).sort((a, b) => (a.status === b.status ? a.name.de.localeCompare(b.name.de, 'de') : a.status === 'aktiv' ? -1 : 1));

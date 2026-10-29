/** Stufen einer Zone als Tabelle (Stadtseiten) : Daten aus zonen.json, Quelle Umweltbundesamt. */
import type { Helpers } from './guide-types';

export function stufen(h: Helpers, zoneId: string): string {
  const z = h.M.zoneById(zoneId);
  if (!z) return '';
  const d = (x?: string | null) => (x ? h.date(x) : h.T('keine Angabe', 'not stated'));
  const rows: Array<Array<string | number>> = [
    [h.T('Stufe 1: Rot, Gelb, Grün frei', 'Stage 1: red, yellow, green allowed'), d(z.stufe1)],
    [h.T('Stufe 2: Gelb und Grün frei', 'Stage 2: yellow and green allowed'), d(z.stufe2)],
    [h.T('Stufe 3: nur Grün frei', 'Stage 3: green only'), d(z.stufe3)],
  ];
  if (z.aufhebung) rows.push([h.T('Aufhebung', 'Lifted'), d(z.aufhebung)]);
  return h.table([h.T('Stufe', 'Stage'), h.T('ab', 'from')], rows, h.src('ubaListe', h.T('Liste des Umweltbundesamts', 'German Environment Agency list')), ['l', 'r']);
}

/** Zonen eines Landes als Tabelle : Name, Status, grün seit oder aufgehoben am. */
export function landTabelle(h: Helpers, land: 'BW' | 'BY' | 'NW' | 'HE'): string {
  const rows = h.M.zonenImLand(land).map((z) => [
    z.name[h.lang],
    z.status === 'aktiv' ? h.T('aktiv', 'active') : h.T('aufgehoben', 'lifted'),
    z.status === 'aktiv' ? (z.stufe3 ? h.date(z.stufe3) : h.T('keine Angabe', 'not stated')) : (z.aufhebung ? h.date(z.aufhebung) : '–'),
  ]);
  return h.table([h.T('Zone', 'Zone'), h.T('Status', 'Status'), h.T('grün seit / aufgehoben am', 'green since / lifted on')], rows, h.src('ubaListe', h.T('Liste des Umweltbundesamts', 'German Environment Agency list')), ['l', 'l', 'r']);
}

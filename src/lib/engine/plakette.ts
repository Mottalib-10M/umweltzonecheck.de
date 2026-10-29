/**
 * Schadstoffgruppe und Plakette nach der 35. BImSchV.
 * - Nach Abgasnorm : Anhang 2, in der vereinfachten Tabelle des Bundesumweltministeriums
 *   (Diesel Euro 1 + Partikelminderungssystem → 2, Euro 2 → 2, Euro 2 + PMS → 3, Euro 3 → 3,
 *   Euro 3 + PMS → 4, ab Euro 4 → 4 ; Benzin und Gas mit geregeltem Katalysator ab Euro 1 → 4 ;
 *   Antrieb ohne Verbrennungsmotor → 4, Anhang 2 Abs. 3).
 * - Nach Erstzulassung : Vermutung des § 6 Abs. 3 und 4 für Fahrzeuge ohne Nachweis der Norm
 *   (im Ausland zugelassen). Für ein in Deutschland zugelassenes Fahrzeug entscheidet die
 *   emissionsbezogene Schlüsselnummer der Zulassungsbescheinigung (§ 5).
 */
export type Kraftstoff = 'benzin' | 'diesel' | 'gas' | 'elektro';
export type Klasse = 'pkw' | 'lkw';
/** 0 = ohne Norm / ohne geregelten Katalysator, 1 bis 6 = Euro 1 bis Euro 6 (Lkw : I bis VI). */
export type Norm = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export type Gruppe = 1 | 2 | 3 | 4;
export type Farbe = 'keine' | 'rot' | 'gelb' | 'gruen';
export const FARBE: Record<Gruppe, Farbe> = { 1: 'keine', 2: 'rot', 3: 'gelb', 4: 'gruen' };

export interface PlaketteEingabe {
  kraftstoff: Kraftstoff;
  modus: 'norm' | 'datum';
  norm: Norm;
  /** Partikelminderungssystem nachgerüstet (nur Diesel). */
  pms: boolean;
  /** Erstzulassung, ISO-Datum. */
  ez: string;
  klasse: Klasse;
}
export interface PlaketteErgebnis { gruppe: Gruppe; farbe: Farbe; regel: 'elektro' | 'fremdNorm' | 'fremdDatum' | 'dieselNorm' | 'dieselDatum' | 'fremdLkwDatum' }

export function plakette(e: PlaketteEingabe): PlaketteErgebnis {
  const r = (gruppe: Gruppe, regel: PlaketteErgebnis['regel']): PlaketteErgebnis => ({ gruppe, farbe: FARBE[gruppe], regel });
  if (e.kraftstoff === 'elektro') return r(4, 'elektro');
  const fremd = e.kraftstoff === 'benzin' || e.kraftstoff === 'gas';
  if (e.modus === 'norm') {
    if (fremd) return r(e.norm >= 1 ? 4 : 1, 'fremdNorm');
    const n = e.norm;
    if (n >= 4) return r(4, 'dieselNorm');
    if (n === 3) return r(e.pms ? 4 : 3, 'dieselNorm');
    if (n === 2) return r(e.pms ? 3 : 2, 'dieselNorm');
    if (n === 1) return r(e.pms ? 2 : 1, 'dieselNorm');
    return r(1, 'dieselNorm');
  }
  const ez = e.ez;
  if (fremd) {
    // § 6 Abs. 4 Nr. 1 : Richtlinie 70/220/EWG (Pkw, leichte Nutzfahrzeuge), Erstzulassung nach dem 31.12.1992.
    if (e.klasse === 'lkw') return r(1, 'fremdLkwDatum');
    return r(ez > '1992-12-31' ? 4 : 1, 'fremdDatum');
  }
  // § 6 Abs. 3 : Diesel, Pkw nach 70/220/EWG, schwere Fahrzeuge nach 88/77/EWG.
  if (e.klasse === 'pkw') {
    if (ez > '2005-12-31') return r(4, 'dieselDatum');
    if (ez > '2000-12-31') return r(3, 'dieselDatum');
    if (ez > '1996-12-31') return r(2, 'dieselDatum');
    return r(1, 'dieselDatum');
  }
  if (ez > '2006-09-30') return r(4, 'dieselDatum');
  if (ez > '2001-09-30') return r(3, 'dieselDatum');
  if (ez > '1996-09-30') return r(2, 'dieselDatum');
  return r(1, 'dieselDatum');
}

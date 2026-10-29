/** Feste Regeln (RECETTE §4) und Liste der Umweltzonen, einmal gelesen. */
import raw from '../../data/params-2026.json';
import zonen from '../../data/zonen.json';
export const P = raw;
export type Params = typeof raw;
export type SourceKey = keyof typeof raw.sources;
export type Lang = 'de' | 'en';
export type LandId = 'BW' | 'BY' | 'BE' | 'HB' | 'HE' | 'NI' | 'NW' | 'RP' | 'SN' | 'ST' | 'TH';
export interface DieselVerbot { ab: string; bisNorm: number; gebiet: 'ganz' | 'kleine' | 'strecke'; pkwBenzinBis: number | null; ausnahmeLiefer: boolean }
export interface Zone {
  id: string; name: Record<Lang, string>; land: LandId; status: 'aktiv' | 'aufgehoben';
  stufe1: string | null; stufe2: string | null; stufe3: string | null; aufhebung: string | null;
  orte: string[]; quellen: string[]; diesel?: DieselVerbot[];
}
export const ZONEN_DATEN = zonen as { quelle: string; gelesen: string; stand: string; zonen: Zone[] };
export const sourceUrl = (key: SourceKey): string => (raw.sources[key] as { url: string }).url;

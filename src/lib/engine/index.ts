/** Motor der Rechner : Plakette, Zonen, Route, Bußgeld, Ausnahmen. */
export * from './plakette';
export * from './zonen';
export * from './ausnahme';
export { P, ZONEN_DATEN, sourceUrl } from './params';
export type { Zone, LandId, Lang, SourceKey, DieselVerbot } from './params';
export function addDays(iso: string, n: number): string {
  const d = new Date(`${iso}T00:00:00Z`); d.setUTCDate(d.getUTCDate() + n); return d.toISOString().slice(0, 10);
}

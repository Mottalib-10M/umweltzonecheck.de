/** Ausnahmen von der Plakettenpflicht nach Anhang 3 der 35. BImSchV (Stand nach BGBl. 2026 I Nr. 278). */
import { P } from './params';
export type Fall = 'pkw' | 'wohnmobil' | 'motorrad' | 'dreirad' | 'oldtimerH' | 'oldtimer07' | 'eKennzeichen' | 'elektroOhneE' | 'krankenwagen' | 'arzt' | 'schwerbehindert' | 'sonderrechte' | 'traktor' | 'arbeitsmaschine' | 'bundeswehr';
export const FAELLE: Fall[] = ['pkw', 'wohnmobil', 'motorrad', 'dreirad', 'oldtimerH', 'oldtimer07', 'eKennzeichen', 'elektroOhneE', 'schwerbehindert', 'krankenwagen', 'arzt', 'sonderrechte', 'traktor', 'arbeitsmaschine', 'bundeswehr'];
/** Nummer in Anhang 3 ; null = keine allgemeine Ausnahme. */
const NR: Record<Fall, number | null> = { pkw: null, wohnmobil: null, motorrad: 4, dreirad: 4, oldtimerH: 10, oldtimer07: 10, eKennzeichen: 11, elektroOhneE: null, krankenwagen: 5, arzt: 5, schwerbehindert: 6, sonderrechte: 7, traktor: 3, arbeitsmaschine: 2, bundeswehr: 9 };
export function ausnahme(fall: Fall, tag: string) {
  let nr = NR[fall];
  // Nr. 11 (E-Kennzeichen) gilt erst ab dem 1. Oktober 2026 (Art. 2 der Änderungsverordnung).
  const vorE = fall === 'eKennzeichen' && tag < P.e_kennzeichen_ab;
  if (vorE) nr = null;
  return { befreit: nr != null, nr, vorE };
}

import { defineGuide } from '../../lib/guide-types';

/** Motorrad : § 1 Abs. 1 (nur Klassen M und N) und Anhang 3 Nr. 4 (zwei- und dreirädrige Kraftfahrzeuge). */
export default defineGuide({
  id: 'motorrad',
  group: 'regeln',
  order: 4,
  tool: 'ausnahme',
  preset: { fall: 'motorrad' },
  related: ['ausnahmegenehmigung', 'oldtimer', 'umweltplakette', 'bussgeld', 'route', 'berlin'],
  sources: ['anhang3', 'bimschv35', 'uba'],
  de: {
    slug: 'motorrad-umweltzone',
    nav: 'Motorrad und Roller',
    card: 'Motorräder, Roller und Trikes brauchen keine Plakette: zwei Gründe in der Verordnung.',
    title: 'Motorrad Umweltzone 2026: keine Plakette für Zweiräder',
    description: 'Motorrad, Roller und Trike in der Umweltzone 2026: keine Plakette nötig, weil die 35. BImSchV nur Pkw, Lkw und Busse erfasst und Anhang 3 Zweiräder ausnimmt.',
    h1: 'Motorrad, Roller und Trike in der Umweltzone',
    intro: 'Die Prüfung zeigt für Zwei- und Dreiräder die Befreiung nach Anhang 3; für ein Quad mit Pkw-Zulassung wählen Sie „Gewöhnlicher Pkw“.',
    resume: () => `Wer mit dem Motorrad, dem Motorroller oder einem dreirädrigen Trike unterwegs ist, braucht in keiner deutschen Umweltzone eine Plakette. Dafür gibt es zwei Gründe, die sich ergänzen. Erstens gilt die 35. BImSchV nach ihrem § 1 Absatz 1 nur für Kraftfahrzeuge der Klassen M und N, also für Fahrzeuge zur Personen- und Güterbeförderung mit mindestens vier Rädern; Krafträder gehören zur Klasse L und fallen gar nicht unter die Verordnung. Zweitens nimmt Anhang 3 Nummer 4 zwei- und dreirädrige Kraftfahrzeuge ausdrücklich von den Verkehrsverboten aus, auch wenn sie keine Plakette tragen. Das Umweltbundesamt fasst es so zusammen, dass Umweltzonen nur Pkw, Lkw und Busse betreffen. Eine Plakette kann man für ein Motorrad daher auch nicht bekommen, denn es gibt keine Schlüsselnummer, die eine Schadstoffgruppe zuweist. Anders ist es bei vierrädrigen Fahrzeugen, die wie ein Pkw oder Lkw zugelassen sind: Ein Quad oder ein Leichtfahrzeug mit Zulassung als M1 oder N1 braucht die grüne Plakette wie jedes andere Auto. Maßgeblich ist die Fahrzeugklasse in Feld J der Zulassungsbescheinigung.`,
    faqs: () => [
      { q: 'Brauche ich für mein Motorrad mit Beiwagen eine Plakette?', a: 'Nein. Ein Motorrad mit Beiwagen bleibt ein Kraftrad der Klasse L und hat drei Räder; es fällt damit sowohl aus dem Anwendungsbereich der Verordnung heraus als auch unter die Ausnahme für dreirädrige Kraftfahrzeuge nach Anhang 3 Nr. 4. Auch ein älteres Gespann mit Zweitaktmotor darf deshalb in jede Umweltzone, selbst wenn seine Abgaswerte schlecht sind.' },
      { q: 'Gilt die Befreiung auch für Lastenräder und Kabinenroller?', a: 'Elektrische Lastenräder mit Tretunterstützung sind keine Kraftfahrzeuge im Sinne der Zone und brauchen nichts. Kabinenroller und dreirädrige Kleinwagen mit Klasse L2e oder L5e sind dreirädrige Kraftfahrzeuge und damit befreit. Vierrädrige Leichtkraftfahrzeuge der Klasse L6e oder L7e fallen nicht unter die Klassen M und N; eine Plakette kann man für sie nicht bekommen.' },
      { q: 'Können Städte für Motorräder trotzdem Fahrverbote erlassen?', a: 'Nicht über die Umweltzone. Andere Verkehrsbeschränkungen, etwa Sperrungen für Motorräder an Wochenenden auf beliebten Strecken wegen Lärm, beruhen auf der Straßenverkehrs-Ordnung und haben eigene Schilder. Sie gelten unabhängig von Plaketten. Die Prüfung auf dieser Seite betrifft nur die Umweltzone, nicht solche Strecken- oder Lärmsperrungen.' },
    ],
    body: (h) => `<h2>Welche Zweiräder und Dreiräder befreit sind</h2>
${h.table(['Fahrzeug', 'Klasse', 'Plakette nötig?'], [
  ['Motorrad, Leichtkraftrad', 'L3e', 'nein'],
  ['Motorroller, Mofa, Moped', 'L1e, L3e', 'nein'],
  ['Trike, Gespann mit Beiwagen', 'L4e, L5e', 'nein'],
  ['Quad mit Kraftrad-Zulassung', 'L6e, L7e', 'nein, keine Plakette erhältlich'],
  ['Quad mit Zulassung als Pkw oder Lkw', 'M1, N1', 'ja, Grün'],
], `Nach ${h.src('bimschv35', '§ 1 Abs. 1 der 35. BImSchV')} und ${h.src('anhang3', 'Anhang 3 Nr. 4')}`)}
<h2>Unterwegs in mehreren Zonen</h2>
<p>Für Motorradtouren durch das Ruhrgebiet, nach ${h.a('berlin', 'Berlin')} oder in andere Großstädte gilt die Befreiung überall gleich; sie hängt nicht an einer Genehmigung oder Anmeldung. Wer mit dem Motorrad auf einem Anhänger anreist, braucht für das Zugfahrzeug aber die passende Plakette. Die ${h.a('route', 'Prüfung der Route')} zeigt, welche Orte unterwegs eine Zone haben.</p>
<h2>Kontrollen</h2>
<p>Weil Zweiräder nicht gekennzeichnet werden, gibt es für sie auch kein ${h.a('bussgeld', 'Bußgeld')} wegen fehlender Plakette. Fahrer von Trikes mit Pkw-ähnlicher Bauweise sollten die Zulassungsbescheinigung dabeihaben, damit die Klasse bei einer Kontrolle erkennbar ist.</p>`,
  },
  en: {
    slug: 'motorcycles',
    nav: 'Motorcycles and scooters',
    card: 'Motorcycles, scooters and trikes need no sticker: two reasons in the ordinance.',
    title: 'Motorcycles and the Umweltzone 2026: no sticker needed',
    description: 'Motorcycles, scooters and trikes in German zones 2026: no sticker needed, as the 35th BImSchV only covers cars, trucks and buses and Annex 3 exempts them.',
    h1: 'Motorcycles, scooters and trikes in low-emission zones',
    intro: 'For two- and three-wheelers the check shows the Annex 3 exemption; for a quad registered as a car, choose “Ordinary car”.',
    resume: () => `Riding a motorcycle, scooter or three-wheeled trike, you need no sticker in any German low-emission zone. There are two complementary reasons. First, under section 1(1) the 35th BImSchV only applies to motor vehicles of classes M and N, meaning passenger and goods vehicles with at least four wheels; motorcycles belong to class L and are outside the ordinance altogether. Second, Annex 3 number 4 expressly exempts two- and three-wheeled motor vehicles from the zone bans, even without a sticker. The Federal Environment Agency sums this up by saying that low-emission zones only concern cars, trucks and buses. You cannot even get a sticker for a motorcycle, since there is no key number that assigns it an emission group. Four-wheelers registered like a car or truck are a different matter: a quad or light vehicle registered as M1 or N1 needs the green sticker like any other car. What counts is the vehicle class in field J of the registration certificate.`,
    faqs: () => [
      { q: 'Does my motorcycle with a sidecar need a sticker?', a: 'No. A motorcycle with a sidecar is still a class L motorcycle and has three wheels, so it is both outside the scope of the ordinance and covered by the exemption for three-wheeled vehicles in Annex 3 no. 4. Even an older two-stroke combination may therefore enter any low-emission zone, however poor its exhaust values.' },
      { q: 'Are cargo bikes and cabin scooters exempt too?', a: 'Pedal-assisted electric cargo bikes are not motor vehicles for zone purposes and need nothing. Cabin scooters and three-wheeled microcars in class L2e or L5e are three-wheeled motor vehicles and therefore exempt. Four-wheeled light vehicles in class L6e or L7e are not class M or N; no sticker can be issued for them.' },
      { q: 'Can cities still ban motorcycles?', a: 'Not through the low-emission zone. Other traffic restrictions, such as weekend closures for motorcycles on popular routes because of noise, are based on the Road Traffic Regulations and have their own signs. They apply regardless of stickers. The check on this page only concerns the low-emission zone, not such route or noise closures.' },
    ],
    body: (h) => `<h2>Which two- and three-wheelers are exempt</h2>
${h.table(['Vehicle', 'Class', 'Sticker needed?'], [
  ['Motorcycle, light motorcycle', 'L3e', 'no'],
  ['Scooter, moped', 'L1e, L3e', 'no'],
  ['Trike, sidecar combination', 'L4e, L5e', 'no'],
  ['Quad registered as a motorcycle', 'L6e, L7e', 'no, none can be issued'],
  ['Quad registered as a car or truck', 'M1, N1', 'yes, green'],
], `Based on ${h.src('bimschv35', 'section 1(1) of the 35th BImSchV')} and ${h.src('anhang3', 'Annex 3 no. 4')}`)}
<h2>Riding through several zones</h2>
<p>For tours through the Ruhr area, to ${h.a('berlin', 'Berlin')} or other large cities the exemption applies everywhere in the same way; it requires no permit or registration. If you bring the motorcycle on a trailer, though, the towing vehicle needs the right sticker. The ${h.a('route', 'route check')} shows which places on the way have a zone.</p>
<h2>Checks</h2>
<p>Since two-wheelers are not marked, there is no ${h.a('bussgeld', 'fine')} for a missing sticker either. Riders of car-like trikes should carry the registration certificate so the class is clear in a check.</p>`,
  },
});

import { defineGuide } from '../../lib/guide-types';
import { stufen } from '../../lib/stadt';

/** Leipzig : seit 1.3.2011 direkt grün, ca. 62 % des Stadtgebiets ; Aufhebung mit LRP 2027/2028 angekündigt. */
export default defineGuide({
  id: 'leipzig',
  group: 'staedte',
  order: 7,
  tool: 'stadt',
  zone: 'leipzig',
  preset: { g: '4', k: 'benzin', n: '4' },
  related: ['ausblick-2030', 'berlin', 'route', 'gruene-plakette', 'aufgehobene-umweltzonen', 'umweltzonen-deutschland'],
  sources: ['leipzig', 'ubaListe'],
  de: {
    slug: 'umweltzone-leipzig',
    nav: 'Leipzig',
    card: 'Seit 2011 direkt grün, rund 62 % der Stadtfläche, Aufhebung für 2027/2028 angekündigt.',
    title: 'Umweltzone Leipzig 2026: nur Grün, Aufhebung angekündigt',
    description: 'Umweltzone Leipzig 2026: seit März 2011 nur Grün auf rund 62 Prozent der Stadtfläche; die Stadt kündigt die Aufhebung mit dem Luftreinhalteplan 2027/2028 an.',
    h1: 'Umweltzone Leipzig',
    intro: 'Voreingestellt ist ein Benziner mit grüner Plakette. Tragen Sie Ihr Fahrzeug und den Tag der Fahrt ein.',
    resume: (h) => `Leipzig hat seine Umweltzone am 1. März 2011 eingeführt und dabei die roten und gelben Zwischenstufen übersprungen: Von Anfang an durften nur Fahrzeuge mit grüner Plakette hinein. Die Zone ist ungewöhnlich groß und umfasst nach Angaben der Stadt etwa 62 Prozent des Stadtgebiets, also deutlich mehr als die Innenstadt. Wer in Leipzig wohnt oder die Stadt besucht, kommt deshalb kaum an ihr vorbei. Die Plakette kostet bei der Leipziger Zulassungsbehörde ${h.eur(h.P.gebuehr.leipzig)}. Bemerkenswert ist der Ausblick: Die Stadt kündigt an, die Umweltzone im Rahmen der Fortschreibung des Luftreinhalteplans 2027/2028 in ihrer derzeitigen Form aufzuheben. Bis dahin gilt sie unverändert weiter, und wer jetzt ohne grüne Plakette hineinfährt, riskiert das Bußgeld von ${h.eur(h.P.bussgeld.betrag)}. Ein genaues Datum der Aufhebung gibt es noch nicht; wir tragen es ein, sobald der Plan beschlossen ist. Dieselverbote gibt es in Leipzig nicht. In Sachsen ist Leipzig die einzige Stadt mit Umweltzone; Dresden und Chemnitz haben keine. Die nächsten Zonen liegen in Halle und Magdeburg in Sachsen-Anhalt.`,
    faqs: () => [
      { q: 'Wann wird die Leipziger Umweltzone aufgehoben?', a: 'Ein Datum steht noch nicht fest. Die Stadt kündigt an, die Zone im Rahmen der Fortschreibung des Luftreinhalteplans 2027/2028 in ihrer derzeitigen Form aufzuheben. Bis der fortgeschriebene Plan beschlossen ist und die Schilder abgebaut sind, gilt die Plakettenpflicht weiter. Die Prüfung oben rechnet deshalb für jedes Datum mit der aktiven Zone.' },
      { q: 'Liegt die Neue Messe Leipzig in der Umweltzone?', a: 'Die Zone umfasst rund 62 Prozent des Stadtgebiets. Ob ein bestimmter Ort wie die Neue Messe im Norden oder der Flughafen Leipzig/Halle dazugehört, zeigt die Karte auf der Seite der Stadt; der Flughafen liegt in Schkeuditz, außerhalb des Leipziger Stadtgebiets. Mit grüner Plakette können Sie unabhängig davon überall hinfahren.' },
      { q: 'Warum kostet die Plakette in Leipzig genau 6 Euro?', a: 'Die Gebühr legt jede Ausgabestelle selbst fest; die Leipziger Zulassungsbehörde verlangt 6 Euro. Prüforganisationen und Werkstätten, die Abgasuntersuchungen durchführen, dürfen die Plakette ebenfalls ausgeben und andere Preise verlangen, bundesweit meist zwischen 5 und 10 Euro. Die Plakette gilt ohne Ablaufdatum, solange Fahrzeug und Kennzeichen gleich bleiben.' },
    ],
    body: (h) => `<h2>Stufen der Leipziger Zone</h2>
${stufen(h, 'leipzig')}
<h2>Woher die Angaben kommen</h2>
<p>Größe, Datum und Ankündigung stehen auf der ${h.src('leipzig', 'Seite der Stadt Leipzig')}. Der frühere Link des Umweltbundesamts auf die Stadtseite leitet dorthin weiter. Die Ankündigung der Aufhebung passt zu einer bundesweiten Entwicklung: Viele Städte haben ihre Zonen seit 2023 abgeschafft, siehe ${h.a('aufgehobene-umweltzonen', 'Aufgehobene Umweltzonen')} und ${h.a('ausblick-2030', 'Ausblick 2030')}.</p>
<h2>Weiter nach Berlin oder Halle</h2>
<p>Von Leipzig sind es wenige Kilometer bis Halle mit eigener Zone und gut zwei Stunden bis ${h.a('berlin', 'Berlin')}. Die ${h.a('route', 'Routenprüfung')} zeigt, wo unterwegs eine Plakette nötig ist.</p>`,
  },
  en: {
    slug: 'leipzig-low-emission-zone',
    nav: 'Leipzig',
    card: 'Green from the start in 2011, about 62% of the city area, lifting announced for 2027/2028.',
    title: 'Leipzig low-emission zone 2026: green only, lifting planned',
    description: 'Leipzig low-emission zone 2026: green only since March 2011 on about 62 percent of the city area; the city plans to lift it with the 2027/2028 clean-air plan.',
    h1: 'Leipzig low-emission zone',
    intro: 'The preset is a petrol car with a green sticker. Enter your vehicle and the date of your trip.',
    resume: (h) => `Leipzig introduced its low-emission zone on 1 March 2011 and skipped the red and yellow intermediate stages: from the start only vehicles with a green sticker could enter. The zone is unusually large and, according to the city, covers about 62 percent of the city area, far more than the centre. Residents and visitors can therefore hardly avoid it. The sticker costs ${h.eur(h.P.gebuehr.leipzig)} at the Leipzig registration authority. The outlook is notable: the city announces that it will lift the zone in its current form as part of the 2027/2028 update of the clean-air plan. Until then it remains in force unchanged, and anyone entering now without a green sticker risks the ${h.eur(h.P.bussgeld.betrag)} fine. There is no exact lifting date yet; we will add it once the plan is adopted. Leipzig has no diesel bans. In Saxony, Leipzig is the only city with a low-emission zone; Dresden and Chemnitz have none. The nearest zones are in Halle and Magdeburg in Saxony-Anhalt.`,
    faqs: () => [
      { q: 'When will the Leipzig zone be lifted?', a: 'No date has been set. The city announces that it will lift the zone in its current form as part of the 2027/2028 update of the clean-air plan. Until the updated plan is adopted and the signs are removed, the sticker requirement continues. The check above therefore treats the zone as active for every date.' },
      { q: 'Is the Leipzig trade fair inside the zone?', a: 'The zone covers about 62 percent of the city area. Whether a particular place such as the trade fair in the north, or Leipzig/Halle airport, is included is shown on the map on the city’s page; the airport lies in Schkeuditz, outside the city of Leipzig. With a green sticker you can drive anywhere regardless.' },
      { q: 'Why does the sticker cost exactly 6 euros in Leipzig?', a: 'Each issuing office sets its own fee; the Leipzig registration authority charges 6 euros. Testing organisations and garages that carry out emission tests may also issue the sticker and charge other prices, nationwide usually between 5 and 10 euros. The sticker has no expiry date as long as the vehicle and plate stay the same.' },
    ],
    body: (h) => `<h2>Stages of the Leipzig zone</h2>
${stufen(h, 'leipzig')}
<h2>Where the information comes from</h2>
<p>Size, date and announcement are on the ${h.src('leipzig', 'City of Leipzig’s page')}. The German Environment Agency’s older link to the city page redirects there. The lifting announcement fits a nationwide trend: many cities have abolished their zones since 2023; see ${h.a('aufgehobene-umweltzonen', 'lifted zones')} and ${h.a('ausblick-2030', 'outlook 2030')}.</p>
<h2>On to Berlin or Halle</h2>
<p>From Leipzig it is a short drive to Halle, which has its own zone, and a little over two hours to ${h.a('berlin', 'Berlin')}. The ${h.a('route', 'route check')} shows where a sticker is needed on the way.</p>`,
  },
});

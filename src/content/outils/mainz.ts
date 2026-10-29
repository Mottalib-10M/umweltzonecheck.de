import { defineGuide } from '../../lib/guide-types';
import { stufen } from '../../lib/stadt';

/** Mainz : gemeinsame Zone mit Wiesbaden seit 1.2.2013, Mainzer Teil aufgehoben zum 1.10.2025 ; Wiesbaden bleibt. */
export default defineGuide({
  id: 'mainz',
  group: 'staedte',
  order: 11,
  tool: 'stadt',
  zone: 'mainz',
  preset: { g: '3', k: 'diesel', n: '3' },
  related: ['hessen', 'frankfurt', 'aufgehobene-umweltzonen', 'ausblick-2030', 'hannover', 'route'],
  sources: ['mainz', 'wiesbaden', 'ubaListe'],
  de: {
    slug: 'umweltzone-mainz',
    nav: 'Mainz',
    card: 'Seit 1. Oktober 2025 aufgehoben, Wiesbaden auf der anderen Rheinseite bleibt: was jetzt gilt.',
    title: 'Umweltzone Mainz 2026: aufgehoben, Wiesbaden bleibt grün',
    description: 'Umweltzone Mainz 2026: seit 1. Oktober 2025 aufgehoben, weil die Werte seit 2024 unter den Grenzwerten liegen. Im Wiesbadener Teil gilt weiter nur Grün.',
    h1: 'Umweltzone Mainz: aufgehoben',
    intro: 'Voreingestellt ist ein Diesel mit gelber Plakette. Wählen Sie Mainz oder Wiesbaden und den Tag: Die Prüfung zeigt den Unterschied.',
    resume: () => `Mainz hat seine Umweltzone zum 1. Oktober 2025 aufgehoben. Die Stadt begründet das damit, dass die Luftschadstoffbelastung seit 2024 unter den Grenzwerten liegt. Seitdem brauchen Sie im Mainzer Stadtgebiet keine Plakette mehr. Die Mainzer Zone war Teil einer gemeinsamen Umweltzone mit Wiesbaden, die beide Städte am 1. Februar 2013 eingeführt hatten, und sie war von Beginn an grün. Der Wiesbadener Teil auf der anderen Rheinseite besteht weiter. Er beruht auf der ersten Fortschreibung des Luftreinhalteplans Rhein-Main, Teilplan Wiesbaden, und umfasst große Teile des Wiesbadener Stadtgebiets. Wer also über die Theodor-Heuss-Brücke oder die Schiersteiner Brücke nach Wiesbaden fährt, braucht dort weiterhin die grüne Plakette. Die Wiesbadener Stadtseite erwähnt die Mainzer Zone noch, obwohl sie aufgehoben ist; maßgeblich ist die Seite der Stadt Mainz. Rheinland-Pfalz hat mit der Aufhebung in Mainz keine aktive Umweltzone mehr. Wer die Plakette noch an der Scheibe hat, kann sie dort lassen, sie wird in Wiesbaden, Frankfurt und den anderen hessischen Zonen gebraucht.`,
    faqs: () => [
      { q: 'Brauche ich für Mainz-Kastel und Mainz-Kostheim eine Plakette?', a: 'Kastel und Kostheim liegen rechts des Rheins und gehören politisch zu Wiesbaden, auch wenn der Name Mainz im Ortsnamen steht. Ob sie innerhalb der Wiesbadener Zone liegen, zeigt die Karte der Stadt Wiesbaden. Für das Mainzer Stadtgebiet links des Rheins ist seit dem 1. Oktober 2025 keine Plakette mehr nötig.' },
      { q: 'Warum hat Wiesbaden seine Zone nicht ebenfalls aufgehoben?', a: 'Jede Stadt entscheidet auf Grundlage ihres eigenen Teilplans und ihrer Messwerte. Für Wiesbaden gilt die erste Fortschreibung des Luftreinhalteplans Rhein-Main, Teilplan Wiesbaden, weiter. Die Stadt Wiesbaden nennt die Zone zudem ein wichtiges Instrument, um die EU-Grenzwerte für Feinstaub und Stickoxide einzuhalten, die 2030 verschärft werden. Eine Aufhebung ist dort nicht angekündigt.' },
      { q: 'Gab es in Mainz je eine gelbe oder rote Stufe?', a: 'Nein. Die gemeinsame Zone Mainz-Wiesbaden startete am 1. Februar 2013 gleich als grüne Zone, wie die Liste des Umweltbundesamts zeigt; alle drei Stufen tragen dort dasselbe Datum. Wer von 2013 bis September 2025 ohne grüne Plakette in Mainz unterwegs war, fuhr verbotenerweise in der Zone, es sei denn, eine Ausnahme galt.' },
    ],
    body: (h) => `<h2>Daten der Mainzer Zone</h2>
${stufen(h, 'mainz')}
<h2>Mainz und Wiesbaden im Vergleich</h2>
${h.table(['', 'Mainz', 'Wiesbaden'], [
  ['Zone seit', h.date('2013-02-01'), h.date('2013-02-01')],
  ['Status 2026', 'aufgehoben am 1. Oktober 2025', 'aktiv, nur Grün'],
  ['Grundlage', 'Luftreinhalteplan Mainz', 'Luftreinhalteplan Rhein-Main, Teilplan Wiesbaden'],
], `${h.src('mainz', 'Landeshauptstadt Mainz')}, ${h.src('wiesbaden', 'Landeshauptstadt Wiesbaden')}`)}
<p>Weitere Zonen in der Region stehen auf den Seiten ${h.a('frankfurt', 'Frankfurt am Main')} und ${h.a('hessen', 'Hessen')}; andere aufgehobene Zonen auf der Seite ${h.a('aufgehobene-umweltzonen', 'Aufgehobene Umweltzonen')}.</p>`,
  },
  en: {
    slug: 'mainz-low-emission-zone',
    nav: 'Mainz',
    card: 'Lifted since 1 October 2025, while Wiesbaden across the Rhine stays: what applies now.',
    title: 'Mainz low-emission zone 2026: lifted, Wiesbaden still green',
    description: 'Mainz low-emission zone 2026: lifted since 1 October 2025 because pollution has been below the limits since 2024. In the Wiesbaden part, green still applies.',
    h1: 'Mainz low-emission zone: lifted',
    intro: 'The preset is a diesel with a yellow sticker. Choose Mainz or Wiesbaden and the date: the check shows the difference.',
    resume: () => `Mainz lifted its low-emission zone as of 1 October 2025. The city explains that air pollution has been below the limits since 2024. Since then you no longer need a sticker in the city of Mainz. The Mainz zone was part of a joint zone with Wiesbaden that both cities introduced on 1 February 2013, and it was green from the start. The Wiesbaden part across the Rhine remains. It is based on the first update of the Rhine-Main clean-air plan, Wiesbaden sub-plan, and covers large parts of the city of Wiesbaden. So if you cross the Theodor-Heuss bridge or the Schierstein bridge into Wiesbaden, you still need a green sticker there. The Wiesbaden city page still mentions the Mainz zone even though it has been lifted; the City of Mainz page is authoritative. With the lifting in Mainz, Rhineland-Palatinate no longer has an active low-emission zone. If your sticker is still on the windscreen, leave it there; it is needed in Wiesbaden, Frankfurt and the other Hessian zones.`,
    faqs: () => [
      { q: 'Do I need a sticker for Mainz-Kastel and Mainz-Kostheim?', a: 'Kastel and Kostheim lie on the right bank of the Rhine and belong administratively to Wiesbaden, even though their names include Mainz. Whether they lie inside the Wiesbaden zone is shown on the City of Wiesbaden’s map. For the city of Mainz on the left bank, no sticker has been needed since 1 October 2025.' },
      { q: 'Why has Wiesbaden not lifted its zone too?', a: 'Each city decides on the basis of its own sub-plan and readings. For Wiesbaden the first update of the Rhine-Main clean-air plan, Wiesbaden sub-plan, still applies. The City of Wiesbaden also calls the zone an important tool for meeting the EU limits for particulate matter and nitrogen oxides, which will be tightened in 2030. No lifting has been announced there.' },
      { q: 'Did Mainz ever have a yellow or red stage?', a: 'No. The joint Mainz-Wiesbaden zone started on 1 February 2013 directly as a green zone, as the German Environment Agency list shows; all three stages carry the same date there. Anyone who drove in Mainz between 2013 and September 2025 without a green sticker was driving in the zone unlawfully, unless an exemption applied.' },
    ],
    body: (h) => `<h2>Dates of the Mainz zone</h2>
${stufen(h, 'mainz')}
<h2>Mainz and Wiesbaden compared</h2>
${h.table(['', 'Mainz', 'Wiesbaden'], [
  ['zone since', h.date('2013-02-01'), h.date('2013-02-01')],
  ['status 2026', 'lifted on 1 October 2025', 'active, green only'],
  ['basis', 'Mainz clean-air plan', 'Rhine-Main clean-air plan, Wiesbaden sub-plan'],
], `${h.src('mainz', 'City of Mainz')}, ${h.src('wiesbaden', 'City of Wiesbaden')}`)}
<p>Further zones in the region are on the ${h.a('frankfurt', 'Frankfurt am Main')} and ${h.a('hessen', 'Hesse')} pages; other lifted zones on the ${h.a('aufgehobene-umweltzonen', 'lifted zones')} page.</p>`,
  },
});

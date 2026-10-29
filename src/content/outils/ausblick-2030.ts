import { defineGuide, type Helpers } from '../../lib/guide-types';

/** Ausblick : Richtlinie (EU) 2024/2881, Grenzwerte ab 2030 ; Aufhebungen und Ankündigungen 2023 bis 2026. */
const E = (h: Helpers) => h.P.eu_2030;

export default defineGuide({
  id: 'ausblick-2030',
  group: 'regeln',
  order: 7,
  tool: 'liste',
  preset: { status: 'aktiv' },
  related: ['aufgehobene-umweltzonen', 'umweltzonen-deutschland', 'leipzig', 'diesel-fahrverbot', 'e-auto', 'hessen'],
  sources: ['eu2881', 'uba', 'leipzig', 'wiesbaden', 'rpKarlsruhe', 'muenchen'],
  de: {
    slug: 'umweltzonen-2030',
    nav: 'Ausblick 2030',
    card: 'Zonen werden aufgehoben, doch die EU senkt die Grenzwerte ab 2030: was das für die Plakette heißt.',
    title: 'Umweltzonen 2030: neue EU-Grenzwerte und Aufhebungen',
    description: 'Umweltzonen bis 2030: Viele Städte heben ihre Zonen auf, doch die Richtlinie (EU) 2024/2881 halbiert ab 2030 die Grenzwerte für NO2 und PM10. Was das bedeutet.',
    h1: 'Umweltzonen bis 2030: Abbau und neue Grenzwerte',
    intro: 'Die Liste zeigt die heute aktiven Zonen. Wechseln Sie auf „aufgehoben“, um zu sehen, welche Städte ihre Zone schon abgeschafft haben.',
    resume: (h) => `Seit 2023 heben immer mehr Städte ihre Umweltzonen auf, weil die Grenzwerte für Feinstaub und Stickstoffdioxid eingehalten werden: in Baden-Württemberg etwa Heidelberg, Karlsruhe, Heilbronn, Mannheim, Ulm, Tübingen und Freiburg, außerdem Hannover und Mainz. Das Umweltbundesamt führt im Herbst 2026 noch ${h.M.AKTIV.length} aktive Zonen. Zugleich verschärft die Europäische Union die Regeln. Die Richtlinie (EU) 2024/2881 über die Luftqualität legt ab dem 1. Januar 2030 strengere Jahresgrenzwerte fest: für Stickstoffdioxid ${E(h).no2} statt ${E(h).no2_alt} Mikrogramm je Kubikmeter, für Feinstaub PM10 ${E(h).pm10} statt ${E(h).pm10_alt} und für PM2,5 ${E(h).pm25} statt ${E(h).pm25_alt}. Ob Städte deshalb wieder Verkehrsbeschränkungen brauchen, hängt von den Messwerten vor Ort und den künftigen Luftreinhalteplänen ab. Einige Städte halten ihre Zone schon mit Blick auf 2030 aufrecht, etwa Wiesbaden; Pforzheim behält seine, weil die Werte noch nicht weit genug unter dem Grenzwert liegen. Leipzig hat dagegen angekündigt, seine Zone mit der Fortschreibung des Luftreinhalteplans 2027/2028 in der heutigen Form aufzuheben. Eine neue Plakettenfarbe ist nicht beschlossen.`,
    faqs: (h) => [
      { q: 'Kommt eine blaue Plakette?', a: 'Beschlossen ist sie nicht. Die 35. BImSchV kennt nach wie vor nur die Gruppen 1 bis 4 mit Rot, Gelb und Grün; die letzte Änderung vom 25. September 2026 hat keine neue Farbe eingeführt, sondern Fahrzeuge mit E-Kennzeichen befreit. Über eine blaue Plakette für Diesel ab Euro 6 wurde in der Vergangenheit diskutiert; eine entsprechende Verordnung gibt es bis heute nicht.' },
      { q: 'Muss Deutschland die neuen EU-Grenzwerte schon vor 2030 umsetzen?', a: `Die Richtlinie verpflichtet die Mitgliedstaaten, sie bis Ende 2026 in nationales Recht zu übernehmen; die strengeren Grenzwerte gelten ab dem 1. Januar 2030. In Deutschland stehen die Grenzwerte heute in der 39. BImSchV. Bis 2030 gelten die bisherigen Werte, für Stickstoffdioxid also ${E(h).no2_alt} Mikrogramm im Jahresmittel. Wie Deutschland umsetzt, war bei unserem Stand vom ${h.date(h.P.retrieved_at)} nicht bestätigt.` },
      { q: 'Lohnt sich eine grüne Plakette noch, wenn die Zonen verschwinden?', a: 'Für Fahrten nach Berlin, Köln, ins Ruhrgebiet, nach München oder Stuttgart ja, denn diese Zonen bestehen und keine Aufhebung ist angekündigt. Die Plakette kostet bei den Ausgabestellen nur wenige Euro und gilt unbegrenzt, solange Kennzeichen und Fahrzeug gleich bleiben. Wer nur in Regionen ohne Zone fährt, braucht sie nicht, riskiert aber ein Bußgeld beim ersten Abstecher.' },
    ],
    body: (h) => `<h2>Die Grenzwerte im Vergleich</h2>
${h.table(['Schadstoff (Jahresmittel)', 'bis 2029', 'ab 2030'], [
  ['Stickstoffdioxid NO₂', `${E(h).no2_alt} µg/m³`, `${E(h).no2} µg/m³`],
  ['Feinstaub PM10', `${E(h).pm10_alt} µg/m³`, `${E(h).pm10} µg/m³`],
  ['Feinstaub PM2,5', `${E(h).pm25_alt} µg/m³`, `${E(h).pm25} µg/m³`],
], `${h.src('eu2881', 'Richtlinie (EU) 2024/2881, Anhang I')}`, ['l', 'r', 'r'])}
<h2>Aufhebungen seit 2023</h2>
<p>Die meisten Aufhebungen kamen aus Baden-Württemberg, wo die Regierungspräsidien ihre Luftreinhaltepläne fortgeschrieben haben; im Bezirk Karlsruhe besteht laut ${h.src('rpKarlsruhe', 'Regierungspräsidium')} nur noch Pforzheim. Die vollständige Liste mit Datum steht auf der Seite ${h.a('aufgehobene-umweltzonen', 'Aufgehobene Umweltzonen')}.</p>
<h2>Wer an seiner Zone festhält</h2>
<p>${h.src('wiesbaden', 'Wiesbaden')} begründet den Fortbestand mit den künftigen Grenzwerten, ${h.src('leipzig', 'Leipzig')} kündigt die Aufhebung für 2027/2028 an. In ${h.src('muenchen', 'München')} wird der Stickstoffdioxid-Grenzwert seit 2024 im ganzen Stadtgebiet eingehalten; Zone und Dieselverbot bleiben vorerst bestehen. Für die ${h.a('diesel-fahrverbot', 'Dieselverbote')} gilt dasselbe: Sie enden erst, wenn der jeweilige Luftreinhalteplan es vorsieht.</p>`,
  },
  en: {
    slug: 'low-emission-zones-2030',
    nav: 'Outlook 2030',
    card: 'Zones are being lifted, but the EU tightens limits from 2030: what that means for the sticker.',
    title: 'Low-emission zones 2030: new EU limits and lifted zones',
    description: 'German low-emission zones to 2030: many cities lift theirs, but Directive (EU) 2024/2881 halves the annual NO2 and PM10 limits from 2030. What it means.',
    h1: 'Low-emission zones to 2030: lifting and new limits',
    intro: 'The list shows the zones active today. Switch to “lifted” to see which cities have already abolished theirs.',
    resume: (h) => `Since 2023 more and more German cities have lifted their low-emission zones because the limits for particulate matter and nitrogen dioxide are being met: in Baden-Württemberg, for instance, Heidelberg, Karlsruhe, Heilbronn, Mannheim, Ulm, Tübingen and Freiburg, as well as Hanover and Mainz. In autumn 2026 the Federal Environment Agency still lists ${h.M.AKTIV.length} active zones. At the same time the European Union is tightening the rules. Directive (EU) 2024/2881 on ambient air quality sets stricter annual limits from 1 January 2030: ${E(h).no2} instead of ${E(h).no2_alt} micrograms per cubic metre for nitrogen dioxide, ${E(h).pm10} instead of ${E(h).pm10_alt} for PM10 and ${E(h).pm25} instead of ${E(h).pm25_alt} for PM2.5. Whether cities will need traffic restrictions again depends on local readings and future clean-air plans. Some cities are keeping their zone with 2030 in mind, such as Wiesbaden; Pforzheim keeps its zone because readings are not yet far enough below the limit. Leipzig, by contrast, has announced it will lift its zone in its current form with the 2027/2028 plan update. No new sticker colour has been adopted.`,
    faqs: (h) => [
      { q: 'Is a blue sticker coming?', a: 'It has not been adopted. The 35th BImSchV still only has groups 1 to 4 with red, yellow and green; the latest amendment of 25 September 2026 introduced no new colour but exempted vehicles with an e-plate. A blue sticker for Euro 6 diesels was debated in the past; no such ordinance exists to date.' },
      { q: 'Must Germany apply the new EU limits before 2030?', a: `The directive requires member states to transpose it by the end of 2026; the stricter limits apply from 1 January 2030. In Germany the limits currently sit in the 39th BImSchV. Until 2030 the existing values apply, so ${E(h).no2_alt} micrograms annual mean for nitrogen dioxide. How Germany will transpose it was not confirmed as of our reading date, ${h.date(h.P.retrieved_at)}.` },
      { q: 'Is a green sticker still worth it if zones are disappearing?', a: 'For trips to Berlin, Cologne, the Ruhr area, Munich or Stuttgart, yes, since those zones remain and no lifting has been announced. The sticker costs only a few euros at issuing offices and is valid indefinitely as long as plate and vehicle stay the same. If you only drive in regions without zones you do not need one, but you risk a fine on your first detour.' },
    ],
    body: (h) => `<h2>The limits compared</h2>
${h.table(['Pollutant (annual mean)', 'until 2029', 'from 2030'], [
  ['Nitrogen dioxide NO₂', `${E(h).no2_alt} µg/m³`, `${E(h).no2} µg/m³`],
  ['Particulate matter PM10', `${E(h).pm10_alt} µg/m³`, `${E(h).pm10} µg/m³`],
  ['Particulate matter PM2.5', `${E(h).pm25_alt} µg/m³`, `${E(h).pm25} µg/m³`],
], `${h.src('eu2881', 'Directive (EU) 2024/2881, Annex I')}`, ['l', 'r', 'r'])}
<h2>Zones lifted since 2023</h2>
<p>Most liftings came from Baden-Württemberg, where the regional councils updated their clean-air plans; in the Karlsruhe district, according to the ${h.src('rpKarlsruhe', 'regional council')}, only Pforzheim remains. The full list with dates is on the ${h.a('aufgehobene-umweltzonen', 'lifted zones')} page.</p>
<h2>Cities keeping their zone</h2>
<p>${h.src('wiesbaden', 'Wiesbaden')} justifies keeping its zone with the future limits, while ${h.src('leipzig', 'Leipzig')} announces lifting for 2027/2028. In ${h.src('muenchen', 'Munich')} the nitrogen dioxide limit has been met across the city since 2024; the zone and diesel ban remain for now. The same goes for the ${h.a('diesel-fahrverbot', 'diesel bans')}: they only end when the relevant clean-air plan says so.</p>`,
  },
});

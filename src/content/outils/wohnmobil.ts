import { defineGuide } from '../../lib/guide-types';

/** Wohnmobil : keine eigene Ausnahme in Anhang 3 ; Zuordnung wie Pkw oder schwere Fahrzeuge. */
export default defineGuide({
  id: 'wohnmobil',
  group: 'plakette',
  order: 9,
  tool: 'plakette',
  preset: { k: 'diesel', n: '3' },
  related: ['partikelfilter', 'ausnahmegenehmigung', 'umweltplakette', 'oldtimer', 'route', 'lkw-busse'],
  sources: ['anhang2', 'anhang3', 'bmuv', 'p6'],
  de: {
    slug: 'umweltplakette-wohnmobil',
    nav: 'Wohnmobil',
    card: 'Viele ältere Wohnmobile sind Diesel mit Euro 2 oder 3: welche Plakette, welche Auswege.',
    title: 'Umweltplakette Wohnmobil 2026: Grün oder Ausnahme?',
    description: 'Umweltplakette für Wohnmobile 2026: welche Gruppe ein Diesel-Wohnmobil mit Euro 2, 3 oder 4 bekommt, warum es keine Ausnahme gibt und welche Wege bleiben.',
    h1: 'Umweltplakette für das Wohnmobil',
    intro: 'Abgasnorm aus Feld 14 eintragen, bei älteren Dieseln den Filter angeben: die Prüfung zeigt, ob das Wohnmobil in die Zone darf.',
    resume: () => `Für Wohnmobile gibt es in der 35. BImSchV keine eigene Regel und in Anhang 3 keine Ausnahme: Ein Wohnmobil braucht in der Umweltzone die grüne Plakette wie jedes andere Kraftfahrzeug. Die Zuordnung folgt dem Motor und der Abgasnorm. Die meisten Wohnmobile fahren mit Diesel, und viele ältere Modelle tragen Euro 2 oder Euro 3. Ein Euro-3-Wohnmobil bekommt nur mit nachgerüstetem Partikelminderungssystem Grün; Anhang 2 nennt für Fahrzeuge der Klasse M mit mehr als 2 500 Kilogramm zulässiger Gesamtmasse sogar eine eigene Regel, nach der schon die Stufe PM 1 für Gruppe 4 genügt. Ein Euro-2-Wohnmobil kommt auch mit Filter nur auf Gelb. Wohnmobile auf Basis schwerer Fahrgestelle können unter die Richtlinie 88/77/EWG fallen; dann gelten die Stichtage und Euro-Stufen der schweren Fahrzeuge. Ohne Grün bleiben drei Wege: das H-Kennzeichen, wenn das Fahrzeug mindestens 30 Jahre alt und als Oldtimer begutachtet ist, eine Ausnahmegenehmigung der Stadt, oder ein Stellplatz außerhalb der Zone mit Weiterfahrt per Bus und Bahn.`,
    faqs: () => [
      { q: 'Gibt es eine Ausnahme für Wohnmobile auf dem Weg zum Campingplatz in der Zone?', a: 'Eine allgemeine Ausnahme nicht. Anhang 3 der 35. BImSchV nennt Wohnmobile nicht. Manche Städte erteilen nach § 1 Abs. 2 Ausnahmegenehmigungen für Fahrten zu bestimmten Einrichtungen; ob das für einen Campingplatz gilt, entscheidet die Behörde vor Ort. Fragen Sie vor der Reise bei der Stadt nach, und prüfen Sie, ob der Platz überhaupt innerhalb der Zone liegt.' },
      { q: 'Mein Wohnmobil ist 30 Jahre alt. Hilft das H-Kennzeichen?', a: 'Ja, wenn es als Oldtimer anerkannt ist. Anhang 3 Nr. 10 befreit Oldtimer mit H-Kennzeichen von der Plakettenpflicht. Dafür muss das Fahrzeug nach § 2 Nr. 22 der Fahrzeug-Zulassungsverordnung vor mindestens 30 Jahren erstmals in Verkehr gekommen sein, weitgehend im Originalzustand und gut erhalten. Ein Gutachten bestätigt das; die Zulassungsstelle teilt dann das H-Kennzeichen zu.' },
      { q: 'Wo stehen Euro-Norm und Gesamtmasse meines Wohnmobils?', a: 'In der Zulassungsbescheinigung Teil I: die Abgasnorm in Feld 14, die Schlüsselnummer in Feld 14.1, die zulässige Gesamtmasse in Feld F.1 und die Fahrzeugklasse in Feld J. Ein Wohnmobil steht dort meist als Klasse M1 mit dem Aufbau „Wohnmobil“. Diese Angaben braucht die Ausgabestelle, um die Gruppe und eine mögliche Nachrüstung zu beurteilen.' },
    ],
    body: (h) => `<h2>Welche Plakette für welches Wohnmobil</h2>
${h.table(['Wohnmobil', 'Plakette', 'In die Zone?'], [
  ['Benziner mit geregeltem Katalysator', 'Grün', 'ja'],
  ['Diesel ab Euro 4', 'Grün', 'ja, außer bei Dieselverboten'],
  ['Diesel Euro 3 mit Partikelminderungssystem', 'Grün', 'ja, außer bei Dieselverboten'],
  ['Diesel Euro 3 ohne System', 'Gelb', 'nein'],
  ['Diesel Euro 2, mit oder ohne System', 'Rot oder Gelb', 'nein'],
  ['Oldtimer mit H-Kennzeichen', 'keine nötig', 'ja (Anhang 3 Nr. 10)'],
], `Nach ${h.src('anhang2', 'Anhang 2')} und ${h.src('anhang3', 'Anhang 3')} der 35. BImSchV`)}
<h2>Unterwegs mit dem Wohnmobil</h2>
<p>Viele Reiseziele haben gar keine Zone mehr: Freiburg, Heidelberg, Karlsruhe, Ulm, Tübingen und andere Städte in Baden-Württemberg haben ihre Zonen aufgehoben, ebenso Hannover und Mainz (${h.a('aufgehobene-umweltzonen', 'Liste der aufgehobenen Zonen')}). Durch das Ruhrgebiet, nach Berlin, Köln, München oder Stuttgart kommen Sie ohne Grün dagegen nicht hinein. Mit der ${h.a('route', 'Prüfung der Route')} sehen Sie vorher, welche Orte auf Ihrer Strecke eine Zone haben.</p>
<h2>Wohnmobil aus dem Ausland</h2>
<p>Für ein im Ausland zugelassenes Wohnmobil gilt dieselbe Pflicht. Ohne Nachweis der Norm vermutet ${h.src('p6', '§ 6')} die Gruppe nach der Erstzulassung; ein Diesel-Wohnmobil von 2004 gälte dann als Gruppe 3, auch wenn es Euro 4 erfüllt. Nehmen Sie deshalb die Übereinstimmungsbescheinigung mit, wenn Sie die Plakette bestellen.</p>`,
  },
  en: {
    slug: 'motorhome-sticker',
    nav: 'Motorhomes',
    card: 'Many older motorhomes are Euro 2 or 3 diesels: which sticker, and which ways in.',
    title: 'Umweltplakette for motorhomes 2026: green or an exemption?',
    description: 'German emissions sticker for motorhomes 2026: which group a Euro 2, 3 or 4 diesel motorhome gets, why there is no exemption and which ways into the city remain.',
    h1: 'The German emissions sticker for motorhomes',
    intro: 'Enter the Euro norm from field 14 and, for older diesels, the filter: the check shows whether the motorhome may enter the zone.',
    resume: () => `The 35th BImSchV has no special rule for motorhomes and Annex 3 has no exemption for them: a motorhome needs the green sticker in a low-emission zone like any other motor vehicle. The group follows the engine and the Euro norm. Most motorhomes run on diesel, and many older models are Euro 2 or Euro 3. A Euro 3 motorhome only gets green with a retrofitted particle reduction system; for class M vehicles over 2,500 kilograms gross weight Annex 2 even has its own rule under which stage PM 1 is enough for group 4. A Euro 2 motorhome only reaches yellow, even with a filter. Motorhomes on heavy chassis may fall under Directive 88/77/EEC, in which case the cut-off dates and Euro stages for heavy vehicles apply. Without green, three options remain: the H plate, if the vehicle is at least 30 years old and certified as a classic, an exemption permit from the city, or a pitch outside the zone and onward travel by public transport.`,
    faqs: () => [
      { q: 'Is there an exemption for motorhomes heading to a campsite inside a zone?', a: 'Not a general one. Annex 3 of the 35th BImSchV does not mention motorhomes. Some cities grant exemption permits under section 1(2) for trips to specific facilities; whether that covers a campsite is up to the local authority. Ask the city before you travel, and check whether the site actually lies inside the zone.' },
      { q: 'My motorhome is 30 years old. Does an H plate help?', a: 'Yes, if it is recognised as a classic. Annex 3 no. 10 exempts classic cars with an H plate from the sticker. Under section 2 no. 22 of the Vehicle Registration Ordinance the vehicle must have first entered service at least 30 years ago, be largely original and well preserved. An expert report confirms this, and the registration office then issues the H plate.' },
      { q: 'Where do I find the Euro norm and gross weight of my motorhome?', a: 'In registration certificate part I: the emission standard in field 14, the key number in field 14.1, the permitted gross weight in field F.1 and the vehicle class in field J. A motorhome usually appears as class M1 with the body type “Wohnmobil”. The issuing office needs these details to judge the group and any retrofit.' },
    ],
    body: (h) => `<h2>Which sticker for which motorhome</h2>
${h.table(['Motorhome', 'Sticker', 'Into the zone?'], [
  ['Petrol with regulated catalyst', 'green', 'yes'],
  ['Diesel Euro 4 or later', 'green', 'yes, except where diesel bans apply'],
  ['Diesel Euro 3 with particle reduction system', 'green', 'yes, except where diesel bans apply'],
  ['Diesel Euro 3 without system', 'yellow', 'no'],
  ['Diesel Euro 2, with or without system', 'red or yellow', 'no'],
  ['Classic with H plate', 'none needed', 'yes (Annex 3 no. 10)'],
], `Based on ${h.src('anhang2', 'Annex 2')} and ${h.src('anhang3', 'Annex 3')} of the 35th BImSchV`)}
<h2>On the road</h2>
<p>Many destinations no longer have a zone at all: Freiburg, Heidelberg, Karlsruhe, Ulm, Tübingen and other cities in Baden-Württemberg have lifted theirs, as have Hanover and Mainz (${h.a('aufgehobene-umweltzonen', 'list of lifted zones')}). Without green, however, you cannot enter the Ruhr area, Berlin, Cologne, Munich or Stuttgart. The ${h.a('route', 'route check')} shows in advance which places on your way have a zone.</p>
<h2>Motorhomes from abroad</h2>
<p>A foreign-registered motorhome has the same obligation. Without proof of the norm, ${h.src('p6', 'section 6')} presumes the group from the first registration; a 2004 diesel motorhome would then count as group 3 even if it meets Euro 4. Take the certificate of conformity with you when ordering the sticker.</p>`,
  },
});

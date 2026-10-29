import { defineGuide } from '../../lib/guide-types';
import { stufen } from '../../lib/stadt';

/** Bremen : Altstadt, Östliche Vorstadt, Teile Schwachhausens, große Teile der Neustadt ; Plan August 2006 ; Stadtseite nennt 80 €. */
export default defineGuide({
  id: 'bremen',
  group: 'staedte',
  order: 8,
  tool: 'stadt',
  zone: 'bremen',
  preset: { g: '3', k: 'diesel', n: '3' },
  related: ['bussgeld', 'route', 'hannover', 'lkw-busse', 'auslaendische-fahrzeuge', 'umweltzonen-deutschland'],
  sources: ['bremen', 'ubaListe', 'bkatv'],
  de: {
    slug: 'umweltzone-bremen',
    nav: 'Bremen',
    card: 'Altstadt, Östliche Vorstadt, Teile von Schwachhausen und der Neustadt: seit 2011 nur Grün.',
    title: 'Umweltzone Bremen 2026: Altstadt bis Neustadt, nur Grün',
    description: 'Umweltzone Bremen 2026: Altstadt, Östliche Vorstadt, Teile Schwachhausens und der Neustadt, seit Juli 2011 nur Grün. Warum die Stadt noch 80 Euro Bußgeld nennt.',
    h1: 'Umweltzone Bremen',
    intro: 'Voreingestellt ist ein Diesel Euro 3 mit gelber Plakette. Prüfen Sie Ihr Fahrzeug für die Bremer Zone.',
    resume: () => `Die Bremer Umweltzone umfasst die Altstadt, die Östliche Vorstadt, Teile Schwachhausens und große Teile der Neustadt links der Weser. Grundlage ist der Luftreinhalte- und Aktionsplan des Senats von August 2006. Nach der Liste des Umweltbundesamts begann die erste Stufe am 1. Januar 2009, die zweite am 1. Januar 2010, und seit dem 1. Juli 2011 dürfen nur Fahrzeuge mit grüner Plakette hinein. Bremen ist damit die einzige Zone im Land Bremen; Bremerhaven hat keine. Die Seite der Senatorin für Umwelt nennt die Stufendaten selbst nicht, wohl aber das Gebiet, und sie gibt als Bußgeld 80 Euro an. Das war der frühere Regelsatz; die geltende Bußgeldkatalog-Verordnung sieht unter Nummer 153 100 Euro vor, ohne Punkt. Ein Dieselverbot gibt es in Bremen nicht. Für Besucher heißt das: Mit grüner Plakette sind Marktplatz, Schlachte, Viertel und Weserstadion erreichbar; ohne sie bleibt nur ein Parkplatz außerhalb und die Straßenbahn. Für Lkw und Busse gilt dieselbe Regel wie für Autos.`,
    faqs: () => [
      { q: 'Liegt das Weserstadion in der Bremer Umweltzone?', a: 'Das Weserstadion liegt in der Pauliner Marsch am Rand der Östlichen Vorstadt. Ob die Zufahrt zu den Stadionparkplätzen durch die Zone führt, zeigt die Karte der Senatorin für Umwelt. Viele Anfahrten aus der Östlichen Vorstadt liegen innerhalb. Mit grüner Plakette sind Sie in jedem Fall auf der sicheren Seite, ohne Plakette sollten Sie Park-and-Ride nutzen.' },
      { q: 'Warum nennt die Stadt Bremen 80 Euro Bußgeld?', a: 'Die Seite der Senatorin für Umwelt wurde nach der Anhebung des Regelsatzes nicht aktualisiert. Maßgeblich ist die Bußgeldkatalog-Verordnung, die unter der laufenden Nummer 153 für die Teilnahme an einem Verkehrsverbot zur Verminderung schädlicher Luftverunreinigungen 100 Euro vorsieht. Einen Punkt im Fahreignungsregister gibt es dafür weiterhin nicht.' },
      { q: 'Hat Bremerhaven eine Umweltzone?', a: 'Nein. Die Liste des Umweltbundesamts führt im Land Bremen nur die Zone in der Stadt Bremen. In Bremerhaven, etwa auf dem Weg zu den Fähren und Kreuzfahrtterminals, brauchen Sie keine Plakette. Erst bei der Einfahrt in die Bremer Innenstadt wird die grüne Plakette nötig. Die nächste Zone in Niedersachsen liegt in Osnabrück.' },
    ],
    body: (h) => `<h2>Stufen der Bremer Zone</h2>
${stufen(h, 'bremen')}
<h2>Gebiet und Quelle</h2>
<p>Das Gebiet beschreibt die ${h.src('bremen', 'Senatorin für Umwelt')}. Der frühere Link des Umweltbundesamts auf eine Seite des Bauressorts antwortete bei unserer Prüfung nicht; die neue Seite unter umwelt.bremen.de ist erreichbar. Den Betrag des Bußgelds haben wir der ${h.src('bkatv', 'Bußgeldkatalog-Verordnung')} entnommen, nicht der Stadtseite.</p>
<h2>Von Bremen weiter</h2>
<p>Hamburg im Norden hat keine Zone, ${h.a('hannover', 'Hannover')} hat seine aufgehoben. Wer Richtung Ruhrgebiet fährt, kommt durch Osnabrück und Münster, beide mit Zone; die ${h.a('route', 'Routenprüfung')} zeigt die Strecke.</p>`,
  },
  en: {
    slug: 'bremen-low-emission-zone',
    nav: 'Bremen',
    card: 'Old town, Östliche Vorstadt, parts of Schwachhausen and the Neustadt: green only since 2011.',
    title: 'Bremen low-emission zone 2026: old town to Neustadt, green',
    description: 'Bremen low-emission zone 2026: old town, Östliche Vorstadt, parts of Schwachhausen and Neustadt, green only since 2011. Why the city still says 80 euros.',
    h1: 'Bremen low-emission zone',
    intro: 'The preset is a Euro 3 diesel with a yellow sticker. Check your vehicle for the Bremen zone.',
    resume: () => `Bremen’s low-emission zone covers the old town, the Östliche Vorstadt, parts of Schwachhausen and large parts of the Neustadt on the left bank of the Weser. Its basis is the Senate’s clean-air and action plan of August 2006. According to the German Environment Agency list, stage one began on 1 January 2009, stage two on 1 January 2010, and since 1 July 2011 only vehicles with a green sticker may enter. It is the only zone in the state of Bremen; Bremerhaven has none. The page of the Senator for the Environment does not give the stage dates but does describe the area, and it states the fine as 80 euros. That was the earlier standard amount; the current Fine Catalogue Ordinance sets 100 euros under entry 153, with no penalty point. Bremen has no diesel ban. For visitors this means that with a green sticker the market square, the Schlachte, the Viertel and the Weser stadium are within reach; without one, only a car park outside and the tram remain. Trucks and buses follow the same rule as cars.`,
    faqs: () => [
      { q: 'Is the Weser stadium inside the Bremen zone?', a: 'The Weser stadium lies in the Pauliner Marsch on the edge of the Östliche Vorstadt. Whether the approach to the stadium car parks passes through the zone is shown on the Senator for the Environment’s map. Many approaches from the Östliche Vorstadt lie inside. With a green sticker you are safe in any case; without one, use park-and-ride.' },
      { q: 'Why does the city of Bremen quote an 80-euro fine?', a: 'The Senator for the Environment’s page was not updated after the standard fine was raised. What counts is the Fine Catalogue Ordinance, which sets 100 euros under entry 153 for taking part in traffic subject to a ban to reduce harmful air pollution. There is still no penalty point in the driving register for it.' },
      { q: 'Does Bremerhaven have a low-emission zone?', a: 'No. The German Environment Agency list shows only the zone in the city of Bremen for the state of Bremen. In Bremerhaven, for instance on the way to the ferries and cruise terminals, you need no sticker. Only when entering central Bremen does the green sticker become necessary. The nearest zone in Lower Saxony is in Osnabrück.' },
    ],
    body: (h) => `<h2>Stages of the Bremen zone</h2>
${stufen(h, 'bremen')}
<h2>Area and source</h2>
<p>The area is described by the ${h.src('bremen', 'Senator for the Environment')}. The German Environment Agency’s older link to a building-department page did not respond during our check; the new page at umwelt.bremen.de is reachable. We took the fine amount from the ${h.src('bkatv', 'Fine Catalogue Ordinance')}, not from the city page.</p>
<h2>Onward from Bremen</h2>
<p>Hamburg to the north has no zone, and ${h.a('hannover', 'Hanover')} has lifted its zone. Heading towards the Ruhr you pass Osnabrück and Münster, both with zones; the ${h.a('route', 'route check')} shows the way.</p>`,
  },
});

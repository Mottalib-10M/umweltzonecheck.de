import { defineGuide } from '../../lib/guide-types';
import { stufen } from '../../lib/stadt';

/** Berlin : innerhalb des S-Bahn-Rings, ca. 88 km², Grün seit 1.1.2010 (berlin.de, UBA). */
export default defineGuide({
  id: 'berlin',
  group: 'staedte',
  order: 1,
  tool: 'stadt',
  zone: 'berlin',
  preset: { g: '3', k: 'diesel', n: '3' },
  related: ['route', 'gruene-plakette', 'e-auto', 'bussgeld', 'auslaendische-fahrzeuge', 'leipzig'],
  sources: ['berlinGebiet', 'berlin', 'ubaListe', 'bkatv', 'anhang3'],
  de: {
    slug: 'umweltzone-berlin',
    nav: 'Berlin',
    card: 'Innerhalb des S-Bahn-Rings, rund 88 km², seit 2010 nur Grün: wer in die Berliner Zone darf.',
    title: 'Umweltzone Berlin 2026: S-Bahn-Ring, nur grüne Plakette',
    description: 'Umweltzone Berlin 2026: Sie umfasst die Innenstadt innerhalb des S-Bahn-Rings, rund 88 km², seit 2010 gilt nur Grün. Prüfen Sie Ihr Fahrzeug mit Ausnahmen.',
    h1: 'Umweltzone Berlin',
    intro: 'Voreingestellt ist ein Diesel Euro 3 mit gelber Plakette. Tragen Sie Ihr Fahrzeug ein: Die Prüfung zeigt, ob es in die Berliner Zone darf.',
    resume: () => `Die Berliner Umweltzone umfasst die Innenstadt innerhalb des S-Bahn-Rings, den sogenannten Großen Hundekopf, eine Fläche von rund 88 Quadratkilometern. Sie gehört zu den ersten Zonen Deutschlands: Die erste Stufe galt ab dem 1. Januar 2008, und seit dem 1. Januar 2010 dürfen nur noch Fahrzeuge mit grüner Plakette oder einer Befreiung hineinfahren. Berlin hat die gelbe Zwischenstufe damit übersprungen. Die S-Bahn-Trasse selbst bildet die Grenze; Straßen, die den Ring kreuzen, tragen an der Einfahrt das Zeichen 270.1. Grundlage ist der Luftreinhalteplan des Landes, für den die Senatsverwaltung für Umwelt zuständig ist. Fahrzeuge mit E-Kennzeichen sind nach Angaben der Senatsverwaltung von der Plakettenpflicht befreit; seit dem 1. Oktober 2026 folgt das auch bundesweit aus Anhang 3 Nummer 11 der 35. BImSchV. Ein Dieselfahrverbot gibt es in Berlin derzeit nicht, die grüne Plakette genügt also für jeden Diesel. Wer ohne passende Plakette in der Zone fährt oder parkt, riskiert das bundesweite Bußgeld von 100 Euro. Außerhalb des Rings, etwa in Spandau, Köpenick oder am Flughafen BER, gilt keine Plakettenpflicht.`,
    faqs: () => [
      { q: 'Liegt der Flughafen BER in der Umweltzone?', a: 'Nein. Der Flughafen BER liegt im Süden außerhalb der Stadtgrenze in Brandenburg und weit außerhalb des S-Bahn-Rings. Für die Fahrt dorthin über den Stadtring A 100 oder die A 113 brauchen Sie keine Plakette, solange Sie nicht in die Innenstadt abbiegen. Wer vom Flughafen in ein Hotel innerhalb des Rings fährt, braucht die grüne Plakette.' },
      { q: 'Gehört die Stadtautobahn A 100 zur Berliner Umweltzone?', a: 'Die Zone ist durch den S-Bahn-Ring begrenzt. Abschnitte des Stadtrings verlaufen nahe an dieser Grenze; ob eine bestimmte Abfahrt schon in die Zone führt, zeigt die Beschilderung mit Zeichen 270.1 und die Karte der Senatsverwaltung. Bleiben Sie auf der Autobahn, ohne in den Ring hineinzufahren, ist keine Plakette nötig.' },
      { q: 'Wo bekomme ich in Berlin eine Plakette?', a: 'Bei den Zulassungsbehörden des Landes und bei Stellen, die Abgasuntersuchungen durchführen dürfen, also bei Prüforganisationen wie TÜV oder DEKRA und bei anerkannten Werkstätten. Mitzubringen ist die Zulassungsbescheinigung Teil I. Für Fahrzeuge aus dem Ausland geben dieselben Stellen die Plakette aus, wenn die Unterlagen die Schadstoffgruppe belegen.' },
    ],
    body: (h) => `<h2>Stufen der Berliner Zone</h2>
${stufen(h, 'berlin')}
<h2>Gebiet</h2>
<p>Die ${h.src('berlinGebiet', 'Senatsverwaltung')} beschreibt das Gebiet als Innenstadt innerhalb des S-Bahn-Rings. Dazu gehören Mitte, Friedrichshain, Kreuzberg, Prenzlauer Berg und die inneren Teile von Charlottenburg, Wilmersdorf, Schöneberg, Neukölln, Wedding und Moabit. Die genaue Linie zeigt die Karte auf der Seite der ${h.src('berlin', 'Senatsverwaltung')}.</p>
<h2>Was in Berlin anders ist</h2>
<p>Berlin hat keine Dieselverbote, anders als ${h.a('stuttgart', 'Stuttgart')} und ${h.a('muenchen', 'München')}. Ein ${h.a('e-auto', 'E-Auto mit E-Kennzeichen')} braucht keine Plakette. Wer aus dem Ausland anreist, findet die Regeln auf der Seite ${h.a('auslaendische-fahrzeuge', 'Ausländische Fahrzeuge')}; wer weiter nach ${h.a('leipzig', 'Leipzig')} fährt, kann die Strecke mit der ${h.a('route', 'Routenprüfung')} testen.</p>`,
  },
  en: {
    slug: 'berlin-low-emission-zone',
    nav: 'Berlin',
    card: 'Inside the S-Bahn ring, about 88 km², green only since 2010: who may enter the Berlin zone.',
    title: 'Berlin low-emission zone 2026: S-Bahn ring, green only',
    description: 'Berlin low-emission zone 2026: it covers the centre inside the S-Bahn ring, about 88 km², and since 2010 only green may enter. Check your vehicle here.',
    h1: 'Berlin low-emission zone',
    intro: 'The preset is a Euro 3 diesel with a yellow sticker. Enter your vehicle: the check shows whether it may enter the Berlin zone.',
    resume: () => `Berlin’s low-emission zone covers the city centre inside the S-Bahn ring, the so-called Großer Hundekopf, an area of about 88 square kilometres. It was one of Germany’s first zones: stage one applied from 1 January 2008, and since 1 January 2010 only vehicles with a green sticker or an exemption may enter. Berlin thus skipped the yellow intermediate stage. The S-Bahn line itself forms the boundary; roads crossing the ring carry sign 270.1 at the entry. The legal basis is the state clean-air plan, managed by the Senate Department for the Environment. According to the Senate Department, vehicles with an e-plate are exempt from the sticker; since 1 October 2026 this also follows nationwide from Annex 3 number 11 of the 35th BImSchV. Berlin currently has no diesel ban, so a green sticker is enough for any diesel. Driving or parking in the zone without the right sticker risks the nationwide fine of 100 euros. Outside the ring, for example in Spandau, Köpenick or at BER airport, no sticker is required.`,
    faqs: () => [
      { q: 'Is BER airport inside the low-emission zone?', a: 'No. BER airport lies south of the city boundary in Brandenburg, far outside the S-Bahn ring. Driving there via the A 100 city ring or the A 113 requires no sticker as long as you do not turn into the centre. If you drive from the airport to a hotel inside the ring, you need the green sticker.' },
      { q: 'Is the A 100 city motorway part of the Berlin zone?', a: 'The zone is bounded by the S-Bahn ring. Sections of the city ring run close to that boundary; whether a particular exit already leads into the zone is shown by the 270.1 signs and the Senate Department’s map. As long as you stay on the motorway without driving into the ring, no sticker is needed.' },
      { q: 'Where can I get a sticker in Berlin?', a: 'From the state’s registration offices and from bodies authorised to carry out emission tests, such as testing organisations like TÜV or DEKRA and approved garages. Bring registration certificate part I. For foreign vehicles the same offices issue the sticker if the documents prove the emission group.' },
    ],
    body: (h) => `<h2>Stages of the Berlin zone</h2>
${stufen(h, 'berlin')}
<h2>Area</h2>
<p>The ${h.src('berlinGebiet', 'Senate Department')} describes the area as the centre inside the S-Bahn ring. It includes Mitte, Friedrichshain, Kreuzberg, Prenzlauer Berg and the inner parts of Charlottenburg, Wilmersdorf, Schöneberg, Neukölln, Wedding and Moabit. The exact line is shown on the map on the ${h.src('berlin', 'Senate Department’s page')}.</p>
<h2>What is different in Berlin</h2>
<p>Berlin has no diesel bans, unlike ${h.a('stuttgart', 'Stuttgart')} and ${h.a('muenchen', 'Munich')}. An ${h.a('e-auto', 'electric car with an e-plate')} needs no sticker. Visitors from abroad will find the rules on the ${h.a('auslaendische-fahrzeuge', 'foreign vehicles')} page; if you continue to ${h.a('leipzig', 'Leipzig')}, test the trip with the ${h.a('route', 'route check')}.</p>`,
  },
});

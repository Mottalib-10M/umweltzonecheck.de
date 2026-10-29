import { defineGuide } from '../../lib/guide-types';

/** Route : bis zu fünf Orte, jede Zone einmal ; Ruhrgebiet als eine Zone. */
export default defineGuide({
  id: 'route',
  group: 'zonen',
  order: 3,
  tool: 'route',
  preset: { route: 'koeln,essen,dortmund,hannover,berlin' },
  related: ['umweltzonen-deutschland', 'ruhrgebiet', 'auslaendische-fahrzeuge', 'wohnmobil', 'motorrad', 'bussgeld'],
  sources: ['ubaListe', 'essen', 'stvoAnl2', 'p6'],
  de: {
    slug: 'umweltzonen-route',
    nav: 'Route prüfen',
    card: 'Bis zu fünf Orte auf einmal: welche Zonen auf der Strecke liegen und ob Ihr Fahrzeug überall hineindarf.',
    title: 'Umweltzonen Route prüfen 2026: bis zu fünf Orte auf einmal',
    description: 'Umweltzonen auf der Route prüfen 2026: Geben Sie bis zu fünf Orte ein und sehen Sie, welche Zonen auf der Strecke liegen und ob Ihr Fahrzeug überall hineindarf.',
    h1: 'Umweltzonen auf der Route prüfen',
    intro: 'Voreingestellt ist eine Fahrt von Köln über das Ruhrgebiet und Hannover nach Berlin. Tragen Sie Ihre Orte und Ihr Fahrzeug ein.',
    resume: () => `Wer durch Deutschland fährt, kreuzt oft mehrere Umweltzonen, ohne es zu merken. Autobahnen liegen in der Regel außerhalb der Zonen; die Grenze beginnt meist erst an der Abfahrt in die Stadt, und das Schild 270.1 steht an jeder Einfahrt. Entscheidend ist also nicht die Strecke, sondern die Orte, in die Sie hineinfahren: zum Übernachten, Tanken, Parken oder für einen Besuch. Die Prüfung oben nimmt bis zu fünf Orte, sucht für jeden die zugehörige Zone und zeigt, ob Ihr Fahrzeug dort an Ihrem Reisetag einfahren darf. Liegen mehrere Orte in derselben Zone, zählt sie nur einmal; das betrifft vor allem das Ruhrgebiet, wo 13 Städte von Duisburg bis Dortmund eine gemeinsame Zone von rund 850 Quadratkilometern bilden. Auch die Dieselverbote in Stuttgart und München fließen ein: Ein Diesel Euro 5 mit grüner Plakette kommt durch fast jede Zone, aber nicht in die kleine Umweltzone Stuttgarts. Orte ohne Zone zeigt die Prüfung als frei, aufgehobene Zonen mit dem Datum der Aufhebung. Für Fahrzeuge aus dem Ausland gilt dieselbe Prüfung, sobald die Schadstoffgruppe bekannt ist.`,
    faqs: () => [
      { q: 'Brauche ich auf der Autobahn eine Plakette?', a: 'In der Regel nicht. Die Zonen umfassen meist die Stadtgebiete ohne die durchführenden Autobahnen; die Schilder stehen an den Abfahrten. Es gibt aber Ausnahmen, in denen Bundesstraßen oder Ringe zur Zone gehören, etwa der Mittlere Ring in München. Maßgeblich sind die Schilder und der Plan der Zone. Wer nur durchfährt und keine Abfahrt nimmt, kommt meist ohne Plakette durch.' },
      { q: 'Wie finde ich heraus, ob mein Hotel in der Zone liegt?', a: 'Die Prüfung arbeitet mit Orten, nicht mit Adressen. Bei Städten, in denen die Zone nur einen Teil des Stadtgebiets abdeckt, etwa Berlin innerhalb des S-Bahn-Rings oder Leipzig mit rund 62 Prozent der Fläche, zeigt sie die Regel für die Zone. Ob eine Adresse innen oder außen liegt, zeigen die Karten der Städte, die auf den Stadtseiten verlinkt sind.' },
      { q: 'Kann ich die Route speichern oder teilen?', a: 'Ja, über die Adresse der Seite. Sobald Sie Orte oder Fahrzeug ändern, schreibt die Seite die Angaben in die Adresszeile; diese Adresse können Sie als Lesezeichen speichern oder weitergeben. Gespeichert wird nichts auf einem Server, und nichts von dem, was Sie eintragen, verlässt Ihren Browser. Beim nächsten Aufruf liest die Seite die Angaben wieder aus der Adresse.' },
    ],
    body: (h) => `<h2>Beispiele für typische Strecken</h2>
${h.table(['Strecke', 'Zonen unterwegs (Auswahl)'], [
  ['Köln – Ruhrgebiet – Hannover – Berlin', 'Köln, Ruhrgebiet, Berlin; Hannover aufgehoben'],
  ['Frankfurt – Würzburg – Nürnberg – München', 'Frankfurt am Main, München; Würzburg und Nürnberg ohne Zone'],
  ['Karlsruhe – Stuttgart – Ulm – Augsburg', 'Stuttgart, Augsburg; Karlsruhe und Ulm aufgehoben'],
  ['Hamburg – Bremen – Osnabrück – Münster', 'Bremen, Osnabrück, Münster; Hamburg ohne Zone'],
  ['Leipzig – Halle – Magdeburg', 'alle drei mit Zone'],
], `Nach der ${h.src('ubaListe', 'Liste des Umweltbundesamts')}`)}
<h2>Wie die Prüfung zählt</h2>
<p>Jeder Ort wird der Zone zugeordnet, zu der er laut Liste gehört. Das ${h.src('essen', 'Ruhrgebiet')} zählt als eine Zone, ebenso Ludwigsburg mit seinen Nachbargemeinden. Für ${h.a('auslaendische-fahrzeuge', 'Fahrzeuge aus dem Ausland')} ohne Nachweis der Norm vermutet ${h.src('p6', '§ 6')} die Gruppe nach der Erstzulassung; geben Sie dann diese Gruppe ein.</p>
<h2>Unterwegs mit Wohnmobil oder Motorrad</h2>
<p>Für ${h.a('wohnmobil', 'Wohnmobile')} gilt dieselbe Plakettenpflicht wie für Autos, ${h.a('motorrad', 'Motorräder')} sind befreit. Was ein Verstoß kostet, steht auf der Seite ${h.a('bussgeld', 'Bußgeld')}.</p>`,
  },
  en: {
    slug: 'check-route',
    nav: 'Check a route',
    card: 'Up to five places at once: which zones lie on your way and whether your vehicle may enter each one.',
    title: 'Check low-emission zones on your route: up to five places',
    description: 'Check German low-emission zones on your route 2026: enter up to five places and see which zones lie on the way and whether your vehicle may enter each one.',
    h1: 'Check the low-emission zones on your route',
    intro: 'The preset is a trip from Cologne via the Ruhr and Hanover to Berlin. Enter your own places and vehicle.',
    resume: () => `Driving across Germany you often cross several low-emission zones without noticing. Motorways usually lie outside the zones; the boundary generally starts at the exit into town, and the 270.1 sign stands at every entry point. What matters is therefore not the route but the places you actually drive into: to stay overnight, refuel, park or visit. The check above takes up to five places, finds the zone each belongs to and shows whether your vehicle may enter it on your travel date. If several places lie in the same zone, it counts only once; this mainly concerns the Ruhr area, where 13 cities from Duisburg to Dortmund form one joint zone of around 850 square kilometres. The diesel bans in Stuttgart and Munich are included too: a Euro 5 diesel with a green sticker gets through almost every zone, but not into Stuttgart’s small zone. Places without a zone show as free, lifted zones with the date they were lifted. The same check works for foreign vehicles once the emission group is known.`,
    faqs: () => [
      { q: 'Do I need a sticker on the motorway?', a: 'Usually not. Zones generally cover urban areas without the motorways running through them; the signs stand at the exits. There are exceptions where federal roads or ring roads belong to the zone, such as the Mittlerer Ring in Munich. The signs and the zone plan decide. If you only pass through without taking an exit, you will usually manage without a sticker.' },
      { q: 'How do I find out whether my hotel is inside the zone?', a: 'The check works with places, not addresses. For cities where the zone covers only part of the area, such as Berlin inside the S-Bahn ring or Leipzig with around 62 percent of its area, it shows the zone rule. Whether a given address lies inside or outside is shown on the city maps linked from the city pages.' },
      { q: 'Can I save or share the route?', a: 'Yes, through the page address. As soon as you change places or vehicle, the page writes your entries into the address bar; you can bookmark that address or pass it on. Nothing is stored on a server, and nothing you enter leaves your browser. On your next visit the page reads the entries back from the address.' },
    ],
    body: (h) => `<h2>Examples of typical journeys</h2>
${h.table(['Route', 'Zones on the way (selection)'], [
  ['Cologne – Ruhr – Hanover – Berlin', 'Cologne, Ruhr, Berlin; Hanover lifted'],
  ['Frankfurt – Würzburg – Nuremberg – Munich', 'Frankfurt am Main, Munich; Würzburg and Nuremberg without a zone'],
  ['Karlsruhe – Stuttgart – Ulm – Augsburg', 'Stuttgart, Augsburg; Karlsruhe and Ulm lifted'],
  ['Hamburg – Bremen – Osnabrück – Münster', 'Bremen, Osnabrück, Münster; Hamburg without a zone'],
  ['Leipzig – Halle – Magdeburg', 'all three with a zone'],
], `Based on the ${h.src('ubaListe', 'German Environment Agency list')}`)}
<h2>How the check counts</h2>
<p>Each place is assigned to the zone it belongs to in the list. The ${h.src('essen', 'Ruhr area')} counts as one zone, as does Ludwigsburg with its neighbouring towns. For ${h.a('auslaendische-fahrzeuge', 'foreign vehicles')} without proof of the norm, ${h.src('p6', 'section 6')} presumes the group from the first registration; enter that group.</p>
<h2>Travelling by motorhome or motorcycle</h2>
<p>${h.a('wohnmobil', 'Motorhomes')} have the same sticker obligation as cars, while ${h.a('motorrad', 'motorcycles')} are exempt. What an offence costs is on the ${h.a('bussgeld', 'fines')} page.</p>`,
  },
});

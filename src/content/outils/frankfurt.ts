import { defineGuide } from '../../lib/guide-types';
import { stufen } from '../../lib/stadt';

/** Frankfurt am Main : Zone seit 2008, Grün seit 1.1.2012 ; 2. Fortschreibung Teilplan seit 28.12.2020 (Land Hessen). */
export default defineGuide({
  id: 'frankfurt',
  group: 'staedte',
  order: 5,
  tool: 'stadt',
  zone: 'frankfurt-am-main',
  preset: { g: '4', k: 'diesel', n: '4' },
  related: ['hessen', 'route', 'gruene-plakette', 'partikelfilter', 'mainz', 'umweltzonen-deutschland'],
  sources: ['hessen', 'ubaListe', 'wiesbaden'],
  de: {
    slug: 'umweltzone-frankfurt',
    nav: 'Frankfurt am Main',
    card: 'Seit 2012 nur Grün, kein Dieselverbot, Flughafen außerhalb: die Frankfurter Zone kurz erklärt.',
    title: 'Umweltzone Frankfurt am Main 2026: Grün, kein Dieselverbot',
    description: 'Umweltzone Frankfurt am Main 2026: seit 2012 nur grüne Plakette, kein Dieselverbot, der Flughafen liegt außerhalb. Mit den Nachbarzonen Offenbach und Wiesbaden.',
    h1: 'Umweltzone Frankfurt am Main',
    intro: 'Voreingestellt ist ein Diesel Euro 4 mit grüner Plakette. Ändern Sie die Angaben und prüfen Sie Ihr Fahrzeug für die Frankfurter Zone.',
    resume: () => `Die Frankfurter Umweltzone wurde im Oktober 2008 eingerichtet und ist seit dem 1. Januar 2012 eine grüne Zone: Einfahren dürfen nur Fahrzeuge mit grüner Plakette oder einer Befreiung. Rechtsgrundlage der dritten Stufe ist die erste Fortschreibung des Luftreinhalteplans für den Ballungsraum Rhein-Main, Teilplan Frankfurt am Main; seit dem 28. Dezember 2020 gilt die zweite Fortschreibung dieses Teilplans. Zuständig für den Plan ist das Land Hessen, das die Frankfurter Zone neben denen in Darmstadt, Offenbach, Wiesbaden, Marburg und Limburg führt. Ein Dieselfahrverbot gibt es in Frankfurt derzeit nicht; ein Diesel ab Euro 4 oder ein Euro-3-Diesel mit Partikelfilter bekommt Grün und darf hinein. Der Flughafen liegt im Süden außerhalb der Zone, die Anfahrt über die Autobahnen A 3 und A 5 ist frei. Die Seite der Stadt Frankfurt zur Umweltzone war bei unserer Prüfung für automatische Abrufe gesperrt; die Angaben auf dieser Seite stammen deshalb von der Seite des Landes und aus der Liste des Umweltbundesamts. Wer in Frankfurt ohne passende Plakette fährt, zahlt wie überall 100 Euro.`,
    faqs: () => [
      { q: 'Wo sehe ich die genaue Grenze der Frankfurter Zone?', a: 'Auf der Karte im Luftreinhalteplan Rhein-Main, Teilplan Frankfurt am Main, den das Land Hessen veröffentlicht, und auf der Seite der Stadt. Die Stadtseite war bei unserer Prüfung für automatische Abrufe gesperrt, deshalb geben wir den Verlauf hier nicht wieder. Vor Ort gilt die Beschilderung: Das Zeichen 270.1 steht an jeder Einfahrt in die Zone.' },
      { q: 'Brauche ich für den Frankfurter Flughafen eine Plakette?', a: 'Für den Flughafen selbst nicht, denn er liegt außerhalb der Umweltzone am Frankfurter Kreuz. Wer vom Flughafen in die Innenstadt, ins Bankenviertel oder nach Sachsenhausen fährt, braucht dagegen die grüne Plakette. Mietwagen an deutschen Stationen tragen sie in der Regel bereits; prüfen Sie die Windschutzscheibe bei der Übergabe.' },
      { q: 'Hat Offenbach eine eigene Umweltzone?', a: 'Ja. Offenbach am Main hat seit dem 1. Januar 2015 eine eigene grüne Zone. Rechtsgrundlage ist die zweite Fortschreibung des Luftreinhalteplans Rhein-Main, Teilplan Offenbach, in Kraft seit dem 24. November 2014; die dritte Fortschreibung gilt seit dem 12. Oktober 2020. Die Regeln sind dieselben wie in Frankfurt: nur Grün oder eine Befreiung.' },
    ],
    body: (h) => `<h2>Stufen der Frankfurter Zone</h2>
${stufen(h, 'frankfurt-am-main')}
<h2>Die Zonen im Rhein-Main-Gebiet</h2>
${h.table(['Stadt', 'grün seit', 'Status'], [
  ['Frankfurt am Main', h.date('2012-01-01'), 'aktiv'],
  ['Offenbach am Main', h.date('2015-01-01'), 'aktiv'],
  ['Darmstadt', h.date('2015-11-01'), 'aktiv'],
  ['Wiesbaden', h.date('2013-02-01'), 'aktiv'],
  ['Mainz', h.date('2013-02-01'), 'aufgehoben am 1. Oktober 2025'],
], `${h.src('hessen', 'Hessisches Umweltministerium')}, ${h.src('wiesbaden', 'Stadt Wiesbaden')}`)}
<p>Mehr zu den hessischen Zonen auf der Seite ${h.a('hessen', 'Hessen')}, zur aufgehobenen Zone auf der Seite ${h.a('mainz', 'Mainz')}.</p>`,
  },
  en: {
    slug: 'frankfurt-low-emission-zone',
    nav: 'Frankfurt am Main',
    card: 'Green only since 2012, no diesel ban, airport outside: the Frankfurt zone in brief.',
    title: 'Frankfurt low-emission zone 2026: green only, no diesel ban',
    description: 'Frankfurt am Main low-emission zone 2026: green sticker only since 2012, no diesel ban, the airport lies outside. With the Offenbach and Wiesbaden zones.',
    h1: 'Frankfurt am Main low-emission zone',
    intro: 'The preset is a Euro 4 diesel with a green sticker. Change the details and check your vehicle for the Frankfurt zone.',
    resume: () => `Frankfurt’s low-emission zone was set up in October 2008 and has been a green zone since 1 January 2012: only vehicles with a green sticker or an exemption may enter. The legal basis of stage three is the first update of the clean-air plan for the Rhine-Main conurbation, Frankfurt am Main sub-plan; the second update of that sub-plan has applied since 28 December 2020. The plan is the responsibility of the state of Hesse, which lists the Frankfurt zone alongside those in Darmstadt, Offenbach, Wiesbaden, Marburg and Limburg. Frankfurt currently has no diesel ban; a diesel from Euro 4, or a Euro 3 diesel with a particle filter, gets green and may enter. The airport lies to the south outside the zone, and access via the A 3 and A 5 motorways is free. The city of Frankfurt’s zone page blocked automated access during our check, so the information here comes from the state’s page and the German Environment Agency list. Driving in Frankfurt without the right sticker costs 100 euros, as everywhere.`,
    faqs: () => [
      { q: 'Where can I see the exact boundary of the Frankfurt zone?', a: 'On the map in the Rhine-Main clean-air plan, Frankfurt am Main sub-plan, published by the state of Hesse, and on the city’s page. The city page blocked automated access during our check, so we do not describe the boundary here. On the ground the signs decide: sign 270.1 stands at every entry into the zone.' },
      { q: 'Do I need a sticker for Frankfurt airport?', a: 'Not for the airport itself, which lies outside the zone at the Frankfurter Kreuz interchange. Driving from the airport to the centre, the banking district or Sachsenhausen, however, requires the green sticker. Rental cars from German stations usually carry one already; check the windscreen when you collect the car.' },
      { q: 'Does Offenbach have its own zone?', a: 'Yes. Offenbach am Main has had its own green zone since 1 January 2015. Its legal basis is the second update of the Rhine-Main clean-air plan, Offenbach sub-plan, in force since 24 November 2014; the third update has applied since 12 October 2020. The rules are the same as in Frankfurt: green only, or an exemption.' },
    ],
    body: (h) => `<h2>Stages of the Frankfurt zone</h2>
${stufen(h, 'frankfurt-am-main')}
<h2>Zones in the Rhine-Main area</h2>
${h.table(['City', 'green since', 'status'], [
  ['Frankfurt am Main', h.date('2012-01-01'), 'active'],
  ['Offenbach am Main', h.date('2015-01-01'), 'active'],
  ['Darmstadt', h.date('2015-11-01'), 'active'],
  ['Wiesbaden', h.date('2013-02-01'), 'active'],
  ['Mainz', h.date('2013-02-01'), 'lifted on 1 October 2025'],
], `${h.src('hessen', 'Hesse Environment Ministry')}, ${h.src('wiesbaden', 'City of Wiesbaden')}`)}
<p>More on Hesse’s zones on the ${h.a('hessen', 'Hesse')} page, and on the lifted zone on the ${h.a('mainz', 'Mainz')} page.</p>`,
  },
});

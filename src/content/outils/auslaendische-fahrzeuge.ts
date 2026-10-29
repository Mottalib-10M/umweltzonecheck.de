import { defineGuide, type Helpers } from '../../lib/guide-types';

/** Fahrzeuge aus dem Ausland : Vermutung nach § 6, Ausgabe nach § 4 Satz 2. */
function D(h: Helpers) {
  const p = (k: 'diesel' | 'benzin', ez: string) => h.M.plakette({ kraftstoff: k, modus: 'datum', norm: 0, pms: false, ez, klasse: 'pkw' }).gruppe;
  return { p, nA: h.M.AKTIV.length };
}

export default defineGuide({
  id: 'auslaendische-fahrzeuge',
  group: 'plakette',
  order: 7,
  tool: 'plakette',
  preset: { k: 'diesel', m: 'datum', ez: '2004-05-01' },
  related: ['feinstaubplakette', 'umweltplakette', 'route', 'bussgeld', 'umweltzonen-deutschland', 'stuttgart'],
  sources: ['p6', 'p4', 'anhang3', 'fzv11', 'stuttgartPlakette', 'berlin'],
  de: {
    slug: 'umweltplakette-ausland',
    nav: 'Fahrzeuge aus dem Ausland',
    card: 'Ohne Nachweis der Norm entscheidet das Datum der Erstzulassung: die Vermutung des § 6.',
    title: 'Umweltplakette Ausland 2026: Regeln für fremde Kennzeichen',
    description: 'Umweltplakette für Fahrzeuge aus dem Ausland 2026: welche Gruppe § 6 der 35. BImSchV nach der Erstzulassung vermutet und wo Sie die Plakette bekommen.',
    h1: 'Umweltplakette für Fahrzeuge aus dem Ausland',
    intro: 'Kein Feld 14.1, keine Schlüsselnummer: Für ein im Ausland zugelassenes Fahrzeug rechnet die Prüfung mit dem Datum der Erstzulassung.',
    resume: (h) => {
      const { p } = D(h);
      return `Die Plakettenpflicht in deutschen Umweltzonen gilt für jedes Kraftfahrzeug, egal wo es zugelassen ist. Ein Auto aus Frankreich, Polen, den Niederlanden oder der Schweiz braucht in einer aktiven Zone genauso die grüne Plakette wie ein deutsches. Weil ausländische Papiere keine deutsche Schlüsselnummer tragen, regelt § 6 der 35. BImSchV die Zuordnung: Kann der Halter die Abgasnorm nicht nachweisen, wird die Gruppe nach dem Datum der Erstzulassung vermutet. Für Diesel-Pkw heißt das: Erstzulassung vor 1997 keine Plakette, von 1997 bis 2000 Gruppe ${p('diesel', '1998-01-01')}, von 2001 bis 2005 Gruppe ${p('diesel', '2003-01-01')}, ab dem 1. Januar 2006 Gruppe ${p('diesel', '2006-01-01')} und damit Grün. Benzin-Pkw mit Erstzulassung ab 1993 sind Gruppe ${p('benzin', '1993-01-01')}. Mit einem Nachweis der Norm, etwa einer Übereinstimmungsbescheinigung, kann ein Fahrzeug auch besser eingestuft werden, als das Datum vermuten lässt. Ausgabestellen sind dieselben wie für deutsche Fahrzeuge: § 4 der Verordnung schließt ausdrücklich Fahrzeuge im internationalen Verkehr ein.`;
    },
    faqs: () => [
      { q: 'Kann ich die deutsche Plakette vom Ausland aus bestellen?', a: 'Ja. Viele Zulassungsstellen und Prüforganisationen schicken die Plakette per Post, wenn Sie eine Kopie der Fahrzeugpapiere einsenden. Die Stadt Stuttgart nennt auf ihrer Seite die Bestellung per E-Mail ausdrücklich auch für Halter im Ausland. Rechnen Sie einige Tage für den Versand ein und kleben Sie die Plakette vor der Einreise in die Zone an die Windschutzscheibe.' },
      { q: 'Gilt meine französische Crit’Air-Vignette in Deutschland?', a: 'Nein. Die 35. BImSchV kennt nur die deutsche Plakette nach ihrem Anhang 1. Ausländische Umweltvignetten wie die französische Crit’Air sind darin nicht erwähnt und werden deshalb nicht anerkannt. Umgekehrt gilt die deutsche Plakette nicht in Frankreich. Für jede deutsche Umweltzone brauchen Sie also die grüne deutsche Plakette oder eine Ausnahme nach Anhang 3.' },
      { q: 'Mein Diesel ist von 2005, hat aber Euro 4. Bekomme ich Grün?', a: 'Mit Nachweis ja. Die Vermutung nach dem Datum gilt nur, wenn kein Nachweis über die Einhaltung der Norm vorgelegt werden kann. Steht Euro 4 in Ihren Papieren oder in einer Übereinstimmungsbescheinigung des Herstellers, ordnet die Ausgabestelle das Fahrzeug nach der Norm ein, also Gruppe 4. Ohne Nachweis würde ein Diesel-Pkw von 2005 als Gruppe 3 gelten.' },
    ],
    body: (h) => {
      const { p } = D(h);
      return `<h2>Die Vermutung nach Erstzulassung</h2>
${h.table(['Erstzulassung Diesel-Pkw', 'Gruppe', 'Erstzulassung schwere Diesel', 'Gruppe'], [
  ['vor 1. Januar 1997', p('diesel', '1996-06-01'), 'vor 1. Oktober 1996', 1],
  ['1. Januar 1997 bis 31. Dezember 2000', p('diesel', '1998-01-01'), '1. Oktober 1996 bis 30. September 2001', 2],
  ['1. Januar 2001 bis 31. Dezember 2005', p('diesel', '2003-01-01'), '1. Oktober 2001 bis 30. September 2006', 3],
  ['ab 1. Januar 2006', p('diesel', '2006-01-01'), 'ab 1. Oktober 2006', 4],
], `${h.src('p6', '§ 6 Abs. 3 der 35. BImSchV')}; Benzin-Pkw ab 1. Januar 1993: Gruppe 4 (§ 6 Abs. 4)`, ['l', 'r', 'l', 'r'])}
<p>Die Schwellen für schwere Fahrzeuge betreffen Lkw und Busse nach der Richtlinie 88/77/EWG; für sie gelten außerdem die Nachweise der Lkw-Maut-Verordnung. Für Pkw gilt die Richtlinie 70/220/EWG.</p>
<h2>Oldtimer aus dem Ausland</h2>
<p>Anhang 3 Nummer 10 nimmt neben deutschen Oldtimern mit H- oder 07-Kennzeichen auch Fahrzeuge aus anderen Staaten der Europäischen Union, des Europäischen Wirtschaftsraums und der Türkei aus, wenn sie gleichwertige Anforderungen erfüllen. Welche Unterlagen dafür genügen, sagt der Text nicht; fragen Sie bei der Stadt Ihres Ziels nach. Mehr auf der Seite ${h.a('oldtimer', 'Oldtimer')}.</p>
<h2>Elektroautos aus dem Ausland</h2>
<p>Seit dem ${h.date(h.P.e_kennzeichen_ab)} sind Fahrzeuge mit einer Kennzeichnung nach ${h.src('fzv11', '§ 11 der Fahrzeug-Zulassungsverordnung')} befreit. Für im Ausland zugelassene Elektrofahrzeuge sieht Absatz 4 eine E-Plakette nach Anlage 3 vor, die am Heck klebt und bei denselben Stellen erhältlich ist wie die Umweltplakette; Absatz 5 stellt im Ausland erteilte E-Kennzeichen den deutschen gleich. Ein ausländisches Elektroauto ohne eine dieser Kennzeichnungen braucht weiter die grüne Plakette. Mehr auf der Seite ${h.a('e-auto', 'E-Auto')}.</p>
<h2>Vor der Fahrt</h2>
<p>Prüfen Sie mit der ${h.a('route', 'Prüfung der Route')}, welche Zonen auf Ihrer Strecke liegen: Wer nur auf der Autobahn durchfährt, kommt meist an den Zonen vorbei. Wer ohne passende Plakette in eine Zone fährt, riskiert das ${h.a('bussgeld', 'Bußgeld von 100 Euro')}, auch mit ausländischem Kennzeichen.</p>`;
    },
  },
  en: {
    slug: 'foreign-vehicles-sticker',
    nav: 'Foreign vehicles',
    card: 'With no proof of the norm, the first registration date decides: the section 6 presumption.',
    title: 'Umweltplakette for foreign cars 2026: rules and where to buy',
    description: 'German emissions sticker for foreign cars 2026: which group section 6 of the 35th BImSchV presumes from first registration and where to get the sticker.',
    h1: 'The German emissions sticker for foreign-registered vehicles',
    intro: 'No field 14.1, no German key number: for a foreign-registered vehicle the check works from the first registration date.',
    resume: (h) => {
      const { p } = D(h);
      return `The sticker requirement in German low-emission zones applies to every motor vehicle, wherever it is registered. A car from France, Poland, the Netherlands or Switzerland needs the green sticker in an active zone just like a German one. Because foreign papers carry no German key number, section 6 of the 35th BImSchV governs the assignment: if the owner cannot prove the Euro norm, the group is presumed from the first registration date. For diesel cars that means: first registered before 1997 no sticker, 1997 to 2000 group ${p('diesel', '1998-01-01')}, 2001 to 2005 group ${p('diesel', '2003-01-01')}, from 1 January 2006 group ${p('diesel', '2006-01-01')} and so green. Petrol cars first registered from 1993 are group ${p('benzin', '1993-01-01')}. With proof of the norm, such as a certificate of conformity, a vehicle can be placed higher than its date would suggest. The issuing offices are the same as for German vehicles: section 4 of the ordinance expressly includes vehicles in international traffic.`;
    },
    faqs: () => [
      { q: 'Can I order the German sticker from abroad?', a: 'Yes. Many registration offices and testing organisations post the sticker if you send a copy of the vehicle papers. The City of Stuttgart’s page expressly mentions ordering by e-mail for owners abroad too. Allow a few days for delivery and fix the sticker to the windscreen before you drive into a zone.' },
      { q: 'Is my French Crit’Air vignette valid in Germany?', a: 'No. The 35th BImSchV only knows the German sticker set out in its Annex 1. Foreign environmental vignettes such as the French Crit’Air are not mentioned and are therefore not recognised. Likewise the German sticker is not valid in France. For every German zone you need the green German sticker or an Annex 3 exemption.' },
      { q: 'My diesel is from 2005 but meets Euro 4. Do I get green?', a: 'With proof, yes. The date-based presumption only applies when no proof of compliance with the norm can be shown. If Euro 4 appears in your papers or in a manufacturer’s certificate of conformity, the issuing office assigns the vehicle by its norm, which is group 4. Without proof, a 2005 diesel car would count as group 3.' },
    ],
    body: (h) => {
      const { p } = D(h);
      return `<h2>The presumption by first registration</h2>
${h.table(['Diesel car first registered', 'Group', 'Heavy diesel first registered', 'Group'], [
  ['before 1 January 1997', p('diesel', '1996-06-01'), 'before 1 October 1996', 1],
  ['1 January 1997 to 31 December 2000', p('diesel', '1998-01-01'), '1 October 1996 to 30 September 2001', 2],
  ['1 January 2001 to 31 December 2005', p('diesel', '2003-01-01'), '1 October 2001 to 30 September 2006', 3],
  ['from 1 January 2006', p('diesel', '2006-01-01'), 'from 1 October 2006', 4],
], `${h.src('p6', 'Section 6(3) of the 35th BImSchV')}; petrol cars from 1 January 1993: group 4 (section 6(4))`, ['l', 'r', 'l', 'r'])}
<p>The thresholds for heavy vehicles cover trucks and buses under Directive 88/77/EEC; the proofs under the truck toll ordinance are accepted for them too. Cars fall under Directive 70/220/EEC.</p>
<h2>Classic cars from abroad</h2>
<p>Besides German classic cars with H or 07 plates, Annex 3 number 10 also exempts vehicles registered in other EU or EEA states or in Turkey if they meet equivalent requirements. The text does not say which documents are enough; ask the city you are heading to. More on the ${h.a('oldtimer', 'classic cars')} page.</p>
<h2>Electric cars from abroad</h2>
<p>Since ${h.date(h.P.e_kennzeichen_ab)}, vehicles with a marking under ${h.src('fzv11', 'section 11 of the Vehicle Registration Ordinance')} are exempt. For foreign-registered electric vehicles, subsection 4 provides an e-badge under annex 3, stuck on the rear and available from the same offices as the emissions sticker; subsection 5 treats e-plates issued abroad like German ones. A foreign electric car with neither marking still needs the green sticker. More on the ${h.a('e-auto', 'electric cars')} page.</p>
<h2>Before you set off</h2>
<p>Use the ${h.a('route', 'route check')} to see which zones lie on your way: if you only pass through on the motorway, you usually skirt the zones. Driving into a zone without the right sticker risks the ${h.a('bussgeld', '100-euro fine')}, foreign plates included.</p>`;
    },
  },
});

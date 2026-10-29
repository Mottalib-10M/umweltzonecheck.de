import { defineGuide, type Helpers } from '../../lib/guide-types';

/** Grüne Plakette : wer sie bekommt, wo sie reicht und wo nicht (Dieselverbote). */
function D(h: Helpers) {
  const st = h.M.zoneById('stuttgart')!, mu = h.M.zoneById('muenchen')!, be = h.M.zoneById('berlin')!;
  const spaet = h.M.AKTIV.filter((z) => z.stufe3).sort((a, b) => (b.stufe3! > a.stufe3! ? 1 : -1))[0];
  return { st, mu, be, spaet, nA: h.M.AKTIV.length };
}

export default defineGuide({
  id: 'gruene-plakette',
  group: 'plakette',
  order: 2,
  tool: 'plakette',
  preset: { k: 'diesel', n: '3' },
  related: ['umweltplakette', 'diesel-fahrverbot', 'partikelfilter', 'feinstaubplakette', 'stuttgart', 'muenchen'],
  sources: ['anhang2', 'uba', 'ubaListe', 'stuttgartDiesel', 'muenchen'],
  de: {
    slug: 'gruene-plakette',
    nav: 'Grüne Plakette',
    card: 'Wer Gruppe 4 bekommt, warum Gelb und Rot nirgends mehr reichen, wo Grün nicht genügt.',
    title: 'Grüne Plakette 2026: wer sie bekommt und wo sie reicht',
    description: 'Grüne Plakette 2026: welche Benziner, Diesel und E-Autos die Gruppe 4 bekommen, warum sie in allen aktiven Umweltzonen reicht und wo Dieselverbote greifen.',
    h1: 'Grüne Plakette: wer sie bekommt und wo sie genügt',
    intro: 'Die Prüfung zeigt, ob Ihr Fahrzeug in Gruppe 4 fällt; darunter steht, in welchen Städten auch Grün nicht genügt.',
    resume: (h) => {
      const { nA, spaet } = D(h);
      return `Die grüne Plakette steht für die Schadstoffgruppe 4, die beste der vier Gruppen der 35. BImSchV. Sie bekommen alle Benziner und Gasfahrzeuge mit geregeltem Katalysator ab Euro 1, alle Diesel ab Euro 4, Diesel der Norm Euro 3 mit nachgerüstetem Partikelminderungssystem und alle Fahrzeuge ohne Verbrennungsmotor. Seit 2012 ist Grün in den bestehenden Umweltzonen die einzige Farbe, die noch zählt; die jüngste Zone der Liste, ${spaet.name.de}, verlangt Grün seit dem ${h.date(spaet.stufe3!)}. Mit grüner Plakette fahren Sie heute in alle ${nA} aktiven Zonen. Grün ist aber keine Generalerlaubnis: Stuttgart sperrt Diesel bis Euro 4 im ganzen Stadtgebiet und bis Euro 5 in der kleinen Umweltzone, München Diesel bis Euro 4, Darmstadt ältere Diesel und Benziner auf zwei Straßen. Diese Verbote richten sich nach der Abgasnorm, nicht nach der Plakette. Ein Diesel mit Euro 4 und grüner Plakette darf also nach Köln oder Berlin, aber nicht nach Stuttgart.`;
    },
    faqs: (h) => [
      { q: 'Bekommt ein Diesel mit Euro 3 die grüne Plakette?', a: 'Nur mit einem nachgerüsteten Partikelminderungssystem, das in den Papieren eingetragen ist. Ohne Nachrüstung bleibt ein Diesel mit Euro 3 in Gruppe 3 und bekommt die gelbe Plakette, mit der er in keine aktive Umweltzone mehr darf. Ob ein Filter für Ihr Modell angeboten wird und welche Stufe er erreicht, steht in der Bescheinigung des Herstellers oder der Werkstatt.' },
      { q: 'Reicht die grüne Plakette für Stuttgart?', a: 'Für die Umweltzone ja, für das Dieselverbot nicht immer. Seit dem 1. Januar 2019 dürfen Diesel bis Euro 4 nicht ins Stuttgarter Stadtgebiet, seit dem 1. Juli 2020 Diesel bis Euro 5 nicht in die kleine Umweltzone mit Talkessel, Bad Cannstatt, Feuerbach und Zuffenhausen. Benziner mit grüner Plakette und Diesel mit Euro 6 sind von diesen Verboten nicht betroffen.' },
      { q: 'Was bringt mir eine gelbe oder rote Plakette heute noch?', a: `Innerhalb Deutschlands praktisch nichts: Alle ${D(h).nA} aktiven Zonen verlangen Grün. Gelb und Rot sind Überbleibsel aus den ersten Stufen der Zonen, die ab 2008 eingeführt wurden. Mit einem Fahrzeug der Gruppe 2 oder 3 bleibt nur eine Ausnahme nach Anhang 3, eine Ausnahmegenehmigung der Stadt oder eine Nachrüstung, die das Fahrzeug in Gruppe 4 hebt.` },
    ],
    body: (h) => {
      const { st, mu, be } = D(h);
      return `<h2>Seit wann nur noch Grün gilt</h2>
<p>Die Zonen wurden in drei Stufen eingeführt: zuerst durften Fahrzeuge mit roter, gelber und grüner Plakette hinein, dann nur noch gelbe und grüne, zuletzt nur grüne. Berlin war bei den ersten: dort gilt Grün seit dem ${h.date(be.stufe3!)}, in Stuttgart seit dem ${h.date(st.stufe3!)}, in München seit dem ${h.date(mu.stufe3!)}. Die Daten aller Zonen stehen in der ${h.src('ubaListe', 'Liste des Umweltbundesamts')} und in unserer ${h.a('umweltzonen-deutschland', 'Übersicht der aktiven Zonen')}.</p>
<h2>Grün und trotzdem gesperrt: die Dieselverbote</h2>
<p>Die Umweltzonen wurden vor allem gegen Feinstaub eingerichtet. Gegen Stickstoffdioxid haben einige Städte später Verbote für ältere Diesel erlassen, oft nach Gerichtsurteilen. Diese Verbote haben eigene Schilder und eigene Ausnahmen. Die Stadt Stuttgart beschreibt auf ihrer ${h.src('stuttgartDiesel', 'Seite zum Diesel-Verkehrsverbot')} zwei Zonen und drei Strecken, die für die Zufahrt zu bestimmten Stadtteilen frei bleiben; ausgenommen sind dort unter anderem der geschäftsmäßige Lieferverkehr und Fahrten zu Park-and-Ride-Plätzen. In München gilt das Verbot für Diesel bis Euro 4 in der ganzen Umweltzone innerhalb des Mittleren Rings, Lieferverkehr und Anwohner sind ausgenommen (${h.src('muenchen', 'Seite der Stadt München')}). Einzelheiten stehen auf der Seite ${h.a('diesel-fahrverbot', 'Diesel-Fahrverbote')}.</p>
<h2>Grün für Elektroautos, aber nicht mehr nötig mit E-Kennzeichen</h2>
<p>Ein Elektroauto gehört zu Gruppe 4 und konnte immer eine grüne Plakette bekommen. Seit dem ${h.date(h.P.e_kennzeichen_ab)} braucht ein Fahrzeug mit E-Kennzeichen in der Umweltzone gar keine Plakette mehr. Ohne E-Kennzeichen, etwa bei manchen Hybriden, bleibt die grüne Plakette Pflicht. Mehr dazu auf der Seite ${h.a('e-auto', 'E-Auto und Umweltplakette')}.</p>`;
    },
  },
  en: {
    slug: 'green-sticker',
    nav: 'Green sticker',
    card: 'Who gets group 4, why yellow and red no longer work anywhere, where green is not enough.',
    title: 'Grüne Plakette 2026: who gets the green sticker and where',
    description: 'Grüne Plakette 2026: which petrol cars, diesels and EVs get group 4, why the green sticker covers every active German zone and where diesel bans still apply.',
    h1: 'The green sticker: who gets it and where it is enough',
    intro: 'The check shows whether your vehicle falls into group 4; below, the cities where even green is not enough.',
    resume: (h) => {
      const { nA, spaet } = D(h);
      return `The green sticker stands for emission group 4, the best of the four groups in the 35th BImSchV. It goes to every petrol or gas car with a regulated catalytic converter from Euro 1, every diesel from Euro 4, Euro 3 diesels with a retrofitted particle reduction system and every vehicle without a combustion engine. Since 2012 green has been the only colour that still counts in existing low-emission zones; the newest zone on the list, ${spaet.name.en}, has required green since ${h.date(spaet.stufe3!)}. With a green sticker you can drive into all ${nA} active zones today. Green is not a blanket permit, though: Stuttgart bans diesels up to Euro 4 across the city and up to Euro 5 in its small inner zone, Munich bans diesels up to Euro 4, and Darmstadt bans older diesels and petrol cars on two streets. Those bans follow the Euro norm, not the sticker. A Euro 4 diesel with a green sticker may therefore enter Cologne or Berlin, but not Stuttgart.`;
    },
    faqs: (h) => [
      { q: 'Does a Euro 3 diesel get the green sticker?', a: 'Only with a retrofitted particle reduction system entered in the papers. Without a retrofit a Euro 3 diesel stays in group 3 and gets the yellow sticker, which no active low-emission zone accepts any more. Whether a filter is offered for your model, and which stage it reaches, is shown on the manufacturer’s or workshop’s certificate.' },
      { q: 'Is the green sticker enough for Stuttgart?', a: 'For the low-emission zone yes, for the diesel ban not always. Since 1 January 2019 diesels up to Euro 4 may not enter the city of Stuttgart, and since 1 July 2020 diesels up to Euro 5 may not enter the small inner zone covering the basin, Bad Cannstatt, Feuerbach and Zuffenhausen. Petrol cars with a green sticker and Euro 6 diesels are not affected.' },
      { q: 'What use is a yellow or red sticker today?', a: `Within Germany, practically none: all ${D(h).nA} active zones require green. Yellow and red are left over from the first stages of the zones introduced from 2008. With a group 2 or 3 vehicle your options are an Annex 3 exemption, an exemption permit from the city, or a retrofit that lifts the vehicle into group 4.` },
    ],
    body: (h) => {
      const { st, mu, be } = D(h);
      return `<h2>Since when only green applies</h2>
<p>The zones were introduced in three stages: first vehicles with red, yellow and green stickers were allowed in, then only yellow and green, finally only green. Berlin was among the first: green has applied there since ${h.date(be.stufe3!)}, in Stuttgart since ${h.date(st.stufe3!)} and in Munich since ${h.date(mu.stufe3!)}. The dates for every zone are in the ${h.src('ubaListe', 'Federal Environment Agency list')} and in our ${h.a('umweltzonen-deutschland', 'overview of active zones')}.</p>
<h2>Green and still shut out: the diesel bans</h2>
<p>The zones were set up mainly against fine particulate matter. Against nitrogen dioxide, some cities later banned older diesels, often after court rulings. These bans have their own signs and their own exemptions. The City of Stuttgart describes two zones and three routes left open for access to certain districts on its ${h.src('stuttgartDiesel', 'diesel ban page')}; commercial deliveries and trips to park-and-ride sites are among the exemptions. In Munich the ban covers diesels up to Euro 4 throughout the zone inside the Mittlerer Ring, with deliveries and residents exempt (${h.src('muenchen', 'City of Munich page')}). Details are on the ${h.a('diesel-fahrverbot', 'diesel bans')} page.</p>
<h2>Green for electric cars, but no longer needed with an e-plate</h2>
<p>An electric car belongs to group 4 and could always get a green sticker. Since ${h.date(h.P.e_kennzeichen_ab)} a vehicle with an e-plate needs no sticker at all in a low-emission zone. Without an e-plate, as with some hybrids, the green sticker is still required. More on the ${h.a('e-auto', 'electric cars and the sticker')} page.</p>`;
    },
  },
});

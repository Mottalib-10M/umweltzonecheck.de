import { defineGuide, type Helpers } from '../../lib/guide-types';

/** Partikelfilter nachrüsten : wie ein Diesel eine Gruppe aufsteigt (Anhang 2 Abs. 1). */
function D(h: Helpers) {
  const g = (n: 1 | 2 | 3, pms: boolean) => h.M.plakette({ kraftstoff: 'diesel', modus: 'norm', norm: n, pms, ez: '2003-01-01', klasse: 'pkw' }).gruppe;
  return { g };
}

export default defineGuide({
  id: 'partikelfilter',
  group: 'plakette',
  order: 5,
  tool: 'plakette',
  preset: { k: 'diesel', n: '3' },
  related: ['umweltplakette', 'schluesselnummer', 'gruene-plakette', 'diesel-fahrverbot', 'wohnmobil', 'lkw-busse'],
  sources: ['anhang2', 'bmuv', 'p5', 'berlin'],
  de: {
    slug: 'partikelfilter-nachruesten',
    nav: 'Partikelfilter',
    card: 'Wann ein nachgerüsteter Filter einen alten Diesel von Gelb auf Grün hebt, und wann nicht.',
    title: 'Partikelfilter nachrüsten 2026: von Gelb auf Grün?',
    description: 'Partikelfilter nachrüsten 2026: wann ein Partikelminderungssystem einen Diesel Euro 1 bis 3 eine Gruppe hebt, was in die Papiere muss. Mit Dieselverboten.',
    h1: 'Partikelfilter nachrüsten: wann Gelb zu Grün wird',
    intro: 'Stellen Sie in der Prüfung die Norm Ihres Diesels ein und schalten Sie den Partikelfilter ein: die Farbe springt um eine Stufe.',
    resume: (h) => {
      const { g } = D(h);
      return `Ein nachgerüstetes Partikelminderungssystem hebt einen älteren Diesel nach der 35. BImSchV um eine Schadstoffgruppe. Die vereinfachte Tabelle des Bundesumweltministeriums zeigt die Wirkung: Ein Diesel mit Euro 3 steigt mit System von Gruppe ${g(3, false)} auf Gruppe ${g(3, true)}, also von Gelb auf Grün; ein Diesel mit Euro 2 von Gruppe ${g(2, false)} auf ${g(2, true)}, von Rot auf Gelb; ein Diesel mit Euro 1 von Gruppe ${g(1, false)} ohne Plakette auf Gruppe ${g(1, true)}, Rot. Weil heute alle aktiven Umweltzonen Grün verlangen, lohnt die Nachrüstung für die Zonen nur bei einem Diesel mit Euro 3; bei Euro 2 oder Euro 1 bleibt das Fahrzeug trotz Filter draußen. Anhang 2 der Verordnung unterscheidet dabei Stufen der Partikelminderung, die in der Straßenverkehrs-Zulassungs-Ordnung festgelegt sind, und macht für einige Fahrzeugklassen Einschränkungen. Wirksam wird der Aufstieg erst, wenn die Zulassungsstelle die neue Schlüsselnummer in die Papiere eingetragen hat. Und Dieselverbote wie in Stuttgart oder München richten sich nach der Abgasnorm: Ein Euro-3-Diesel mit Filter darf dort trotz grüner Plakette nicht hinein.`;
    },
    faqs: () => [
      { q: 'Wird ein Euro-3-Diesel mit nachgerüstetem Filter in Stuttgart zugelassen?', a: 'In die Umweltzone ja, wegen des Dieselverbots aber nicht. Das Verbot in Stuttgart gilt für Diesel bis Euro 4 im ganzen Stadtgebiet und richtet sich nach der Abgasnorm, nicht nach der Plakette. Ein Euro-3-Diesel bleibt auch mit Filter und grüner Plakette ein Euro-3-Diesel. Ähnliches gilt in München für Diesel bis Euro 4, mit Ausnahmen für Lieferverkehr und Anwohner.' },
      { q: 'Muss der Filter in die Zulassungsbescheinigung eingetragen werden?', a: 'Ja. Die Werkstatt stellt nach dem Einbau eine Bescheinigung aus, mit der die Zulassungsstelle die neue emissionsbezogene Schlüsselnummer in die Zulassungsbescheinigung Teil I einträgt. Erst diese Nummer weist nach § 5 der Verordnung die neue Gruppe nach. Ohne Eintrag gibt keine Ausgabestelle die höhere Plakette aus, auch wenn der Filter schon eingebaut ist.' },
      { q: 'Lohnt sich eine Nachrüstung bei einem Diesel mit Euro 2?', a: 'Für die Umweltzonen kaum. Mit Filter steigt ein Euro-2-Diesel von Rot auf Gelb, und Gelb lässt heute keine aktive Zone mehr hinein. Sinnvoll ist die Nachrüstung dann nur aus anderen Gründen, etwa wegen der Kfz-Steuer oder weil das Fahrzeug außerhalb der Zonen genutzt wird. Für die Zone bleiben eine Ausnahme nach Anhang 3 oder eine Ausnahmegenehmigung der Stadt.' },
    ],
    body: (h) => {
      const { g } = D(h);
      const f = (x: number) => (x === 4 ? 'Grün' : x === 3 ? 'Gelb' : x === 2 ? 'Rot' : 'keine');
      return `<h2>Vorher und nachher</h2>
${h.table(['Diesel', 'ohne System', 'mit System'], [
  ['Euro 1', f(g(1, false)), f(g(1, true))],
  ['Euro 2', f(g(2, false)), f(g(2, true))],
  ['Euro 3', f(g(3, false)), f(g(3, true))],
], `Nach der Tabelle des ${h.src('bmuv', 'Bundesumweltministeriums')} zu ${h.src('anhang2', 'Anhang 2')}`)}
<h2>Die Stufen der Partikelminderung</h2>
<p>Anhang 2 verweist für die Nachrüstung auf Anlagen der Straßenverkehrs-Zulassungs-Ordnung, die mehrere Stufen der Minderung festlegen (unter anderem PM 1 bis PM 5 der Anlage XXVI, eigene Stufen der Anlage XIV für leichte Nutzfahrzeuge). Welche Stufe ein System erreicht, steht auf der Bescheinigung. Für bestimmte Fahrzeuge, etwa leichte Nutzfahrzeuge einer niedrigen Massenklasse, macht der Anhang Ausnahmen; ob das für Ihr Fahrzeug gilt, sagt Ihnen die Werkstatt mit der Bescheinigung des Herstellers.</p>
<h2>Was die Nachrüstung nicht ändert</h2>
<p>Die Abgasnorm bleibt, wie sie war: Die Plakette ändert sich, Feld 14 nicht unbedingt. Für die ${h.a('diesel-fahrverbot', 'Dieselverbote')} zählt die Norm. Die Senatsverwaltung Berlin führt die Nachrüstung auf ihrer ${h.src('berlin', 'Seite zur Umweltzone')} als eigenen Punkt; in Berlin genügt dann die grüne Plakette, weil die Stadt kein Dieselverbot erlassen hat. Wer einen Diesel mit Euro 3 nachrüsten lässt, hat damit für Berlin, Köln, Leipzig oder das Ruhrgebiet eine Lösung, für Stuttgart und München nicht.</p>`;
    },
  },
  en: {
    slug: 'diesel-particle-filter-retrofit',
    nav: 'Particle filter',
    card: 'When a retrofitted filter lifts an old diesel from yellow to green, and when it does not.',
    title: 'Particle filter retrofit 2026: from yellow to green?',
    description: 'Particle filter retrofit 2026: when a particle reduction system lifts a Euro 1 to 3 diesel one group, what goes into the papers and why diesel bans remain.',
    h1: 'Retrofitting a particle filter: when yellow turns green',
    intro: 'Set your diesel’s Euro norm in the check and switch on the particle filter: the colour moves up one step.',
    resume: (h) => {
      const { g } = D(h);
      return `A retrofitted particle reduction system lifts an older diesel by one emission group under the 35th BImSchV. The Federal Environment Ministry’s simplified table shows the effect: a Euro 3 diesel moves from group ${g(3, false)} to group ${g(3, true)} with a system, from yellow to green; a Euro 2 diesel from group ${g(2, false)} to ${g(2, true)}, from red to yellow; a Euro 1 diesel from group ${g(1, false)}, no sticker, to group ${g(1, true)}, red. Because every active zone now requires green, retrofitting only helps with the zones for a Euro 3 diesel; at Euro 2 or Euro 1 the vehicle stays out even with a filter. Annex 2 of the ordinance distinguishes stages of particle reduction laid down in the Road Vehicle Licensing Regulations and sets restrictions for some vehicle classes. The upgrade only takes effect once the registration office has entered the new key number in the papers. And diesel bans such as those in Stuttgart or Munich follow the Euro norm: a Euro 3 diesel with a filter still may not enter there, green sticker or not.`;
    },
    faqs: () => [
      { q: 'Is a Euro 3 diesel with a retrofitted filter allowed in Stuttgart?', a: 'Into the low-emission zone yes, but not past the diesel ban. Stuttgart’s ban covers diesels up to Euro 4 across the city and follows the Euro norm, not the sticker. A Euro 3 diesel remains a Euro 3 diesel with a filter and a green sticker. Munich is similar for diesels up to Euro 4, with exemptions for deliveries and residents.' },
      { q: 'Does the filter have to be entered in the registration certificate?', a: 'Yes. After fitting, the garage issues a certificate, and the registration office uses it to enter the new emission key number in registration certificate part I. Only that number proves the new group under section 5 of the ordinance. Without the entry, no issuing office will hand out the higher sticker, even if the filter is already fitted.' },
      { q: 'Is retrofitting worthwhile on a Euro 2 diesel?', a: 'Hardly, as far as the zones go. With a filter a Euro 2 diesel moves from red to yellow, and no active zone accepts yellow today. Retrofitting then only makes sense for other reasons, such as vehicle tax or use outside the zones. For the zone itself, the options are an Annex 3 exemption or an exemption permit from the city.' },
    ],
    body: (h) => {
      const { g } = D(h);
      const f = (x: number) => (x === 4 ? 'green' : x === 3 ? 'yellow' : x === 2 ? 'red' : 'none');
      return `<h2>Before and after</h2>
${h.table(['Diesel', 'without system', 'with system'], [
  ['Euro 1', f(g(1, false)), f(g(1, true))],
  ['Euro 2', f(g(2, false)), f(g(2, true))],
  ['Euro 3', f(g(3, false)), f(g(3, true))],
], `From the ${h.src('bmuv', 'Federal Environment Ministry')} table for ${h.src('anhang2', 'Annex 2')}`)}
<h2>The particle reduction stages</h2>
<p>For retrofits, Annex 2 refers to annexes of the Road Vehicle Licensing Regulations that set several reduction stages (among them PM 1 to PM 5 in Annex XXVI, and separate stages in Annex XIV for light commercial vehicles). The certificate states which stage a system reaches. For certain vehicles, such as light commercial vehicles in a low mass class, the annex makes exceptions; whether that applies to yours, the garage can tell you from the manufacturer’s certificate.</p>
<h2>What the retrofit does not change</h2>
<p>The Euro norm stays as it was: the sticker changes, field 14 not necessarily. The ${h.a('diesel-fahrverbot', 'diesel bans')} go by the norm. The Berlin Senate Department lists retrofitting as a separate topic on its ${h.src('berlin', 'low-emission zone page')}; in Berlin the green sticker is then enough, because the city has no diesel ban. A Euro 3 diesel with a retrofit is therefore a solution for Berlin, Cologne, Leipzig or the Ruhr area, but not for Stuttgart or Munich.</p>`;
    },
  },
});

import { defineGuide, type Helpers } from '../../lib/guide-types';

/** Umweltplakette : welche Farbe für welches Fahrzeug (Anhang 2 der 35. BImSchV). */
function D(h: Helpers) {
  const p = (k: 'diesel' | 'benzin', norm: 0 | 1 | 2 | 3 | 4 | 5 | 6, pms = false) => h.M.plakette({ kraftstoff: k, modus: 'norm', norm, pms, ez: '2005-01-01', klasse: 'pkw' }).gruppe;
  return { p, nA: h.M.AKTIV.length };
}

export default defineGuide({
  id: 'umweltplakette',
  group: 'plakette',
  order: 1,
  tool: 'plakette',
  preset: { k: 'diesel', n: '4' },
  related: ['gruene-plakette', 'feinstaubplakette', 'schluesselnummer', 'partikelfilter', 'umweltzonen-deutschland', 'bussgeld'],
  sources: ['anhang2', 'bmuv', 'p3', 'p5', 'uba'],
  de: {
    slug: 'umweltplakette',
    nav: 'Welche Plakette?',
    card: 'Kraftstoff und Abgasnorm eingeben: die Farbe der Plakette nach der 35. BImSchV.',
    title: 'Umweltplakette 2026: welche Farbe bekommt mein Auto?',
    description: 'Umweltplakette 2026: Kraftstoff und Euro-Norm eingeben und sehen, ob Ihr Auto die grüne, gelbe, rote oder keine Plakette bekommt, nach Anhang 2 der 35. BImSchV.',
    h1: 'Welche Umweltplakette bekommt mein Auto?',
    intro: 'Kraftstoff, Abgasnorm und bei älteren Dieseln den Partikelfilter angeben: die Prüfung nennt die Schadstoffgruppe und die Farbe.',
    resume: (h) => {
      const { nA } = D(h);
      return `Die Umweltplakette zeigt die Schadstoffgruppe eines Fahrzeugs nach der Kennzeichnungsverordnung, der 35. BImSchV. Es gibt vier Gruppen und drei Farben: Gruppe 2 bekommt die rote, Gruppe 3 die gelbe und Gruppe 4 die grüne Plakette, Gruppe 1 bekommt keine. Welche Gruppe ein Auto hat, hängt vom Motor und von der Abgasnorm ab. Benziner und Gasfahrzeuge mit geregeltem Katalysator ab Euro 1 sind immer Gruppe 4, also grün. Bei Dieseln entscheidet die Norm: ab Euro 4 grün, Euro 3 gelb, Euro 2 rot, darunter keine Plakette; ein nachgerüsteter Partikelfilter hebt ein älteres Fahrzeug um eine Gruppe. Elektroautos gehören ebenfalls zu Gruppe 4. Praktisch zählt heute nur Grün: In allen ${nA} Umweltzonen, die das Umweltbundesamt aktuell führt, dürfen seit Jahren nur noch Fahrzeuge mit grüner Plakette fahren, und eine Plakette gilt in jeder Zone in ganz Deutschland, nicht nur in der Stadt, in der Sie sie gekauft haben.`;
    },
    faqs: (h) => [
      { q: 'Woran erkenne ich in den Papieren, welche Umweltplakette mein Auto bekommt?', a: 'In der Zulassungsbescheinigung Teil I steht in Feld 14.1 die emissionsbezogene Schlüsselnummer, daneben in Feld 14 die Abgasnorm. Die Ausgabestelle liest die Schlüsselnummer und ordnet sie der Gruppe zu. Für eine erste Einschätzung reichen Kraftstoff und Euro-Norm, wie in der Prüfung oben; im Grenzfall, etwa bei nachgerüsteten Dieseln, entscheidet allein die eingetragene Schlüsselnummer.' },
      { q: 'Muss ich die Umweltplakette jedes Jahr erneuern?', a: 'Nein. Die Plakette hat kein Ablaufdatum. Eine neue brauchen Sie, wenn sich das Kennzeichen ändert, weil es auf der Plakette eingetragen ist, oder wenn die alte beschädigt wurde, denn beim Ablösen zerstört sie sich nach § 3 der Verordnung selbst. Auch nach einem Scheibentausch wird eine neue Plakette fällig. Die Stadt Leipzig nennt für ihre Zulassungsstelle eine Gebühr von 6 Euro.' },
      { q: 'Gilt eine in München gekaufte Plakette auch in Berlin?', a: `Ja. Die Plakette ist bundesweit einheitlich und gilt in jeder deutschen Umweltzone, egal wo sie ausgegeben wurde. Das Umweltbundesamt weist ausdrücklich darauf hin. Eine grüne Plakette aus München genügt deshalb in Berlin, Köln oder Leipzig. Zusätzlich können Diesel-Verkehrsverbote gelten, zum Beispiel in Stuttgart und München, die sich nach der Abgasnorm richten und nicht nach der Farbe.` },
    ],
    body: (h) => {
      const { p } = D(h);
      const f = (g: number) => (g === 4 ? 'grün' : g === 3 ? 'gelb' : g === 2 ? 'rot' : 'keine');
      return `<h2>Die Zuordnung auf einen Blick</h2>
${h.table(['Fahrzeug', 'Gruppe', 'Plakette'], [
  ['Diesel unter Euro 1', p('diesel', 0), f(p('diesel', 0))],
  ['Diesel Euro 1 mit Partikelminderungssystem', p('diesel', 1, true), f(p('diesel', 1, true))],
  ['Diesel Euro 2', p('diesel', 2), f(p('diesel', 2))],
  ['Diesel Euro 2 mit Partikelminderungssystem', p('diesel', 2, true), f(p('diesel', 2, true))],
  ['Diesel Euro 3', p('diesel', 3), f(p('diesel', 3))],
  ['Diesel Euro 3 mit Partikelminderungssystem', p('diesel', 3, true), f(p('diesel', 3, true))],
  ['Diesel ab Euro 4', p('diesel', 4), f(p('diesel', 4))],
  ['Benzin oder Gas mit geregeltem Katalysator, ab Euro 1', p('benzin', 1), f(p('benzin', 1))],
  ['Benzin ohne geregelten Katalysator', p('benzin', 0), f(p('benzin', 0))],
  ['Elektro, Brennstoffzelle', 4, 'grün'],
], `Vereinfachte Tabelle des Bundesumweltministeriums, gelesen am ${h.date(h.P.retrieved_at)}`, ['l', 'r', 'l'])}
<p>Die Tabelle fasst ${h.src('anhang2', 'Anhang 2 der 35. BImSchV')} so zusammen, wie es das ${h.src('bmuv', 'Bundesumweltministerium')} tut. Der Verordnungstext selbst zählt für jede Gruppe die einzelnen EU-Richtlinien und Stufen der Partikelminderung auf; für fast alle Autos führt er zum selben Ergebnis wie die Tabelle.</p>
<h2>Warum fast nur noch Grün zählt</h2>
<p>Rote und gelbe Plaketten gibt es weiter, aber keine aktive Zone lässt sie noch hinein. Das Umweltbundesamt schreibt, dass über 90 Prozent der Fahrzeuge die Anforderungen der grünen Plakette erfüllen. Wer heute eine rote oder gelbe Plakette bekommt, fährt also ein Fahrzeug, das in keiner Zone mehr willkommen ist, es sei denn, eine Ausnahme nach ${h.a('ausnahmegenehmigung', 'Anhang 3 oder eine Ausnahmegenehmigung')} greift. Für einen älteren Diesel lohnt deshalb der Blick auf die ${h.a('partikelfilter', 'Nachrüstung mit Partikelfilter')}.</p>
<h2>Wo und wie die Plakette angebracht wird</h2>
<p>Die Ausgabestelle trägt das Kennzeichen mit lichtechtem Stift in das Schriftfeld ein. Die Plakette kommt gut sichtbar auf die Innenseite der Windschutzscheibe; wer sie abzieht, zerstört sie. So steht es in ${h.src('p3', '§ 3 der Verordnung')}. Eine Plakette lose hinter der Scheibe oder auf einem anderen Fahrzeug gilt nicht. Wo es die Plakette gibt und was sie kostet, steht auf der Seite ${h.a('feinstaubplakette', 'Feinstaubplakette kaufen')}.</p>`;
    },
  },
  en: {
    slug: 'environmental-sticker',
    nav: 'Which sticker?',
    card: 'Enter fuel and Euro norm: the sticker colour under the 35th BImSchV.',
    title: 'Umweltplakette 2026: which sticker colour does my car get?',
    description: 'Umweltplakette 2026: enter fuel and Euro norm to see whether your car gets the green, yellow or red emissions sticker, or none, under the 35th BImSchV.',
    h1: 'Which German emissions sticker does my car get?',
    intro: 'Give the fuel, the Euro norm and, for older diesels, whether a particle filter was retrofitted: the check names the emission group and the colour.',
    resume: (h) => {
      const { nA } = D(h);
      return `The Umweltplakette, Germany’s environmental sticker, shows a vehicle’s emission group under the Labelling Ordinance, the 35th BImSchV. There are four groups and three colours: group 2 gets the red sticker, group 3 the yellow and group 4 the green, while group 1 gets none. Which group a car falls into depends on its engine and its Euro norm. Petrol and gas cars with a regulated catalytic converter from Euro 1 are always group 4, so green. For diesels the norm decides: Euro 4 and later green, Euro 3 yellow, Euro 2 red, anything older no sticker; a retrofitted particle filter lifts an older vehicle by one group. Electric cars are group 4 as well. In practice only green matters today: in all ${nA} low-emission zones currently listed by the Federal Environment Agency, only vehicles with a green sticker have been allowed for years, and a sticker is valid in every zone across Germany, not just in the city where you bought it.`;
    },
    faqs: (h) => [
      { q: 'Where in my vehicle papers can I see which sticker I get?', a: 'Registration certificate part I shows the emission key number in field 14.1 and the Euro norm in field 14. The issuing office reads the key number and assigns the group. Fuel and Euro norm, as in the check above, are enough for a first answer; in borderline cases, such as retrofitted diesels, only the key number entered in the papers decides.' },
      { q: 'Does the sticker have to be renewed every year?', a: 'No. The sticker never expires. You need a new one when the registration plate changes, because the plate number is written on it, or when the old one is damaged: section 3 of the ordinance requires it to destroy itself when removed. A new windscreen also means a new sticker. The City of Leipzig quotes a fee of 6 euros at its registration office.' },
      { q: 'Is a sticker bought in Munich valid in Berlin?', a: 'Yes. The sticker is the same nationwide and valid in every German low-emission zone, wherever it was issued, as the Federal Environment Agency points out. A green sticker from Munich is therefore enough in Berlin, Cologne or Leipzig. Diesel bans may apply on top, for example in Stuttgart and Munich; they depend on the Euro norm, not on the colour.' },
    ],
    body: (h) => {
      const { p } = D(h);
      const f = (g: number) => (g === 4 ? 'green' : g === 3 ? 'yellow' : g === 2 ? 'red' : 'none');
      return `<h2>The assignment at a glance</h2>
${h.table(['Vehicle', 'Group', 'Sticker'], [
  ['Diesel below Euro 1', p('diesel', 0), f(p('diesel', 0))],
  ['Diesel Euro 1 with particle reduction system', p('diesel', 1, true), f(p('diesel', 1, true))],
  ['Diesel Euro 2', p('diesel', 2), f(p('diesel', 2))],
  ['Diesel Euro 2 with particle reduction system', p('diesel', 2, true), f(p('diesel', 2, true))],
  ['Diesel Euro 3', p('diesel', 3), f(p('diesel', 3))],
  ['Diesel Euro 3 with particle reduction system', p('diesel', 3, true), f(p('diesel', 3, true))],
  ['Diesel Euro 4 or later', p('diesel', 4), f(p('diesel', 4))],
  ['Petrol or gas with regulated catalyst, Euro 1 or later', p('benzin', 1), f(p('benzin', 1))],
  ['Petrol without regulated catalyst', p('benzin', 0), f(p('benzin', 0))],
  ['Electric, fuel cell', 4, 'green'],
], `Federal Environment Ministry simplified table, read on ${h.date(h.P.retrieved_at)}`, ['l', 'r', 'l'])}
<p>The table sums up ${h.src('anhang2', 'Annex 2 of the 35th BImSchV')} the way the ${h.src('bmuv', 'Federal Environment Ministry')} does. The ordinance itself lists, for each group, the individual EU directives and particle reduction stages; for almost every car it leads to the same result as the table.</p>
<h2>Why almost only green counts</h2>
<p>Red and yellow stickers still exist, but no active zone lets them in any more. The Federal Environment Agency says more than 90 per cent of vehicles meet the green sticker requirements. Anyone who gets a red or yellow sticker today drives a vehicle that no zone admits, unless an ${h.a('ausnahmegenehmigung', 'Annex 3 exemption or an exemption permit')} applies. For an older diesel it is worth looking at ${h.a('partikelfilter', 'retrofitting a particle filter')}.</p>
<h2>Where and how the sticker is fitted</h2>
<p>The issuing office writes the registration number into the box with a lightfast pen. The sticker goes on the inside of the windscreen where it can be seen clearly; peeling it off destroys it. That is what ${h.src('p3', 'section 3 of the ordinance')} requires. A sticker lying loose behind the glass, or moved to another vehicle, does not count. Where to get one and what it costs is on the ${h.a('feinstaubplakette', 'buying the sticker')} page.</p>`;
    },
  },
});

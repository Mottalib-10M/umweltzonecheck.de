import { defineGuide } from '../../lib/guide-types';

/** Feinstaubplakette : Ausgabestellen nach § 4, Gebühr, was mitzubringen ist. */
export default defineGuide({
  id: 'feinstaubplakette',
  group: 'plakette',
  order: 3,
  tool: 'plakette',
  preset: { k: 'benzin', n: '2' },
  related: ['umweltplakette', 'schluesselnummer', 'auslaendische-fahrzeuge', 'gruene-plakette', 'leipzig', 'stuttgart'],
  sources: ['p4', 'p3', 'bmuv', 'leipzig', 'stuttgartPlakette'],
  de: {
    slug: 'feinstaubplakette',
    nav: 'Plakette bekommen',
    card: 'Zulassungsstelle, TÜV, DEKRA oder AU-Werkstatt: wer ausgibt, was sie kostet, was Sie brauchen.',
    title: 'Feinstaubplakette 2026: wo es sie gibt und was sie kostet',
    description: 'Feinstaubplakette 2026: Zulassungsstellen und AU-Stellen wie TÜV, DEKRA oder Werkstätten geben sie für 5 bis 10 Euro aus. Was Sie dafür mitbringen müssen.',
    h1: 'Feinstaubplakette: wo es sie gibt und was sie kostet',
    intro: 'Erst prüfen, welche Farbe Ihr Fahrzeug bekommt, dann mit den Papieren zur Ausgabestelle: eine Werbung für einen Händler gibt es hier nicht.',
    resume: (h) => `Feinstaubplakette ist ein anderes Wort für die Umweltplakette der 35. BImSchV; gemeint ist dieselbe Plakette in Rot, Gelb oder Grün. Wer sie ausgeben darf, regelt § 4 der Verordnung: die Zulassungsbehörden oder die nach Landesrecht sonst zuständigen Stellen und alle Stellen, die nach § 47a der Straßenverkehrs-Zulassungs-Ordnung Abgasuntersuchungen durchführen dürfen. Praktisch sind das die Zulassungsstelle Ihres Kreises oder Ihrer Stadt, die Prüforganisationen wie TÜV, DEKRA, GTÜ oder KÜS und viele Kfz-Werkstätten mit Anerkennung für die Abgasuntersuchung. Eine dieser Stellen müssen Sie nicht auswählen, weil wir eine empfehlen: Jede gibt dieselbe Plakette nach denselben Regeln aus. Das Bundesumweltministerium nennt eine Gebühr von ${h.eur(h.P.gebuehr.min)} bis ${h.eur(h.P.gebuehr.max)}; die Stadt Leipzig verlangt an ihrer Zulassungsstelle ${h.eur(h.P.gebuehr.leipzig)}. Mitbringen müssen Sie die Zulassungsbescheinigung Teil I, aus der die Schlüsselnummer hervorgeht. Die Ausgabestelle trägt das Kennzeichen ein, Sie kleben die Plakette innen an die Windschutzscheibe.`,
    faqs: (h) => [
      { q: 'Kann ich die Feinstaubplakette online bestellen?', a: 'Viele Zulassungsstellen und Prüforganisationen bieten eine Bestellung per Post an; Sie schicken dann eine Kopie der Zulassungsbescheinigung Teil I. Die Stadt Stuttgart etwa nimmt Bestellungen auch von Haltern aus dem Ausland per E-Mail an. Achten Sie darauf, dass die Seite zu einer Ausgabestelle nach § 4 gehört; Händler, die nur weiterverkaufen, verlangen oft deutlich mehr.' },
      { q: 'Brauche ich das Fahrzeug bei der Ausgabestelle?', a: 'Meist nicht. Für die Zuordnung reicht die Zulassungsbescheinigung Teil I mit der Schlüsselnummer. Ausnahmen sind nachgerüstete Fahrzeuge, deren Partikelminderungssystem noch nicht in den Papieren steht, und Fahrzeuge aus dem Ausland, bei denen die Stelle die Norm anhand weiterer Unterlagen prüft. Kleben müssen Sie die Plakette selbst; sie gilt nur innen an der Windschutzscheibe.' },
      { q: 'Was kostet die Plakette bei TÜV oder DEKRA im Vergleich zur Zulassungsstelle?', a: `Die Verordnung legt keinen einheitlichen Preis fest. Das Bundesumweltministerium nennt eine Spanne von ${h.eur(h.P.gebuehr.min)} bis ${h.eur(h.P.gebuehr.max)}, in der die meisten Stellen liegen; Leipzig verlangt an der Zulassungsstelle ${h.eur(h.P.gebuehr.leipzig)}. Bei einer Werkstatt kann ein Aufschlag hinzukommen. Wer einen Preis weit über dieser Spanne sieht, ist wahrscheinlich bei einem Händler und nicht bei einer Ausgabestelle.` },
    ],
    body: (h) => `<h2>Die Ausgabestellen nach § 4</h2>
${h.table(['Stelle', 'Rechtsgrundlage', 'Hinweis'], [
  ['Zulassungsbehörde (Zulassungsstelle)', '§ 4 Satz 1 der 35. BImSchV', 'auch für Fahrzeuge aus dem Ausland'],
  ['Nach Landesrecht zuständige Stelle', '§ 4 Satz 1', 'je nach Land'],
  ['Für die Abgasuntersuchung anerkannte Stellen (TÜV, DEKRA, GTÜ, KÜS, Werkstätten)', '§ 4 Satz 1 mit § 47a Abs. 2 StVZO', 'Anerkennung fragen'],
], `${h.src('p4', '§ 4 der 35. BImSchV')}, gelesen am ${h.date(h.P.retrieved_at)}`)}
<p>Wir nennen die Prüforganisationen nur, um zu zeigen, wer nach dem Gesetz ausgeben darf; wir empfehlen keine und haben mit keiner eine Verbindung.</p>
<h2>Was Sie mitbringen</h2>
<p>Die Zulassungsbescheinigung Teil I, früher Fahrzeugschein. Aus Feld 14.1 liest die Stelle die Schlüsselnummer. Steht dort eine Nummer, die ein nachgerüstetes System nicht berücksichtigt, bringen Sie die Bescheinigung über den Einbau mit. Für Fahrzeuge aus dem Ausland verlangen die Stellen oft ein Dokument mit der Abgasnorm, sonst gilt die Vermutung nach dem Datum der Erstzulassung (${h.a('auslaendische-fahrzeuge', 'Fahrzeuge aus dem Ausland')}).</p>
<h2>Was nicht stimmt</h2>
<p>Die Plakette läuft nicht ab und muss nicht jährlich gekauft werden. Sie ist an das Kennzeichen gebunden, nicht an den Halter: Beim Umzug in einen anderen Kreis mit neuem Kennzeichen wird eine neue fällig. Eine Plakette aus einer Stadt gilt in allen Zonen in Deutschland. Und: Die Stelle prüft nicht, ob Ihr Auto technisch in Ordnung ist, sondern nur, in welche Gruppe es nach den Papieren gehört. Welche Farbe herauskommt, zeigt die Prüfung oben; die Regeln stehen auf der Seite ${h.a('umweltplakette', 'Welche Plakette?')}.</p>`,
  },
  en: {
    slug: 'buy-emissions-sticker',
    nav: 'Getting the sticker',
    card: 'Registration office, TÜV, DEKRA or an approved workshop: who issues it, what it costs, what to bring.',
    title: 'Feinstaubplakette 2026: where to get it and what it costs',
    description: 'Feinstaubplakette 2026: registration offices and emission-test bodies such as TÜV, DEKRA or garages issue it for 5 to 10 euros. What to bring with you.',
    h1: 'Getting the German emissions sticker: where and for how much',
    intro: 'First check which colour your vehicle gets, then take the papers to an issuing office: this page advertises no seller.',
    resume: (h) => `Feinstaubplakette, the fine-dust sticker, is another name for the environmental sticker under the 35th BImSchV; it is the same red, yellow or green sticker. Who may issue it is set by section 4 of the ordinance: the vehicle registration authorities or any other office competent under state law, plus every body approved to carry out emission tests under section 47a of the Road Vehicle Licensing Regulations. In practice that means the registration office of your district or city, testing organisations such as TÜV, DEKRA, GTÜ or KÜS, and many garages approved for the emission test. You do not have to pick one because we recommend it: each issues the same sticker under the same rules. The Federal Environment Ministry quotes a fee of ${h.eur(h.P.gebuehr.min)} to ${h.eur(h.P.gebuehr.max)}; the City of Leipzig charges ${h.eur(h.P.gebuehr.leipzig)} at its registration office. You need to bring registration certificate part I, which shows the key number. The office writes in the plate number and you stick the sticker on the inside of the windscreen.`,
    faqs: (h) => [
      { q: 'Can I order the sticker online?', a: 'Many registration offices and testing organisations offer ordering by post; you send a copy of registration certificate part I. The City of Stuttgart, for example, also accepts e-mail orders from owners abroad. Make sure the site belongs to an issuing office under section 4; resellers who merely pass stickers on often charge considerably more.' },
      { q: 'Do I need to bring the vehicle to the issuing office?', a: 'Usually not. Registration certificate part I with the key number is enough for the assignment. Exceptions are retrofitted vehicles whose particle reduction system is not yet entered in the papers, and foreign vehicles, where the office checks the norm from other documents. You fit the sticker yourself; it only counts on the inside of the windscreen.' },
      { q: 'How does the price at TÜV or DEKRA compare with the registration office?', a: `The ordinance sets no single price. The Federal Environment Ministry quotes a range of ${h.eur(h.P.gebuehr.min)} to ${h.eur(h.P.gebuehr.max)}, which covers most offices; Leipzig charges ${h.eur(h.P.gebuehr.leipzig)} at its registration office. A garage may add a handling charge. A price far above that range usually means a reseller, not an issuing office.` },
    ],
    body: (h) => `<h2>Issuing offices under section 4</h2>
${h.table(['Office', 'Legal basis', 'Note'], [
  ['Vehicle registration authority', 'Section 4, sentence 1, 35th BImSchV', 'also for foreign vehicles'],
  ['Office competent under state law', 'Section 4, sentence 1', 'varies by state'],
  ['Bodies approved for emission tests (TÜV, DEKRA, GTÜ, KÜS, garages)', 'Section 4 with StVZO s. 47a(2)', 'ask about approval'],
], `${h.src('p4', 'Section 4 of the 35th BImSchV')}, read on ${h.date(h.P.retrieved_at)}`)}
<p>We name the testing organisations only to show who may issue stickers under the law; we recommend none and have no link with any of them.</p>
<h2>What to bring</h2>
<p>Registration certificate part I, formerly the Fahrzeugschein. The office reads the key number from field 14.1. If that number does not reflect a retrofitted system, bring the fitting certificate. For foreign vehicles offices often ask for a document showing the Euro norm; otherwise the presumption based on the first registration date applies (${h.a('auslaendische-fahrzeuge', 'foreign vehicles')}).</p>
<h2>Common misconceptions</h2>
<p>The sticker does not expire and is not an annual purchase. It is tied to the plate, not the owner: moving to another district with a new plate means a new sticker. A sticker from one city is valid in every zone in Germany. And the office does not test whether your car is roadworthy, only which group it belongs to according to its papers. The check above shows which colour you get; the rules are on the ${h.a('umweltplakette', 'which sticker?')} page.</p>`,
  },
});

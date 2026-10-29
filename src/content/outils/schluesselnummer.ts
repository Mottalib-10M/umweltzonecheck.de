import { defineGuide } from '../../lib/guide-types';

/** Schlüsselnummer : Feld 14.1 der Zulassungsbescheinigung, § 5 der 35. BImSchV. */
export default defineGuide({
  id: 'schluesselnummer',
  group: 'plakette',
  order: 4,
  tool: 'plakette',
  preset: { k: 'diesel', n: '5' },
  related: ['umweltplakette', 'feinstaubplakette', 'partikelfilter', 'auslaendische-fahrzeuge', 'gruene-plakette', 'stuttgart'],
  sources: ['p5', 'anhang2', 'stuttgartPlakette', 'uba'],
  de: {
    slug: 'schluesselnummer-umweltplakette',
    nav: 'Schlüsselnummer',
    card: 'Feld 14.1 der Zulassungsbescheinigung: was die Emissionsschlüsselnummer über die Plakette sagt.',
    title: 'Schlüsselnummer Umweltplakette: Feld 14.1 richtig lesen',
    description: 'Schlüsselnummer und Umweltplakette: wo die Emissionsschlüsselnummer in der Zulassungsbescheinigung steht, warum sie entscheidet und was tun, wenn sie fehlt.',
    h1: 'Die Schlüsselnummer: was Feld 14.1 über Ihre Plakette sagt',
    intro: 'Abgasnorm und Kraftstoff stehen neben der Schlüsselnummer in den Papieren: damit gibt die Prüfung eine erste Antwort, die Nummer selbst liest die Ausgabestelle.',
    resume: () => `Für ein in Deutschland zugelassenes Fahrzeug wird die Schadstoffgruppe nicht nach dem Baujahr bestimmt, sondern nach der emissionsbezogenen Schlüsselnummer. So steht es in § 5 der 35. BImSchV: Die Zuordnung wird durch die in der Zulassungsbescheinigung Teil I, im alten Fahrzeugschein oder im Fahrzeugbrief eingetragene Schlüsselnummer nachgewiesen. In der heutigen Zulassungsbescheinigung steht sie in Feld 14.1, die Abgasnorm als Text in Feld 14. Das Bundesverkehrsministerium macht im Verkehrsblatt bekannt, welche Nummer zu welcher Gruppe gehört. Eine vollständige amtliche Tabelle, die jeder frei lesen kann, haben wir bei den Bundesstellen nicht gefunden; deshalb fragt unsere Prüfung nach Kraftstoff und Abgasnorm, die in denselben Papieren stehen und für fast alle Fahrzeuge zum selben Ergebnis führen. Im Zweifel, etwa bei Sonderfällen oder Nachrüstungen, gilt allein die Nummer, die die Ausgabestelle aus Ihren Papieren liest. Für schwere Nutzfahrzeuge im Mautsystem reichen auch die Nachweise der Lkw-Maut-Verordnung.`,
    faqs: () => [
      { q: 'Wo genau steht die Schlüsselnummer in der Zulassungsbescheinigung?', a: 'In der Zulassungsbescheinigung Teil I, dem kleinen Fahrzeugschein, in Feld 14.1. Darüber steht in Feld 14 die Bezeichnung der Abgasnorm, etwa „EURO 6“ oder eine Richtlinie mit Jahreszahl. In älteren Fahrzeugscheinen vor 2005 hieß die Stelle „Schlüsselnummer zu 1“ und stand im Bereich der Angaben zum Fahrzeug. Die Ausgabestelle der Plakette braucht genau diese Zahl.' },
      { q: 'Was bedeuten die Schlüsselnummern 01, 02 und 77 bei Benzinern?', a: 'Die Stadt Stuttgart nennt sie als Sonderfall: ältere Benziner mit US-Katalysator, deren Schlüsselnummer auf 01, 02 oder 77 endet, bekommen ebenfalls die grüne Plakette. Solche Fahrzeuge haben formal keine Euro-Norm, erfüllen aber gleichwertige Anforderungen. Wer ein solches Auto fährt, lässt die Zuordnung am besten direkt bei der Zulassungsstelle oder einer Prüfstelle bestätigen.' },
      { q: 'Meine Schlüsselnummer passt nicht zum nachgerüsteten Filter. Was tun?', a: 'Nach einer Nachrüstung mit Partikelminderungssystem muss die neue Schlüsselnummer in die Papiere eingetragen werden; das erledigt die Zulassungsstelle mit der Einbaubescheinigung der Werkstatt. Erst danach gibt eine Ausgabestelle die höhere Plakette aus. Mit der alten Nummer bleibt das Fahrzeug in seiner alten Gruppe, auch wenn der Filter technisch schon wirkt.' },
    ],
    body: (h) => `<h2>Warum die Nummer und nicht das Baujahr</h2>
<p>Zwei Autos desselben Jahrgangs können verschiedene Gruppen haben: eines wurde schon nach einer neueren Norm genehmigt, das andere hat einen nachgerüsteten Filter, ein drittes erfüllt eine ältere Norm. Das Baujahr sagt darüber nichts Verlässliches. Die Schlüsselnummer dagegen steht für die konkrete Genehmigung. Deshalb verlangt ${h.src('p5', '§ 5 der 35. BImSchV')} sie als Nachweis, und deshalb ist die Prüfung nach Datum auf dieser Seite nur für Fahrzeuge aus dem Ausland gedacht.</p>
<h2>So nutzen Sie die Prüfung oben</h2>
<ol><li>Feld 14 lesen: Dort steht die Norm, etwa „EURO 4“ oder „EURO 5“. Diese wählen Sie in der Prüfung.</li><li>Kraftstoff in Feld P.3 lesen: Benzin, Diesel, Gas oder Elektro.</li><li>Steht in den Papieren ein Partikelminderungssystem, setzen Sie bei einem Diesel bis Euro 3 den Schalter auf „Ja“.</li><li>Das Ergebnis vergleichen Sie mit der Plakette, die die Ausgabestelle aus der Nummer ableitet; weichen beide ab, gilt die Ausgabestelle.</li></ol>
<h2>Die Grenzen dieser Seite</h2>
<p>Wir geben bewusst keine Liste der Schlüsselnummern wieder: Die amtliche Zuordnung erscheint im Verkehrsblatt, das wir nicht vollständig frei einsehen konnten, und eine ungeprüfte Liste aus anderer Quelle wollen wir nicht als amtlich ausgeben. Diese Grenze steht auch in der ${h.a('method', 'Methode')}. Für die Farbe der Plakette selbst finden Sie die Regeln auf der Seite ${h.a('umweltplakette', 'Welche Plakette?')}, für die Nachrüstung auf der Seite ${h.a('partikelfilter', 'Partikelfilter nachrüsten')}.</p>`,
  },
  en: {
    slug: 'emission-key-number',
    nav: 'Key number',
    card: 'Field 14.1 of the registration certificate: what the emission key number says about your sticker.',
    title: 'Emission key number: reading field 14.1 for your sticker',
    description: 'Emission key number and the German sticker: where field 14.1 sits in the registration certificate, why it decides the group, and what to do if it is missing.',
    h1: 'The emission key number: what field 14.1 says about your sticker',
    intro: 'The Euro norm and fuel sit next to the key number in the papers: the check gives a first answer from them, and the issuing office reads the number itself.',
    resume: () => `For a vehicle registered in Germany the emission group is not set by the year of manufacture but by the emission key number. Section 5 of the 35th BImSchV says so: the group is proven by the key number entered in registration certificate part I, the old Fahrzeugschein or the Fahrzeugbrief. In today’s registration certificate it sits in field 14.1, with the Euro norm written out in field 14. The Federal Transport Ministry publishes in the Verkehrsblatt which number belongs to which group. We found no complete official table at federal level that anyone can read freely, so our check asks for fuel and Euro norm, which appear in the same papers and lead to the same result for almost every vehicle. In case of doubt, such as special cases or retrofits, only the number the issuing office reads from your papers counts. For heavy goods vehicles in the toll system, the proofs under the truck toll ordinance are also accepted.`,
    faqs: () => [
      { q: 'Where exactly is the key number on the registration certificate?', a: 'On registration certificate part I, the small vehicle document, in field 14.1. Field 14 above it gives the name of the emission standard, such as “EURO 6” or a directive with a year. In old vehicle documents from before 2005 the entry was called “Schlüsselnummer zu 1” and sat among the vehicle details. The sticker issuing office needs exactly this figure.' },
      { q: 'What do key numbers ending 01, 02 and 77 mean for petrol cars?', a: 'The City of Stuttgart lists them as a special case: older petrol cars with a US catalytic converter whose key number ends in 01, 02 or 77 also get the green sticker. Such cars formally have no Euro norm but meet equivalent requirements. If you drive one, have the assignment confirmed directly at the registration office or a testing body.' },
      { q: 'My key number does not reflect the retrofitted filter. What now?', a: 'After retrofitting a particle reduction system the new key number must be entered in the papers; the registration office does this using the garage’s fitting certificate. Only then will an issuing office hand out the higher sticker. With the old number the vehicle stays in its old group, even if the filter already works technically.' },
    ],
    body: (h) => `<h2>Why the number and not the year</h2>
<p>Two cars from the same year can be in different groups: one was approved to a newer norm, another has a retrofitted filter, a third meets an older norm. The year says nothing reliable about that. The key number, by contrast, stands for the specific type approval. That is why ${h.src('p5', 'section 5 of the 35th BImSchV')} requires it as proof, and why the date-based check on this site is only meant for foreign vehicles.</p>
<h2>How to use the check above</h2>
<ol><li>Read field 14: it shows the norm, such as “EURO 4” or “EURO 5”. Pick that in the check.</li><li>Read the fuel in field P.3: petrol, diesel, gas or electric.</li><li>If the papers mention a particle reduction system on a diesel up to Euro 3, set the switch to “Yes”.</li><li>Compare the result with the sticker the issuing office derives from the number; if they differ, the issuing office is right.</li></ol>
<h2>The limits of this page</h2>
<p>We deliberately reproduce no list of key numbers: the official assignment appears in the Verkehrsblatt, which we could not consult in full, and we will not pass off an unchecked third-party list as official. This limit is also stated in the ${h.a('method', 'method')}. The rules for the sticker colour are on the ${h.a('umweltplakette', 'which sticker?')} page, and retrofits are covered on the ${h.a('partikelfilter', 'particle filter retrofit')} page.</p>`,
  },
});

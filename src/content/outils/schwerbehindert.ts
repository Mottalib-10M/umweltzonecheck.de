import { defineGuide } from '../../lib/guide-types';

/** Schwerbehinderung : Anhang 3 Nr. 6, Merkzeichen aG, H, Bl nach § 3 Abs. 1 Nr. 1 bis 3 SchwbAwV. */
export default defineGuide({
  id: 'schwerbehindert',
  group: 'regeln',
  order: 5,
  tool: 'ausnahme',
  preset: { fall: 'schwerbehindert' },
  related: ['ausnahmegenehmigung', 'bussgeld', 'oldtimer', 'motorrad', 'gruene-plakette', 'muenchen'],
  sources: ['anhang3', 'bimschv35', 'muenchen'],
  de: {
    slug: 'schwerbehinderung-umweltzone',
    nav: 'Schwerbehinderung',
    card: 'Merkzeichen aG, H oder Bl: Das Fahrzeug darf ohne Plakette in die Zone, wer auch immer fährt.',
    title: 'Schwerbehinderung Umweltzone 2026: aG, H und Bl befreit',
    description: 'Umweltzone mit Schwerbehinderung 2026: Fahrzeuge, in denen Menschen mit den Merkzeichen aG, H oder Bl fahren, sind ohne Plakette befreit (Anhang 3 Nr. 6).',
    h1: 'Umweltzone mit Schwerbehindertenausweis',
    intro: 'Wählen Sie „Merkzeichen aG, H oder Bl“: Die Prüfung zeigt die Befreiung; für andere Merkzeichen wählen Sie Ihr Fahrzeug.',
    resume: () => `Für Menschen mit bestimmten Merkzeichen im Schwerbehindertenausweis gibt es eine allgemeine Ausnahme von der Plakettenpflicht. Anhang 3 Nummer 6 der 35. BImSchV befreit Kraftfahrzeuge, mit denen Personen fahren oder gefahren werden, die außergewöhnlich gehbehindert, hilflos oder blind sind und dies durch die Merkzeichen aG, H oder Bl in ihrem Ausweis nachweisen. Die Ausnahme hängt also an der Person, nicht am Fahrzeug: Es kann das eigene Auto sein, das eines Angehörigen oder ein Mietwagen, solange die berechtigte Person mitfährt oder selbst fährt. Fährt das Auto ohne sie, etwa um sie abzuholen, gilt die Ausnahme dem Wortlaut nach nicht; dafür bleibt nur eine Einzelgenehmigung der Stadt. Andere Merkzeichen wie G (erheblich gehbehindert) oder ein Grad der Behinderung ohne Merkzeichen genügen nicht. Einen Antrag braucht es nicht, und eine Plakette auch nicht; die Verordnung verlangt nur, dass die Merkzeichen nachgewiesen werden. Wie dieser Nachweis bei einer Kontrolle zu führen ist, regelt der Text nicht; sicher ist, den Ausweis bei jeder Fahrt mitzuführen.`,
    faqs: () => [
      { q: 'Reicht das Merkzeichen G für die Ausnahme?', a: 'Nein. Anhang 3 Nr. 6 nennt nur die Merkzeichen aG (außergewöhnlich gehbehindert), H (hilflos) und Bl (blind). Das Merkzeichen G für eine erhebliche Beeinträchtigung der Bewegungsfähigkeit ist nicht aufgeführt, ebenso wenig B oder Gl. Wer nur G hat, braucht eine grüne Plakette oder kann bei seiner Stadt eine Einzelgenehmigung nach § 1 Abs. 2 beantragen.' },
      { q: 'Muss ich den blauen Parkausweis ins Auto legen?', a: 'Der blaue EU-Parkausweis betrifft das Parken auf Behindertenparkplätzen und ist von der Umweltzone unabhängig. Die Ausnahme der 35. BImSchV knüpft an die Merkzeichen im Schwerbehindertenausweis an. Wer beides besitzt, legt den Parkausweis zum Parken aus und führt den Schwerbehindertenausweis mit, damit die Merkzeichen bei einer Kontrolle der Zone belegt werden können.' },
      { q: 'Gilt die Ausnahme auch für einen Fahrdienst oder ein Taxi?', a: 'Ja, wenn die berechtigte Person im Fahrzeug sitzt. Der Wortlaut stellt auf Kraftfahrzeuge ab, mit denen die Person gefahren wird, nicht auf den Halter. Ein Fahrdienst darf sie also ohne Plakette in die Zone bringen. Auf der Rückfahrt ohne Fahrgast gilt die Ausnahme dagegen nicht; für Taxis spielt das kaum eine Rolle, weil sie in der Regel Grün haben.' },
    ],
    body: (h) => `<h2>Welche Merkzeichen befreien</h2>
${h.table(['Merkzeichen', 'Bedeutung', 'Befreit?'], [
  ['aG', 'außergewöhnlich gehbehindert', 'ja'],
  ['H', 'hilflos', 'ja'],
  ['Bl', 'blind', 'ja'],
  ['G', 'erheblich beeinträchtigt in der Bewegungsfähigkeit', 'nein'],
  ['B, Gl, TBl, RF', 'Begleitung, gehörlos, taubblind, Rundfunk', 'nein'],
], `${h.src('anhang3', 'Anhang 3 Nr. 6 der 35. BImSchV')}`)}
<h2>Wenn die berechtigte Person nicht mitfährt</h2>
<p>Fahrten ohne die berechtigte Person, etwa zum Abholen oder für Besorgungen, fallen nicht unter Nummer 6. Für solche Fahrten bleibt die Einzelgenehmigung nach ${h.src('bimschv35', '§ 1 Abs. 2')}. Ob und zu welchen Bedingungen die Stadt sie erteilt, entscheidet sie selbst; die ${h.a('ausnahmegenehmigung', 'Seite zur Ausnahmegenehmigung')} beschreibt das Verfahren.</p>
<h2>Dieselverbote</h2>
<p>Die Ausnahme nach Anhang 3 gilt für die Umweltzone. Für die Dieselverbote in Stuttgart und ${h.a('muenchen', 'München')} haben die Städte eigene Ausnahmen festgelegt; ob Menschen mit Schwerbehinderung darunter fallen, steht auf den Seiten der Städte, etwa bei der ${h.src('muenchen', 'Landeshauptstadt München')}.</p>`,
  },
  en: {
    slug: 'disabled-drivers',
    nav: 'Disabled drivers',
    card: 'Disability marks aG, H or Bl: the vehicle may enter without a sticker, whoever drives.',
    title: 'Disabled drivers and the Umweltzone 2026: aG, H, Bl exempt',
    description: 'Disabled drivers and German low-emission zones 2026: vehicles carrying people with the marks aG, H or Bl are exempt from the sticker under Annex 3 no. 6.',
    h1: 'Low-emission zones with a severe-disability card',
    intro: 'Choose “Disability marks aG, H or Bl”: the check shows the exemption; for other marks, choose your vehicle instead.',
    resume: () => `People with certain marks in their German severe-disability card benefit from a general exemption from the sticker. Annex 3 number 6 of the 35th BImSchV exempts motor vehicles driven by, or carrying, people who are exceptionally walking-impaired, helpless or blind and who prove this with the marks aG, H or Bl in their card. The exemption therefore attaches to the person, not the vehicle: it can be your own car, a relative’s or a rental, as long as the entitled person drives or rides along. If the car travels without them, for example to pick them up, the exemption does not apply on the wording; only an individual permit from the city covers such trips. Other marks such as G (significantly walking-impaired), or a degree of disability without a mark, are not enough. No application is needed and no sticker either; the ordinance only requires the marks to be proven. The text does not say how that proof must be given in a check; the safe course is to carry the card on every trip.`,
    faqs: () => [
      { q: 'Is the mark G enough for the exemption?', a: 'No. Annex 3 no. 6 only lists the marks aG (exceptionally walking-impaired), H (helpless) and Bl (blind). The mark G for a significant impairment of mobility is not included, nor are B or Gl. If you only have G, you need a green sticker or can apply to your city for an individual permit under section 1(2).' },
      { q: 'Do I have to display the blue parking card?', a: 'The blue EU parking card concerns parking in disabled bays and is separate from the low-emission zone. The 35th BImSchV exemption is tied to the marks in the severe-disability card. If you hold both, display the parking card when parking and carry the disability card so the marks can be shown in a zone check.' },
      { q: 'Does the exemption cover a transport service or taxi?', a: 'Yes, as long as the entitled person is in the vehicle. The wording refers to vehicles in which the person is carried, not to the keeper. A transport service may therefore take them into the zone without a sticker. On the empty return trip the exemption does not apply; for taxis this hardly matters, since they usually have green.' },
    ],
    body: (h) => `<h2>Which marks exempt you</h2>
${h.table(['Mark', 'Meaning', 'Exempt?'], [
  ['aG', 'exceptionally walking-impaired', 'yes'],
  ['H', 'helpless', 'yes'],
  ['Bl', 'blind', 'yes'],
  ['G', 'significantly impaired mobility', 'no'],
  ['B, Gl, TBl, RF', 'companion, deaf, deafblind, broadcasting fee', 'no'],
], `${h.src('anhang3', 'Annex 3 no. 6 of the 35th BImSchV')}`)}
<h2>When the entitled person is not on board</h2>
<p>Trips without the entitled person, for example to pick them up or run errands, are not covered by number 6. For those there is the individual permit under ${h.src('bimschv35', 'section 1(2)')}. Whether and on what terms the city grants it is up to the city; the ${h.a('ausnahmegenehmigung', 'exemption permit page')} describes the procedure.</p>
<h2>Diesel bans</h2>
<p>The Annex 3 exemption applies to the low-emission zone. For the diesel bans in Stuttgart and ${h.a('muenchen', 'Munich')}, the cities set their own exemptions; whether disabled people are covered is stated on the city websites, for example by the ${h.src('muenchen', 'City of Munich')}.</p>`,
  },
});

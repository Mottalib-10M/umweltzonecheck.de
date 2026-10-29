import { defineGuide } from '../../lib/guide-types';
import { stufen } from '../../lib/stadt';

/** Freiburg : 4. Fortschreibung LRP vom 22.4.2025, grüne Zone aufgehoben ; Schilder: Stadt als Straßenverkehrsbehörde. */
export default defineGuide({
  id: 'freiburg',
  group: 'staedte',
  order: 12,
  tool: 'stadt',
  zone: 'freiburg',
  preset: { g: '3', k: 'diesel', n: '3' },
  related: ['baden-wuerttemberg', 'aufgehobene-umweltzonen', 'stuttgart', 'wohnmobil', 'ausblick-2030', 'route'],
  sources: ['freiburgRp', 'bwVm', 'ubaListe'],
  de: {
    slug: 'umweltzone-freiburg',
    nav: 'Freiburg',
    card: 'Mit der 4. Fortschreibung vom April 2025 aufgehoben: In Freiburg gibt es keine Fahrverbote mehr.',
    title: 'Umweltzone Freiburg 2026: aufgehoben seit April 2025',
    description: 'Umweltzone Freiburg 2026: Mit der vierten Fortschreibung des Luftreinhalteplans vom 22. April 2025 wurde die Zone aufgehoben. Es gibt keine Fahrverbote mehr.',
    h1: 'Umweltzone Freiburg: aufgehoben',
    intro: 'Voreingestellt ist ein Diesel mit gelber Plakette. Ändern Sie den Tag der Fahrt: Vor April 2025 hätte er nicht hineingedurft, heute schon.',
    resume: () => `Freiburg im Breisgau hat seine Umweltzone 2025 aufgehoben. Grundlage ist die vierte Fortschreibung des Luftreinhalteplans für Freiburg, die das Regierungspräsidium Freiburg aufgestellt hat und die das Datum 22. April 2025 trägt. Nach Angaben des Regierungspräsidiums bestehen seitdem keine Verkehrsbeschränkungen mehr. Für das Entfernen der Schilder ist die Stadt Freiburg als Straßenverkehrsbehörde zuständig; ein eigenes Datum dafür haben wir nicht gefunden, das Umweltbundesamt führt ebenfalls den 22. April 2025. Die Freiburger Zone war eine der älteren in Baden-Württemberg: Die erste Stufe galt ab dem 1. Januar 2010, die gelbe Stufe ab 2012, und seit dem 1. Januar 2013 durften nur Fahrzeuge mit grüner Plakette hinein. Mit der Aufhebung folgt Freiburg vielen anderen Städten im Land, darunter Karlsruhe, Heidelberg, Ulm und Tübingen. Für Besucher, etwa mit dem Wohnmobil auf dem Weg in den Schwarzwald, heißt das: In Freiburg ist keine Plakette mehr nötig. Wer weiter nach Stuttgart fährt, braucht sie dort aber weiterhin, und ältere Diesel müssen dort zusätzlich das Dieselverbot beachten. In der Region Freiburg ist auch die Zone in Schramberg aufgehoben.`,
    faqs: () => [
      { q: 'Gilt in Freiburg noch ein Fahrverbot für ältere Diesel?', a: 'Nein. Nach der vierten Fortschreibung des Luftreinhalteplans bestehen in Freiburg keine Verkehrsbeschränkungen mehr, weder die Umweltzone noch Streckenverbote. Ein älterer Diesel ohne Plakette darf in die Stadt. Andere Regeln, etwa Zufahrtsbeschränkungen in der Fußgängerzone der Altstadt oder Parkregeln, bleiben davon unberührt und haben eigene Schilder.' },
      { q: 'Welche Zonen gibt es noch in Südbaden?', a: 'Keine aktive. Im Regierungsbezirk Freiburg sind nach der Liste des Umweltbundesamts die Zonen in Freiburg und Schramberg aufgehoben. Die nächsten aktiven Zonen in Baden-Württemberg liegen in Stuttgart, Ludwigsburg und Pforzheim. Auf der anderen Rheinseite haben französische Städte wie Straßburg eigene Regeln mit einer eigenen Vignette, die diese Seite nicht abdeckt.' },
      { q: 'Steht in Freiburg noch irgendwo ein Umweltzonen-Schild?', a: 'Das ist möglich, falls einzelne Schilder noch nicht abgebaut wurden. Rechtlich wirkt ein Verkehrszeichen, solange es steht; die Verordnungsgrundlage ist mit der Fortschreibung aber entfallen. Melden Sie ein vergessenes Schild der Stadt Freiburg als Straßenverkehrsbehörde. Bei einer Kontrolle hilft der Hinweis auf die vierte Fortschreibung vom 22. April 2025.' },
    ],
    body: (h) => `<h2>Daten der Freiburger Zone</h2>
${stufen(h, 'freiburg')}
<h2>Quelle</h2>
<p>Die Angaben stammen vom ${h.src('freiburgRp', 'Regierungspräsidium Freiburg')}, das den Plan aufgestellt hat. Das Datum der Aufhebung im Umweltbundesamt entspricht dem Datum der Fortschreibung. Den Stand aller Zonen im Land fasst das ${h.src('bwVm', 'Verkehrsministerium Baden-Württemberg')} zusammen; unsere Seite ${h.a('baden-wuerttemberg', 'Baden-Württemberg')} zeigt ihn mit Datum.</p>
<h2>Unterwegs in Baden-Württemberg</h2>
<p>Mit dem ${h.a('wohnmobil', 'Wohnmobil')} oder dem Auto können Sie Freiburg, den Schwarzwald und den Bodensee heute ohne Plakette befahren. Erst in ${h.a('stuttgart', 'Stuttgart')}, Ludwigsburg und Pforzheim gilt die Pflicht noch. Die ${h.a('route', 'Routenprüfung')} zeigt es für Ihre Strecke.</p>`,
  },
  en: {
    slug: 'freiburg-low-emission-zone',
    nav: 'Freiburg',
    card: 'Lifted with the fourth plan update of April 2025: Freiburg no longer has driving restrictions.',
    title: 'Freiburg low-emission zone 2026: lifted since April 2025',
    description: 'Freiburg low-emission zone 2026: lifted with the fourth update of the clean-air plan dated 22 April 2025. Freiburg has no traffic restrictions any more.',
    h1: 'Freiburg low-emission zone: lifted',
    intro: 'The preset is a diesel with a yellow sticker. Change the date: before April 2025 it could not have entered, today it can.',
    resume: () => `Freiburg im Breisgau lifted its low-emission zone in 2025. The basis is the fourth update of the Freiburg clean-air plan, drawn up by the Freiburg regional council and dated 22 April 2025. According to the regional council, there have been no traffic restrictions since then. The City of Freiburg, as road traffic authority, is responsible for removing the signs; we found no separate date for that, and the German Environment Agency also lists 22 April 2025. Freiburg’s zone was one of the older ones in Baden-Württemberg: stage one applied from 1 January 2010, the yellow stage from 2012, and from 1 January 2013 only vehicles with a green sticker could enter. With the lifting, Freiburg follows many other cities in the state, including Karlsruhe, Heidelberg, Ulm and Tübingen. For visitors, for instance in a motorhome on the way into the Black Forest, this means no sticker is needed in Freiburg any more. If you continue to Stuttgart, you still need one there, and older diesels must also observe the diesel ban. In the Freiburg region the Schramberg zone has been lifted as well.`,
    faqs: () => [
      { q: 'Is there still a ban on older diesels in Freiburg?', a: 'No. Following the fourth update of the clean-air plan there are no traffic restrictions in Freiburg any more, neither the zone nor route bans. An older diesel without a sticker may enter the city. Other rules, such as access restrictions in the old town’s pedestrian zone or parking rules, are unaffected and have their own signs.' },
      { q: 'Which zones remain in southern Baden?', a: 'No active ones. In the Freiburg administrative district, the German Environment Agency list shows the Freiburg and Schramberg zones as lifted. The nearest active zones in Baden-Württemberg are in Stuttgart, Ludwigsburg and Pforzheim. Across the Rhine, French cities such as Strasbourg have their own rules with a separate vignette, which this site does not cover.' },
      { q: 'Is there still a zone sign standing anywhere in Freiburg?', a: 'That is possible if individual signs have not yet been removed. Legally, a traffic sign takes effect as long as it stands, although its basis in the plan has gone with the update. Report a forgotten sign to the City of Freiburg as road traffic authority. In a check, referring to the fourth update of 22 April 2025 helps.' },
    ],
    body: (h) => `<h2>Dates of the Freiburg zone</h2>
${stufen(h, 'freiburg')}
<h2>Source</h2>
<p>The information comes from the ${h.src('freiburgRp', 'Freiburg regional council')}, which drew up the plan. The German Environment Agency’s lifting date matches the date of the plan update. The ${h.src('bwVm', 'Baden-Württemberg Transport Ministry')} summarises the status of all zones in the state; our ${h.a('baden-wuerttemberg', 'Baden-Württemberg')} page shows it with dates.</p>
<h2>Travelling in Baden-Württemberg</h2>
<p>By ${h.a('wohnmobil', 'motorhome')} or car you can drive around Freiburg, the Black Forest and Lake Constance without a sticker today. The requirement only still applies in ${h.a('stuttgart', 'Stuttgart')}, Ludwigsburg and Pforzheim. The ${h.a('route', 'route check')} shows it for your journey.</p>`,
  },
});

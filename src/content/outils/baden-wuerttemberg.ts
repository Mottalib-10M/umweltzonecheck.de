import { defineGuide } from '../../lib/guide-types';
import { landTabelle } from '../../lib/stadt';

/** Baden-Württemberg : 22 Zonen in der Liste, davon 3 aktiv (Stuttgart, Ludwigsburg, Pforzheim). */
export default defineGuide({
  id: 'baden-wuerttemberg',
  group: 'laender',
  order: 1,
  tool: 'liste',
  land: 'BW',
  related: ['stuttgart', 'freiburg', 'aufgehobene-umweltzonen', 'diesel-fahrverbot', 'ausblick-2030', 'bayern'],
  sources: ['bwVm', 'rpStuttgart', 'rpKarlsruhe', 'freiburgRp', 'ubaListe'],
  de: {
    slug: 'umweltzonen-baden-wuerttemberg',
    nav: 'Baden-Württemberg',
    card: 'Von über zwanzig Zonen sind drei geblieben: Stuttgart, Ludwigsburg mit Umgebung und Pforzheim.',
    title: 'Umweltzonen Baden-Württemberg 2026: nur noch drei aktiv',
    description: 'Umweltzonen in Baden-Württemberg 2026: Von 22 Zonen bestehen nur noch Stuttgart, Ludwigsburg und Pforzheim. Alle Aufhebungen seit 2020 mit Datum und Quelle.',
    h1: 'Umweltzonen in Baden-Württemberg',
    intro: 'Die Liste ist auf Baden-Württemberg gefiltert. Stellen Sie den Status um, um aktive oder aufgehobene Zonen zu sehen.',
    resume: (h) => {
      const alle = h.M.zonenImLand('BW'), aktiv = alle.filter((z) => z.status === 'aktiv');
      return `Kein Land hatte so viele Umweltzonen wie Baden-Württemberg, und keines hat so viele wieder aufgehoben. Die Liste des Umweltbundesamts führt für das Land ${alle.length} Zonen, von denen heute nur noch ${aktiv.length} aktiv sind: Stuttgart, Ludwigsburg mit elf Gemeinden von Asperg bis Tamm und Pforzheim. Zuständig für die Luftreinhaltepläne sind in Baden-Württemberg die vier Regierungspräsidien Stuttgart, Karlsruhe, Tübingen und Freiburg. Sie haben die Pläne zwischen 2020 und 2025 fortgeschrieben und dabei fast überall festgestellt, dass die Grenzwerte auch ohne Zone eingehalten werden. Den Anfang machte Balingen am 1. November 2020. 2023 folgten Heidelberg, Karlsruhe, Pfinztal und Schramberg zum 1. März sowie Wendlingen, Schwäbisch Gmünd, Ilsfeld und Urbach zum 1. Mai. Zum 1. Januar 2024 fielen Heidenheim, Heilbronn, Herrenberg und die Zone Leonberg mit Umgebung, zum 4. Juni 2024 Reutlingen, Tübingen und Ulm, zum 1. August 2024 Mannheim und Mühlacker, und zuletzt Freiburg mit dem Plan vom 22. April 2025. In Pforzheim liegt der Stickstoffdioxid-Wert zwar seit 2016 unter dem Grenzwert, nach einem Gutachten der Landesanstalt aber noch nicht weit genug darunter, um die Zone aufzuheben. Stuttgart hat zusätzlich Dieselverbote.`;
    },
    faqs: () => [
      { q: 'Warum bleibt Pforzheim Umweltzone, wenn Mannheim aufgehoben ist?', a: 'Das Regierungspräsidium Karlsruhe begründet es mit den Messwerten: In Pforzheim wird der Grenzwert für Stickstoffdioxid seit 2016 eingehalten, die Werte liegen laut Gutachten der Landesanstalt für Umwelt aber noch nicht weit genug darunter, um eine Aufhebung zu rechtfertigen. In Mannheim und Mühlacker reichte der Abstand, beide Zonen fielen zum 1. August 2024.' },
      { q: 'Welche Gemeinden gehören zur Zone Ludwigsburg?', a: 'Nach der Liste des Umweltbundesamts elf: Asperg, Bietigheim-Bissingen, Freiberg, Ingersheim, Kornwestheim, Ludwigsburg, Markgröningen, Möglingen, Pleidelsheim, Remseck am Neckar und Tamm. Für die Zone gilt die dritte Fortschreibung des Teilplans Ludwigsburg von 2022. Wer zwischen Stuttgart und Ludwigsburg pendelt, fährt also durchgehend in Zonen mit grüner Plakette.' },
      { q: 'Gelten die Stuttgarter Dieselverbote auch in Ludwigsburg?', a: 'Nein. Die Dieselverbote für Euro 4 und, in der kleinen Umweltzone, Euro 5 gelten nur in der Landeshauptstadt Stuttgart. In Ludwigsburg und den anderen Gemeinden der Zone genügt die grüne Plakette, ebenso in Pforzheim. Wer mit einem Euro-4-Diesel aus Ludwigsburg nach Stuttgart will, muss an der Stadtgrenze umkehren oder eine Ausnahme haben.' },
    ],
    body: (h) => `<h2>Alle Zonen im Land</h2>
${landTabelle(h, 'BW')}
<h2>Die Regierungspräsidien</h2>
<p>Die Aufhebungen beruhen auf Fortschreibungen der ${h.src('rpStuttgart', 'Regierungspräsidien Stuttgart')}, ${h.src('rpKarlsruhe', 'Karlsruhe')} und ${h.src('freiburgRp', 'Freiburg')} sowie Tübingen. Das ${h.src('bwVm', 'Verkehrsministerium')} fasst den Stand für das ganze Land zusammen. Einzelheiten zu den Städten stehen auf den Seiten ${h.a('stuttgart', 'Stuttgart')} und ${h.a('freiburg', 'Freiburg')}.</p>
<h2>Nachbarland Bayern</h2>
<p>Östlich schließt ${h.a('bayern', 'Bayern')} an, mit Zonen in München, Augsburg und Regensburg; Neu-Ulm gegenüber von Ulm hat seine Zone am selben Tag wie Ulm aufgehoben.</p>`,
  },
  en: {
    slug: 'baden-wuerttemberg-zones',
    nav: 'Baden-Württemberg',
    card: 'Of more than twenty zones, three remain: Stuttgart, Ludwigsburg and surroundings, and Pforzheim.',
    title: 'Baden-Württemberg low-emission zones 2026: three remain',
    description: 'Low-emission zones in Baden-Württemberg 2026: of 22 zones only Stuttgart, Ludwigsburg and Pforzheim remain. Every lifting since 2020 with date and source.',
    h1: 'Low-emission zones in Baden-Württemberg',
    intro: 'The list is filtered to Baden-Württemberg. Change the status to see active or lifted zones.',
    resume: (h) => {
      const alle = h.M.zonenImLand('BW'), aktiv = alle.filter((z) => z.status === 'aktiv');
      return `No state had as many low-emission zones as Baden-Württemberg, and none has lifted as many. The German Environment Agency list shows ${alle.length} zones for the state, of which only ${aktiv.length} are still active: Stuttgart, Ludwigsburg with eleven municipalities from Asperg to Tamm, and Pforzheim. In Baden-Württemberg the clean-air plans are the responsibility of the four regional councils of Stuttgart, Karlsruhe, Tübingen and Freiburg. They updated the plans between 2020 and 2025 and found almost everywhere that the limits would be met without a zone. Balingen led the way on 1 November 2020. In 2023 Heidelberg, Karlsruhe, Pfinztal and Schramberg followed on 1 March, and Wendlingen, Schwäbisch Gmünd, Ilsfeld and Urbach on 1 May. On 1 January 2024 Heidenheim, Heilbronn, Herrenberg and the Leonberg area zone went, on 4 June 2024 Reutlingen, Tübingen and Ulm, on 1 August 2024 Mannheim and Mühlacker, and finally Freiburg with the plan of 22 April 2025. In Pforzheim nitrogen dioxide has been below the limit since 2016, but according to a report by the state environment agency not yet far enough below it to lift the zone. Stuttgart also has diesel bans.`;
    },
    faqs: () => [
      { q: 'Why does Pforzheim keep its zone when Mannheim’s was lifted?', a: 'The Karlsruhe regional council cites the readings: in Pforzheim the nitrogen dioxide limit has been met since 2016, but according to the state environment agency’s report the values are not yet far enough below it to justify lifting. In Mannheim and Mühlacker the margin was sufficient, and both zones were lifted on 1 August 2024.' },
      { q: 'Which municipalities belong to the Ludwigsburg zone?', a: 'According to the German Environment Agency list, eleven: Asperg, Bietigheim-Bissingen, Freiberg, Ingersheim, Kornwestheim, Ludwigsburg, Markgröningen, Möglingen, Pleidelsheim, Remseck am Neckar and Tamm. The zone is governed by the third update of the Ludwigsburg sub-plan from 2022. Commuters between Stuttgart and Ludwigsburg therefore drive through green zones all the way.' },
      { q: 'Do Stuttgart’s diesel bans apply in Ludwigsburg?', a: 'No. The diesel bans for Euro 4 and, in the small zone, Euro 5 apply only in the city of Stuttgart. In Ludwigsburg and the other municipalities of the zone a green sticker is enough, as it is in Pforzheim. Anyone wanting to drive a Euro 4 diesel from Ludwigsburg into Stuttgart has to turn back at the city boundary or hold an exemption.' },
    ],
    body: (h) => `<h2>All zones in the state</h2>
${landTabelle(h, 'BW')}
<h2>The regional councils</h2>
<p>The liftings are based on plan updates by the ${h.src('rpStuttgart', 'Stuttgart')}, ${h.src('rpKarlsruhe', 'Karlsruhe')} and ${h.src('freiburgRp', 'Freiburg')} regional councils as well as Tübingen. The ${h.src('bwVm', 'Transport Ministry')} summarises the status for the whole state. City details are on the ${h.a('stuttgart', 'Stuttgart')} and ${h.a('freiburg', 'Freiburg')} pages.</p>
<h2>Neighbouring Bavaria</h2>
<p>To the east lies ${h.a('bayern', 'Bavaria')}, with zones in Munich, Augsburg and Regensburg; Neu-Ulm, opposite Ulm, lifted its zone on the same day as Ulm.</p>`,
  },
});

import { defineGuide } from '../../lib/guide-types';
import { landTabelle } from '../../lib/stadt';

/** Bayern : München, Augsburg, Regensburg aktiv ; Neu-Ulm aufgehoben 4.6.2024. */
export default defineGuide({
  id: 'bayern',
  group: 'laender',
  order: 2,
  tool: 'liste',
  land: 'BY',
  related: ['muenchen', 'augsburg', 'baden-wuerttemberg', 'diesel-fahrverbot', 'route', 'e-auto'],
  sources: ['byStmuv', 'muenchen', 'augsburg', 'regensburg', 'ubaListe'],
  de: {
    slug: 'umweltzonen-bayern',
    nav: 'Bayern',
    card: 'München, Augsburg und Regensburg: drei Zonen, eine mit Dieselbeschränkung. Neu-Ulm ist aufgehoben.',
    title: 'Umweltzonen Bayern 2026: München, Augsburg, Regensburg',
    description: 'Umweltzonen in Bayern 2026: München mit Dieselbeschränkung bis Euro 4, Augsburg und Regensburg mit Grün; Neu-Ulm ist seit 2024 aufgehoben, Nürnberg hat keine.',
    h1: 'Umweltzonen in Bayern',
    intro: 'Die Liste ist auf Bayern gefiltert. Suchen Sie einen Ort oder wechseln Sie den Status.',
    resume: () => `Bayern hat im Vergleich zu seiner Größe wenige Umweltzonen. Aktiv sind drei: München, wo die Zone den Mittleren Ring und alles innerhalb umfasst, Augsburg mit der erweiterten Innenstadt und Regensburg mit der Altstadt zwischen Alleengürtel und Donau. Neu-Ulm hatte ebenfalls eine Zone; sie wurde mit der ersten Fortschreibung des Luftreinhalteplans aus Gründen der Verhältnismäßigkeit zum 4. Juni 2024 aufgehoben, gestützt auf eine Wirkungsanalyse des Landesamts für Umwelt. Nürnberg, Fürth, Erlangen, Würzburg und Ingolstadt hatten nie eine Umweltzone. Besonders ist München: Dort gilt seit dem 1. Februar 2023 zusätzlich eine Zufahrtsbeschränkung für Diesel der Norm Euro 4/IV und schlechter, mit breiten Ausnahmen für Anwohner, Lieferverkehr, Handwerk und Schichtdienst. Regensburg hat seine Zone erst im Januar 2018 eingeführt, gleich als grüne Zone; dort dürfen nur Fahrzeuge mit grüner Plakette fahren und parken. Die Stadt Regensburg schreibt auf ihrer Seite zudem, dass auch E-Fahrzeuge dort eine grüne Plakette brauchen; seit dem 1. Oktober 2026 sind Fahrzeuge mit E-Kennzeichen jedoch bundesweit befreit, sodass diese Angabe überholt ist. Augsburg wurde erst am 1. Juni 2016 grün.`,
    faqs: () => [
      { q: 'Hat Nürnberg eine Umweltzone?', a: 'Nein. Nürnberg steht nicht in der Liste des Umweltbundesamts, weder als aktive noch als aufgehobene Zone; dasselbe gilt für Fürth und Erlangen. Für Fahrten in die Nürnberger Innenstadt, zum Messegelände oder zum Christkindlesmarkt brauchen Sie also keine Plakette. Die nächsten Zonen von Nürnberg aus liegen in Regensburg, Augsburg und München.' },
      { q: 'Brauche ich in Regensburg mit dem E-Auto eine Plakette?', a: 'Seit dem 1. Oktober 2026 nicht mehr, wenn das Fahrzeug ein E-Kennzeichen trägt oder, bei ausländischer Zulassung, die E-Plakette nach § 11 der Fahrzeug-Zulassungsverordnung. Die Seite der Stadt Regensburg sagt noch, auch E-Fahrzeuge bräuchten Grün; das war bis Ende September 2026 richtig. Die neue Nummer 11 in Anhang 3 der 35. BImSchV gilt bundesweit, also auch in Regensburg.' },
      { q: 'Warum wurde die Zone in Neu-Ulm aufgehoben, in Augsburg aber nicht?', a: 'In Neu-Ulm hat eine Wirkungsanalyse des Landesamts für Umwelt vom 19. Januar 2024 gezeigt, dass die Zone kaum noch Wirkung hat; die Stadt hob sie deshalb aus Gründen der Verhältnismäßigkeit zum 4. Juni 2024 auf, am selben Tag wie Ulm auf der anderen Donauseite. Für Augsburg ist keine Aufhebung angekündigt; der Luftreinhalteplan sieht die Zone weiter vor.' },
    ],
    body: (h) => `<h2>Alle Zonen in Bayern</h2>
${landTabelle(h, 'BY')}
<h2>Quellen</h2>
<p>Das ${h.src('byStmuv', 'Bayerische Umweltministerium')} führt die Zonen im Freistaat. Einzelheiten stehen bei der ${h.src('muenchen', 'Landeshauptstadt München')}, der ${h.src('augsburg', 'Stadt Augsburg')} und der ${h.src('regensburg', 'Stadt Regensburg')}. Für Regensburg nennt die Stadtseite das Startdatum nicht; das Ministerium schreibt „seit Januar 2018“, das Umweltbundesamt den 15. Januar 2018.</p>
<h2>Weiterlesen</h2>
<p>Die Seiten ${h.a('muenchen', 'München')} und ${h.a('augsburg', 'Augsburg')} zeigen die Regeln im Detail. Für das ${h.a('e-auto', 'E-Auto')} gilt seit Oktober 2026 die bundesweite Befreiung. Westlich grenzt ${h.a('baden-wuerttemberg', 'Baden-Württemberg')} an.</p>`,
  },
  en: {
    slug: 'bavaria-zones',
    nav: 'Bavaria',
    card: 'Munich, Augsburg and Regensburg: three zones, one with a diesel restriction. Neu-Ulm is lifted.',
    title: 'Bavaria low-emission zones 2026: Munich, Augsburg and more',
    description: 'Low-emission zones in Bavaria 2026: Munich with a diesel restriction up to Euro 4, Augsburg and Regensburg with green; Neu-Ulm lifted, Nuremberg has none.',
    h1: 'Low-emission zones in Bavaria',
    intro: 'The list is filtered to Bavaria. Search for a place or change the status.',
    resume: () => `For its size, Bavaria has few low-emission zones. Three are active: Munich, where the zone covers the Mittlerer Ring and everything inside it, Augsburg with its extended city centre, and Regensburg with its old town between the Alleengürtel and the Danube. Neu-Ulm also had a zone; it was lifted on 4 June 2024 with the first update of its clean-air plan on grounds of proportionality, based on an impact analysis by the State Office for the Environment. Nuremberg, Fürth, Erlangen, Würzburg and Ingolstadt never had a zone. Munich is special: since 1 February 2023 it has also had an entry restriction for diesels of Euro 4/IV and below, with broad exemptions for residents, deliveries, tradespeople and shift workers. Regensburg introduced its zone only in January 2018, directly as a green zone; only vehicles with a green sticker may drive and park there. The City of Regensburg also states on its page that electric vehicles need a green sticker there; since 1 October 2026, however, vehicles with an e-plate are exempt nationwide, so that statement is outdated. Augsburg only went green on 1 June 2016.`,
    faqs: () => [
      { q: 'Does Nuremberg have a low-emission zone?', a: 'No. Nuremberg does not appear in the German Environment Agency list, either as an active or a lifted zone; the same goes for Fürth and Erlangen. For trips into central Nuremberg, to the exhibition centre or the Christmas market, you need no sticker. The nearest zones from Nuremberg are in Regensburg, Augsburg and Munich.' },
      { q: 'Do I need a sticker for an electric car in Regensburg?', a: 'Not since 1 October 2026, if the vehicle carries an e-plate or, for foreign registrations, the e-badge under section 11 of the Vehicle Registration Ordinance. The City of Regensburg’s page still says electric vehicles need green; that was correct until the end of September 2026. The new number 11 in Annex 3 of the 35th BImSchV applies nationwide, including in Regensburg.' },
      { q: 'Why was Neu-Ulm’s zone lifted but not Augsburg’s?', a: 'In Neu-Ulm an impact analysis by the State Office for the Environment dated 19 January 2024 showed the zone had little effect left; the city therefore lifted it on grounds of proportionality on 4 June 2024, the same day as Ulm across the Danube. No lifting has been announced for Augsburg; its clean-air plan still provides for the zone.' },
    ],
    body: (h) => `<h2>All zones in Bavaria</h2>
${landTabelle(h, 'BY')}
<h2>Sources</h2>
<p>The ${h.src('byStmuv', 'Bavarian Environment Ministry')} lists the zones in the state. Details are provided by the ${h.src('muenchen', 'City of Munich')}, the ${h.src('augsburg', 'City of Augsburg')} and the ${h.src('regensburg', 'City of Regensburg')}. For Regensburg the city page does not give the start date; the ministry says “since January 2018”, the German Environment Agency 15 January 2018.</p>
<h2>Read on</h2>
<p>The ${h.a('muenchen', 'Munich')} and ${h.a('augsburg', 'Augsburg')} pages show the rules in detail. ${h.a('e-auto', 'Electric cars')} have been exempt nationwide since October 2026. To the west lies ${h.a('baden-wuerttemberg', 'Baden-Württemberg')}.</p>`,
  },
});

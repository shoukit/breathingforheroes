/**
 * The published evidence, including the study that argues against us.
 *
 * This block exists to LIMIT expectations, not to advertise. That is deliberate:
 * a page that cites research to promise an outcome positions breathwork as a
 * treatment and runs into § 11 HWG; a page that cites research to say "the effect
 * is small and the intense version is not proven better" is a disclaimer with
 * sources. Never reorder these so the positive findings stand alone, and never
 * drop `limit` from a card. Reasoning in docs/08-breathwork-recherche.md.
 *
 * Every number here is from the cited paper. Nothing is rounded up.
 */

export type Study = {
  id: string;
  /** The finding in one line — this is the heading on the page. */
  finding: string;
  /** Scope in the shorthand the reader can check: n, design, duration. */
  scope: string;
  body: string;
  /** The caveat. Non-optional by design. */
  limit: string;
  source: { label: string; url: string };
};

export const studies: readonly Study[] = [
  {
    id: 'fincham-2023',
    finding: 'Atemübungen senken Stress — messbar, aber in kleinem Maß',
    scope: '12 randomisierte Studien · 785 Erwachsene · Meta-Analyse 2023',
    body: 'Die bisher umfassendste Auswertung fand über alle Studien hinweg einen signifikanten Effekt von Atemübungen auf selbst berichteten Stress gegenüber Kontrollgruppen (Hedges’ g = −0,35). Für Ängstlichkeit und depressive Symptome fielen die Werte ähnlich aus.',
    limit: 'Die Effekte sind klein bis mittel, die meisten eingeschlossenen Studien haben ein moderates Verzerrungsrisiko, und signifikant war der Befund nur bei Menschen ohne klinische Diagnose. Getragen wird er überwiegend von langsamen Atemtechniken, nicht von der Art, die ich anleite.',
    source: {
      label: 'Fincham et al., Scientific Reports 2023',
      url: 'https://www.nature.com/articles/s41598-022-27247-y',
    },
  },
  {
    id: 'fincham-2024',
    finding: 'Intensives Atmen war nicht besser als ruhiges Atmen',
    scope: '200 Erwachsene · verblindete Placebo-Studie · 3 Wochen täglich',
    body: 'Die größte kontrollierte Studie zu schnellem Atmen mit Atempausen verglich genau diese Technik mit ruhigem, verbundenem Atmen bei 15 Atemzügen pro Minute. Nach drei Wochen ging es beiden Gruppen besser — zwischen ihnen gab es keinen Unterschied, weder beim Stress noch bei Angst, Stimmung, Wohlbefinden oder Schlaf.',
    limit: 'Das ist der unbequeme Befund, und er gehört hierher: Die Intensität ist offenbar nicht der Wirkfaktor. Die Studie lief allerdings per Video mit jungen, gesunden Menschen, ohne Begleitung und ohne die Länge einer echten Session — sie bildet nicht ab, was in 90 Minuten mit Anleitung passiert.',
    source: {
      label: 'Fincham et al., Scientific Reports 2024',
      url: 'https://www.nature.com/articles/s41598-024-64254-7',
    },
  },
  {
    id: 'balban-2023',
    finding: 'Die Ausatmung scheint der wirksame Teil zu sein',
    scope: '108 Teilnehmende · 4 Gruppen · 5 Minuten täglich, 28 Tage',
    body: 'Eine Stanford-Studie verglich drei Atemübungen mit Achtsamkeitsmeditation. Die atembasierten Übungen verbesserten die Stimmung stärker und senkten die Atemfrequenz deutlicher als Meditation — am klarsten die Variante, die die Ausatmung betont.',
    limit: 'Fünf Minuten täglich über vier Wochen sind etwas anderes als eine lange Atemrunde. Und auf Herzfrequenz und Herzratenvariabilität hatte keine der Übungen einen messbaren Effekt.',
    source: {
      label: 'Balban et al., Cell Reports Medicine 2023',
      url: 'https://doi.org/10.1016/j.xcrm.2022.100895',
    },
  },
];

/** Read after the three cards. The conclusion has to be the honest one. */
export const researchConclusion = [
  'Kurz gefasst: Dass Atmen die Stimmung und die körperliche Anspannung verändert, ist gut belegt. Dass ausgerechnet die intensive Variante mehr bringt als eine ruhige, ist es nicht.',
  'Ich könnte dir an dieser Stelle mehr versprechen. Ich weiß aber, wie die Studienlage aussieht, und ich halte es für die schlechtere Grundlage für eine gemeinsame Session, wenn du mit falschen Erwartungen kommst. Was ich dir anbiete, ist eine Erfahrung — kein Ergebnis.',
];

/**
 * The "Blockaden" question, answered honestly. Clients ask for this vocabulary and
 * the whole scene uses it; the defensible move is to keep the description of the
 * experience and label the explanation as the model it is.
 */
export const blockagesNote = {
  eyebrow: 'Einordnung',
  heading: 'Warum viele von „Blockaden“ sprechen',
  paragraphs: [
    'In der Atemrunde kommen bei vielen Menschen Gefühle hoch, mit denen sie nicht gerechnet haben. Weinen ohne Anlass, Lachen, Zittern, alte Erinnerungen, die plötzlich sehr nah sind. Das passiert oft genug, dass es zum festen Bestandteil der Methode gehört — und es ist der Teil, von dem hinterher am meisten erzählt wird.',
    'Beschrieben wird das meistens so: „Da hat sich etwas gelöst.“ In der Rebirthing-Tradition, aus der die Methode stammt, steht dahinter die Vorstellung, dass Gefühle sich im Körper festsetzen und durch das Atmen wieder in Bewegung kommen.',
    'Ich benutze dieses Bild auch, weil es gut beschreibt, wie es sich anfühlt. Belegt ist es nicht. Warum beim verbundenen Atmen Emotionen hochkommen, ist wissenschaftlich nicht geklärt — diskutiert werden die veränderte Durchblutung im Gehirn, die Musik, und schlicht der Umstand, dass du 45 Minuten lang nichts anderes tust, als bei dir zu sein, ohne Ablenkung und ohne Aufgabe.',
    'Für die Session macht das keinen Unterschied. Für das, was ich dir verspreche, schon.',
  ],
} as const;

/**
 * Why the sensations happen. This is textbook respiratory physiology, not a health
 * claim — and it is the most defensible material on the site: it explains what
 * people actually notice during a session without asserting any effect on illness.
 *
 * The chain is: hyperventilation → hypocapnia → respiratory alkalosis → more
 * calcium bound to albumin → less free ionised calcium → lower nerve threshold.
 * Sources are collected in docs/08-breathwork-recherche.md.
 */

export type PhysiologyStep = {
  /** Numbered on the page — the order is the mechanism, not decoration. */
  title: string;
  body: string;
};

export const physiology: readonly PhysiologyStep[] = [
  {
    title: 'Du atmest mehr, als der Körper gerade verbraucht',
    body: 'Beim verbundenen Atmen bewegst du deutlich mehr Luft als im Ruhezustand. Sauerstoff nimmst du dadurch kaum mehr auf — der ist ohnehin fast vollständig gesättigt. Was sich ändert, ist das Kohlendioxid: Du atmest mehr davon ab, als der Stoffwechsel nachliefert. Der CO₂-Gehalt im Blut sinkt.',
  },
  {
    title: 'Der pH-Wert im Blut steigt',
    body: 'Kohlendioxid ist im Blut sauer. Fällt es ab, wird das Blut kurzzeitig basischer. Der Fachbegriff dafür ist respiratorische Alkalose. Das ist keine Störung, sondern die normale Folge davon, wie du gerade atmest — und sie hält nur so lange an, wie du so atmest.',
  },
  {
    title: 'Weniger freies Calcium — und die Nerven werden empfindlicher',
    body: 'Bei höherem pH-Wert bindet mehr Calcium an Eiweiße im Blut. Die Gesamtmenge bleibt gleich, aber der frei verfügbare Anteil sinkt. Und freies Calcium ist genau das, was die Reizschwelle der Nerven hochhält. Sinkt es, feuern Nerven leichter: Das ist das Kribbeln in Händen, Füßen und um den Mund — und das ist auch die Pfötchenstellung, wenn sich die Hände von selbst zusammenziehen.',
  },
  {
    title: 'Die Hirngefäße werden enger',
    body: 'Kohlendioxid ist der stärkste Regler der Hirndurchblutung. Weniger CO₂ heißt engere Gefäße und weniger Blutfluss im Gehirn. Daher der Schwindel, das Leichte im Kopf, die veränderte Wahrnehmung von Zeit und Raum, die viele in der Atemrunde beschreiben.',
  },
];

/** Stated right after the cascade — the whole point is that it is reversible. */
export const physiologyOutro =
  'Alles davon bildet sich zurück, sobald du wieder normal atmest. Nicht nach Stunden, sondern innerhalb von ein bis zwei Minuten. Deshalb ist „langsamer atmen“ auch die vollständige Gegenmaßnahme, wenn dir etwas zu viel wird — und deshalb kann ich dir sagen, dass du jederzeit aufhören kannst.';

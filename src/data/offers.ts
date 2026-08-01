/**
 * The offers. Prices are verified facts — see CLAUDE.md.
 * Order matters: the single session is listed first so it anchors the group price.
 */

export type Offer = {
  id: string;
  name: string;
  price: string;
  priceNumeric: number;
  priceNote: string;
  duration: string;
  place: string;
  summary: string;
  includes: readonly string[];
  suitedFor: string;
};

export const offers: readonly Offer[] = [
  {
    id: 'einzelsession',
    name: 'Einzelsession',
    price: '85 €',
    priceNumeric: 85,
    priceNote: 'pro Session',
    duration: '1,5 – 2 Stunden',
    place: 'im Garten, bei dir zu Hause, in der Natur oder online',
    summary:
      'In der Einzelsession geht es nur um dich. Ich wähle die Musik vorher nach deiner Intention aus und gestalte die Anleitung so, dass sie zu deinem Thema passt. Vor- und Abschlussgespräch nehmen so viel Raum ein, wie du brauchst.',
    includes: [
      'Ausführliches Vorgespräch',
      'Auf deine Intention abgestimmte Musik und Anleitung',
      '45 Minuten begleitete Atemrunde',
      'Nachruhe und Abschlussgespräch',
      'Matte, Decke und Kissen bringe ich mit',
    ],
    suitedFor:
      'Sinnvoll, wenn du ein konkretes Thema mitbringst oder lieber ohne andere Menschen dabei anfängst.',
  },
  {
    id: 'gruppensession',
    name: 'Gruppensession',
    price: '20 €',
    priceNumeric: 20,
    priceNote: 'pro Person',
    duration: '1,5 Stunden',
    place: 'im Garten oder in der Natur, nach Absprache',
    summary:
      'Jede Gruppensession steht unter einem gemeinsamen Thema — zum Beispiel Selbstannahme oder Vergebung. In der Einstimmung legt trotzdem jede und jeder eine eigene Intention fest, sodass die Session für dich persönlich bleibt.',
    includes: [
      'Einführung und gemeinsame Einstimmung',
      'Eigene Intention trotz gemeinsamem Thema',
      '45 Minuten begleitete Atemrunde',
      'Nachruhe in der Gruppe',
      'Matte, Decke und Kissen bringe ich mit',
    ],
    suitedFor:
      'Sinnvoll, wenn du erst einmal ausprobieren willst, ob Breathwork etwas für dich ist.',
  },
];

/** The session timeline. This is the site's most important content — it dissolves the main objection. */
export const timeline = [
  {
    time: '0 – 15 Min',
    title: 'Ankommen und Vorgespräch',
    body: 'Wir setzen uns zusammen. Du erzählst, wie es dir geht und was dich hergeführt hat — so viel oder so wenig, wie du möchtest. Ich frage nach Vorerkrankungen, weil manche gegen die Methode sprechen. Danach legen wir deine Intention für die Session fest: ein Satz, ein Thema, eine Frage.',
  },
  {
    time: '15 – 25 Min',
    title: 'Anleitung und Einstieg',
    body: 'Du legst dich hin, zugedeckt, so bequem wie möglich. Ich erkläre die Atemtechnik und wir üben sie gemeinsam ein, bis sie sitzt. Dann startet die Musik.',
  },
  {
    time: '25 – 70 Min',
    title: 'Die Atemrunde',
    body: 'Du atmest, ich leite dich durch. Ich sage an, wenn du das Tempo ändern sollst, und gebe zwischendurch kleine Übungen dazu. Du musst nichts entscheiden und nichts leisten — nur weiteratmen.',
  },
  {
    time: '70 – 85 Min',
    title: 'Nachruhe',
    body: 'Das Atmen hört auf, die Musik wird ruhiger, du bleibst liegen. Dieser Teil ist für viele der eindrücklichste. Nimm dir die Zeit, es gibt keinen Grund aufzustehen.',
  },
  {
    time: 'ab 85 Min',
    title: 'Abschluss',
    body: 'Wir sprechen darüber, was passiert ist — wenn du magst. Manche reden eine halbe Stunde, andere gar nicht. Beides ist in Ordnung.',
  },
] as const;

/** What can feel unfamiliar. Naming this openly is what makes the page trustworthy. */
export const sensations = [
  {
    title: 'Kribbeln in Händen, Füßen oder im Gesicht',
    body: 'Sehr häufig und harmlos. Es kommt von der veränderten Atmung und geht von selbst wieder weg.',
  },
  {
    title: 'Die Hände ziehen sich zusammen',
    body: 'Passiert vielen, sieht dramatischer aus, als es ist, und löst sich, sobald du langsamer atmest.',
  },
  {
    title: 'Emotionen, die ohne Anlass kommen',
    body: 'Weinen, Lachen, Zittern — alles kommt vor. Du musst es nicht erklären und nicht unterdrücken.',
  },
  {
    title: 'Gar nichts Spektakuläres',
    body: 'Auch das kommt vor, gerade beim ersten Mal. Es heißt nicht, dass du etwas falsch gemacht hast.',
  },
] as const;

/** How ice bathing runs. Sequence with real order — numbering is information here, not decoration. */
export const iceSteps = [
  {
    title: 'Theorie und Atemtechnik',
    body: 'An Land, bevor irgendjemand ins Wasser geht.',
  },
  {
    title: 'Aufwärmen',
    body: 'Bewegung, damit der Körper vorbereitet ist.',
  },
  {
    title: 'Ins Wasser',
    body: 'Kurz, kontrolliert, nie allein und nie länger als sinnvoll.',
  },
  {
    title: 'Aufwärmen danach',
    body: 'Bewegung und warme Kleidung.',
  },
] as const;

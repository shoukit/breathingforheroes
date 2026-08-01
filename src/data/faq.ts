/**
 * FAQ. Each entry answers a real hesitation identified in docs/01-strategie.md.
 * Answers stay honest even where honesty is less flattering ("Was, wenn ich nichts spüre?").
 * Rendered as FAQPage structured data — so every answer must be self-contained.
 */

export type FaqItem = { q: string; a: string };

export const breathworkFaq: readonly FaqItem[] = [
  {
    q: 'Muss ich meditieren können?',
    a: 'Nein. Breathwork ist das Gegenteil von Stillsitzen: Du bist die ganze Zeit aktiv beschäftigt. Viele, denen Meditation nicht liegt, kommen deshalb besser damit zurecht.',
  },
  {
    q: 'Was ist, wenn ich nichts spüre?',
    a: 'Kommt vor, besonders beim ersten Mal. Der Körper braucht manchmal einen Durchgang, um sich darauf einzulassen. Es ist kein Versagen und kein Zeichen dafür, dass es bei dir nicht funktioniert.',
  },
  {
    q: 'Muss ich über meine Themen sprechen?',
    a: 'Nein. Du legst eine Intention für dich fest, aber du musst sie mir nicht sagen. Auch das Abschlussgespräch ist freiwillig.',
  },
  {
    q: 'Was ziehe ich an?',
    a: 'Bequeme Kleidung, in der du 90 Minuten liegen kannst. Socken sind sinnvoll, weil viele im Liegen kalte Füße bekommen. Decke und Matte sind da.',
  },
  {
    q: 'Kann ich vorher essen?',
    a: 'Kleinigkeiten ja, ein schweres Essen besser nicht. Zwei bis drei Stunden Abstand sind angenehmer.',
  },
  {
    q: 'Funktioniert das online genauso?',
    a: 'Ja. Du brauchst einen Raum, in dem du 90 Minuten ungestört liegen kannst, und Kopfhörer. Ich sehe und höre dich über Zoom und leite dich genauso an. Für die erste Session vor Ort spricht, dass ich im Raum bin — für online spricht, dass du danach in deiner eigenen Umgebung liegen bleiben kannst.',
  },
  {
    q: 'Wie oft ist sinnvoll?',
    a: 'Es gibt keine Vorgabe. Ich selbst mache es einmal pro Woche. Manche kommen einmal und lassen es wirken, andere regelmäßig.',
  },
];

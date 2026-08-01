# Schritt 1 — Marketing-Psychologie: Struktur, Angebot, CTA-Logik

Grundlage für die gesamte Copy. Geschrieben **vor** dem Texten.

## Wen wir ansprechen

Berufstätige zwischen 30 und 55 im Raum Bonn/Köln, die dauerhaft angespannt sind: schlafen
schlecht, schalten abends nicht ab, funktionieren aber. Sie suchen **nicht** nach „Breathwork" —
den Begriff kennen die wenigsten. Sie suchen nach „abschalten können", „Stress abbauen Bonn",
„Meditation lernen", „zur Ruhe kommen".

**Jobs to be done:** *„Hilf mir, einmal wirklich abzuschalten — ohne dass es Therapie ist und
ohne dass es Monate dauert."*

Diese Zielgruppe ist skeptisch. Sie hat schon Meditations-Apps aufgegeben und misstraut allem,
was nach Guru klingt. Das ist die wichtigste Erkenntnis für den Ton.

## Was die Buchung tatsächlich verhindert (Theory of Constraints)

Nicht der Preis. 85 € sind für diese Zielgruppe kein Hindernis. Der Engpass ist die
**Unbekanntheit des Erlebnisses**, in dieser Reihenfolge:

| # | Einwand | Wo er stirbt |
|---|---------|-------------|
| 1 | „Was passiert da konkret mit mir?" | Minutengenauer Ablauf auf /breathwork |
| 2 | „Ist das Esoterik?" | Nüchterner Ton überall; „Was Breathwork nicht ist" |
| 3 | „Bin ich der Typ dafür?" | Toms eigene Geschichte auf /ueber-tom |
| 4 | „Ist das sicher für mich?" | Offene Kontraindikationen — auf jeder relevanten Seite |
| 5 | „Was, wenn ich nichts spüre?" | FAQ, ehrlich beantwortet |

Einwand 1 ist der eigentliche Engpass. Wer nicht weiß, was passiert, bucht nicht — egal wie gut
alles andere ist. Deshalb bekommt der Ablauf mehr Raum als jedes Verkaufsargument.

## Inversion: Was den Relaunch garantiert scheitern lässt

- **Die Heilversprechen der Vorgängerseite übernehmen.** „Die ultimative Medizin um deinen Körper
  zu heilen", „so effizient wie 10 Sitzungen bei einem Psychologen", „BE YOUR OWN HEALER" — das
  vertreibt genau die skeptische Zielgruppe und ist nach HWG/UWG angreifbar. Doppelt schädlich.
- **Verschweigen, was in einer Session passiert.** Größter Absprungpunkt.
- **Mehrere gleichwertige CTAs.** Entscheidungslähmung (Hick's Law).
- **Template-Leichen.** Die alte Seite hatte Seiten „Coaches" und „Clients" für Coaches und Kunden,
  die es nicht gibt. Ersatzlos streichen.
- **Erfundene Belege.** Teilnehmerzahlen, Sterne, „nur noch 2 Plätze".

## Angebotsarchitektur

Die alte Seite listet vier Angebote gleichrangig nebeneinander — ohne Empfehlung. Das erzeugt
Entscheidungslähmung. Neue Ordnung mit klarer Hierarchie:

| Angebot | Rolle | Preis |
|---------|-------|-------|
| **Einzelsession** | Hauptangebot. Auf die persönliche Intention abgestimmt, mit Vor- und Abschlussgespräch. | 85 € / 1,5–2 Std. |
| **Gruppensession** | Einstieg mit niedriger Hemmschwelle. Wer unsicher ist, fängt hier an. | 20 € p. P. / 1,5 Std. |
| **Eisbaden** | Saisonal (Winter). Sichtbarkeits- und Differenzierungstreiber, kein Umsatzkern. | eigene Seite |

**Anchoring, ehrlich genutzt:** Die Einzelsession steht zuerst. 20 € für die Gruppensession
wirken danach wie ein leichtes Ja — ohne dass wir irgendetwas künstlich verteuern.

**Aktivierungsenergie senken:** Der Weg für Unsichere ist Gruppensession → Einzelsession. Das ist
kein Trick, sondern die tatsächlich sinnvolle Reihenfolge.

**Risikoumkehr ohne Erfindung:** Wir versprechen keine Geld-zurück-Garantie, die es nicht gibt.
Stattdessen nutzen wir eine belegte Tatsache: Jede Einzelsession beginnt mit einem ausführlichen
Vorgespräch. Das nimmt die Angst vor dem Sprung ins Kalte — und stimmt.

## Seitenstruktur

| Seite | Aufgabe | Sucht nach |
|-------|---------|-----------|
| `/` Start | Einordnen in 5 Sekunden, Vertrauen aufbauen, weiterleiten | „Breathwork Bonn" |
| `/breathwork` | Den Engpass auflösen: Methode, Ablauf, Grenzen, Sicherheit, FAQ | „Was ist Breathwork" |
| `/sessions` | Angebote und Preise vergleichbar machen | „Breathwork Session Preis" |
| `/ueber-tom` | Person hinter dem Angebot — Ähnlichkeit statt Autorität-von-oben | „Tom Geier" |
| `/eisbaden` | Saisonales Angebot, eigenes Suchintent | „Eisbaden Bonn" |
| `/kontakt` | Konversion | „Breathwork Bonn Termin" |
| `/impressum`, `/datenschutz` | Pflicht (DE) | — |

Gestrichen: `Coaches`, `Clients`, `single-coach`, leere `Blog`-Seiten, doppelte `home-2`/`about-2`/
`contact-2`.

## CTA-Logik

**Genau eine primäre CTA pro Seite, sitewide identisch: „Termin anfragen" → `/kontakt`.**

„Anfragen" statt „Buchen", weil es der Wahrheit entspricht: Es gibt kein Buchungssystem, und vor
einer Einzelsession steht ohnehin ein Gespräch. Ehrlichkeit senkt hier zusätzlich die Hemmschwelle
— eine Anfrage verpflichtet zu weniger als eine Buchung.

Die Wahl zwischen Einzel-, Gruppensession und Eisbaden passiert **im Formular**, nicht durch
konkurrierende Buttons. So bleibt es eine CTA.

Sekundäre Aktionen sind immer optisch untergeordnet (Textlink oder Ghost-Button): „Ablauf ansehen",
„Preise vergleichen", Telefonnummer.

Auf `/kontakt` ist das Absenden des Formulars die primäre CTA — dort steht kein weiterer Button.

## Eingesetzte psychologische Hebel — und ausdrücklich nicht eingesetzte

**Eingesetzt, weil belegt:**

- *Authority* — zertifizierter Instructor, benannte Methode, offen genannte Kontraindikationen.
  Wer Grenzen nennt, wirkt kompetenter als wer alles verspricht.
- *Pratfall-Effekt* — „Breathwork ist keine Therapie" klar aussprechen. Ein offen benannter
  Nachteil erzeugt mehr Vertrauen als lückenlose Behauptungen.
- *Liking / Unity* — Toms eigene Erschöpfungsgeschichte spiegelt die Zielgruppe. Er war da, wo sie
  jetzt sind.
- *Social Proof* — drei echte, namentliche Stimmen. Mehr haben wir nicht, also strecken wir nicht.
- *Goal-Gradient* — der minutengenaue Ablauf macht aus einem diffusen Erlebnis einen endlichen,
  überschaubaren Weg.
- *Kontrast-Effekt* — der Ist-Zustand („abends nicht runterkommen") wird benannt, nicht dramatisiert.

**Bewusst nicht eingesetzt:**

- *Scarcity / Urgency* — es gibt keine echte Knappheit. Erfundene wäre sofort erkennbar und
  zerstört bei einer skeptischen Zielgruppe genau das, was wir aufbauen.
- *Loss Aversion in Angstform* — kein „Was, wenn du so weitermachst". Bei einem
  Gesundheitsthema ist Angstmarketing unseriös und rechtlich riskant.
- *Decoy Pricing* — bei zwei echten Angeboten wäre ein Lockvogel-Tarif eine Erfindung.

## Messlatte

Nordstern: **abgeschickte Terminanfragen**. Alles andere (Verweildauer, Rankings) ist nachgelagert.
Wichtigster sekundärer Indikator: Wie viele Besucher erreichen den Ablauf-Abschnitt auf
`/breathwork`? Das ist der Engpass, und dort entscheidet sich die Anfrage.

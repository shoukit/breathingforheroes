# Schritt 3 — Visuelle Richtung

## Ausgangslage

Die Copy ist bewusst nüchtern. Wenn die Gestaltung dann nach Wellness-Studio aussieht, widerspricht
sie dem Text — und die skeptische Zielgruppe glaubt dem Bild, nicht dem Wort. Die Gestaltung muss
also dieselbe Haltung tragen wie die Sprache: erwachsen, präzise, unaufgeregt.

**Ausgeschlossen:** Sonnenuntergangs-Verläufe, Lotus- und Mandala-Motive, Aquarellflecken,
Sage-Green, Script-Schriften, „breathe" in Handschrift, schwebende Federn.

**Ebenfalls ausgeschlossen**, weil generisch: cremefarbener Hintergrund mit hochkontrastiger
Serifenschrift und Terrakotta-Akzent; Fast-Schwarz mit einem grellen Neon-Akzent; Zeitungs-Layout
mit Haarlinien und Null-Radius.

## Das Leitmotiv

Beim Conscious Connected Breathing gibt es **keine Pause zwischen Ein- und Ausatmung**. Das ist die
definierende Eigenschaft der Methode — und ein Layout-Prinzip.

**Der Faden.** Eine durchgehende senkrechte Haarlinie läuft über die gesamte Länge jeder Seite und
**bricht zwischen den Abschnitten nie ab**. Inhalte hängen sich an sie an, Marker sitzen auf ihr.
Die Seite hat dadurch eine Wirbelsäule statt gestapelter Kästen — sichtbar verbunden, ohne Pause.

**Die Atemkurve.** Im Hero wird der Faden zur Atemkurve: eine Linie, die den tatsächlichen Rhythmus
der Technik zeigt — aktive, kurze Einatmung, passive, längere Ausatmung, kein Absetzen dazwischen.
Sie ist kein Dekor, sondern ein Diagramm: Wer sie ansieht, hat die Technik verstanden. Sie
animiert im echten Atemtempo (4-Sekunden-Zyklus) und wird bei `prefers-reduced-motion: reduce` zum
beschrifteten Standbild, das dieselbe Information trägt.

Das ist das eine mutige Element. Alles andere bleibt still.

## Farbe

Warmes Papier, warme Tinte, ein kalter Akzent. Die Wärme kommt vom Menschlichen der Praxis, die
Kälte von der Nüchternheit — und passt zum Eisbaden.

| Token | Wert | Rolle |
|-------|------|-------|
| `--paper` | `#F5F2EE` | Grundfläche. Warm, aber deutlich heller und weniger gelb als Creme. |
| `--paper-sunk` | `#EAE5DE` | Abgesetzte Abschnitte, Karten |
| `--ink` | `#17120E` | Fließtext und Überschriften. Warmes Fast-Schwarz, kein reines Schwarz. |
| `--ink-soft` | `#574D45` | Sekundärtext, Bildunterschriften |
| `--accent` | `#0E4A54` | Petrol. Faden, Atemkurve, primäre CTA, Fokusring. |
| `--accent-bright` | `#12626F` | Hover-Zustand |
| `--line` | `#D6CFC6` | Trennlinien, Rahmen |

Ein einziger Akzent, bewusst. Ein zweiter warmer Signalton für die Einatmung wäre naheliegend —
und genau die Terrakotta-Voreinstellung, die wir vermeiden.

**Kontrastwerte** (gegen `--paper`, in Schritt 4 nachgerechnet und dokumentiert):
`--ink` ≈ 16,5:1 · `--ink-soft` ≈ 7,3:1 · `--accent` ≈ 8,1:1 · Weiß auf `--accent` ≈ 7,9:1.
Alle deutlich über 4,5:1.

## Typografie

Drei Rollen, bewusst gegeneinander gesetzt:

**Display — Fraunces.** Eine variable Serifenschrift mit eigenem Charakter: leicht ausgestellte
Serifen, altmodische Wärme, ohne in Mode-Didone oder Wellness-Zierschrift zu kippen. Wird groß,
eng und mit ruhiger Strichstärke gesetzt (`wght` 400–500, `SOFT` niedrig, `WONK` 0 — die Schrift
kann verspielt, wir wollen sie aber gefasst).

**Body — IBM Plex Sans.** Nüchtern, technisch, exzellent lesbar, sehr gute Umlaute. Die Kühle der
Plex gegen die Wärme der Fraunces ist genau die Spannung der Marke: eine menschliche Praxis, in
sachlichen Worten beschrieben.

**Utility — IBM Plex Mono.** Für Zeitmarken (`0–15 MIN`), Preise und Labels. Monospace für
Zeitangaben ist nicht Dekoration, sondern richtig: Es sind Messwerte. Der Ablaufplan wirkt dadurch
wie ein echter Zeitplan.

Schriften werden selbst gehostet (`woff2`, `font-display: swap`, nur die benötigten Schnitte) —
kein Google-Fonts-Request, das spart einen DNS-Roundtrip und die DSGVO-Diskussion gleich mit.

**Skala.** Großer Sprung zwischen Display und Fließtext, damit Überschriften tragen:

| Rolle | Größe | Zeilenhöhe | Laufweite |
|-------|-------|-----------|-----------|
| H1 | `clamp(2.75rem, 7vw, 5.25rem)` | 1.02 | −0.02em |
| H2 | `clamp(1.875rem, 3.5vw, 2.75rem)` | 1.1 | −0.015em |
| H3 | `1.375rem` | 1.25 | −0.01em |
| Body | `1.0625rem` → `1.125rem` | 1.7 | 0 |
| Mono-Label | `0.8125rem` | 1.4 | 0.08em, Versalien |

Zeilenhöhe 1.7 im Fließtext ist bewusst großzügig — die Seite soll sich beim Lesen nicht hetzen.

## Layout und Rhythmus

**Asymmetrisch, nicht zentriert.** Der Faden sitzt links auf einer festen Achse; der Inhalt hängt
rechts daran. Links davon bleibt eine schmale Spalte für Mono-Label. Zentrierte Abschnitte gibt es
nur dort, wo der Inhalt es verlangt (Abschluss-CTA).

- Shell max. `1180px`, Fließtext max. `68ch` — längere Zeilen ermüden.
- Abschnittsabstand `clamp(5rem, 11vw, 9rem)`. Großzügig; der Rhythmus ist das Thema.
- Radien klein und einheitlich (`4px`), keine Pillenformen. Weiche Rundungen wirken nach App,
  scharfe Kanten nach Zeitung — dazwischen liegt der erwachsene Ton.
- Schatten nur, wo Ebene wirklich nötig ist. Trennung passiert über Linien und Flächen.

**Bildsprache.** Fotografie in gedämpften, natürlichen Tönen, körnig statt hochglänzend. Reale
Räume, Tageslicht, keine posierte Entspannung, keine Stockfoto-Lächeln. Menschen wenn, dann
zurückhaltend und nicht als Tom ausgegeben.

## Bewegung

- Atemkurve: 4-Sekunden-Zyklus, Endlosschleife.
- Abschnitte beim Scrollen: kurzes, kleines Aufblenden (16 px, 500 ms) — einmal, nicht wiederholt.
- Sonst nichts. Kein Parallax, kein Zähler-Hochzählen, keine schwebenden Elemente.

Alles in `@media (prefers-reduced-motion: no-preference)` gekapselt. Unter `reduce` ist die Seite
vollständig statisch und die Atemkurve ein beschriftetes Diagramm.

## Prüfung gegen die Voreinstellung

Bevor gebaut wird — wäre das hier auch bei einem beliebigen anderen Briefing herausgekommen?

- *Papier + Serifen-Display* allein wäre die Voreinstellung. Es trägt hier nur, weil der Akzent
  kalt statt terrakotta ist und die Fließtextschrift technisch statt neutral.
- *Der Faden* ist aus der Methode abgeleitet — verbundenes Atmen ohne Pause — und wäre bei einem
  anderen Thema sinnlos. Bleibt.
- *Monospace für Zeitmarken* trägt Information, nicht Stil. Bleibt.
- *Nummerierte Schritte* sind hier zulässig, weil der Ablauf tatsächlich eine Sequenz mit Dauer ist.
  Auf allen anderen Seiten wird nicht nummeriert.

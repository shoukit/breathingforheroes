# Schritt 6 — SEO-Audit vor dem Launch

Geprüft wurde der gebaute Output, nicht der Entwurf.

## Der kritische Punkt: Das ist eine Migration, kein Neustart

`breathing-for-heroes.de` läuft seit Jahren. Die alten URLs tragen Links und Rankings — und ein
Teil von ihnen existiert nach dem Relaunch nicht mehr. Ohne Weiterleitungen wirft der Relaunch
genau das weg, was die alte Seite an Autorität aufgebaut hat.

**Behoben.** `src/data/redirects.ts` ist die eine Quelle; `astro.config.mjs` erzeugt daraus drei
Dinge:

| Ausgabe | Für wen |
|---------|---------|
| statische Weiterleitungsseiten (`meta refresh` + `noindex` + Canonical) | funktioniert überall, auch ohne Serverkonfiguration |
| `dist/_redirects` | Netlify, Cloudflare Pages |
| `dist/redirects.htaccess` | Apache / LiteSpeed — der wahrscheinlichste Fall bei einem WordPress-Hoster |

Abgedeckte Umzüge:

| alt | neu | Grund |
|-----|-----|-------|
| `/home/` | `/` | Startseite lag auf einer Unterseite |
| `/uebermich/` | `/ueber-tom/` | sprechendere URL |
| `/about/` | `/breathwork/` | Inhalt war die Methode, nicht „über uns" |
| `/contact/` | `/kontakt/` | deutsche URL |
| `/coaches/`, `/single-coach/` | `/ueber-tom/` | Template-Seiten für Coaches, die es nicht gibt |
| `/clients/` | `/` | Template-Seite |
| `/blog/`, `/blog-2/` | `/breathwork/` | Blog war leer |
| `/home-2/`, `/about-2/`, `/contact-2/` | jeweiliges Original | Elementor-Duplikate |

Unverändert und damit ohne Handlungsbedarf: `/sessions/`, `/eisbaden/`, `/impressum/`,
`/datenschutz/`.

Keine Weiterleitung zeigt pauschal auf die Startseite, außer wo die alte Seite selbst inhaltsleer
war — ein Sammelredirect auf `/` wertet Google als Soft-404.

## Ebenfalls behoben

**404-Seite.** Fehlte. Bei einer Migration fängt sie ab, was die Weiterleitungen nicht abdecken,
und bietet echte Wege weiter statt einer Entschuldigung.

**Schriften wurden zu spät entdeckt.** Sie hingen hinter dem Stylesheet — der Browser fand sie erst
nach dem CSS-Parsing, was eine Roundtrip-Verzögerung auf den LCP-Text kostet. Jetzt `preload` für
die zwei Schnitte über der Falz, mit gehashten URLs aus dem Build.

**26 ausgelieferte Schriftdateien für 5 genutzte.** Kyrillisch, Griechisch und Vietnamesisch
wurden mitgeliefert. Auf Latin-Subsets umgestellt: **7 Dateien**.

**`opsz` lief ins Leere.** Die Stylesheets setzten `font-variation-settings: 'opsz' …`, geladen
wurde aber die Variante mit reiner Gewichtsachse — sämtliche optische Größenanpassung war wirkungslos.
Auf die `opsz`-Variante umgestellt (+30 kB, im direkten Vergleich klar sichtbar). `SOFT` und `WONK`
entfernt, weil beide ohnehin auf ihrem Standardwert standen.

**Zwei zu lange Titel** (63 und 66 Zeichen) gekürzt, damit sie in der Ergebnisliste nicht
abgeschnitten werden.

## Messwerte

| | Startseite | /breathwork | /kontakt |
|---|---|---|---|
| Seitengewicht | 275 kB | 190 kB | 177 kB |
| CLS | **0** | **0** | **0** |
| DOM-Knoten | 298 | 260 | 132 |
| JavaScript-Dateien | 1 | 1 | 1 |

Das eine Skript ist der Scroll-Reveal, und es ist reine Aufwertung — ohne JavaScript ist jeder
Abschnitt sichtbar. Kein Framework, keine Analytics, keine Tracker, kein Cookie-Banner.

## Geprüft und in Ordnung

- **Titel und Beschreibungen** eindeutig pro Seite, Längen im Rahmen.
- **Genau ein `<h1>` pro Seite**, Überschriftenhierarchie ohne Sprünge.
- **Canonicals** selbstreferenzierend, Trailing Slash durchgängig.
- **Sitemap** enthält nur die 8 echten Seiten — keine Weiterleitungs-Stubs, keine 404.
- **robots.txt** gibt alles frei und verweist auf die Sitemap.
- **Strukturierte Daten:** `LocalBusiness`/`HealthAndBeautyBusiness` mit NAP und Angeboten,
  `FAQPage` auf `/breathwork/`, `Person` auf `/ueber-tom/`. Über die gerenderte Seite geprüft,
  nicht über den Quelltext.
- **Bilder** durchgängig WebP mit mehreren Breiten, `alt` überall gesetzt, Hero `eager` +
  `fetchpriority=high`, alles Weitere `lazy`.
- **HTML validiert** fehlerfrei über alle neun eigenen Seiten (`html-validate`).
- **`lang="de"`**, mobil ohne horizontales Scrollen, Touch-Ziele ≥ 44 px.

## Eine Empfehlung gegen das Briefing: „Atemtherapie Bonn"

Der Suchbegriff war als Ziel vorgegeben. **Ich rate davon ab**, und zwar aus drei Gründen:

1. **Er widerspricht dem eigenen Inhalt.** Auf `/breathwork/` steht ausdrücklich „Breathwork ist
   keine Therapie". Eine Seite, die auf „Atemtherapie" optimiert und gleichzeitig erklärt, keine
   Therapie zu sein, ist für Google widersprüchlich und für Lesende unglaubwürdig.
2. **Er meint etwas anderes.** Atemtherapie ist eine physiotherapeutische Disziplin, etwa bei COPD
   oder Asthma. Wer danach sucht, sucht Behandlung — nicht das hier. Die Absprungrate wäre hoch,
   die Anfragen unpassend.
3. **Rechtliches Risiko.** Sich in einem Behandlungsbegriff zu positionieren, ist genau der HWG-Bereich,
   den der Relaunch bewusst verlässt.

**Stattdessen bespielt:** „Atemarbeit Bonn", „Atemübungen Bonn", „bewusstes Atmen Bonn" — ehrlich,
weniger umkämpft und deckungsgleich mit dem, was tatsächlich angeboten wird. „Atemarbeit" steht
bereits in der ersten Zeile der Startseite.

Wer trotzdem über „Atemtherapie Bonn" hereinkommt, landet auf einer Seite, die klar sagt, was das
hier ist und was nicht. Das ist das richtige Ergebnis, kein verpasstes.

## Was Tom nach dem Launch tun muss

Das kann kein Code erledigen:

1. **Google Search Console** für die Domain einrichten und die Sitemap einreichen. Danach im
   Bericht „Seiten" prüfen, ob die alten URLs als weitergeleitet erkannt werden.
2. **Google-Unternehmensprofil** anlegen oder aktualisieren. Für ein lokales Dienstleistungs-
   geschäft ist das der stärkste einzelne Rankinghebel für „Breathwork Bonn" — stärker als alles
   auf der Website selbst.
3. **NAP überall identisch halten.** Name, Adresse, Telefonnummer müssen im Unternehmensprofil und
   in Verzeichnissen exakt so stehen wie in `src/data/site.ts`.
4. **Die alte WordPress-Installation abschalten**, sobald die neue Seite live ist — nicht parallel
   laufen lassen.

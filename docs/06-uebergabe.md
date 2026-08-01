# Übergabe

## Vor dem Launch zwingend erledigen

### 1. Kontaktformular scharf schalten

Das Formular ist vollständig gebaut — Felder, Labels, Pflichtangaben, Honeypot gegen Spam,
Datenschutz-Häkchen. Es ist **nicht aktiv**, weil kein Endpunkt bekannt ist.

```ts
// src/data/site.ts
export const formEndpoint = '';   // ← hier die Endpunkt-URL eintragen
```

Sobald hier eine URL steht, erscheint das Formular auf `/kontakt/` automatisch, und die
Datenschutzerklärung stellt sich mit um. Solange es leer ist, zeigt die Seite eine
**vorausgefüllte Mail** und die Telefonnummer — beides funktioniert, aber ein Formular konvertiert
bei dieser Zielgruppe zuverlässig besser.

Geeignete Dienste ohne eigenes Backend: Formspree, Basin, Netlify Forms, Cloudflare Pages
Functions. Der Endpunkt muss `POST` mit `application/x-www-form-urlencoded` annehmen.

### 2. Weiterleitungen beim Hoster einrichten

Der Build erzeugt sie in drei Formaten. Nimm das, was der Hoster versteht:

- **Apache / LiteSpeed** (wahrscheinlich, da vorher WordPress): Inhalt von
  `dist/redirects.htaccess` in die `.htaccess` im Wurzelverzeichnis übernehmen.
- **Netlify / Cloudflare Pages**: `dist/_redirects` wird automatisch erkannt, nichts zu tun.
- **Sonst**: Die statischen Weiterleitungsseiten im `dist/` greifen ohnehin — schwächer als ein
  echter 301, aber sie funktionieren.

Danach stichprobenartig prüfen: `/about/`, `/uebermich/`, `/contact/`, `/home/`.

### 3. Alte WordPress-Installation abschalten

Nicht parallel weiterlaufen lassen. Doppelte Inhalte auf derselben Domain schaden.

### 4. Porträtfoto von Tom besorgen

`/ueber-tom/` ist bewusst **ohne Foto** gebaut. Die Bilder auf der Seite sind mit KI erzeugt, und
keines darf als Tom ausgegeben werden. Ein echtes Foto würde die Seite deutlich stärken — die
Person ist bei einem Ein-Mann-Angebot das wichtigste Vertrauenssignal.

Einbau: Foto nach `src/assets/tom.jpg`, dann in `src/pages/ueber-tom.astro` eine `<Image>`
ergänzen. Der Hinweis im Impressum zu KI-Bildern bleibt so lange bestehen, wie generierte Bilder
verwendet werden.

## Bilder

Vier Motive, mit Higgsfield erzeugt, in `src/assets/`:

| Datei | Verwendung | Zeigt |
|-------|-----------|-------|
| `raum.jpg` | Startseite, Hero | leerer Praxisraum mit Matte |
| `decke.jpg` | `/breathwork/` | Decke und Kissen auf Matte |
| `gruppensession.jpg` | `/sessions/` | fünf Personen liegen zugedeckt auf Matten |
| `eisbaden.jpg` | `/eisbaden/` | Person in einem kalten See im Winter |

**Keine der gezeigten Personen ist real, und keine ist Tom.** Das ist im Impressum offengelegt.
Sobald echte Fotos aus der Praxis vorliegen, sollten sie diese ersetzen — echte Bilder eines
kleinen Angebots schlagen generierte immer.

## Rechtliches — vor dem Launch prüfen lassen

Impressum und Datenschutzerklärung sind auf den tatsächlichen Stand geschrieben, nicht aus einem
Generator kopiert. Insbesondere:

- Die Datenschutzerklärung sagt, dass es **keine Cookies, kein Tracking, keine externen Schriften**
  gibt. Das stimmt für den aktuellen Stand. **Wenn später Analytics, Google Maps, ein Buchungstool
  oder ein eingebettetes Video dazukommen, muss sie angepasst werden** — und dann braucht es
  vermutlich auch ein Consent-Banner.
- Der Abschnitt zu **Gesundheitsdaten** (Art. 9 DSGVO) ist wichtig, weil Tom vor Sessions nach
  Vorerkrankungen fragt. Bitte prüfen lassen, ob die beschriebene Praxis der tatsächlichen
  entspricht.
- Der **Hosting-Anbieter** ist in den Server-Logdaten allgemein beschrieben. Manche Anbieter
  verlangen eine namentliche Nennung und einen Auftragsverarbeitungsvertrag.

Ich bin kein Anwalt. Einmal anwaltlich prüfen lassen, bevor es live geht.

## Inhaltliche Regeln, die nicht gebrochen werden dürfen

Die Vorgängerseite warb mit Aussagen, die weder belegt noch nach HWG/UWG zulässig sind — „die
ultimative Medizin um deinen Körper zu heilen", „so effizient wie 10 Sitzungen bei einem
Psychologen", „Reduktion von Ängsten", „Verarbeitung von Traumata". **Diese Aussagen sind bewusst
nicht übernommen worden und dürfen nicht zurückkommen.**

Formuliere über subjektives Erleben („viele Teilnehmende berichten von …"), nie über Diagnose,
Behandlung oder Heilung. Details in `CLAUDE.md`.

Ebenso nicht erfinden: Teilnehmerzahlen, Jahre Erfahrung, Sternebewertungen, „nur noch 2 Plätze".
Es gibt genau drei echte Stimmen — Helma Rombach, Ronja Ferri, Kai Schifferdecker.

## Wo was geändert wird

| Ändern will ich … | Datei |
|---|---|
| Preise, Dauer, Leistungsumfang | `src/data/offers.ts` |
| Telefon, Mail, Adresse | `src/data/site.ts` |
| Testimonials | `src/data/testimonials.ts` |
| FAQ | `src/data/faq.ts` |
| Kontraindikationen | `src/data/site.ts` |
| Farben, Schriftgrößen, Abstände | `src/styles/tokens.css` |
| Weiterleitungen | `src/data/redirects.ts` |

Preise und Kontaktdaten stehen **nirgends** fest im Text. Eine Preisänderung ist eine Zeile.

## Nach dem Launch

1. Google Search Console einrichten, Sitemap einreichen, Weiterleitungen im Bericht „Seiten"
   kontrollieren.
2. Google-Unternehmensprofil anlegen oder aktualisieren — der stärkste lokale Rankinghebel.
3. NAP in allen Verzeichnissen exakt wie in `src/data/site.ts`.

## Die zwei wirksamsten nächsten Schritte

Beides sind Geschäftsentscheidungen, keine Technik:

1. **Feste Gruppentermine veröffentlichen.** Die Gruppensession ist mit 20 € der Einstieg mit der
   niedrigsten Hemmschwelle — und aktuell nicht buchbar, weil es keine Termine gibt. Veröffentlichte
   Termine auf `/sessions/` wären die wirksamste einzelne Änderung an der Anfragequote.
2. **Eine Antwortzeit zusagen.** „Ich melde mich innerhalb von 24 Stunden" senkt die Hemmschwelle
   spürbar. Sie steht bewusst nirgends, weil sie unbelegt wäre. Sobald Tom sie halten kann, gehört
   sie auf `/kontakt/`.

## Entwicklung

```bash
npm install
npm run dev      # localhost:4321
npm run build    # nach dist/
npm run preview  # dist/ lokal ausliefern
npm run check    # Typen und Templates prüfen
```

`npm run build` muss vor jedem Commit fehlerfrei durchlaufen.

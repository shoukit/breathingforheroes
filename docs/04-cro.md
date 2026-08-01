# Schritt 5 — CRO-Prüfung

Nordstern: **abgeschickte Terminanfragen**. Geprüft wurde die gebaute Seite, nicht der Entwurf —
Positionen sind im Browser gemessen, nicht geschätzt.

## Gefunden und behoben

### 1. Mobiler Header verbrauchte 20 % des Viewports — dauerhaft

Der Header brauchte auf 390 px zwei Zeilen (Wortmarke + CTA, darunter die Navigation) und war
`sticky`: **166 px von 844 px**, an jeder Scrollposition. Das ist mehr, als eine dauerhaft
sichtbare CTA wert ist.

**Behoben:** unter 60 rem ist der Header statisch und scrollt weg. Ab 60 rem bleibt er sticky,
dort ist er eine einzige 69-px-Zeile. Die CTA geht mobil nicht verloren — sie steht im Hero und am
Ende jedes Abschnitts.

### 2. Auf `/kontakt` lag die Handlung unter der Falz

Gemessen: erster Kontaktweg bei **696 px** auf dem Telefon. Abzüglich des damals klebenden Headers
blieben 678 px sichtbar — die Konversionsseite zeigte ihre Handlung also gar nicht.

**Behoben:** Hero und Kontaktwege liegen jetzt in einem Abschnitt statt in zwei (die doppelte
Abschnittspolsterung war die Hauptursache), Abstände gestrafft.

| | vorher | nachher |
|---|---|---|
| `/kontakt` mobil | 696 px | **490 px** |
| `/kontakt` Desktop | 650 px | **403 px** |
| Startseite mobil, erste CTA | 678 px | **634 px** (bei vollem Viewport) |

### 3. Das Formular ist nicht scharf — der Ersatz war zu schwach

Ohne Endpunkt fiel die Seite auf „schreib mir eine Mail" zurück. Für eine Zielgruppe, die zögert,
ist eine leere Mail fast so abschreckend wie ein Anruf.

**Behoben:**
- Die Mail ist **vorausgefüllt**: Betreff und ein Textgerüst mit genau den Angaben, die Tom
  braucht (Interesse, vor Ort oder online, Anliegen, Fragen). Aus einem leeren Blatt wird ein
  Lückentext. Kostet kein Backend.
- **Schreiben schlägt Anrufen.** Der Mail-Weg ist der gefüllte Button, das Telefon der ruhige
  daneben. Wer erschöpft ist, ruft keinen Fremden an, um darüber zu sprechen.
- **„Was danach passiert"** in drei Schritten direkt darunter. Wer weiß, was auf die Anfrage folgt,
  schickt sie eher ab.
- Doppelte Kontaktdaten entfernt — sie standen zweimal auf derselben Seite.

### 4. Kein Risikoabbau an der CTA

Jeder Abschluss-Block trägt jetzt eine Zeile unter dem Button: *„Unverbindlich. Es antwortet
niemand aus einem Team, sondern Tom selbst."* Beides ist wahr und beantwortet die eigentliche
Sorge — nicht der Preis, sondern die Verpflichtung.

### 5. FAQ schloss die gerade gelesene Antwort

Das Akkordeon war exklusiv (`<details name>`). Beim Überfliegen von Einwänden ist das Reibung ohne
Gegenwert. Jetzt bleiben mehrere offen.

### 6. Adresse brach falsch um, Telefonnummer trennte über zwei Zeilen

Ein `<p>` kann kein `<address>` enthalten — der Parser schloss den Absatz vorzeitig, das
Ortsmarken-Icon rutschte über die Adresse. Telefonnummern brachen mitten in der Ziffernfolge um.
Beides behoben; `html-validate` läuft über alle acht Seiten fehlerfrei.

## Geprüft und für gut befunden

- **Genau eine primäre CTA pro Seite.** Sekundäres ist immer Textlink oder Ghost-Button. Die
  Header-CTA ist bewusst kleiner als die im Inhalt.
- **Keine Sackgassen.** Jede Seite endet mit einem Abschluss-Block.
- **Preis früh und offen.** Keine „Preis auf Anfrage"-Hürde.
- **Einwände sterben dort, wo sie entstehen** — der minutengenaue Ablauf steht vor dem Preis.
- **Kein Popup, kein Cookie-Banner, kein Chat-Widget.** Nichts, was den Lesefluss unterbricht.

## Nicht umgesetzt, weil es Erfindung wäre

- **Antwortzeit.** „Ich melde mich innerhalb von 24 Stunden" würde spürbar konvertieren — ist aber
  unbelegt. Sobald Tom eine Zusage machen kann, gehört sie auf `/kontakt` und unter jede CTA.
- **Bewertungen, Teilnehmerzahlen, Sterne.** Es gibt drei echte Stimmen; mehr wird nicht behauptet.
- **Verknappung.** Es gibt keine.

## Die größte verbleibende Chance — eine Geschäftsentscheidung, keine Technik

**Die Gruppensession ist der Einstieg mit der niedrigsten Hemmschwelle (20 €) — und man kann sie
nicht buchen, weil es keine Termine gibt.**

Der Weg für Unsichere lautet Gruppe → Einzel. Aktuell endet dieser Weg in einer Anfrage ohne
Datum. Feste, veröffentlichte Gruppentermine auf `/sessions` wären die wirksamste einzelne
Änderung an der Anfragequote — deutlich wirksamer als jede Textoptimierung.

Zweitwichtigste Maßnahme: **das Formular scharf schalten** (`formEndpoint` in
`src/data/site.ts`). Ein Formular konvertiert bei dieser Zielgruppe zuverlässig besser als ein
Mail-Client, auch ein vorausgefüllter.

# Graiuri
Static app for GitHub Pages: standard Romanian → how it could sound in a dialect (simplified respelling + approximate IPA). Romanian/English.

I tried getting information from as many sources as possible. There are many questions left unanswered and many regions do not have dedicated research made.

A page exists only where a source records a difference. Named varieties with no recorded difference are listed under "Research" (not indexed).

## Structure
- `js/dialects.js` – the 30 selectable pages (name, area, plain-language note, ordered rule list), grouped by region.
- `js/rules.js` – every sound change / word list, bilingual, with status (`sourced` / `extended` / `approx`) and source keys.
- `js/sources.js` – every source: full citation, what it covers and link.
- `js/examples.js` – real literary/documentary/field-transcription examples per region.
- `js/research.js` – research notes per region + the verification log.
- `js/engine.js`, `js/app.js`, `css/style.css`, `index.html` – engine and UI.
- `tests/run.mjs` (rule outputs vs. source examples), `tests/ui.mjs` (data completeness): `node tests/run.mjs && node tests/ui.mjs`.



## Build
The page loads `app.bundle.js` (a single classic script, so it also works when index.html is opened from disk). After editing anything in `js/`, run `npm i && npm run build`.

# Graiuri
Static app (no build step needed for GitHub Pages as long as `app.bundle.js` is uploaded): standard Romanian → how it could sound in a dialect (simplified respelling + approximate IPA). Phone-friendly; Romanian/English.

## Where things live
- `js/dialects.js` – the 33 selectable pages (name, area, plain-language note, ordered rule list), grouped by region.
- `js/rules.js` – every sound change / word list, bilingual, with source keys. Rules are only what the sources state.
- `js/sources.js` – every source: full citation, what it covers, where it was collected, caveats, link.
- `js/examples.js` – real examples per region. `js/research.js` – research notes per region.
- `js/engine.js`, `js/app.js`, `css/style.css`, `index.html` – engine and UI.
- `tests/run.mjs` (rule outputs vs. source examples), `tests/ui.mjs` (data completeness): `npm test`.

## Build
The page loads `app.bundle.js` (a single classic script, so it also works when index.html is opened from disk). After editing anything in `js/`, run `npm i && npm run build`.

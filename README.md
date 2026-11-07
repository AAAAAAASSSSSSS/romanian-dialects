# Graiuri
Static app: standard Romanian → how it could sound in a dialect (simplified respelling + approximate IPA).

## Structure
- `js/dialects.js` – the 33 selectable pages (name, area, plain-language note, ordered rule list), grouped by region.
- `js/rules.js` – every sound change / word list with source keys. Rules are only what the sources state.
- `js/sources.js` – every source: full citation, what it covers, where it was collected, caveats, link.
- `js/examples.js` – real examples per region. `js/research.js` – research notes per region.
- `js/engine.js`, `js/app.js`, `css/style.css`, `index.html` – engine and UI.
- `tests/run.mjs` (rule outputs vs. source examples), `tests/ui.mjs` (data completeness): `npm test`.

# issackjohn.github.io

Personal site for **Issack John** — a browser performance engineer working at Microsoft Edge and in V8. The site is a hand-authored static site with no build step, designed to feel quiet, editorial, and easy to maintain.

**Live:** https://issackjohn.github.io

## What it is

-   Zero runtime frameworks. The site ships hand-tuned HTML, CSS, and a small vanilla-JS enhancement layer.
-   A simple theme system with light/dark mode, OS preference support, and no flash on load.
-   An accessible, static layout with semantic landmarks, a skip link, visible focus states, and reduced-motion support.
-   SEO-friendly metadata and structured data for the homepage.

## Structure

```
.
├── index.html                           # Homepage (About, Projects, History, Writing, Watching)
├── 404.html                             # Friendly not-found page
├── complex-workloads.html               # Standalone benchmark/demo page
├── blog/
│   └── index.html                       # Blog landing page
├── projects/
│   ├── oncology-icu-rounds-prep.html   # Project case study page
│   └── assets/                          # Screenshots for the case study
├── assets/
│   ├── main.js                          # Theme toggle, content rendering, reveal-on-scroll, email link
│   ├── styles.css                       # Layout, tokens, typography, responsive styling
│   └── favicon.svg                      # Site icon
└── SpeedometerJSWebComponents/          # Optional git submodule
```

## Pages

-   [index.html](index.html) — homepage with the main profile, project links, history, writing, and watching sections.
-   [projects/oncology-icu-rounds-prep.html](projects/oncology-icu-rounds-prep.html) — case study for the oncology prep app.
-   [blog/index.html](blog/index.html) — blog landing page for future posts.
-   [complex-workloads.html](complex-workloads.html) — standalone benchmark/demo page.

## Development

```bash
npm install
npm start              # serve locally with @web/dev-server
npm run pretty:check   # check formatting
npm run pretty:fix     # auto-format HTML / JS / CSS
node -c assets/main.js # syntax check the main script
```

A simple static file server also works for local preview:

```bash
python3 -m http.server 8000
```

## Notes

-   The site is static and deploys directly to GitHub Pages.
-   The email address is assembled at runtime in `assets/main.js` to avoid exposing it as plain text in the source for naive scrapers.
-   The repo currently includes one git submodule: `SpeedometerJSWebComponents/`.

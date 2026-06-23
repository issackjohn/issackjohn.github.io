# issackjohn.github.io

Personal site for **Issack John** — Web Performance Engineer at Microsoft Edge and core
contributor to [Speedometer 3.0](https://browserbench.org/Speedometer3.0/).

**Live:** https://issackjohn.github.io

## Highlights

-   **Zero runtime frameworks.** The homepage ships hand-tuned CSS and a small vanilla-JS
    enhancement layer — no Tailwind CDN, no build step. Fitting for a performance site.
-   **Dark mode** that respects the OS preference and remembers a manual override (no flash on load).
-   **Accessible**: semantic landmarks, a skip link, visible focus styles, and `prefers-reduced-motion` support.
-   **SEO-ready**: meta description, Open Graph/Twitter tags, canonical URL, and JSON-LD `Person` structured data.

## Structure

```
.
├── index.html          # Portfolio home
├── 404.html            # Friendly not-found page
├── assets/
│   ├── styles.css      # Theme tokens, layout, components, dark mode
│   ├── main.js         # Theme toggle + content rendering + scroll reveal
│   └── favicon.svg     # Inline-gradient "IJ" mark
└── speedometer*.html   # Benchmark runners (see below)
```

## Pages

| Page                                                                       | Description                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------- |
| [index.html](index.html)                                                   | Portfolio home — about, projects, writing, and links           |
| [speedometer.html](speedometer.html)                                       | Speedometer 3.0 test runner with side-by-side suite comparison |
| [complex-workloads.html](complex-workloads.html)                           | Browse and launch individual complex benchmark workloads       |
| [speedometer-with-complex.html](speedometer-with-complex.html)             | Benchmark experiments with complex DOM structures (June 2023)  |
| [speedometer-with-new-structure.html](speedometer-with-new-structure.html) | Updated complex DOM architecture experiments (September 2023)  |
| [hang.html](hang.html)                                                     | Page-hang debugging sandbox                                    |

## Benchmark variants (git submodules)

| Submodule                     | Description                                 |
| ----------------------------- | ------------------------------------------- |
| `Speedometer1`                | Fork with complex DOM workloads added       |
| `Speedometer2`                | Speedometer 2.x variant                     |
| `Speedometer3`                | Speedometer 3.0 reference                   |
| `SpeedometerJSWebComponents`  | JavaScript Web Components implementation    |
| `SpeedometerWithBacklogOpen`  | Speedometer with backlog panel open         |
| `SpeedometerWithReminderOpen` | Speedometer with reminder panel open        |
| `SpeedometerWithComplex`      | Speedometer with complex workload additions |

## Development

```bash
npm install            # install dev dependencies
npm start              # serve locally with @web/dev-server (live reload)
npm run pretty:check   # check formatting
npm run pretty:fix     # auto-format HTML / JS / CSS
```

The site is static — any file server (or GitHub Pages) will serve it directly.

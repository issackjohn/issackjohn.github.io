# issackjohn.github.io

Personal site for [Issack John](https://issackjohn.github.io) — Web Performance Engineer at Microsoft Edge.

**Live site:** https://issackjohn.github.io

## Pages

| Page | Description |
|------|-------------|
| [index.html](index.html) | Portfolio home — about, blog posts, projects, and links |
| [speedometer.html](speedometer.html) | Speedometer 3.0 test runner with side-by-side suite comparison |
| [speedometer-with-complex.html](speedometer-with-complex.html) | Benchmark experiments with complex DOM structures (June 2023) |
| [speedometer-with-new-structure.html](speedometer-with-new-structure.html) | Updated complex DOM architecture experiments (September 2023) |
| [complex-workloads.html](complex-workloads.html) | Browse and launch individual complex benchmark workloads |
| [hang.html](hang.html) | Page-hang debugging tool |

## Submodules

Several Speedometer benchmark variants are included as git submodules:

| Submodule | Description |
|-----------|-------------|
| `Speedometer1` | Fork with complex DOM workloads added |
| `Speedometer2` | Speedometer 2.x variant |
| `Speedometer3` | Speedometer 3.0 reference |
| `SpeedometerJSWebComponents` | JavaScript Web Components implementation |
| `SpeedometerWithBacklogOpen` | Speedometer with backlog panel open |
| `SpeedometerWithReminderOpen` | Speedometer with reminder panel open |
| `SpeedometerWithComplex` | Speedometer with complex workload additions |

## Development

```bash
npm install      # install dev dependencies (Prettier)
npm run format   # format HTML/JS files
```

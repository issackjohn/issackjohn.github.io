---
title: "Contributing to Speedometer 3.0"
date: "2024-03-11"
summary: "How the Edge team helped ship Speedometer 3.0’s Complex DOM tests to better reflect real-world DOM/CSS complexity."
tags: ["web performance", "speedometer", "benchmarking"]
eleventyExcludeFromCollections: false
permalink: false
---

Speedometer 3.0 is a cross-industry browser benchmark update that adds many new tests and modern variants.

The Edge team’s main contribution is **Complex DOM**: TodoMVC interactions run inside a larger “app shell” with a large DOM and complex CSS selectors, so each action forces real style/layout work (including partial selector matches).

The article explains the motivation (real apps hit latency cliffs from DOM/CSS complexity), the data-driven approach (sampling DOM sizes/depth and selectors from real apps), and notes variants for Web Components/Lit plus a stacking-context flavor.

Links: <a href="https://blogs.windows.com/msedgedev/2024/03/11/contributing-to-speedometer-30/" target="_blank" rel="noopener noreferrer">article</a> · <a href="https://browserbench.org/Speedometer3.0" target="_blank" rel="noopener noreferrer">Speedometer 3.0</a> · <a href="https://github.com/WebKit/Speedometer/issues" target="_blank" rel="noopener noreferrer">GitHub</a>

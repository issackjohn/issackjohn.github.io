---
version: alpha
name: Ledger Editorial
colors:
    primary: "#1f3aa6"
    primary-hover: "#15287a"
    primary-dark: "#93a8f0"
    primary-hover-dark: "#b6c4f6"
    bg: "#fbfaf8"
    text: "#15140f"
    text-muted: "#57534c"
    text-faint: "#8a847b"
    line: "rgba(20, 18, 12, 0.12)"
    frame: "rgba(20, 18, 12, 0.22)"
    field: "rgba(20, 18, 12, 0.03)"
    bg-dark: "#0c0d10"
    text-dark: "#ededec"
    text-muted-dark: "#a3a6ad"
    text-faint-dark: "#6f7079"
    line-dark: "rgba(255, 255, 255, 0.12)"
    frame-dark: "rgba(255, 255, 255, 0.22)"
    field-dark: "rgba(255, 255, 255, 0.035)"
typography:
    body:
        fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
        fontSize: 17px
        lineHeight: 1.65
    brand:
        fontFamily: 'ui-monospace, "SF Mono", "SFMono-Regular", Menlo, Consolas, "Liberation Mono", monospace'
        fontSize: 0.82rem
        letterSpacing: 0.04em
    kicker:
        fontFamily: 'ui-monospace, "SF Mono", "SFMono-Regular", Menlo, Consolas, "Liberation Mono", monospace'
        fontSize: 0.78rem
        letterSpacing: 0.06em
    statement:
        fontFamily: '"Iowan Old Style", "Palatino Linotype", Palatino, "Book Antiqua", Georgia, serif'
        fontSize: 3.5rem
        fontWeight: 500
        lineHeight: 1.05
        letterSpacing: -0.02em
    page-title:
        fontFamily: '"Iowan Old Style", "Palatino Linotype", Palatino, "Book Antiqua", Georgia, serif'
        fontSize: 2.8rem
        fontWeight: 500
        lineHeight: 1.05
        letterSpacing: -0.02em
    block-lead:
        fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
        fontSize: 1.18rem
        lineHeight: 1.5
    evidence-value:
        fontFamily: '"Iowan Old Style", "Palatino Linotype", Palatino, "Book Antiqua", Georgia, serif'
        fontSize: 2rem
        lineHeight: 1
    evidence-label:
        fontFamily: 'ui-monospace, "SF Mono", "SFMono-Regular", Menlo, Consolas, "Liberation Mono", monospace'
        fontSize: 0.72rem
        letterSpacing: 0.08em
    cta:
        fontFamily: 'ui-monospace, "SF Mono", "SFMono-Regular", Menlo, Consolas, "Liberation Mono", monospace'
        fontSize: 0.85rem
        letterSpacing: 0.02em
rounded:
    none: 0px
spacing:
    xs: 0.3rem
    sm: 0.95rem
    md: 1.5rem
    lg: 2.25rem
    xl: 3rem
    xxl: 4.5rem
    max-width: 50rem
components:
    body:
        backgroundColor: "{colors.bg}"
        textColor: "{colors.text}"
        typography: "{typography.body}"
    body-dark:
        backgroundColor: "{colors.bg-dark}"
        textColor: "{colors.text-dark}"
    brand:
        textColor: "{colors.text}"
        typography: "{typography.brand}"
    brand-dark:
        textColor: "{colors.text-dark}"
    kicker:
        textColor: "{colors.text-faint}"
        typography: "{typography.kicker}"
    kicker-dark:
        textColor: "{colors.text-faint-dark}"
    statement:
        textColor: "{colors.text}"
        typography: "{typography.statement}"
    statement-dark:
        textColor: "{colors.text-dark}"
    page-title:
        textColor: "{colors.text}"
        typography: "{typography.page-title}"
    page-title-dark:
        textColor: "{colors.text-dark}"
    block-lead:
        textColor: "{colors.text}"
        typography: "{typography.block-lead}"
    block-lead-dark:
        textColor: "{colors.text-dark}"
    evidence-value:
        textColor: "{colors.text}"
        typography: "{typography.evidence-value}"
    evidence-value-dark:
        textColor: "{colors.text-dark}"
    evidence-label:
        textColor: "{colors.text-faint}"
        typography: "{typography.evidence-label}"
    evidence-label-dark:
        textColor: "{colors.text-faint-dark}"
    topbar:
        backgroundColor: "{colors.bg}"
        height: 58px
    topbar-dark:
        backgroundColor: "{colors.bg-dark}"
    theme-toggle:
        size: 36px
        backgroundColor: transparent
        textColor: "{colors.text-muted}"
    theme-toggle-dark:
        textColor: "{colors.text-muted-dark}"
    ledger-item:
        padding: "{spacing.sm}"
    ledger-item-title-hover:
        textColor: "{colors.primary}"
    ledger-item-title-hover-dark:
        textColor: "{colors.primary-dark}"
    cta-link:
        textColor: "{colors.text}"
        typography: "{typography.cta}"
    cta-link-hover:
        textColor: "{colors.primary}"
    cta-link-dark:
        textColor: "{colors.text-dark}"
    cta-link-hover-dark:
        textColor: "{colors.primary-dark}"
    divider:
        backgroundColor: "{colors.line}"
        height: 1px
    divider-dark:
        backgroundColor: "{colors.line-dark}"
    input-field:
        backgroundColor: "{colors.field}"
        textColor: "{colors.text-muted}"
    input-field-dark:
        backgroundColor: "{colors.field-dark}"
        textColor: "{colors.text-muted-dark}"
    button-primary-hover:
        backgroundColor: "{colors.primary-hover}"
    button-primary-hover-dark:
        backgroundColor: "{colors.primary-hover-dark}"
    card-interactive-hover:
        backgroundColor: "{colors.frame}"
    card-interactive-hover-dark:
        backgroundColor: "{colors.frame-dark}"
---

# Ledger Editorial — DESIGN.md

## Brand & Style

Ledger Editorial is a hand-tuned, dependency-free, and performance-oriented design system. It is designed to feel quiet, classic, editorial, and effortless to maintain.

The chosen style is **Typographic Minimalist Ledger**. The design evokes the authoritative, deliberate gravity of high-quality journalism combined with the clean, structured utility of an engineering record or ledger. It utilizes stark contrasts, precise horizontal dividers, generous white space, and zero frames or roundness. Key characteristics:

- **Quiet Dignity:** Let typography and content drive the layout, avoiding heavy containers or decorative borders.
- **High Readability:** Emphasize generous line heights, legible font sizing, and strict contrast standards.
- **Structured Rhythm:** Use a strict vertical rhythm built around horizontal rows separated by fine rules.

## Colors

The color palette centers on organic, low-contrast neutral tones in light mode and deep, dark slate blacks in dark mode to preserve eye comfort. Interaction is driven by a single, high-contrast, modern cobalt blue in light mode (shifting to lavender-blue in dark mode).

### Light Theme

- **Background (`#fbfaf8`):** A warm, soft limestone background that reduces glare.
- **Text (`#15140f`):** A deep, warm charcoal black ensuring exceptional readability.
- **Text Muted (`#57534c`):** A sophisticated stone grey for auxiliary copy and descriptions.
- **Text Faint (`#8a847b`):** A lighter dust grey for non-actionable labels and metadata.
- **Accent (`#1f3aa6`):** A strong cobalt blue that serves as the primary interactive visual cue.
- **Accent Hover (`#15287a`):** A deeper navy blue used on interactive hover states.

### Dark Theme

- **Background (`#0c0d10`):** A dark velvet obsidian blue/black.
- **Text (`#ededec`):** A soft off-white to prevent stark, tiring contrast.
- **Text Muted (`#a3a6ad`):** A gentle, cool grey for subtext and metadata.
- **Text Faint (`#6f7079`):** A muted slate grey for non-actionable labels.
- **Accent (`#93a8f0`):** A bright, soft lavender-blue that stands out clearly on dark backgrounds.
- **Accent Hover (`#b6c4f6`):** A lighter, glowing lavender-blue for dark mode hovers.

### Lines & Fields

- **Line:** A fine, semi-transparent hairline used for horizontal dividers and border rules.
- **Frame:** A slightly more prominent boundary line used for interactive borders (e.g., hover states on inputs or panels).
- **Field:** A soft, shaded tint backing used to highlight specific blocks of text or input fields.

## Typography

The design system establishes a strong hierarchy by pairing an elegant serif for high-level statements, an ultra-legible sans-serif for body copy, and a technical monospaced font for labels and metadata.

- **Headlines & Statements:** Set in _Iowan Old Style_ (or _Georgia_ / _Palatino_ fallback) in an italic, medium weight. This conveys narrative authority and editorial gravitas.
- **Body & Paragraphs:** Set in standard system sans-serif (_system-ui_ / _-apple-system_) at 17px with a spacious 1.65 line height. This guarantees modern professional legibility across platforms.
- **Labels, Branding, & Metadata:** Set in system monospace (_ui-monospace_ / _SF Mono_) with generous letter spacing (up to 0.08em) and uppercase formatting. This evokes precise, technical record-keeping.

## Layout & Spacing

The layout is built around a single, highly-focused column designed to guide the reader sequentially down the page.

- **Single Column Focus:** A strict maximum width of `50rem` keeps the layout centered, compact, and extremely readable on large screens.
- **Horizontal Lanes:** Sections are built as grids or horizontal rows, separated by elegant `1px` horizontal rules.
- **Vertical Rhythm:** Spacing relies on a clean, scalable rem system (from micro-gaps to generous hero margins), ensuring that each element has ample room to breathe.
- **Fluid Padding:** Content uses generous responsive padding (`1.5rem` horizontally) to adapt beautifully to screens of all sizes.

## Elevation & Depth

In line with its editorial ledger concept, this design system uses **Tonal Planes** and **Zero Elevation**.

- **Flat Aesthetic:** There are no box shadows, drop shadows, or gradient effects. The interface is completely flat.
- **Tonal Contrast:** Visual depth and hierarchy are achieved entirely through content organization, high-contrast typography, and subtle, semi-transparent divider lines.
- **Interactive Feedback:** Rather than physical lifting, interactive hovers rely on micro-translations (e.g., moving arrows slightly on the X-axis) and clear, instantaneous color transitions.

## Shapes

Shapes in this design system are governed by **Architectural Sharpness**.

- **No Rounded Corners:** Every element—including interactive buttons, cards, images, input fields, and borders—uses a hard `0px` radius.
- **Geometric Structure:** The lack of rounded corners reinforces the technical, engineered ledger aesthetic, emphasizing structure and permanence.

## Components

### Topbar & Navigation

The sticky navigation header uses a custom translucent background blending with the theme's background color via `backdrop-filter: blur(8px)`, separated from the body by a single horizontal hairline.

### Theme Toggle

A subtle, clean square button (`36px` x `36px`) bordered by a fine line, transitioning beautifully between light and dark modes with an instantaneous SVG icon swap.

### Ledger List & Items

Dynamic lists (e.g., projects, commit history, writing) are arranged as row-by-row lists where each item is separated by a fine rule. Items highlight subtle arrows and transition their header text to the accent color on hover, accompanied by a micro-translation arrow slide.

### Call to Action (CTA) Links

CTAs are represented as monospaced inline text decorated with a prominent bottom border (`1px` solid, matching the frame/accent color). On hover, both the text and border change colors to the accent color.

## Do's and Don'ts

- **Do** maintain a single, highly readable font size hierarchy across headers and body text.
- **Do** use horizontal divider lines (`1px` hairline) to structure content and separate independent entries.
- **Do** ensure contrast standards (WCAG AA) are fully met for both light and dark modes.
- **Do** use uppercase monospace text with generous tracking for technical data, metadata, and labels.
- **Don't** use any rounded corners (`border-radius`) or shadow effects.
- **Don't** introduce more than one accent color to the design.
- **Don't** crowd elements; let the layout maintain high whitespace ratios.

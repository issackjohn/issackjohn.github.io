# Issack John's Personal Website

A modern, high-performance personal website built with [Eleventy](https://www.11ty.dev/) and [Tailwind CSS](https://tailwindcss.com/).

## Features

-   🚀 **Modern Build System**: Eleventy static site generator with Tailwind CSS
-   📱 **Responsive Design**: Mobile-first approach with accessibility features
-   ⚡ **High Performance**: Optimized CSS (~4.7KB gzipped), critical CSS inlining
-   🔍 **SEO Optimized**: Meta tags, Open Graph, JSON-LD, sitemap, RSS feed
-   ♿ **Accessible**: WCAG compliant with skip links, proper landmarks, semantic HTML
-   📄 **Content Management**: Markdown blog posts, JSON data files
-   🔧 **PWA Ready**: Service worker, web app manifest, offline support
-   🚀 **CI/CD**: GitHub Actions with performance budgets and quality checks

## Getting Started

### Prerequisites

-   Node.js 18 or later
-   npm

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/issackjohn/issackjohn.github.io.git
    cd issackjohn.github.io
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm run dev
    ```

    The site will be available at `http://localhost:8080`

### Development Commands

-   `npm run dev` - Start development server with live reload
-   `npm run build` - Build the site for production
-   `npm run build:css` - Build and minify CSS
-   `npm run lint` - Run ESLint on JavaScript files
-   `npm run lint:fix` - Fix ESLint issues automatically
-   `npm run pretty:check` - Check code formatting with Prettier
-   `npm run pretty:fix` - Format code with Prettier

## Project Structure

```
├── src/                     # Source files
│   ├── _data/              # Global data files (JSON)
│   │   ├── site.json       # Site configuration
│   │   ├── projects.json   # Projects data
│   │   └── videos.json     # Videos data
│   ├── _includes/          # Reusable components
│   │   ├── navigation.njk  # Site navigation
│   │   └── footer.njk      # Site footer
│   ├── _layouts/           # Page layouts
│   │   └── base.njk        # Base layout with SEO and PWA features
│   ├── assets/             # Static assets
│   │   ├── css/
│   │   │   └── input.css   # Tailwind CSS source
│   │   └── js/
│   │       └── main.js     # Site JavaScript
│   ├── content/            # Content files
│   │   └── blog/           # Blog posts (Markdown)
│   ├── index.njk           # Homepage
│   ├── blog.njk            # Blog listing page
│   ├── blog-post.njk       # Individual blog post template
│   ├── projects.njk        # Projects page
│   ├── about.njk           # About page
│   ├── sitemap.njk         # XML sitemap generator
│   ├── feed.njk            # RSS feed generator
│   └── service-worker.js   # Service worker for offline support
├── _site/                  # Generated site (ignored by git)
├── .eleventy.js            # Eleventy configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── .github/workflows/      # GitHub Actions CI/CD
```

## Content Management

### Adding Blog Posts

1. Create a new Markdown file in `src/content/blog/`:

    ```markdown
    ---
    title: "Your Post Title"
    date: "2025-01-01"
    summary: "Brief description of your post"
    tags: ["tag1", "tag2"]
    ---

    # Your Post Title

    Your content here...
    ```

2. Build the site to see your new post:
    ```bash
    npm run build
    ```

### Managing Projects

Edit `src/_data/projects.json` to add or modify project listings:

```json
{
    "projects": [
        {
            "title": "Project Name",
            "url": "https://example.com",
            "date": "2025-01-01",
            "description": "Project description"
        }
    ]
}
```

### Site Configuration

Update site settings in `src/_data/site.json`:

```json
{
    "title": "Your Name",
    "description": "Your site description",
    "url": "https://yoursite.com",
    "author": {
        "name": "Your Name",
        "email": "your@email.com"
    }
}
```

## Performance

The site is optimized for performance with:

-   **CSS Bundle**: ~4.7KB gzipped (target: <20KB)
-   **JavaScript**: Minimal, <25KB total
-   **Critical CSS**: Inlined for above-the-fold content
-   **Service Worker**: Caches static assets for offline access
-   **Lighthouse Scores**: Performance ≥90, Accessibility ≥100, SEO ≥95

## Deployment

The site automatically deploys to GitHub Pages on pushes to the main branch via GitHub Actions. The workflow:

1. Builds the site
2. Runs quality checks (linting, formatting, performance budgets)
3. Tests with Lighthouse CI
4. Deploys to GitHub Pages

## Browser Support

-   Modern browsers (ES2021+)
-   Progressive enhancement for older browsers
-   Accessible across all supported browsers

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Run tests: `npm run lint && npm run pretty:check`
5. Commit your changes: `git commit -m 'Add feature'`
6. Push to the branch: `git push origin feature-name`
7. Submit a pull request

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

-   Built with [Eleventy](https://www.11ty.dev/)
-   Styled with [Tailwind CSS](https://tailwindcss.com/)
-   Hosted on [GitHub Pages](https://pages.github.com/)
-   Performance monitoring with [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)

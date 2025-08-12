# Contributing Guidelines

Thank you for your interest in contributing to this project! This document outlines the process for contributing to Issack John's personal website.

## Development Setup

1. **Fork and clone the repository**:

    ```bash
    git clone https://github.com/yourusername/issackjohn.github.io.git
    cd issackjohn.github.io
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Start development server**:
    ```bash
    npm run dev
    ```

## Content Guidelines

### Blog Posts

When adding blog posts:

1. Create files in `src/content/blog/` with `.md` extension
2. Use kebab-case for filenames: `my-new-post.md`
3. Include proper frontmatter:
    ```yaml
    ---
    title: "Descriptive Title"
    date: "YYYY-MM-DD"
    summary: "Brief, engaging summary under 160 characters"
    tags: ["relevant", "tags"]
    ---
    ```
4. Write in clear, concise language
5. Use proper heading hierarchy (start with h2, since h1 is the title)
6. Include alt text for images
7. Keep posts focused and provide value to readers

### Projects

When updating projects in `src/_data/projects.json`:

1. Include all required fields: `title`, `url`, `description`
2. Add `date` for time-sensitive projects
3. Write clear, compelling descriptions
4. Ensure URLs are accessible and valid
5. Order by importance/recency

## Code Standards

### CSS/Styling

-   Use Tailwind CSS utility classes when possible
-   Custom CSS should be added to `src/assets/css/input.css`
-   Follow BEM methodology for custom components
-   Ensure responsive design works on all screen sizes
-   Test with high contrast and reduced motion preferences

### JavaScript

-   Write vanilla JavaScript (no frameworks)
-   Use modern ES6+ features
-   Keep code minimal and focused on progressive enhancement
-   Ensure functionality works without JavaScript
-   Follow ESLint rules (run `npm run lint`)

### HTML

-   Use semantic HTML elements
-   Include proper ARIA labels and roles
-   Ensure proper heading hierarchy
-   Add alt text for all images
-   Test with screen readers

## Performance Requirements

### CSS

-   Keep total CSS under 20KB uncompressed
-   Critical CSS should be inlined
-   Non-critical CSS should be loaded asynchronously

### JavaScript

-   Keep total JavaScript under 25KB uncompressed (excluding analytics)
-   Use lazy loading for non-critical features
-   Avoid blocking the main thread

### Images

-   Optimize all images before adding
-   Use modern formats (WebP, AVIF) with fallbacks
-   Include responsive image variants
-   Add proper alt text

## Accessibility Standards

All contributions must meet WCAG 2.1 AA standards:

-   **Color contrast**: 4.5:1 for normal text, 3:1 for large text
-   **Keyboard navigation**: All interactive elements must be keyboard accessible
-   **Screen readers**: Proper semantic markup and ARIA labels
-   **Focus indicators**: Visible focus states for all interactive elements
-   **Alternative text**: Descriptive alt text for all images
-   **Language**: Proper language attributes

## Testing Checklist

Before submitting a pull request:

1. **Build successfully**:

    ```bash
    npm run build
    ```

2. **Pass linting**:

    ```bash
    npm run lint
    npm run pretty:check
    ```

3. **Test manually**:

    - [ ] All links work correctly
    - [ ] Site works with JavaScript disabled
    - [ ] Responsive design works on mobile/tablet/desktop
    - [ ] Keyboard navigation works throughout
    - [ ] Content is readable and accessible

4. **Performance testing**:
    - [ ] CSS bundle stays under 20KB
    - [ ] JavaScript bundle stays under 25KB
    - [ ] Core Web Vitals are good
    - [ ] Lighthouse scores meet targets (Performance ≥90, Accessibility ≥100, SEO ≥95)

## Pull Request Process

1. **Create a descriptive branch name**:

    ```bash
    git checkout -b feature/add-new-blog-post
    git checkout -b fix/navigation-accessibility
    ```

2. **Make focused commits**:

    - One logical change per commit
    - Write clear commit messages
    - Reference issues if applicable

3. **Test thoroughly**:

    - Run all checks locally
    - Test on multiple devices/browsers
    - Verify accessibility with screen reader

4. **Submit pull request**:
    - Provide clear description of changes
    - Include screenshots for visual changes
    - Link to related issues
    - Request review from maintainers

## Content Workflow

### Adding New Content

1. **Blog posts**: Create markdown file in `src/content/blog/`
2. **Projects**: Update `src/_data/projects.json`
3. **Videos**: Update `src/_data/videos.json`
4. **Pages**: Create new `.njk` file in `src/`

### Content Review

-   Check spelling and grammar
-   Ensure technical accuracy
-   Verify all links work
-   Test on mobile devices
-   Validate HTML and accessibility

## Performance Budgets

-   **CSS**: Maximum 20KB uncompressed
-   **JavaScript**: Maximum 25KB uncompressed (excluding analytics)
-   **Images**: Optimized for web, responsive variants included
-   **Lighthouse Performance**: ≥90 (mobile)
-   **Lighthouse Accessibility**: ≥100
-   **Lighthouse SEO**: ≥95

## Questions?

If you have questions about contributing:

1. Check existing [issues](https://github.com/issackjohn/issackjohn.github.io/issues)
2. Review this documentation
3. Open a new issue for discussion

Thank you for helping make this project better!

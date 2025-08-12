# Issack John GitHub Pages Website

This is a static HTML/CSS/JavaScript website hosted on GitHub Pages, focused on web performance and Speedometer benchmarks. The site showcases blog posts, projects, and various Speedometer test implementations.

**ALWAYS follow these instructions first and only fallback to additional search and context gathering if the information here is incomplete or found to be in error.**

## Working Effectively

### Initial Setup

Always run these commands in order when starting with a fresh clone:

1. **Verify Node.js and npm installation:**

    ```bash
    node --version  # Should be v20+
    npm --version   # Should be v10+
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

    - **TIMING**: Takes approximately 37 seconds
    - **TIMEOUT**: Set timeout to 90 seconds minimum
    - **Expected**: Installs 177+ packages, may show vulnerabilities (this is normal for this project)

3. **Verify code formatting:**

    ```bash
    npm run pretty:check
    ```

    - **TIMING**: Takes 1-2 seconds
    - **Expected output**: "All matched files use Prettier code style!"

### Development Workflow

1. **Start the development server:**

    ```bash
    npm start
    ```

    - **TIMING**: Takes approximately 5 seconds to start
    - **TIMEOUT**: Set timeout to 30 seconds minimum
    - **Server URL**: http://localhost:8001/
    - **NEVER CANCEL**: Wait for server to fully start before proceeding
    - **Expected output**: "Web Dev Server started..." with local and network URLs

2. **Access the website:**
    - Main page: http://localhost:8001/
    - Speedometer runner: http://localhost:8001/speedometer.html
    - Complex workloads: http://localhost:8001/complex-workloads.html

### Code Formatting and Validation

1. **ALWAYS check code formatting before committing:**

    ```bash
    npm run pretty:check
    ```

2. **Fix formatting issues:**

    ```bash
    npm run pretty:fix
    ```

    - **TIMING**: Takes 1-3 seconds depending on number of files
    - Run this if pretty:check fails

3. **CRITICAL**: All code must pass Prettier formatting checks. The project uses specific Prettier configuration:
    - Print width: 250 characters
    - Tab width: 4 spaces
    - Single quotes: false (use double quotes)
    - Trailing commas: ES5 style

## Manual Validation Requirements

**CRITICAL**: After making any changes, ALWAYS perform these validation steps:

### 1. Complete Development Workflow Test

```bash
# Start fresh terminal session
npm install                    # Verify dependencies install
npm run pretty:check          # Verify formatting
npm start                     # Start development server (wait for "Web Dev Server started...")
```

### 2. Website Functionality Validation

Navigate to these URLs and verify they load without errors:

- http://localhost:8001/ (main homepage)
- http://localhost:8001/speedometer.html (Speedometer test runner)
- http://localhost:8001/complex-workloads.html (complex workloads page)

### 3. User Scenarios to Test

1. **Homepage Navigation**: Load the main page and verify all sections display:
    - Header with "Issack John" title
    - Latest Blog Posts section with at least one post
    - Featured Projects section with Speedometer links
    - Recommended Videos section

2. **Speedometer Page Testing**: Load speedometer.html and verify:
    - Page loads with "Speedometer 3.0 Test Runner" title
    - All framework dropdowns are populated
    - "Run Tests" button is visible and functional
    - All framework links in the benchmarks section are present

3. **Code Quality**: Ensure all files pass Prettier formatting

## Repository Structure

### Root Directory Contents

```
.github/                  # GitHub configuration (you're creating this)
├── copilot-instructions.md
.git/                    # Git repository
.gitignore              # Node modules exclusion
.gitmodules             # Git submodules configuration
.prettierignore         # Prettier ignore patterns
.prettierrc             # Prettier configuration
README.md               # Project description (minimal)
package.json            # Node.js dependencies and scripts
package-lock.json       # Locked dependency versions
index.html              # Main homepage
speedometer.html        # Speedometer test runner page
complex-workloads.html  # Complex workloads demonstration
speedometer-with-*.html # Additional Speedometer variants
hang.html               # Debug/test page
*.js files              # Various JavaScript utilities
Speedometer*/           # Git submodules (see submodules section)
```

### Important Files to Know

- **index.html**: Main homepage with blog posts, projects, and videos
- **speedometer.html**: Interactive Speedometer 3.0 test runner with framework comparisons
- **package.json**: Contains all npm scripts and dependencies
- **.prettierrc**: Code formatting rules (NEVER modify without good reason)

## Git Submodules

**IMPORTANT**: This repository contains multiple Speedometer-related git submodules:

- Speedometer1, Speedometer2, Speedometer3
- SpeedometerJSWebComponents
- SpeedometerWithBacklogOpen, SpeedometerWithComplex, SpeedometerWithReminderOpen

**Current Status**: Submodules are configured but not initialized in fresh clones.

**If you need to work with submodules:**

```bash
git submodule update --init --recursive
```

**WARNING**: This downloads large amounts of data and may take 10+ minutes. Only do this if specifically required for your task.

## Deployment

- **Hosting**: GitHub Pages (automatic deployment from main branch)
- **URL**: https://issackjohn.github.io/
- **Process**: Push to main branch → automatic deployment (no build step required)
- **Static Files**: All .html, .css, .js files are served directly

## Common Issues and Solutions

1. **"npm install fails"**:
    - Security vulnerabilities are expected and normal
    - The install should still complete successfully

2. **Development server won't start**:
    - Ensure port 8001 is available
    - Check that npm install completed successfully

3. **Prettier formatting fails**:
    - Run `npm run pretty:fix` to auto-fix most issues
    - Check .prettierrc for configuration details

4. **Submodule directories are empty**:
    - This is normal in fresh clones
    - Only initialize if your specific task requires submodule content

## Performance Expectations

**NEVER CANCEL these operations - wait for completion:**

| Operation            | Expected Time | Timeout Setting |
| -------------------- | ------------- | --------------- |
| npm install          | ~37 seconds   | 90+ seconds     |
| npm start            | ~5 seconds    | 30+ seconds     |
| npm run pretty:check | ~1-2 seconds  | 15 seconds      |
| npm run pretty:fix   | ~1-3 seconds  | 15 seconds      |

## Critical Reminders

- **ALWAYS** validate your changes by running the complete development workflow
- **ALWAYS** check code formatting with `npm run pretty:check` before committing
- **NEVER** modify .prettierrc unless specifically required for your task
- **ALWAYS** test the website functionality manually after changes
- This is a static website - no complex build process is needed
- The main purpose is showcasing web performance benchmarks and tools

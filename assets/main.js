// Site behaviour: theme toggle, content rendering, reveal-on-scroll, email link.
//
// The no-flash theme bootstrap lives inline in each page's <head> (it has to run
// before first paint) and also adds the `js` class that gates the reveal
// animation, so content stays visible when this file never loads.
(function () {
    "use strict";

    const root = document.documentElement;
    const storageKey = "theme";

    // --- Theme ---------------------------------------------------------------

    function getActiveTheme() {
        const explicit = root.getAttribute("data-theme");
        if (explicit === "light" || explicit === "dark") return explicit;
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }

    function syncToggleState(theme) {
        const toggle = document.getElementById("themeToggle");
        if (!toggle) return;
        const isDark = theme === "dark";
        toggle.setAttribute("aria-pressed", String(isDark));
        toggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
    }

    function setupTheme() {
        const toggle = document.getElementById("themeToggle");
        if (toggle) {
            toggle.addEventListener("click", function () {
                const target = getActiveTheme() === "dark" ? "light" : "dark";
                root.setAttribute("data-theme", target);
                try {
                    localStorage.setItem(storageKey, target);
                } catch (e) {
                    // Private mode or blocked storage: the theme still applies for this page.
                }
                syncToggleState(target);
            });
        }
        syncToggleState(getActiveTheme());
    }

    // --- Content -------------------------------------------------------------

    // Dates are ISO (YYYY-MM-DD) so the list can be sorted and so each row can
    // carry a machine-readable <time datetime>. Display strings are derived.
    const content = {
        blogPosts: [
            {
                title: "Who Actually Uses JS Call Stacks in Crash Reports?",
                summary: "Fourteen months after Chrome shipped include-js-call-stacks-in-crash-reports, a scan of the Tranco top 5,000 to find out who deployed it — and why a header-based opt-in is its own telemetry.",
                date: "2026-07-24",
                url: "/blog/who-actually-uses-js-call-stacks-in-crash-reports.html",
            },
            {
                title: "Fixing a Reporting API Race in Chromium",
                summary: "A crash report could be dropped because its reporting source was expired before the report finished being added to the cache. Fixing the ordering re-enabled a long-disabled test suite.",
                date: "2026-07-24",
                url: "/blog/fixing-a-reporting-api-race-in-chromium.html",
            },
            {
                title: "Fixing a Mysterious x86 String Corruption in V8",
                summary: "How a standard C++ string move/copy chain caused Intl.DateTimeFormat to fail on Windows x86 official builds, and how replacing it with const char* made it faster and safer.",
                date: "2026-02-12",
                url: "/blog/fixing-intl-datetimeformat-corruption-in-v8.html",
            },
            {
                title: "When Two Profilers Share a Thread",
                summary: "How concurrent CPU profiling streams from the JS Self-Profiling API and internal tracing could corrupt attribution in DevTools, and how tagging each stream by source fixed it.",
                date: "2025-11-12",
                url: "/blog/when-two-profilers-share-a-thread.html",
            },
        ],
        projects: [
            {
                title: "Oncology ICU Rounds Prep",
                desc: "A clinical prep app exploring Google’s MedGemma and Gemma models for oncology ICU rounds.",
                url: "/projects/oncology-icu-rounds-prep.html",
            },
        ],
        references: [
            {
                title: "V8 commits by issackjohn",
                url: "https://github.com/v8/v8/commits/main/?author=issackjohn",
            },
            {
                title: "DevTools frontend commits by issackjohn",
                url: "https://github.com/ChromeDevTools/devtools-frontend/commits/main/?author=issackjohn",
            },
            {
                title: "Chromium commits by issackjohn",
                url: "https://github.com/chromium/chromium/commits/main/?author=issackjohn",
            },
        ],
        videos: [
            {
                title: "Jim Rohn — Give to Receive",
                url: "https://youtu.be/Lp3e1C54jZM?si=S_DvlMjmYVTo4exo",
            },
        ],
    };

    const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    // Formatted from the ISO parts rather than via Date, because `new Date("2026-07-24")`
    // is parsed as UTC midnight and would render as the previous day west of Greenwich.
    function formatDate(iso) {
        const parts = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso || "");
        if (!parts) return "";
        return MONTHS[Number(parts[2]) - 1] + " " + Number(parts[3]) + ", " + parts[1];
    }

    // Newest first. ISO dates sort correctly as strings, and Array#sort is stable,
    // so posts sharing a date keep their declaration order.
    function byNewest(a, b) {
        return a.date < b.date ? 1 : a.date > b.date ? -1 : 0;
    }

    function isExternal(url) {
        return /^https?:/i.test(url);
    }

    function el(tag, className, text) {
        const node = document.createElement(tag);
        if (className) node.className = className;
        if (text != null) node.textContent = text;
        return node;
    }

    function markExternal(a) {
        a.target = "_blank";
        a.rel = "noopener noreferrer";
    }

    function renderItem(item) {
        const a = el("a", "item");
        a.href = item.url;
        if (isExternal(item.url)) markExternal(a);

        const head = el("div", "item-head");
        head.appendChild(el("span", "item-title", item.title));
        if (item.date) {
            const time = el("time", "item-date", formatDate(item.date));
            time.dateTime = item.date;
            head.appendChild(time);
        }
        a.appendChild(head);

        if (item.desc) {
            const desc = el("p", "item-desc");
            desc.appendChild(document.createTextNode(item.desc + " "));
            desc.appendChild(el("span", "arrow", "→"));
            a.appendChild(desc);
        } else {
            head.appendChild(el("span", "arrow", "→"));
        }
        return a;
    }

    function renderPost(post) {
        const article = el("article", "post");
        article.appendChild(el("h3", null, post.title));
        article.appendChild(el("p", null, post.summary));

        const link = el("a", null, "Read more →");
        link.href = post.url;
        // "Read more" repeats down the list, so give assistive tech the target.
        link.setAttribute("aria-label", "Read more: " + post.title);
        if (isExternal(post.url)) markExternal(link);

        const time = el("time", null, formatDate(post.date));
        time.dateTime = post.date;

        const foot = el("div", "post-foot");
        foot.appendChild(link);
        foot.appendChild(time);
        article.appendChild(foot);
        return article;
    }

    function renderInto(id, data, build) {
        const container = document.getElementById(id);
        if (!container) return;
        const frag = document.createDocumentFragment();
        data.forEach(function (entry) {
            frag.appendChild(build(entry));
        });
        container.replaceChildren(frag);
    }

    function renderContent() {
        const referencesCount = document.getElementById("referencesCount");
        if (referencesCount) referencesCount.textContent = String(content.references.length);

        renderInto("blogPostsList", content.blogPosts.slice().sort(byNewest), renderPost);
        renderInto("projectsList", content.projects, renderItem);
        renderInto("referencesList", content.references, renderItem);
        renderInto("videosList", content.videos, renderItem);
    }

    // --- Email ---------------------------------------------------------------

    // Assemble the address at runtime so it never appears as plain text in the
    // page source for naive scrapers to harvest.
    function setupEmail() {
        const node = document.getElementById("emailLink");
        if (!node) return;
        const encoded = node.getAttribute("data-e");
        if (!encoded) return;
        try {
            const addr = atob(encoded);
            node.href = "mailto:" + addr;
            node.setAttribute("aria-label", "Email " + addr);
        } catch (e) {
            // Malformed payload: leave the link inert rather than pointing at garbage.
        }
    }

    // --- Visibility-driven animation -----------------------------------------

    // Adds `is-visible` when an element scrolls into view. Used by both the
    // reveal-on-scroll sections and the proportional bars inside article charts.
    function revealOnScroll(selector, threshold) {
        const items = document.querySelectorAll(selector);
        if (items.length === 0) return;

        if (!("IntersectionObserver" in window)) {
            items.forEach(function (item) {
                item.classList.add("is-visible");
            });
            return;
        }

        const observer = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (!entry.isIntersecting) return;
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                });
            },
            { threshold: threshold }
        );

        items.forEach(function (item) {
            observer.observe(item);
        });
    }

    // --- Syntax highlighting -------------------------------------------------
    //
    // A deliberately small tokenizer rather than a highlighting library: one
    // regex pass per code block splitting it into comments, strings, numbers
    // and identifiers, then classifying identifiers by keyword list and shape.
    // That is enough structure for the C++, JS/TS, JSON and header snippets
    // this site publishes, and it keeps the page dependency-free.

    const JS_KEYWORDS =
        "as async await break case catch class const continue debugger default delete do else export extends false finally for from function get if import in instanceof let new null of return set static super switch this throw true try typeof undefined var void while yield";

    const GRAMMARS = {
        cpp: {
            keywords:
                "alignas alignof auto bool break case catch char class concept const const_cast constexpr continue decltype default delete do double dynamic_cast else enum explicit export extern false final float for friend goto if inline int long mutable namespace new noexcept nullptr operator override private protected public register reinterpret_cast return short signed sizeof static static_cast struct switch template this throw true try typedef typename union unsigned using virtual void volatile while size_t int8_t int16_t int32_t int64_t uint8_t uint16_t uint32_t uint64_t",
            pattern:
                "(?<comment>//[^\\n]*|/\\*[\\s\\S]*?\\*/)|(?<preproc>^[ \\t]*#[A-Za-z]+)|(?<string>\"(?:\\\\.|[^\"\\\\\\n])*\"?|'(?:\\\\.|[^'\\\\\\n])*'?)|(?<number>\\b0[xX][0-9a-fA-F]+\\b|\\b\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?\\b)|(?<ident>[A-Za-z_][A-Za-z0-9_]*)",
        },
        js: {
            keywords: JS_KEYWORDS,
            pattern:
                "(?<comment>//[^\\n]*|/\\*[\\s\\S]*?\\*/)|(?<string>\"(?:\\\\.|[^\"\\\\\\n])*\"?|'(?:\\\\.|[^'\\\\\\n])*'?|`(?:\\\\.|[^`\\\\])*`?)|(?<number>\\b0[xX][0-9a-fA-F]+\\b|\\b\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?\\b)|(?<ident>[A-Za-z_$][A-Za-z0-9_$]*)",
        },
        json: {
            keywords: "true false null",
            pattern: '(?<attr>"(?:\\\\.|[^"\\\\\\n])*"(?=\\s*:))|(?<string>"(?:\\\\.|[^"\\\\\\n])*"?)|(?<number>-?\\b\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?\\b)|(?<ident>[A-Za-z]+)',
        },
        http: {
            keywords: "",
            pattern: '(?<attr>^[A-Za-z][A-Za-z0-9-]*(?=:))|(?<string>"[^"\\n]*")',
        },
    };

    GRAMMARS.ts = {
        keywords: JS_KEYWORDS + " abstract any boolean declare enum implements infer interface is keyof namespace never number private protected public readonly satisfies string symbol type unknown",
        pattern: GRAMMARS.js.pattern,
    };

    const LANG_ALIASES = {
        c: "cpp",
        cc: "cpp",
        "c++": "cpp",
        h: "cpp",
        javascript: "js",
        typescript: "ts",
        jsonc: "json",
        headers: "http",
    };

    const keywordSets = {};

    function keywordsFor(lang) {
        if (!keywordSets[lang]) {
            keywordSets[lang] = new Set(GRAMMARS[lang].keywords.split(" ").filter(Boolean));
        }
        return keywordSets[lang];
    }

    // Identifiers carry no marker of their own, so classify them by shape:
    // keyword list first, then SCREAMING_CASE as a macro, a following "(" as a
    // call, and a leading capital as a type.
    function classifyIdent(word, text, endIndex, lang) {
        if (keywordsFor(lang).has(word)) return "keyword";
        if (word.length > 1 && /^[A-Z][A-Z0-9_]*$/.test(word)) return "macro";
        if (/^\s*\(/.test(text.slice(endIndex))) return "func";
        if (/^[A-Z]/.test(word)) return "type";
        return null;
    }

    function tokenClass(match, text, endIndex, lang) {
        const groups = match.groups || {};
        if (groups.comment) return "comment";
        if (groups.preproc) return "preproc";
        if (groups.attr) return "attr";
        if (groups.string) return "string";
        if (groups.number) return "number";
        if (groups.ident) return classifyIdent(groups.ident, text, endIndex, lang);
        return null;
    }

    function highlight(text, lang) {
        const frag = document.createDocumentFragment();
        const re = new RegExp(GRAMMARS[lang].pattern, "gm");
        let last = 0;
        let match;

        while ((match = re.exec(text)) !== null) {
            if (match[0] === "") {
                re.lastIndex++;
                continue;
            }
            if (match.index > last) {
                frag.appendChild(document.createTextNode(text.slice(last, match.index)));
            }
            const cls = tokenClass(match, text, re.lastIndex, lang);
            frag.appendChild(cls ? el("span", "tok-" + cls, match[0]) : document.createTextNode(match[0]));
            last = re.lastIndex;
        }

        if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
        return frag;
    }

    // Highlighting is applied after load, so the markup stays readable plain
    // text and the code is still legible if this script never runs.
    function setupHighlighting() {
        document.querySelectorAll("pre > code[class*='language-']").forEach(function (code) {
            const declared = (code.className.match(/language-([\w+#-]+)/) || [])[1];
            if (!declared) return;
            const lang = LANG_ALIASES[declared.toLowerCase()] || declared.toLowerCase();
            if (!GRAMMARS[lang]) return;
            code.replaceChildren(highlight(code.textContent, lang));
        });
    }

    // --- Footer --------------------------------------------------------------

    function setupYear() {
        const node = document.getElementById("year");
        if (node) node.textContent = String(new Date().getFullYear());
    }

    document.addEventListener("DOMContentLoaded", function () {
        setupTheme();
        renderContent();
        setupEmail();
        setupYear();
        setupHighlighting();
        revealOnScroll(".reveal", 0.08);
        revealOnScroll(".chart", 0.25);
    });
})();

// Theme toggle: persists preference, falls back to OS setting.
(function () {
    const root = document.documentElement;
    const storageKey = "theme";

    function getActiveTheme() {
        return root.getAttribute("data-theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    }

    function syncToggleState(theme) {
        const toggle = document.getElementById("themeToggle");
        if (!toggle) return;
        const isDark = theme === "dark";
        toggle.setAttribute("aria-pressed", String(isDark));
        toggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
    }

    document.addEventListener("DOMContentLoaded", function () {
        const toggle = document.getElementById("themeToggle");
        if (toggle) {
            toggle.addEventListener("click", function () {
                const current = getActiveTheme();
                const target = current === "dark" ? "light" : "dark";
                root.setAttribute("data-theme", target);
                try {
                    localStorage.setItem(storageKey, target);
                } catch (e) {}
                syncToggleState(target);
            });
        }

        syncToggleState(getActiveTheme());
        renderContent();
        setupEmail();
        setupReveal();
    });

    // --- Dynamic content ---------------------------------------------------

    const content = {
        blogPosts: [],
        projects: [
            {
                title: "Oncology ICU Rounds Prep",
                desc: "A clinical prep app exploring Google’s MedGemma and Gemma models for oncology ICU rounds.",
                date: "",
                url: "/projects/oncology-icu-rounds-prep.html",
                external: false,
            },
        ],
        references: [
            {
                title: "V8 commits by issackjohn",
                desc: "",
                date: "",
                url: "https://github.com/v8/v8/commits/main/?author=issackjohn",
                external: true,
            },
            {
                title: "DevTools frontend commits by issackjohn",
                desc: "",
                date: "",
                url: "https://github.com/ChromeDevTools/devtools-frontend/commits/main/?author=issackjohn",
                external: true,
            },
            {
                title: "Chromium commits by issackjohn",
                desc: "",
                date: "",
                url: "https://github.com/chromium/chromium/commits/main/?author=issackjohn",
                external: true,
            },
        ],
        videos: [
            {
                title: "Jim Rohn — Give to Receive",
                desc: "",
                date: "",
                url: "https://youtu.be/Lp3e1C54jZM?si=S_DvlMjmYVTo4exo",
                external: true,
            },
        ],
    };

    function el(tag, className, text) {
        const node = document.createElement(tag);
        if (className) node.className = className;
        if (text != null) node.textContent = text;
        return node;
    }

    function externalAttrs(a) {
        a.target = "_blank";
        a.rel = "noopener noreferrer";
    }

    function clearChildren(node) {
        if (!node) return;
        node.replaceChildren();
    }

    function renderItem(item) {
        const a = el("a", "item");
        a.href = item.url;
        if (item.external) externalAttrs(a);

        const head = el("div", "item-head");
        head.appendChild(el("span", "item-title", item.title));
        if (item.date) head.appendChild(el("span", "item-date", item.date));
        if (item.desc) {
            const desc = el("p", "item-desc");
            desc.appendChild(document.createTextNode(item.desc + " "));
            desc.appendChild(el("span", "arrow", "→"));
            a.appendChild(head);
            a.appendChild(desc);
        } else {
            head.appendChild(el("span", "arrow", "→"));
            a.appendChild(head);
        }
        return a;
    }

    function renderList(container, data) {
        if (!container) return;
        clearChildren(container);
        data.forEach(function (item) {
            container.appendChild(renderItem(item));
        });
    }

    function renderBlogPosts(container) {
        if (!container) return;
        clearChildren(container);
        content.blogPosts.forEach(function (post) {
            const article = el("article", "post");
            article.appendChild(el("h3", null, post.title));
            article.appendChild(el("p", null, post.summary));

            const foot = el("div", "post-foot");
            const a = el("a", null, "Read more →");
            a.href = post.url;
            if (/^https?:/.test(post.url)) externalAttrs(a);
            const time = el("time", null, post.date);
            foot.appendChild(a);
            foot.appendChild(time);
            article.appendChild(foot);
            container.appendChild(article);
        });
    }

    function renderContent() {
        const referencesCount = document.getElementById("referencesCount");
        if (referencesCount) {
            referencesCount.textContent = String(content.references.length);
        }

        renderBlogPosts(document.getElementById("blogPostsList"));
        renderList(document.getElementById("projectsList"), content.projects);
        renderList(document.getElementById("referencesList"), content.references);
        renderList(document.getElementById("videosList"), content.videos);
    }

    // Assemble the email at runtime so it never appears as plain text in the
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
        } catch (e) {}
    }

    // Reveal-on-scroll animation
    function setupReveal() {
        const items = document.querySelectorAll(".reveal");
        if (!("IntersectionObserver" in window) || items.length === 0) {
            items.forEach(function (i) {
                i.classList.add("is-visible");
            });
            return;
        }
        const io = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        io.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.08 }
        );
        items.forEach(function (i) {
            io.observe(i);
        });
    }
})();

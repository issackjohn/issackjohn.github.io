// Theme toggle: persists preference, falls back to OS setting.
(function () {
    const root = document.documentElement;
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") {
        root.setAttribute("data-theme", stored);
    }

    function currentTheme() {
        const explicit = root.getAttribute("data-theme");
        if (explicit) return explicit;
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }

    document.addEventListener("DOMContentLoaded", function () {
        const toggle = document.getElementById("themeToggle");
        if (toggle) {
            toggle.addEventListener("click", function () {
                const next = currentTheme() === "dark" ? "light" : "dark";
                root.setAttribute("data-theme", next);
                localStorage.setItem("theme", next);
                toggle.setAttribute("aria-pressed", String(next === "dark"));
            });
        }

        renderContent();
        setupEmail();
        setupReveal();
    });

    // --- Dynamic content ---------------------------------------------------

    const blogPosts = [];

    const projects = [
        {
            title: "Oncology ICU Rounds Prep",
            desc: "A clinical prep app exploring Google’s MedGemma and Gemma models for oncology ICU rounds.",
            date: "",
            url: "/projects/oncology-icu-rounds-prep.html",
            external: false,
        },
    ];

    const references = [
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
    ];

    const videos = [
        {
            title: "Jim Rohn — Give to Receive",
            url: "https://youtu.be/Lp3e1C54jZM?si=S_DvlMjmYVTo4exo",
        },
    ];

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

    function renderList(id, data) {
        const list = document.getElementById(id);
        if (!list) return;
        data.forEach(function (item) {
            list.appendChild(renderItem(item));
        });
    }

    function renderContent() {
        const evidence = document.getElementById("evidence");
        if (evidence) {
            const stats = [
                { value: String(references.length), label: "Engine commit streams" },
                { value: "3.0", label: "Speedometer release" },
            ];
            stats.forEach(function (s) {
                const item = el("div", "evidence-item");
                item.appendChild(el("span", "evidence-value", s.value));
                item.appendChild(el("span", "evidence-label", s.label));
                evidence.appendChild(item);
            });
        }

        const blogList = document.getElementById("blogPostsList");
        if (blogList) {
            blogPosts.forEach(function (post) {
                const article = el("article", "post");
                article.appendChild(el("h3", null, post.title));
                article.appendChild(el("p", null, post.summary));

                const foot = el("div", "post-foot");
                const a = el("a", null, "Read more \u2192");
                a.href = post.url;
                if (/^https?:/.test(post.url)) externalAttrs(a);
                const time = el("time", null, post.date);
                foot.appendChild(a);
                foot.appendChild(time);
                article.appendChild(foot);
                blogList.appendChild(article);
            });
        }

        renderList("projectsList", projects);
        renderList("referencesList", references);

        const videosList = document.getElementById("videosList");
        if (videosList) {
            videos.forEach(function (v) {
                const a = el("a", "item");
                a.href = v.url;
                externalAttrs(a);
                const head = el("div", "item-head");
                head.appendChild(el("span", "item-title", v.title));
                head.appendChild(el("span", "arrow", "\u2192"));
                a.appendChild(head);
                videosList.appendChild(a);
            });
        }
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

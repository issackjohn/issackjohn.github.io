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
        setupReveal();
    });

    // --- Dynamic content ---------------------------------------------------

    const blogPosts = [
        {
            title: "Contributing to Speedometer 3.0",
            summary: "A look at how the benchmark was shaped around real web-app behavior rather than synthetic shortcuts.",
            url: "https://blogs.windows.com/msedgedev/2024/03/11/contributing-to-speedometer-30/",
            date: "March 11, 2024",
        },
    ];

    const benchmarks = [
        {
            title: "Speedometer 3.0 test runner",
            desc: "A simple page for comparing benchmark suites and jumping into specific workloads.",
            date: "Jan 2024",
            url: "/speedometer.html",
            external: false,
        },
        {
            title: "Complex workloads explorer",
            desc: "A small tool for browsing the heavier, more realistic DOM-based cases.",
            date: "",
            url: "/complex-workloads.html",
            external: false,
        },
        {
            title: "Speedometer with complex DOM",
            desc: "A set of experiments built around deeper and more realistic DOM structures.",
            date: "Jun 2023",
            url: "/speedometer-with-complex.html",
            external: false,
        },
        {
            title: "Speedometer — new structure complex DOM",
            desc: "Another round of experiments on the same benchmark idea, with a cleaner structure.",
            date: "Sep 2023",
            url: "/speedometer-with-new-structure.html",
            external: false,
        },
        {
            title: "JavaScript web components speedometer",
            desc: "A todoMVC-style benchmark implemented with native web components.",
            date: "",
            url: "https://issackjohn.github.io/SpeedometerJSWebComponents",
            external: true,
        },
    ];

    const references = [
        {
            title: "V8 commits by issackjohn",
            desc: "Recent commits authored on the V8 main branch.",
            date: "",
            url: "https://github.com/v8/v8/commits/main/?author=issackjohn",
            external: true,
        },
        {
            title: "DevTools frontend commits by issackjohn",
            desc: "Recent commits authored on the Chrome DevTools frontend main branch.",
            date: "",
            url: "https://github.com/ChromeDevTools/devtools-frontend/commits/main/?author=issackjohn",
            external: true,
        },
        {
            title: "Chromium commits by issackjohn",
            desc: "Recent commits authored on the Chromium main branch.",
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

    function renderContent() {
        const blogList = document.getElementById("blogPostsList");
        if (blogList) {
            blogPosts.forEach(function (post) {
                const article = el("article", "post");
                article.appendChild(el("h3", null, post.title));
                article.appendChild(el("p", null, post.summary));

                const foot = el("div", "post-foot");
                const a = el("a", null, "Read more \u2192");
                a.href = post.url;
                externalAttrs(a);
                const time = el("time", null, post.date);
                foot.appendChild(a);
                foot.appendChild(time);
                article.appendChild(foot);
                blogList.appendChild(article);
            });
        }

        const benchmarksList = document.getElementById("benchmarksList");
        if (benchmarksList) {
            benchmarks.forEach(function (item) {
                const a = el("a", "item");
                a.href = item.url;
                if (item.external) externalAttrs(a);

                const head = el("div", "item-head");
                const title = el("span", "item-title", item.title);
                head.appendChild(title);
                if (item.date) head.appendChild(el("span", "item-date", item.date));
                a.appendChild(head);

                const desc = el("p", "item-desc");
                desc.innerHTML = "";
                desc.appendChild(document.createTextNode(item.desc + " "));
                const arrow = el("span", "arrow", "\u2192");
                desc.appendChild(arrow);
                a.appendChild(desc);
                benchmarksList.appendChild(a);
            });
        }

        const referencesList = document.getElementById("referencesList");
        if (referencesList) {
            references.forEach(function (item) {
                const a = el("a", "item");
                a.href = item.url;
                if (item.external) externalAttrs(a);

                const head = el("div", "item-head");
                const title = el("span", "item-title", item.title);
                head.appendChild(title);
                if (item.date) head.appendChild(el("span", "item-date", item.date));
                a.appendChild(head);

                const desc = el("p", "item-desc");
                desc.innerHTML = "";
                desc.appendChild(document.createTextNode(item.desc + " "));
                const arrow = el("span", "arrow", "→");
                desc.appendChild(arrow);
                a.appendChild(desc);
                referencesList.appendChild(a);
            });
        }

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

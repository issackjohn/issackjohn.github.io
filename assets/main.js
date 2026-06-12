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
            summary: "How a cross-browser team captured real-world web application challenges in the industry-standard benchmark.",
            url: "https://blogs.windows.com/msedgedev/2024/03/11/contributing-to-speedometer-30/",
            date: "March 11, 2024",
        },
    ];

    const projects = [
        {
            title: "Speedometer 3.0 Test Runner",
            desc: "Compare benchmark suites side-by-side and launch individual workloads.",
            date: "Jan 2024",
            url: "/speedometer.html",
            external: false,
        },
        {
            title: "Complex Workloads Explorer",
            desc: "Browse and launch individual complex DOM benchmark workloads.",
            date: "",
            url: "/complex-workloads.html",
            external: false,
        },
        {
            title: "Speedometer with Complex DOM",
            desc: "Benchmark experiments using deeper, more realistic DOM structures.",
            date: "Jun 2023",
            url: "/speedometer-with-complex.html",
            external: false,
        },
        {
            title: "Speedometer — New Structure Complex DOM",
            desc: "Updated architecture experiments built on the complex-DOM workloads.",
            date: "Sep 2023",
            url: "/speedometer-with-new-structure.html",
            external: false,
        },
        {
            title: "JavaScript Web Components Speedometer",
            desc: "TodoMVC benchmark implemented with native Web Components.",
            date: "",
            url: "https://issackjohn.github.io/SpeedometerJSWebComponents",
            external: true,
        },
    ];

    const videos = [
        {
            title: "Jim Rohn — Give To Receive",
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

        const projectList = document.getElementById("projectsList");
        if (projectList) {
            projects.forEach(function (p) {
                const a = el("a", "item");
                a.href = p.url;
                if (p.external) externalAttrs(a);

                const head = el("div", "item-head");
                const title = el("span", "item-title", p.title);
                head.appendChild(title);
                if (p.date) head.appendChild(el("span", "item-date", p.date));
                a.appendChild(head);

                const desc = el("p", "item-desc");
                desc.innerHTML = "";
                desc.appendChild(document.createTextNode(p.desc + " "));
                const arrow = el("span", "arrow", "\u2192");
                desc.appendChild(arrow);
                a.appendChild(desc);
                projectList.appendChild(a);
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

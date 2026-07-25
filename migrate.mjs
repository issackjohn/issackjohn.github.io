import { readFileSync, writeFileSync } from "node:fs";
import { globSync } from "node:fs";

const files = globSync("**/*.html", { exclude: (p) => p.includes("node_modules") || p.includes("SpeedometerJSWebComponents") });

const CANONICAL = `        <!-- Runs before first paint: applies the stored theme and marks JS as available. -->
        <script>
            (function () {
                var root = document.documentElement;
                root.classList.add("js");
                try {
                    var t = localStorage.getItem("theme");
                    if (t === "light" || t === "dark") root.setAttribute("data-theme", t);
                } catch (e) {}
            })();
        </script>
`;

// Matches any existing inline theme bootstrap (both variants), with its comment.
const THEME_BLOCK = /[ \t]*(?:<!--[^>]*?theme flash[^>]*?-->\r?\n)?[ \t]*<script>\r?\n(?:(?!<\/script>)[\s\S])*?localStorage\.getItem\("theme"\)(?:(?!<\/script>)[\s\S])*?<\/script>\r?\n/;

const YEAR_BLOCK = /[ \t]*<script>\r?\n[ \t]*document\.getElementById\("year"\)\.textContent = new Date\(\)\.getFullYear\(\);\r?\n[ \t]*<\/script>\r?\n/;

let changed = 0;
for (const file of files) {
    const before = readFileSync(file, "utf8");
    let after = before;

    if (THEME_BLOCK.test(after)) {
        after = after.replace(THEME_BLOCK, CANONICAL);
    }
    after = after.replace(YEAR_BLOCK, "");

    if (after !== before) {
        writeFileSync(file, after);
        changed++;
        console.log("updated", file);
    } else {
        console.log("unchanged", file);
    }
}
console.log(`${changed}/${files.length} files changed`);

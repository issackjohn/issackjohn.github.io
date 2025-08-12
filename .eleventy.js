module.exports = function (eleventyConfig) {
    // Copy static files
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPassthroughCopy("src/*.js");
    eleventyConfig.addPassthroughCopy("src/robots.txt");
    eleventyConfig.addPassthroughCopy("src/sitemap.xml");
    eleventyConfig.addPassthroughCopy("src/manifest.webmanifest");
    eleventyConfig.addPassthroughCopy("src/.nojekyll");

    // Watch for changes
    eleventyConfig.addWatchTarget("src/assets/");

    // Collections
    eleventyConfig.addCollection("blog", function (collectionApi) {
        return collectionApi.getFilteredByGlob("src/content/blog/*.md").reverse();
    });

    // Filters
    eleventyConfig.addFilter("dateFormat", function (date) {
        return new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    });

    eleventyConfig.addFilter("isoDate", function (date) {
        return new Date(date).toISOString();
    });

    eleventyConfig.addFilter("limit", function (array, limit) {
        return array.slice(0, limit);
    });

    eleventyConfig.addFilter("date", function (date, format) {
        const d = new Date(date);
        if (format === "%Y-%m-%d") {
            return d.toISOString().split("T")[0];
        }
        if (format === "rfc") {
            return d.toUTCString();
        }
        return d.toString();
    });

    eleventyConfig.addFilter("escape", function (str) {
        if (!str) return "";
        return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
    });

    return {
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes",
            layouts: "_layouts",
            data: "_data",
        },
    };
};

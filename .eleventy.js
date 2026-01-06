module.exports = function (eleventyConfig) {
    // Copy static files
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPassthroughCopy("src/*.js");
    eleventyConfig.addPassthroughCopy({ "Speedometer1": "Speedometer1" });
    eleventyConfig.addPassthroughCopy({ "SpeedometerJSWebComponents": "SpeedometerJSWebComponents" });
    eleventyConfig.addPassthroughCopy({ "SpeedometerWithComplex": "SpeedometerWithComplex" });
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

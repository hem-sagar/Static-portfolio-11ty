module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy({ "static/css": "css" });
    eleventyConfig.addPassthroughCopy({ "static/fonts": "fonts" });
    eleventyConfig.addPassthroughCopy({ "static/images": "images" });
    eleventyConfig.addPassthroughCopy({ "static/js": "js" });
    eleventyConfig.addPassthroughCopy({ "static/favicon": "favicon" });

    return {
        passthroughFileCopy: true,
        markdownTemplateEngine: "njk",
        templateFormats: ["html", "njk", "md"],
        dir: {
            input: "content",
            // ⚠️ These values are both relative to your input directory.
            output: "public",
            includes: "includes" // ⚠️ These values are both relative to your input directory.
        }
    }
}
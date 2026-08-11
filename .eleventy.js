const fs = require("node:fs");
const path = require("node:path");
const { execFileSync } = require("node:child_process");
const markdownIt = require("markdown-it");

function getLastUpdatedDate() {
  try {
    const gitDate = execFileSync(
      "git",
      ["log", "-1", "--format=%cs"],
      { cwd: __dirname, encoding: "utf8" }
    ).trim();

    const [year, month, day] = gitDate.split("-").map(Number);
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December",
    ];

    if (!year || !month || !day || !months[month - 1]) {
      return "";
    }

    return `${day} ${months[month - 1]} ${year}`;
  } catch {
    return "";
  }
}

module.exports = function (eleventyConfig) {
  const copyrightFile = path.join(__dirname, "COPYRIGHT.md");

  const markdown = markdownIt({
    html: false,
    linkify: true,
    typographer: true,
  });

  // Copy the CSS folder directly into the generated site
  eleventyConfig.addPassthroughCopy("src/css");

  // Copy the favicon directly into the generated site
  eleventyConfig.addPassthroughCopy("src/favicon.ico");

  // Copy images, scripts, and other static assets
  eleventyConfig.addPassthroughCopy("src/assets");

  // Copy robots.txt to the root of the generated site
  eleventyConfig.addPassthroughCopy("src/robots.txt");

  // Rebuild the site whenever COPYRIGHT.md changes
  eleventyConfig.addWatchTarget(copyrightFile);

  // Read and render COPYRIGHT.md for use inside templates
  eleventyConfig.addGlobalData("copyrightNoticeHtml", () => {
    const copyrightMarkdown = fs
      .readFileSync(copyrightFile, "utf8")
      .replace(
        /^#\s+Copyright and Usage Notice\s*\r?\n+/i,
        ""
      )
      .trim();

    return markdown.render(copyrightMarkdown);
  });

  // Expose the most recent Git commit date to templates
  eleventyConfig.addGlobalData("lastUpdated", getLastUpdatedDate);

  // Create a global template variable named `isProduction`
  eleventyConfig.addGlobalData(
    "isProduction",
    process.env.ELEVENTY_ENV === "production"
  );

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
  };
};

module.exports = function(eleventyConfig) {
    // Copy static assets to the output folder
    eleventyConfig.addPassthroughCopy("src/css");
  
    return {
      dir: {
        input: "src",           // Tells Eleventy to use the `src/` folder
        includes: "_includes",  // Folder for templates
        output: "_site",        // Where static files are generated
      },
    };
  };
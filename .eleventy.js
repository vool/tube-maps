module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./assets");

  eleventyConfig.addPassthroughCopy({
    "./node_modules/d3-tube-map/dist/d3-tube-map.min.js": "/assets/js/d3-tube-map.min.js"
  });

  eleventyConfig.addPassthroughCopy({
    "./node_modules/d3/dist/d3.min.js": "/assets/js/d3.min.js"
  });

  return {
    passthroughFileCopy: true,
  }
}
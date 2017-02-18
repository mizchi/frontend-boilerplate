module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-custom-properties"),
    require("postcss-custom-media"),
    require("postcss-apply"),
    require("postcss-nesting"),
    require("postcss-flexbugs-fixes"),
    require("autoprefixer"),
    require("postcss-sorting")
  ]
}

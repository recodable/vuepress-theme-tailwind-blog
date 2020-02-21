const purgecss = require("@fullhuman/postcss-purgecss")({
  // Specify the paths to all of the template files in your project
  content: [
    "**/*.vue"
    // etc.
  ],
  css: ["**/*.css"],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

module.exports = {
  postcss: {
    plugins: [
      require("tailwindcss")("./tailwind.js"),
      require("autoprefixer"),
      purgecss
    ]
  },
  title: "Steven Yung",
  theme: require.resolve("../../"),
  themeConfig: {
    name: "Steven Yung",
    description: "A developer trying to break out of traditional 9-5.",
    profile: "/profile.jpg",
    socialLinks: [
      { url: "https://twitter.com/stvnyung", name: "Twitter" },
      { url: "https://github.com/stvnyung", name: "Github" },
      { url: "https://dev.to/stvnyung", name: "Dev.to" },
      { url: "https://www.instagram.com/stvn.yung/", name: "Instagram" }
    ]
  }
};

module.exports = {
  title: "Steven Yung",
  theme: require.resolve("../../"),
  postcss: {
    plugins: [require("tailwindcss")("./tailwind.js"), require("autoprefixer")]
  },
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

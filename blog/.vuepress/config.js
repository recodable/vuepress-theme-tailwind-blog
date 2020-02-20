module.exports = {
  title: "Steven Yung",
  theme: require.resolve("../../"),
  themeConfig: {},
  postcss: {
    plugins: [require("tailwindcss")("./tailwind.js"), require("autoprefixer")]
  }
};

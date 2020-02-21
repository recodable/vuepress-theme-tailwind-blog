module.exports = {
  title: "@recodable/vuepress-theme-tailwind-blog",
  description: "A minimalistic blog theme powered by Vuepress and Tailwind",
  themeConfig: {
    nav: [
      {
        text: "Guide",
        link: "/"
      },
      {
        text: "Configuration",
        link: "/config"
      },
      {
        text: "Github",
        link: "https://github.com/recodable/vuepress-theme-tailwind-blog"
      },
      {
        text: "Creator",
        link: "https://twitter.com/stvnyung"
      }
    ],
    displayAllHeaders: true,
    sidebar: [
      ["/", "Guide"],
      ["/config", "Configuration"],
      [
        "https://github.com/recodable/vuepress-theme-tailwind-blog",
        "Repository"
      ],
      {
        title: "Maintainer",
        collapsable: false,
        sidebarDepth: 1,
        children: [
          ["https://github.com/stvnyung", "Github"],
          ["https://twitter.com/stvnyung", "Twitter"],
          ["https://stevenyung.me", "Blog"]
        ]
      }
    ]
  }
};

const pick = require("lodash.pick");

module.exports = themeConfig => {
  themeConfig = Object.assign(themeConfig, {
    name: themeConfig.name || "Steven Yung",
    description:
      themeConfig.description ||
      "A developer trying to break out of traditional 9-5.",
    profile: themeConfig.profile || "/profile.jpg",
    dateFormat: themeConfig.dateForm || "MMMM DD, YYYY",
    socialLinks: themeConfig.socialLinks || [
      { url: "https://twitter.com/stvnyung", name: "Twitter" },
      { url: "https://github.com/stvnyung", name: "Github" },
      { url: "https://dev.to/stvnyung", name: "Dev.to" },
      { url: "https://www.instagram.com/stvn.yung/", name: "Instagram" }
    ],
    newsletterEndpoint: themeConfig.newsletterEndpoint || null,
    newsletterContent: themeConfig.newsletterContent || null,
    googleAnalyticsId: themeConfig.googleAnalyticsId || null
  });

  const defaultBlogPluginOptions = {
    directories: [
      {
        id: "post",
        dirname: "_posts",
        path: "/",
        itemPermalink: "/:slug"
      }
    ]
  };

  // const properties = ["name", "description", "profile", "socialLinks"];
  // const themeConfigPluginOptions = {
  //   ...pick(themeConfig, properties)
  // };

  const blogPluginOptions = Object.assign({}, defaultBlogPluginOptions, {
    themeConfig
  });

  const plugins = [
    ["@vuepress/blog", blogPluginOptions],
    ...(process.env.NODE_ENV === "production" && themeConfig.googleAnalyticsId
      ? [
          [
            "@vuepress/google-analytics",
            {
              ga: themeConfig.googleAnalyticsId
            }
          ]
        ]
      : []),
    ...(themeConfig.newsletterEndpoint
      ? [
          [
            "vuepress-plugin-mailchimp",
            {
              // You need to provide this plugin with your Mailchimp endpoint in order for it
              // to know where to save the email address. See more detail in Config section.
              endpoint: themeConfig.newsletterEndpoint,
              content: themeConfig.newsletterContent
            }
          ]
        ]
      : [])
  ];

  const config = {
    plugins
  };

  return config;
};
// module.exports = {
//   plugins: [
//     [
//       "@vuepress/blog",
//       {
//         directories: [
//           {
//             id: "post",
//             dirname: "_posts",
//             path: "/",
//             itemPermalink: "/:slug"
//           }
//         ]
//       }
//     ],
//     [
//       "@vuepress/google-analytics",
//       {
//         ga: "UA-135207098-1"
//       }
//     ],
//     [
//       "vuepress-plugin-mailchimp",
//       {
//         // You need to provide this plugin with your Mailchimp endpoint in order for it
//         // to know where to save the email address. See more detail in Config section.
//         endpoint:
//           "https://icloud.us20.list-manage.com/subscribe/post?u=b334cab704e8cf9d86349a6c1&amp;id=27383beab6"
//       }
//     ]
//   ]
// };

const pick = require("lodash/pick");

module.exports = themeConfig => {
  themeConfig = {
    name: "Steven Yung",
    description: "A developer trying to break out of traditional 9-5.",
    profile: "/profile.jpg",
    socialLinks: [
      { url: "https://twitter.com/stvnyung", name: "Twitter" },
      { url: "https://github.com/stvnyung", name: "Github" },
      { url: "https://dev.to/stvnyung", name: "Dev.to" },
      { url: "https://www.instagram.com/stvn.yung/", name: "Instagram" }
    ]
  };

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

  const properties = [
    "directories",
    "frontmatters",
    "globalPagination",
    "sitemap",
    "comment",
    "newsletter"
  ];
  const themeConfigPluginOptions = {
    ...pick(themeConfig, properties)
  };

  const blogPluginOptions = Object.assign(
    {},
    defaultBlogPluginOptions,
    themeConfigPluginOptions
  );

  const plugins = [
    ["@vuepress/blog", blogPluginOptions]
    // [
    //   "@vuepress/google-analytics",
    //   {
    //     ga: "UA-135207098-1"
    //   }
    // ],
    // [
    //   "vuepress-plugin-mailchimp",
    //   {
    //     // You need to provide this plugin with your Mailchimp endpoint in order for it
    //     // to know where to save the email address. See more detail in Config section.
    //     endpoint:
    //       "https://icloud.us20.list-manage.com/subscribe/post?u=b334cab704e8cf9d86349a6c1&amp;id=27383beab6"
    //   }
    // ]
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

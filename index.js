module.exports = {
  plugins: [
    [
      "@vuepress/blog",
      {
        directories: [
          {
            id: "post",
            dirname: "_posts",
            path: "/",
            itemPermalink: "/:slug"
          }
        ]
      }
    ],
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-135207098-1"
      }
    ],
    [
      "vuepress-plugin-mailchimp",
      {
        // You need to provide this plugin with your Mailchimp endpoint in order for it
        // to know where to save the email address. See more detail in Config section.
        endpoint:
          "https://icloud.us20.list-manage.com/subscribe/post?u=b334cab704e8cf9d86349a6c1&amp;id=27383beab6"
      }
    ]
  ]
};

# Options

All those options are available but _optional_. You have to put it into your `.vuepress/config.js` like so:

```js
// .vuepress/config.js
module.exports = {
  // ...
  theme: "@recodable/vuepress-theme-tailwind-plugin",
  themeConfig: {
    // here you can put your configurations
  }
  // ...
};
```

## name

- Default: `Steven Yung`
- Type: `string`

Your full name, this will be display in the blog author card.

Example:

```js
module.exports = {
  themeConfig: {
    name: "John Doe"
  }
};
```

## description

- Type: `string`
- Default: `A developer trying to break out of traditional 9-5.`

The description of the author, will be display just under your name. This is where you explain who you are.

Example:

```js
module.exports = {
  themeConfig: {
    description: "I'm John Doe, the Vue developer"
  }
};
```

## profile

- Type: `string`
- Default: `/profile.jpg`

The URL to your profile picture. You can use an external URL (e.g. Your Twitter profile picture) or one from your project in the folder `.vuepress/public`.

By default, you can put your profile picture as `.vuepress/public/profile.jpg` or change the name in the configuration.

Example:

```js
module.exports = {
  themeConfig: {
    profile: "/my-profile-picture.jpg" // this will use the file `.vuepress/public/my-profile-picture.jpg`
    // or you can use your Twitter profile picture like so:
    // profile: "https://pbs.twimg.com/profile_images/979841334642200576/5l_sOTvi_400x400.jpg"
  }
};
```

## socialLinks

An array of links to your social media accounts. You will specify them with an `url` (e.g. [https://github.com/stvnyung]) and a `name` that will be display on the link (e.g. `Github`).

Example:

```js
module.exports = {
  themeConfig: {
    socialLinks: [
      { url: "https://twitter.com/stvnyung", name: "Twitter" },
      { url: "https://instagram.com/stvn.yung", name: "Instagram" }
      // ...
    ]
  }
};
```

## newsletterEndpoint

This is a URL that the form will send the data to. We use `vuepress-plugin-mailchimp` under the hood so follow the instruction from [the documentation](https://vuepress-plugin-mailchimp.billyyyyy3320.com/#endpoint) to know how to get that URL.

We currently support officially **only** Mailchimp but it should work with any newsletter provider. If you run into any issue, let us know by opening an issue on [the repository](https://github.com/recodable/vuepress-theme-tailwind-blog)

Example:

```js
module.exports = {
  themeConfig: {
    newsletterEndpoint: "https://xxxxxxx.xx"
  }
};
```

## newsletterContent

- Type: `string`
- Default: `Subscribe to get my lastest content. No spam.`

This is the message that will be displayed on the newsletter form at the bottom of a blogpost page.

Example:

```js
module.exports = {
  themeConfig: {
    newsletterCotent: "Subscribe and get more content like this one!"
  }
};
```

## googleAnalyticsId

- Type: `string`
- Default: `null`

Provide the Google Analytics ID to enable integration.

We use `@vuepress/plugin-google-analytics` under the hood. [Read me here](https://vuepress.vuejs.org/plugin/official/plugin-google-analytics.html).

Example:

```js
module.exports = {
  themeConfig: {
    googleAnalyticsId: "UA-00000000-0"
  }
};
```

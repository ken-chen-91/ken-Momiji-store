const path = require("path")

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Ken Store`,
    description: `some radom description`,
    author: `Ken Chen`,
    data: ["item 1", "item 2"],
    email: `a330120231@gmail.com`,
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-nodejs`,
    // `gatsby-plugin-layout`,
    {
      resolve: "gatsby-source-shopify",
      options: {
        shopName: process.env.SHOP_NAME,
        accessToken: process.env.SHOPIFY_ACCESS_TOKEN,
        verbose: true,
        apiVersion: "2020-07",
        // includeCollections: ["shop", "content"],
      },
    },
    {
      // You can have multiple instances of this plugin
      // to read source nodes from different locations on your
      // filesystem.

      // The following sets up the Jekyll pattern of having a
      // "pages" directory for Markdown files and a "data" directory
      // for `.json`, `.yaml`, `.csv`.
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/pageIcon.png`,  // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        "~": path.join(__dirname, "src/"),
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-ZL3S8CN5XM",
        anonymize: true,
        respectDNT: true,
      },
    },
  ],
}

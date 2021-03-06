module.exports = {
  pathPrefix: "/gatsby-site",
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "gatsby-site",
  },
  plugins: [
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Perfectas",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: ["gatsby-source-filesystem", "gatsby-plugin-styled-components"],
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};

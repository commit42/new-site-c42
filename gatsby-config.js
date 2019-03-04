module.exports = {
  siteMetadata: {
    title: 'commit42',
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: "markdown-pages"
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [],
      },
    },
    
    // Doit toujours être en dernier
    `gatsby-plugin-netlify-cms`
  ],
}
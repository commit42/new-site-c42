module.exports = {
  siteMetadata: {
    title: 'commit42 | Studio de développement Web',
    description: 'Studio de développement Web à Toulouse - React - Progressive Web Apps - CakePHP',
    url: 'commit42.fr',
    image: '',
    twitterUsername: '@commit42'
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              name: `assets`,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 200,
            },
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
    // Doit toujours être en dernier
    `gatsby-plugin-netlify-cms`
  ],
}
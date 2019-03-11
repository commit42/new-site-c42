module.exports = {
  siteMetadata: {
    title: 'commit42 | Studio de développement Web',
    description: 'Studio de développement Web à Toulouse - React - Progressive Web Apps - CakePHP',
    url: 'https://new-site-c42.netlify.com',
    image: '/assets/logo.png',
    twitterUsername: '@commit42'
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-csp`,
      options: {
        disableOnDev: true,
        mergeScriptHashes: true, // you can disable scripts sha256 hashes
        mergeStyleHashes: true, // you can disable styles sha256 hashes
        mergeDefaultDirectives: true,
        directives: {
          "script-src": "'self' www.google-analytics.com",
          "style-src": "'self' https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic&subset=latin 'unsafe-inline'",
          "img-src": "'self' data: www.google-analytics.com"
          // you can add your directives or override defaults
        }
      }
    },
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
          `gatsby-remark-emoji`,
          `gatsby-remark-prismjs`,
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
module.exports = {
  siteMetadata: {
    title: "commit42 | Studio de développement Web",
    description:
      "Studio de développement Web à Toulouse - React - Progressive Web Apps - CakePHP",
    siteUrl: "https://www.commit42.com/",
    image: "assets/favicon.png",
    twitterUsername: "@commit42",
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
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
              maxWidth: 970,
            },
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              destinationDir: "static",
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-plugin-less`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/commit42-sitemap.xml`,
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage {
            edges {
              node {
                path
              }
            }
          }
      }`,
      },
    },
    {
      resolve: "gatsby-plugin-matomo",
      options: {
        siteId: "1",
        matomoUrl: "http://analytics.commit42.fr",
        siteUrl: "https://www.commit42.com/",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Site de commit42",
        short_name: "commit42",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#424242",
        display: "standalone",
        icon: "src/favicon.png",
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-favicon`,
    // Doit toujours être en dernier
    `gatsby-plugin-netlify-cms`,
  ],
}

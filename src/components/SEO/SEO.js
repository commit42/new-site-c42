import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import Facebook from "./Facebook"
import Twitter from "./Twitter"

import favicon from "../../../static/favicon.ico"
import favicon32 from "../../../static/assets/favicon/favicon-32.png"
import favicon64 from "../../../static/assets/favicon/favicon-64.png"
import favicon96 from "../../../static/assets/favicon/favicon-96.png"
import favicon144 from "../../../static/assets/favicon/favicon-144.png"
import favicon196 from "../../../static/assets/favicon/favicon-196.png"

import faviconApple from "../../../static/assets/favicon/apple-touch-icon.png"
import faviconApple60 from "../../../static/assets/favicon/apple-touch-icon-60x60.png"
import faviconApple76 from "../../../static/assets/favicon/apple-touch-icon-76x76.png"
import faviconApple114 from "../../../static/assets/favicon/apple-touch-icon-114x114.png"
import faviconApple120 from "../../../static/assets/favicon/apple-touch-icon-120x120.png"
import faviconApple144 from "../../../static/assets/favicon/apple-touch-icon-144x144.png"

const SEO = ({ title, description, image, pathname, article }) => {
  return (
    <StaticQuery
      query={query}
      render={({
        site: {
          siteMetadata: {
            defaultTitle,
            defaultDescription,
            defaultUrl,
            defaultImage,
            twitterUsername,
          },
        },
      }) => {
        const seo = {
          title: title || defaultTitle,
          description: description || defaultDescription,
          image: `${defaultUrl}${image || defaultImage}`,
          siteUrl: `${defaultUrl}${pathname || "/"}`,
        }

        return (
          <>
            <Helmet title={seo.title}>
              <html lang="fr" />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
              />

              <meta name="description" content={seo.description} />
              <meta name="image" content={seo.image} />
              <link rel="shortcut icon" href={favicon} />
              <link rel="icon" href={favicon} />

              {/* Favicon */}
              <link
                rel="icon"
                type="image/png"
                sizes="192x192"
                href={favicon}
              />
              <link rel="icon" type="image/png" sizes="32x32" href={favicon} />
              <link rel="icon" type="image/png" sizes="96x96" href={favicon} />
              <link rel="icon" type="image/png" sizes="16x16" href={favicon} />

              <link
                rel="shortcut icon"
                href="favicon.ico"
                type="image/x-icon"
              />
              <link rel="icon" href="favicon.png" type="image/png" />
              <link
                rel="icon"
                sizes="32x32"
                href={favicon32}
                type="image/png"
              />
              <link
                rel="icon"
                sizes="64x64"
                href={favicon64}
                type="image/png"
              />
              <link
                rel="icon"
                sizes="96x96"
                href={favicon96}
                type="image/png"
              />
              <link
                rel="icon"
                sizes="196x196"
                href={favicon196}
                type="image/png"
              />
              <link
                rel="apple-touch-icon"
                sizes="152x152"
                href={faviconApple}
              />
              <link
                rel="apple-touch-icon"
                sizes="60x60"
                href={faviconApple60}
              />
              <link
                rel="apple-touch-icon"
                sizes="76x76"
                href={faviconApple76}
              />
              <link
                rel="apple-touch-icon"
                sizes="114x114"
                href={faviconApple114}
              />
              <link
                rel="apple-touch-icon"
                sizes="120x120"
                href={faviconApple120}
              />
              <link
                rel="apple-touch-icon"
                sizes="144x144"
                href={faviconApple144}
              />
              <meta name="msapplication-TileImage" content={favicon144} />
              <meta name="msa</meta>pplication-TileColor" content="#FFFFFF" />

              {/* fontawesome */}
              <link
                rel="stylesheet"
                href="https://pro.fontawesome.com/releases/v5.8.1/css/regular.css"
                integrity="sha384-ELBQxbOyxSZRtZPNO1mVgYkEzMOXFNmQY6CLV1nw+4IZoiHWeuwYTnABxPxxsuBE"
                crossorigin="anonymous"
              />
              <link
                rel="stylesheet"
                href="https://pro.fontawesome.com/releases/v5.8.1/css/fontawesome.css"
                integrity="sha384-4HqGlagEHMyfaDQVabl1wx7GCtGw6hDl3sKJEhqQjOCrXrvizhaA2j4hK8Piewtr"
                crossorigin="anonymous"
              />
            </Helmet>
            <Facebook
              desc={seo.description}
              image={seo.image}
              title={seo.title}
              type={article ? "article" : "website"}
              siteUrl={seo.siteUrl}
            />
            <Twitter
              title={seo.title}
              image={seo.image}
              desc={seo.description}
              username={twitterUsername}
            />
          </>
        )
      }}
    />
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.object,
  pathname: PropTypes.string,
  article: PropTypes.bool,
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  pathname: null,
  article: false,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        defaultUrl: siteUrl
        defaultImage: image
        twitterUsername
      }
    }
  }
`

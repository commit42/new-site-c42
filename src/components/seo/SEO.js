import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import Facebook from "./Facebook"
import Twitter from "./Twitter"
import favicon from "../../../static/favicon.ico"

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

              <meta
                name="google-site-verification"
                content="LF-7NXdTmuJR-Tb6JKkD7Zs0uXN-YcIIxjeSNZs7YYg"
              />

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

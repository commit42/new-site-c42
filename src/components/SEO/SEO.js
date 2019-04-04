import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import favicon from "../../../static/favicon.png"
import Facebook from "./Facebook"
import Twitter from "./Twitter"

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
          siteurl: `${defaultUrl}${pathname || "/"}`,
        }

        return (
          <>
            <Helmet title={seo.title}>
              <html lang="fr" />
              <meta name="description" content={seo.description} />
              <meta name="image" content={seo.image} />
              <link rel="shortcut icon" href={favicon} />
              <link
                rel="stylesheet"
                href="https://pro.fontawesome.com/releases/v5.8.1/css/all.css"
                integrity="sha384-Bx4pytHkyTDy3aJKjGkGoHPt3tvv6zlwwjc3iqN7ktaiEMLDPqLSZYts2OjKcBx1"
                crossorigin="anonymous"
              />

              {/* slick */}
              <link
                rel="stylesheet"
                type="text/css"
                charset="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
              />
              <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
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

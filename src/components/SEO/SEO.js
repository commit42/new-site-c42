import React from 'react';
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import favicon from '../../../static/favicon.png'
import Facebook from './Facebook'
import Twitter from './Twitter'

const SEO = ({ title, description, image, pathname, article }) => {
  return (
    <StaticQuery
      query={query}
      render={({
        site: {
          siteMetadata: {
            defaultTitle,
            defaultDescription,
            siteUrl,
            defaultImage,
            twitterUsername,
          }
        }
      }) => {
        const seo = {
          title: title || defaultTitle,
          description: description || defaultDescription,
          image: `${siteUrl}${image || defaultImage}`,
          url: `${siteUrl}${pathname || '/'}`
        }

        return (
          <>
            <Helmet title={seo.title}>
              <html lang="fr" />
              <meta name="description" content={seo.description} />
              <link rel="shortcut icon" href={favicon}></link>
              <meta name="image" content={seo.image} />
              {seo.url && <meta property="og:url" content={seo.url} />}
              {(article ? true : null) && (
                <meta property="og:type" content="article" />
              )}
              {seo.title && <meta property="og:title" content={seo.title} />}
              {seo.description && (
                <meta property="og:description" content={seo.description} />
              )}
              {seo.image && <meta property="og:image" content={seo.image} />}
            </Helmet>
            <Facebook
              desc={seo.description}
              image={seo.image}
              title={seo.title}
              type={article ? 'article' : 'website'}
              url={seo.url}
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
  );
}

export default SEO;

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
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
        siteUrl: url
        defaultImage: image
        twitterUsername
      }
    }
  }
`;
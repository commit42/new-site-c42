import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo/SEO"
import Hero from "../components/ecommerce/HeroEcommerce"
import References from "../components/ecommerce/ReferencesEcommerce"

class EcommercePage extends Component {
  render() {
    const ecommerceData = this.props.data.markdownRemark.frontmatter
    return (
      <Layout>
        <SEO title="E-commerce | commit42" pathname="/ecommerce" />
        <Hero data={ecommerceData.hero} />
        <References data={ecommerceData.references} />
      </Layout>
    )
  }
}

export default EcommercePage

export const ecommercePageQuery = graphql`
  query ecommercePageQuery {
    markdownRemark(frontmatter: { pageName: { eq: "e-commerce" } }) {
      frontmatter {
        pageName
        hero {
          heading
          text
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        references {
          title
          referencesList {
            title
            description
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

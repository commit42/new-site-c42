import React from "react"
import { Container } from "semantic-ui-react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo/SEO"
import HeroPwa from "../components/pwa/HeroPwa"
import CharactPwa from "../components/pwa/CharactPwa"
import SchemaPwa from "../components/pwa/SchemaPwa"
import ExamplesPwa from "../components/pwa/ExamplesPwa"
import ReferencesPwa from "../components/pwa/ReferencesPwa"

class PwaPage extends React.Component {
  render() {
    const pwaData = this.props.data.markdownRemark.frontmatter
    return (
      <Layout>
        <SEO title="PWA | commit42" pathname="/pwa" />
        <HeroPwa data={pwaData.hero} />
        <Container fluid className="primary" id="pwa-container">
          <CharactPwa data={pwaData.characteristics} />
          <SchemaPwa data={pwaData.schema} />
          <ExamplesPwa data={pwaData.examples} />
          <ReferencesPwa data={pwaData.references} />
        </Container>
      </Layout>
    )
  }
}

export default PwaPage

export const pwaPageQuery = graphql`
  query pwaPageQuery {
    markdownRemark(frontmatter: { pageName: { eq: "pwa" } }) {
      frontmatter {
        pageName
        hero {
          heading
          text
          message
          image {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
                originalName
              }
            }
          }
        }
        characteristics {
          icon
          title
          description
          bgColor
        }
        schema {
          heading
          description
          image {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
                originalName
              }
            }
          }
        }
        examples {
          heading
          description
          examplesList {
            icon
            title
            bgColor
          }
        }
        references {
          heading
          referencesList {
            heading
            description
            image {
              id
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                  originalName
                }
              }
            }
          }
        }
      }
    }
  }
`

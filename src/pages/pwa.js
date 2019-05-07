import React from "react"
import { Container } from "semantic-ui-react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import HeroPwa from "../components/pwa/HeroPwa"
import CharactPwa from "../components/pwa/CharactPwa"
import SchemaPwa from "../components/pwa/SchemaPwa"
import ExamplesPwa from "../components/pwa/ExamplesPwa"
import ReferencesPwa from "../components/pwa/ReferencesPwa"

class Pwa extends React.Component {
  render() {
    const pwaData = this.props.data.markdownRemark.frontmatter
    return (
      <Layout>
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

export default Pwa

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
              fluid {
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
              fluid {
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
                fluid {
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

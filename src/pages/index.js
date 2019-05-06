import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo/SEO"
import HeroHome from "../components/homepage/HeroHome"
import Services from "../components/homepage/Services"
import Pitch from "../components/homepage/Pitch"
import Testimonials from "../components/homepage/Testimonials"
import CallToAction from "../components/homepage/CallToAction"

class IndexPage extends React.Component {
  render() {
    const {
      markdownRemark: { frontmatter: indexData },
    } = this.props.data

    return (
      <div>
        <Layout>
          <SEO />
          <HeroHome data={indexData.head} />
          <Services data={indexData.services} />
          <Pitch data={indexData.pitch} />
          <Testimonials data={indexData.testimonials} />
          <CallToAction />
        </Layout>
      </div>
    )
  }
}

export default IndexPage

export const indexPageQuery = graphql`
  query indexPageQuery {
    markdownRemark(frontmatter: { pageName: { eq: "index" } }) {
      frontmatter {
        pageName
        head {
          description
          heading
          image {
            childImageSharp {
              fluid(maxWidth: 980) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        services {
          heading
          servicesList {
            description
            title
            icon
          }
        }
        pitch {
          description
          title
          darkBg
          image {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
                originalName
              }
            }
          }
        }
        testimonials {
          heading
          testimonialsList {
            author
            rating
            text
          }
        }
      }
    }
  }
`

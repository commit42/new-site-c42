import React from "react"
import { graphql } from "gatsby"
import "semantic-ui-css/semantic.min.css"
import SEO from "../components/SEO/SEO"
import Layout from "../components/layout"
import HeaderIndex from "../components/homepage/HeaderIndex"
import Services from "../components/homepage/Services"
import Pitch from "../components/homepage/Pitch"
import Testimonials from "../components/homepage/Testimonials"
import CallToAction from "../components/homepage/CallToAction"

const IndexPage = ({ data }) => {
  const {
    markdownRemark: { frontmatter: indexData },
  } = data
  return (
    <div>
      <Layout>
        <SEO />
        <HeaderIndex data={indexData.head} />
        <Services data={indexData.services} />
        <Pitch data={indexData.pitch} />
        <Testimonials data={indexData.testimonials} />
        <CallToAction />
      </Layout>
    </div>
  )
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
          image
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
          image
          title
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

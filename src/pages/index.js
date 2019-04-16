import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo/SEO"
import HeaderHome from "../components/homepage/HeaderHome"
import Services from "../components/homepage/Services"
import Pitch from "../components/homepage/Pitch"
import Testimonials from "../components/homepage/Testimonials"
import CallToAction from "../components/homepage/CallToAction"

const isClient = typeof window !== "undefined"
class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { viewportWidth: 0 }
  }

  componentDidMount() {
    if (isClient) {
      window.addEventListener("resize", this.updateWindowDimensions)
      setTimeout(() => {
        this.updateWindowDimensions()
      }, 500)
    }
  }

  componentWillUnmount() {
    if (isClient)
      window.removeEventListener("resize", this.updateWindowDimensions)
  }

  updateWindowDimensions = () => {
    this.setState({ viewportWidth: window.innerWidth })
  }

  render() {
    const {
      markdownRemark: { frontmatter: indexData },
    } = this.props.data
    const { viewportWidth } = this.state
    const isMobile = Boolean(viewportWidth <= 800)
    return (
      <div>
        <Layout>
          <SEO />
          <HeaderHome data={indexData.head} />
          <Services data={indexData.services} />
          <Pitch data={indexData.pitch} />
          <Testimonials data={indexData.testimonials} isMobile={isMobile} />
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

import React from "react"
import "semantic-ui-css/semantic.min.css"
import { graphql } from "gatsby"
import SEO from "../components/SEO/SEO"
import Layout from "../components/layout"
import HeaderIndex from "../components/homepage/HeaderIndex"
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
    const isMobile = Boolean(viewportWidth <= 800);
    return (
      <div>
        <Layout>
          <SEO />
          <HeaderIndex data={indexData.head} />
          <Services data={indexData.services} />
          <Pitch data={indexData.pitch} />
          <Testimonials
            data={indexData.testimonials}
            isMobile={isMobile}
          />
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
              fixed(width: 800) {
                ...GatsbyImageSharpFixed
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

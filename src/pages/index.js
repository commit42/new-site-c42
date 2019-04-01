import React, { Component } from "react"
import "semantic-ui-css/semantic.min.css"
import SEO from "../components/SEO/SEO"
import Layout from "../components/layout"
import HeaderIndex from "../components/homepage/HeaderIndex"
import Services from "../components/homepage/Services"
import Pitch from "../components/homepage/Pitch"
import Testimonials from "../components/homepage/Testimonials"
import CallToAction from "../components/homepage/CallToAction"

// class IndexPage extends Component {
//   render() {
//     console.log(data)
//     return (
//       <div>
//         <Layout isHome={true} path={this.props.location.pathname}>
//           <SEO />
//           <HeaderIndex />
//           <Services />
//           <Pitch />
//           <Testimonials />
//           <CallToAction />
//         </Layout>
//       </div>
//     )
//   }
// }

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <div>
      <Layout>
        <SEO />
        <HeaderIndex />
        <Services />
        <Pitch />
        <Testimonials />
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
        services {
          heading
        }
      }
    }
  }
`

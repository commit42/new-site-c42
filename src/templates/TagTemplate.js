import React from "react"
import { graphql } from "gatsby"
import { Grid, Container, Header } from "semantic-ui-react"
import startCase from "lodash/startCase"
import kebabCase from "lodash/kebabCase"
import Fade from "react-reveal/Fade"

import Layout from "../components/Layout"
import SEO from "../components/seo/SEO"
import BlogCard from "../components/blog/BlogCard"

const TagTemplate = ({ data, pageContext }) => {
  const { posts, tagName } = pageContext
  return (
    <Layout>
      <SEO
        title={`${startCase(tagName)} | commit42`}
        description={`Tous les articles sur le thème: ${startCase(tagName)}`}
        pathname={`/tags/${kebabCase(tagName)}`}
      />
      <Grid as={Container} style={{ marginTop: "3rem", marginBottom: "3rem" }}>
        <Grid.Row textAlign="center" style={{ marginTop: "3rem" }}>
          <Grid.Column>
            <Fade top>
              <Header as="h1" style={{ marginBottom: "2rem" }}>
                {startCase(tagName)}
              </Header>
            </Fade>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Container
        fluid
        style={{
          backgroundColor: "#F9F9F9",
          padding: "5rem 0 5rem 0",
        }}
      >
        <Grid as={Container}>
          <Grid.Row centered>
            {posts.map(post => {
              return <BlogCard post={post} key={post.id} />
            })}
          </Grid.Row>
        </Grid>
      </Container>
    </Layout>
  )
}

export default TagTemplate

export const TagPageQuery = graphql`
  query TagPageQuery {
    markdownRemark(frontmatter: { pageName: { eq: "blog" } }) {
      frontmatter {
        header
        description
        image {
          childImageSharp {
            fluid(maxWidth: 980) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

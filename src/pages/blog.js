import React from "react"

import { graphql } from "gatsby"
import { Container, Grid } from "semantic-ui-react"

import SEO from "../components/seo/SEO"
import Layout from "../components/Layout"
import HeroBlog from "../components/blog/HeroBlog"
import BlogCard from "../components/blog/BlogCard"
import Fade from "react-reveal/Fade"

class BlogPage extends React.Component {
  render() {
    const { edges: posts } = this.props.data.allMarkdownRemark
    const blogData = this.props.data.markdownRemark.frontmatter
    return (
      <Layout>
        <SEO
          title="Blog | commit42"
          description="Super blog trop cool de commit42"
          pathname="/blog"
        />
        <HeroBlog data={blogData} />
        <Container
          fluid
          style={{ padding: "5rem 0 5rem 0" }}
          className="primary"
        >
          <Grid as={Container}>
            <Grid.Row>
              {posts
                .filter(post => post.node.frontmatter.title.length > 0)
                .map(({ node: post }) => {
                  return <BlogCard post={post} key={post.id} />
                })}
            </Grid.Row>
          </Grid>
        </Container>
      </Layout>
    )
  }
}
export default BlogPage

export const BlogPageQuery = graphql`
  query BlogPageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 150)
          timeToRead
          id
          fields {
            slug
          }
          frontmatter {
            title
            date
            tags
            author
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 950) {
                  ...GatsbyImageSharpFluid
                  originalName
                }
              }
            }
          }
        }
      }
    }
    markdownRemark(frontmatter: { pageName: { eq: "blog" } }) {
      frontmatter {
        header
        description
        image {
          childImageSharp {
            fixed(width: 432) {
              ...GatsbyImageSharpFixed
              originalName
            }
          }
        }
      }
    }
  }
`

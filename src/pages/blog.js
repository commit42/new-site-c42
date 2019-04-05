import React from "react"

import { graphql } from "gatsby"
import { Container, Grid } from "semantic-ui-react"

import SEO from "../components/SEO/SEO"
import Layout from "../components/layout"
import HeaderBlogPage from "../components/blog-page/HeaderBlogPage"
import BlogCard from "../components/blog-page/BlogCard"
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
        <HeaderBlogPage data={blogData} />

        <Container
          fluid
          style={{ backgroundColor: "#F9F9F9", padding: "5rem 0 5rem 0" }}
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
                fluid(maxWidth: 980) {
                  ...GatsbyImageSharpFluid
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
            fluid(maxWidth: 980) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

import React from "react"
import Image from "gatsby-image"
import moment from "moment"

import { Link, graphql } from "gatsby"
import { Container, Grid, Card, Label, Header } from "semantic-ui-react"

import SEO from "../components/SEO/SEO"
import Layout from "../components/layout"
import HeaderBlogPage from "../components/blog-page/HeaderBlogPage"
class BlogPage extends React.Component {
  render() {
    const { edges: posts } = this.props.data.allMarkdownRemark
    const blogData = this.props.data.markdownRemark.frontmatter
    console.log(blogData)
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
          style={{ backgroundColor: "#F9F9F9", padding: "5rem 0 10rem 0" }}
        >
          <Grid as={Container}>
            <Grid.Row>
              <Header as="h2" style={{ marginBottom: "5rem" }}>
                Tous les articles
              </Header>
            </Grid.Row>
            <Grid.Row>
              {posts
                .filter(post => post.node.frontmatter.title.length > 0)
                .map(({ node: post }) => {
                  return (
                    <Grid.Column
                      key={post.id}
                      mobile={16}
                      tablet={8}
                      computer={5}
                      style={{ marginBottom: "3rem" }}
                    >
                      <Card fluid as={Link} to={post.fields.slug}>
                        {post.frontmatter.thumbnail != null && (
                          <Image
                            fluid={
                              post.frontmatter.thumbnail.childImageSharp.fluid
                            }
                            centered
                          />
                        )}

                        <Card.Content>
                          <Card.Header>{post.frontmatter.title}</Card.Header>
                          <Card.Meta
                            style={{
                              marginTop: "0.5rem",
                              color: "#6BA3D6",
                            }}
                          >
                            <span>
                              {moment(post.frontmatter.date).format(
                                "Do MMM YYYY"
                              )}
                            </span>
                            <span> • {post.timeToRead}min à perdre</span>
                          </Card.Meta>
                          <Card.Description>{post.excerpt}</Card.Description>
                        </Card.Content>

                        {post.frontmatter.tags && (
                          <Card.Content extra>
                            {post.frontmatter.tags
                              .slice(0, 4)
                              .map((tag, index) => (
                                <Label
                                  key={index}
                                  style={{ marginBottom: "0.5rem" }}
                                >
                                  {tag}
                                </Label>
                              ))}
                          </Card.Content>
                        )}
                      </Card>
                    </Grid.Column>
                  )
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

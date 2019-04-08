import React from 'react';
import PropTypes from 'prop-types'
import Image from "gatsby-image"
import moment from "moment"
import Fade from "react-reveal/Fade"

import { Link, graphql } from "gatsby"
import { Container, Grid, Card, Label, Header } from "semantic-ui-react"

import SEO from "./src/components/SEO/SEO"
import Layout from "./src/components/layout"

export const BlogPageTemplate = ({
  header,
  description,
  posts
  
}) => {
  return (
    <Layout>
      <SEO
        title="Blog | commit42"
        description="Super blog trop cool de commit42"
        pathname="/blog"
      />
      <Grid as={Container} style={{ marginTop: "15rem", marginBottom: "5rem" }}>
        <Grid.Row>
          <Grid.Column>
            <Fade top>
              <Image src="http://via.placeholder.com/800x500" centered />
            </Fade>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row textAlign="center" style={{ marginTop: "3rem" }}>
          <Grid.Column>
            <Fade top>
              <Header as="h1">
                {header}
              </Header>
              <p>{description}</p>
            </Fade>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          {posts
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({ node: post }) => {
              const {title, thumbnail, date, tags} = post.node.frontmatter
              return (
                <Grid.Column
                  key={post.id}
                  mobile={16}
                  tablet={8}
                  computer={5}
                  style={{ marginBottom: "3rem" }}
                >
                  <Card fluid as={Link} to={post.fields.slug}>
                    {thumbnail != null && (
                      <Image
                        fluid={
                          thumbnail.childImageSharp.fluid
                        }
                        centered
                      />
                    )}

                    <Card.Content>
                      <Card.Header>{title}</Card.Header>
                      <Card.Meta
                        style={{
                          marginTop: "0.5rem",
                          color: "#6BA3D6",
                        }}
                      >
                        <span>
                          {moment(date).format(
                            "Do MMM YYYY"
                          )}
                        </span>
                        <span> • {post.timeToRead}min à perdre</span>
                      </Card.Meta>
                      <Card.Description>{post.excerpt}</Card.Description>
                    </Card.Content>

                    <Card.Content extra>
                      {tags &&
                        tags
                          .map((tag, index) => (
                            <Label key={index}>{tag}</Label>
                          ))}
                    </Card.Content>
                  </Card>
                </Grid.Column>
              )
            })}
        </Grid.Row>
      </Grid>
    </Layout>
  )
}

BlogPageTemplate.propTypes = {
  description: PropTypes.string,
  header: PropTypes.string,
  posts: PropTypes.object
}

const BlogPage = ({data}) => {
  const { edges: posts } = data.allMarkdownRemark
  const blogData = data.markdownRemark.frontmatter

  return (
    <Layout>
      <BlogPageTemplate 
        header={blogData.header}
        description={blogData.description}
        posts={posts}
      />
    </Layout>
  )
}

export default BlogPage

BlogPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
    allmarkdownRemark: PropTypes.object
  }),
}


export const BlogPageTemplateQuery = graphql`
  query BlogPageTemplateQuery {
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
      }
    }
  }
`

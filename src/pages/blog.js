import React from "react"
import { Link, graphql } from "gatsby"
import { Container, Grid, Card } from 'semantic-ui-react'
import Layout from '../components/layout'

export default function BlogPage({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <Layout className="blog-posts">
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <h1>Blog</h1>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Card.Group>
                {
                  posts
                    .filter(post => post.node.frontmatter.title.length > 0)
                    .map(({ node: post }) => {
                      return (
                        <Card key={post.id} fluid>
                          <Card.Content>
                            <Card.Header as={Link} to={post.frontmatter.path}>{post.frontmatter.title}</Card.Header>
                            <Card.Meta>{post.frontmatter.date}</Card.Meta>
                            <Card.Description>{post.excerpt}</Card.Description>
                          </Card.Content>
                        </Card>
                      )
                    })
                }
              </Card.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date
            path
          }
        }
      }
    }
  }
`
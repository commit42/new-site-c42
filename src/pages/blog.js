import React from "react"
import './blog.scss';
import { Link, graphql } from "gatsby"
import { Container, Grid, Card, Transition, Label } from 'semantic-ui-react'
import Layout from '../components/layout'

class BlogPage extends React.Component {
  state = { visible: false }

  componentDidMount() {
    this.setState({ visible: !this.state.visible })
  }

  render() {
    const { edges: posts } = this.props.data.allMarkdownRemark
    console.log(posts)
    return (
      <Layout >
        <Container text>
          <Grid>
            <Grid.Row>
              <Grid.Column textAlign="center">
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
                          <Transition visible={this.state.visible} animation='fade up' duration={1200}>
                            <Card key={post.id} fluid className="post-card">
                              <Card.Content>
                                <Card.Header as={Link} to={post.frontmatter.path}>{post.frontmatter.title}</Card.Header>
                                <Card.Meta>Posté le {post.frontmatter.date}</Card.Meta>
                                <Card.Description>{post.excerpt}</Card.Description>
                              </Card.Content>
                              <Card.Content extra>
                                {post.frontmatter.tags.map((tag, index) => <Label key={index}>{tag}</Label>)}
                              </Card.Content>
                            </Card>
                          </Transition>
                          
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
}
export default BlogPage;

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
            tags
          }
        }
      }
    }
  }
`


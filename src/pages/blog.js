import React from "react"
import { Link, graphql } from "gatsby"
import { Container, Grid, Card, Transition, Label, Image, Header } from 'semantic-ui-react'
import SEO from '../components/SEO/SEO'
import Layout from '../components/layout'
import moment from 'moment'

class BlogPage extends React.Component {
  state = { visible: false }

  componentDidMount() {
    this.setState({ visible: !this.state.visible })
  }

  render() {
    const { edges: posts } = this.props.data.allMarkdownRemark;

    return (
      <Layout>
        <SEO
          title="Blog | commit42"
          description="Super blog trop cool de commit42"
          pathname="/blog"
        />
        <Grid as={Container} text style={{ marginTop: '15rem', marginBottom:'5rem' }}>
          <Grid.Row>
            <Grid.Column>
              <Image src="http://via.placeholder.com/800x500" centered />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row textAlign='center' style={{ marginTop: '3rem' }}>
            <Grid.Column>
              <Header as="h1">Prenez un ☕ et détendez vous 📖</Header>
              <p>Consequat exercitation proident labore culpa. Mollit aliqua sint eu enim aliqua velit irure sunt proident quis. Excepteur qui eu non voluptate aliquip. Dolore aliqua sit pariatur pariatur qui enim. Adipisicing est id laboris labore quis labore ut in esse voluptate.</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Container fluid style={{backgroundColor: '#F9F9F9', padding:'5rem 0 10rem 0'}}>
        <Grid as={Container}>
          <Grid.Row >
            <Grid.Column width={16}>
              <Card.Group itemsPerRow={2}>
                {
                  posts
                    .filter(post => post.node.frontmatter.title.length > 0)
                    .map(({ node: post }) => {
                      return (
                        <Transition key={post.id} visible={this.state.visible} animation='fade up' duration={800}>
                          <Card fluid as={Link} to={post.fields.slug}>
                            <Card.Content>
                              <Card.Header >{post.frontmatter.title}</Card.Header>
                              <Card.Meta>{moment(post.frontmatter.date).format('LL')}</Card.Meta>
                              <Card.Description>{post.excerpt}</Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                              {post.frontmatter.tags && post.frontmatter.tags.map((tag, index) => <Label key={index}>{tag}</Label>)}
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
          fields {
            slug
          }
          frontmatter {
            title
            date
            tags
          }
        }
      }
    }
  }
`


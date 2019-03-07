import React from "react"
import './blog.scss';
import { Link, graphql } from "gatsby"
import { Container, Grid, Card, Transition, Label } from 'semantic-ui-react'
import SEO from '../components/SEO'
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
        <Container text style={{ marginTop: '3rem', marginBottom: '3rem' }}>
          <Grid>
            <Grid.Row>
              <Grid.Column textAlign="center">
                <h1>Blog</h1>
                <div style={{ height: '5px', backgroundColor: 'black', width: '15%', margin: 'auto', borderRadius: '10px' }}></div>
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
                          <Transition visible={this.state.visible} animation='fade up' duration={800}>
                            <Card key={post.id} fluid as={Link} to={post.fields.slug}>
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


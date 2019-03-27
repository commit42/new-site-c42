import React from "react"
import { Link, graphql } from "gatsby"
import { Container, Grid, Card, Transition, Label, Image, Header, Icon } from 'semantic-ui-react'
import SEO from '../components/SEO/SEO'
import Layout from '../components/layout'
import moment from 'moment'
import Fade from 'react-reveal/Fade';

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
        <Grid as={Container} style={{ marginTop: '15rem', marginBottom: '5rem' }}>
          <Grid.Row>
            <Grid.Column>
              <Image src="http://via.placeholder.com/800x500" centered />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row textAlign='center' style={{ marginTop: '3rem' }}>
            <Grid.Column>
              <Header as="h1">Prenez un <span role="img" aria-label="Coffe cup">☕</span> et détendez vous <span role="img" aria-label="Open book">📖</span></Header>
              <p>Consequat exercitation proident labore culpa. Mollit aliqua sint eu enim aliqua velit irure sunt proident quis. Excepteur qui eu non voluptate aliquip. Dolore aliqua sit pariatur pariatur qui enim. Adipisicing est id laboris labore quis labore ut in esse voluptate.</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Container fluid style={{ backgroundColor: '#F9F9F9', padding: '5rem 0 10rem 0' }}>
          <Grid as={Container}>
            <Grid.Row >
              <Header as="h2" style={{ marginBottom: '5rem' }}>Tous les articles</Header>
            </Grid.Row>
            <Grid.Row>
              {
                posts
                  .filter(post => post.node.frontmatter.title.length > 0)
                  .map(({ node: post }) => {
                    return (
                      <Grid.Column key={post.id} mobile={16} tablet={8} computer={8} style={{marginBottom:'3rem'}}>
                          <Card fluid as={Link} to={post.fields.slug} >
                            <Image src={post.frontmatter.thumbnail && post.frontmatter.thumbnail} centered />

                            <Card.Content >
                              <Card.Header >{post.frontmatter.title}</Card.Header>
                              <Card.Meta style={{ marginTop: '0.5rem', color: '#6BA3D6' }}>
                                <span>{moment(post.frontmatter.date).format('Do MMM YYYY')}</span>
                                <span> • {post.timeToRead}min à perdre</span>
                              </Card.Meta>
                              <Card.Description>{post.excerpt}</Card.Description>
                            </Card.Content>

                            <Card.Content extra>
                              {post.frontmatter.tags && post.frontmatter.tags.slice(0, 4).map((tag, index) => <Label key={index}>{tag}</Label>)}
                            </Card.Content>
                          </Card>

                          {/* <Card fluid as={Link} to={post.fields.slug}>
                              <Grid>
                                <Grid.Column width={6}>
                                  <Image src={post.frontmatter.thumbnail && post.frontmatter.thumbnail}  fluid />
                                </Grid.Column>
                                <Grid.Column width={10} style={{padding: '3rem 2rem 2rem 0'}}>

                                  <Card.Content>
                                    <Card.Header as="h3">{post.frontmatter.title}</Card.Header>
                                    <Card.Meta>
                                      <span>{moment(post.frontmatter.date).format('Do MMM YYYY')}</span>
                                      <span> • {post.timeToRead}min à perdre</span>
                                    </Card.Meta>
                                    <Card.Description style={{ marginTop: '1rem' }}>{post.excerpt}</Card.Description>
                                  </Card.Content>

                                  <Card.Content extra style={{marginTop: '1rem', color:'#6BA3D6'}}>
                                    {post.frontmatter.tags && post.frontmatter.tags.slice(0, 4).map((tag, index) => <Label key={index}>{tag}</Label>)}
                                  </Card.Content>
                                  
                                </Grid.Column>
                              </Grid>
                            </Card> */}
                      </Grid.Column>

                    )
                  })
              }
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
            thumbnail
            author
          }
        }
      }
    }
  }
`


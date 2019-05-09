import React from "react"
import "./PostsListTemplate.scss"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import {
  Container,
  Grid,
  Icon,
  Card,
  Label,
  Header,
  Input,
} from "semantic-ui-react"
import Fade from "react-reveal/Fade"
import moment from "moment"
import _ from "lodash"

import Layout from "../components/Layout"
import SEO from "../components/seo/SEO"
import HeroBlog from "../components/blog/HeroBlog"

const NavLink = props => {
  if (!props.test) {
    return (
      <Link to={props.url}>
        {props.text === "next" ? (
          <Icon name="arrow alternate circle right" size="big" />
        ) : (
          <Icon name="arrow alternate circle left" size="big" />
        )}
      </Link>
    )
  } else {
    return ""
  }
}

class PostsListTemplate extends React.Component {
  state = { value: "" }
  onchangeSearch(e) {
    this.setState({ value: e.target.value })
  }
  render() {
    const { group, index, first, last, pageCount } = this.props.pageContext
    const previousUrl = index - 1 === 1 ? "" : (index - 1).toString()
    const nextUrl = (index + 1).toString()

    const blogData = this.props.data.markdownRemark.frontmatter

    return (
      <Layout>
        <SEO
          title="Blog | commit42"
          description="Découvrez tous les articles de commit42 !"
          pathname="/blog"
        />
        <HeroBlog data={blogData} />
        <Container fluid className="primary" id="posts-list-container">
          <Grid as={Container}>
            <Grid.Row>
              <Input
                type="search"
                icon="search"
                onChange={e => this.onchangeSearch(e)}
              />
            </Grid.Row>
            <Grid.Row>
              {group
                .filter(({ node: item }) => {
                  console.log(item.frontmatter.title.match(this.state.value))
                  return (
                    item.frontmatter.title
                      .toLowerCase()
                      .match(this.state.value) ||
                    item.excerpt.toLowerCase().match(this.state.value)
                  )
                })
                .map(({ node: post }, index) => {
                  const altText =
                    post.frontmatter.thumbnail &&
                    post.frontmatter.thumbnail.childImageSharp.fluid.originalName.slice(
                      0,
                      -4
                    )
                  return (
                    <Grid.Column
                      mobile={16}
                      tablet={8}
                      computer={5}
                      className="blogcard"
                      key={index}
                    >
                      <Fade cascade>
                        <Card fluid as={Link} to={post.fields.slug}>
                          {post.frontmatter.thumbnail != null && (
                            <Image
                              fluid={
                                post.frontmatter.thumbnail.childImageSharp.fluid
                              }
                              alt={altText}
                            />
                          )}

                          <Card.Content>
                            <Card.Header>{post.frontmatter.title}</Card.Header>
                            <Card.Meta className="mt-1">
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
                              {post.frontmatter.tags.map((tag, index) => (
                                <Label key={index}>{tag}</Label>
                              ))}
                            </Card.Content>
                          )}
                        </Card>
                      </Fade>
                    </Grid.Column>
                  )
                })}
            </Grid.Row>
            <Grid.Row textAlign="center" className="posts-list-pagination">
              <Grid.Column>
                <span className="previousLink">
                  <NavLink
                    test={first}
                    url={`/blog/${previousUrl}`}
                    text="prev"
                  />
                </span>
                <Header as="h3" className="pagecount">
                  {index} / {pageCount}
                </Header>
                <span className="nextLink">
                  <NavLink test={last} url={`/blog/${nextUrl}`} text="next" />
                </span>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Layout>
    )
  }
}
export default PostsListTemplate

export const BlogPageQuery = graphql`
  query BlogPageQuery {
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

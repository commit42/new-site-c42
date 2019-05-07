import React from "react"
import Link from "gatsby-link"
import Image from "gatsby-image"
import { Container, Grid, Icon, Card, Label } from "semantic-ui-react"
import Fade from "react-reveal/Fade"
import moment from "moment"
import Layout from "../components/Layout"
import HeroBlog from "../components/blog/HeroBlog"

const NavLink = props => {
  if (!props.test) {
    return <Link to={props.url}>{props.text}</Link>
  } else {
    return <span>{props.text}</span>
  }
}

const IndexPage = ({ pageContext }) => {
  const { group, index, first, last, pageCount } = pageContext
  const previousUrl = index - 1 == 1 ? "" : (index - 1).toString()
  const nextUrl = (index + 1).toString()

  return (
    <Layout>
      <Container fluid className="primary">
        <Grid as={Container}>
          <Grid.Row>
            {group.map(({ node: post }) => (
              <Grid.Column
                mobile={16}
                tablet={8}
                computer={5}
                className="blogcard"
                key={post.frontmatter.title}
              >
                <Fade cascade>
                  <Card fluid as={Link} to={post.fields.slug}>
                    {post.frontmatter.thumbnail != null && (
                      <Image
                        fluid={post.frontmatter.thumbnail.childImageSharp.fluid}
                        // alt={altText}
                      />
                    )}

                    <Card.Content>
                      <Card.Header>{post.frontmatter.title}</Card.Header>
                      <Card.Meta className="mt-1">
                        <span>
                          {moment(post.frontmatter.date).format("Do MMM YYYY")}
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
            ))}
          </Grid.Row>
          <Grid.Row textAlign="center">
            <Grid.Column computer={8}>
              <div className="previousLink">
                <NavLink
                  test={first}
                  url={`/blog/${previousUrl}`}
                  text="Go to Previous Page"
                />
              </div>
            </Grid.Column>
            <Grid.Column computer={8}>
              <div className="nextLink">
                <NavLink
                  test={last}
                  url={`/blog/${nextUrl}`}
                  text={`Go to Next Page`}
                />
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Layout>
  )
}
export default IndexPage

import React from "react"
import "./BlogPostTemplate.scss"
import "../globals.scss"
import moment from "moment"
import kebabCase from "lodash/kebabCase"
import { Container, Header, Label, Grid } from "semantic-ui-react"
import { graphql } from "gatsby"

import SEO from "../components/seo/SEO"
import Layout from "../components/Layout"
import BlogCard from "../components/blog/BlogCard"

export default function BlogPostTemplate({ data, pageContext }) {
  const { prev, next } = pageContext
  const { markdownRemark: post } = data
  const date = post.frontmatter.date

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.excerpt || "nothing here"}
        image={
          post.frontmatter.thumbnail &&
          post.frontmatter.thumbnail.childImageSharp.fluid
        }
        pathname={post.fields.slug}
        article
      />
      <Container
        fluid
        className="header-post"
        style={{
          paddingBottom: "5%",
          minHeight: "100vh",
        }}
      >
        <Grid as={Container} text>
          <Grid.Row>
            <Grid.Column>
              <Header as="h1">{post.frontmatter.title}</Header>
              <div>
                {post.frontmatter.author && (
                  <>
                    {/* <Image
                    src="https://react.semantic-ui.com/images/wireframe/square-image.png"
                    avatar
                  /> */}
                    <span>
                      {post.frontmatter.author && post.frontmatter.author},{" "}
                    </span>
                  </>
                )}
                <span>{moment(date).format("Do MMM YYYY")}</span>
                <span> • {post.timeToRead}min à perdre</span>
                <div style={{ marginTop: "2rem" }}>
                  {post.frontmatter.tags &&
                    post.frontmatter.tags.map((tag, index) => (
                      <Label
                        key={index}
                        style={{ marginBottom: "0.5rem" }}
                        href={`/tags/${kebabCase(tag)}`}
                      >
                        {tag}
                      </Label>
                    ))}
                </div>
              </div>
              <div
                className="blog-post-content"
                style={{ marginTop: "5rem" }}
                dangerouslySetInnerHTML={{ __html: post.html }}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
      <Container
        fluid
        style={{
          backgroundColor: "#F9F9F9",
        }}
        className="prev-next-posts-container"
      >
        <Grid as={Container} text className="mt-5 p-5">
          <Grid.Row>
            <Header as="h2">Lire aussi:</Header>
          </Grid.Row>
          <Grid.Row>
            {next !== null && (
              <Grid.Column width={8}>
                <BlogCard post={next} />
              </Grid.Column>
            )}
            {prev !== null && (
              <Grid.Column width={8}>
                <BlogCard post={prev} />
              </Grid.Column>
            )}
          </Grid.Row>
        </Grid>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      timeToRead
      fields {
        slug
      }
      frontmatter {
        date
        tags
        title
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
`

import React from "react"
import "./blog-post.scss"
import { Container, Header, Image, Grid } from "semantic-ui-react"
import { graphql } from "gatsby"
import moment from "moment"
import SEO from "../components/SEO/SEO"
import Layout from "../components/layout"

export default function Template({ data }) {
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
        style={{
          paddingTop: "15rem",
          paddingBottom: "5%",
          backgroundColor: "#F9F9F9",
        }}
      >
        <Grid as={Container} text>
          <Grid.Column>
            <Header as="h1">{post.frontmatter.title}</Header>
            <div>
              {post.frontmatter.author && (
                <>
                  <Image
                    src="https://react.semantic-ui.com/images/wireframe/square-image.png"
                    avatar
                  />
                  <span>
                    {post.frontmatter.author && post.frontmatter.author},{" "}
                  </span>
                </>
              )}
              <span>{moment(date).format("Do MMM YYYY")}</span>
              <span> • {post.timeToRead}min à perdre</span>
            </div>
            <div
              className="blog-post-content"
              style={{ marginTop: "5rem" }}
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </Grid.Column>
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

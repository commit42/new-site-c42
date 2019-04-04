import React from "react"
import { Grid, Container, Card } from "semantic-ui-react"
import Layout from "../components/layout"
import BlogCard from "../components/blog-page/BlogCard"

const SingleTagTemplate = ({ data, pageContext }) => {
  const { posts, tagName } = pageContext
  console.log(pageContext)
  return (
    <Layout>
      <Container
        fluid
        style={{ backgroundColor: "#F9F9F9", padding: "5rem 0 5rem 0", minHeight:'90vh'}}
      >
        <Grid as={Container}>
          <Grid.Row>
            <h1>Posts about {`${tagName}`}</h1>
          </Grid.Row>
          <Grid.Row >
            {posts.map(post => {
              return <BlogCard post={post} key={post.id} />
            })}
          </Grid.Row>
        </Grid>
      </Container>
    </Layout>
  )
}

export default SingleTagTemplate

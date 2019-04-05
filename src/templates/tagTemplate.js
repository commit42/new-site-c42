import React from "react"
import { Grid, Container } from "semantic-ui-react"
import startCase from "lodash/startCase"
import kebabCase from "lodash/kebabCase"

import Layout from "../components/layout"
import SEO from "../components/SEO/SEO"
import BlogCard from "../components/blog-page/BlogCard"

const TagTemplate = ({ data, pageContext }) => {
  const { posts, tagName } = pageContext
  console.log(posts)
  return (
    <Layout>
      <SEO
        title={`${startCase(tagName)} | commit42`}
        description={`Tous les articles sur le thème: ${startCase(tagName)}`}
        pathname={`/tags/${kebabCase(tagName)}`}
      />
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

export default TagTemplate

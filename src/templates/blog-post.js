import React from "react"
import "./blog-post.scss"
import { Container, Header, Image, Icon } from 'semantic-ui-react'
import { graphql } from "gatsby"
import moment from 'moment'
import SEO from '../components/SEO/SEO'
import Layout from '../components/layout'

export default function Template({ data }) {
  const { markdownRemark: post } = data
  const date = post.frontmatter.date;
  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.excerpt || 'nothing here'}
        image={post.frontmatter.thumbnail}
        pathname={post.fields.slug}
        article
      />
      <Container text style={{ marginTop: '25rem', marginBottom: '5%' }}>
        <Header as="h1">{post.frontmatter.title}</Header>
        <div>
          <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' avatar />
          <span>Eva Spessotto, {moment(date).format("Do MMM YYYY")}</span>
          <span> | <Icon name="hourglass half" /> Temps de lecture:</span>
        </div>
        <div
          className="blog-post-content"
          style={{marginTop:"5rem"}}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      excerpt
      fields{
        slug
      }
      frontmatter {
        date
        title
        thumbnail
      }
    }
  }
`
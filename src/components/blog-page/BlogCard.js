import React from "react"
import { Link } from "gatsby"
import { Card, Label, Grid } from "semantic-ui-react"
import Image from "gatsby-image"
import kebabCase from "lodash/kebabCase"
import moment from "moment"

const BlogCard = ({ post }) => {
  const altText =
    post.frontmatter.thumbnail &&
    post.frontmatter.thumbnail.childImageSharp.fluid.originalName.slice(0, -4)
  return (
    <Grid.Column
      mobile={16}
      tablet={8}
      computer={5}
      style={{ marginBottom: "3rem", zIndex: "0" }}
    >
      <Card fluid as={Link} to={post.fields.slug}>
        {post.frontmatter.thumbnail != null && (
          <Image
            fluid={post.frontmatter.thumbnail.childImageSharp.fluid}
            alt={altText}
            centered
          />
        )}

        <Card.Content>
          <Card.Header>{post.frontmatter.title}</Card.Header>
          <Card.Meta
            style={{
              marginTop: "0.5rem",
              color: "#6BA3D6",
            }}
          >
            <span>{moment(post.frontmatter.date).format("Do MMM YYYY")}</span>
            <span> • {post.timeToRead}min à perdre</span>
          </Card.Meta>
          <Card.Description>{post.excerpt}</Card.Description>
        </Card.Content>

        {post.frontmatter.tags && (
          <Card.Content extra>
            {post.frontmatter.tags.map((tag, index) => (
              <Label
                key={index}
                style={{ marginBottom: "0.5rem" }}
                href={`/tags/${kebabCase(tag)}/`}
              >
                {tag}
              </Label>
            ))}
          </Card.Content>
        )}
      </Card>
    </Grid.Column>
  )
}

export default BlogCard

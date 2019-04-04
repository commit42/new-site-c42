import React from "react"
import { Link } from "gatsby"
import  Image  from "gatsby-image"
import moment from "moment"
import { Card, Label, Grid } from "semantic-ui-react"

const BlogCard = ({ post }) => {
  return (
    <Grid.Column
      mobile={16}
      tablet={8}
      computer={5}
      style={{ marginBottom: "3rem" }}
    >
      <Card fluid as={Link} to={post.fields.slug}>
        {post.frontmatter.thumbnail != null && (
          <Image
            fluid={post.frontmatter.thumbnail.childImageSharp.fluid}
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
            {post.frontmatter.tags.slice(0, 4).map((tag, index) => (
              <Label
                key={index}
                style={{ marginBottom: "0.5rem" }}
                as={Link}
                to={`/tags/${tag}`}
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

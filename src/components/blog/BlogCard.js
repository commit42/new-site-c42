import React from "react"
import "./BlogCard.scss"
import "../../globals.scss"
import { Link } from "gatsby"
import { Card, Label, Grid } from "semantic-ui-react"
import Image from "gatsby-image"
import moment from "moment"
import Fade from "react-reveal/Fade"

const BlogCard = ({ post }) => {
  const altText =
    post.frontmatter.thumbnail &&
    post.frontmatter.thumbnail.childImageSharp.fluid.originalName.slice(0, -4)
  return (
    <Grid.Column mobile={16} tablet={8} computer={5} className="blogcard">
      <Fade cascade>
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
            <Card.Meta className="mt-1">
              <span>{moment(post.frontmatter.date).format("Do MMM YYYY")}</span>
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
}

export default BlogCard

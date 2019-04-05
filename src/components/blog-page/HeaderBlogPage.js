import React from "react"
import Fade from "react-reveal/Fade"
import "./headerBlog.scss"
import  Image  from "gatsby-image"
import { Container, Grid, Header } from "semantic-ui-react"

const HeaderBlogPage = ({ data }) => {
  return (
    <Grid as={Container} className="header-blog">
      <Grid.Row>
        <Grid.Column textAlign="center">
          <Fade top>
            <Image fixed={data.image.childImageSharp.fixed} />
          </Fade>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row textAlign="center" style={{ marginTop: "3rem" }}>
        <Grid.Column>
          <Fade top>
            <Header as="h1" style={{ marginBottom: "2rem" }}>
              {data.header}
            </Header>
            <p>{data.description}</p>
          </Fade>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default HeaderBlogPage

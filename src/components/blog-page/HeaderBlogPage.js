import React from "react"
import { Container, Grid, Image, Header } from "semantic-ui-react"
import Fade from "react-reveal/Fade"

const HeaderBlogPage = () => {
  return (
    <Grid as={Container} style={{ marginTop: "15rem", marginBottom: "5rem" }}>
      <Grid.Row>
        <Grid.Column>
          <Fade top>
            <Image src="http://via.placeholder.com/800x500" centered />
          </Fade>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row textAlign="center" style={{ marginTop: "3rem" }}>
        <Grid.Column>
          <Fade top>
            <Header as="h1">
              Prenez un{" "}
              <span role="img" aria-label="Coffe cup">
                ☕
              </span>{" "}
              et détendez vous{" "}
              <span role="img" aria-label="Open book">
                📖
              </span>
            </Header>
            <p>
              Consequat exercitation proident labore culpa. Mollit aliqua sint
              eu enim aliqua velit irure sunt proident quis. Excepteur qui eu
              non voluptate aliquip. Dolore aliqua sit pariatur pariatur qui
              enim. Adipisicing est id laboris labore quis labore ut in esse
              voluptate.
            </p>
          </Fade>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default HeaderBlogPage

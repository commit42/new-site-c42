import React from "react"
import { Container, Grid, Image, Header } from "semantic-ui-react"
import Fade from "react-reveal/Fade"

const HeaderBlogPage = ({data}) => {
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

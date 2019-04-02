import React from "react"
import "./pitch.scss"
import { Image, Container, Grid, Header } from "semantic-ui-react"
import Fade from "react-reveal/Fade"

const Pitch = ({ data }) => {
  return (
    <Grid id="pitch-container">
      <Grid.Row style={{ backgroundColor: "#424242" }}>
        <Grid.Column>
          <Container text>
            <Fade bottom>
              <Header as="h3" className="primary">
                {data[0].title}
              </Header>
              <p style={{ color: "white", marginBottom: "5rem" }}>
                {data[0].description}
              </p>
              <Image src="https://via.placeholder.com/800x300" />
            </Fade>
          </Container>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row style={{ backgroundColor: "#F9F9F9" }}>
        <Grid.Column>
          <Container text>
            <Fade bottom>
              <Header as="h3" className="primary">
                {data[1].title}
              </Header>
              <p style={{ marginBottom: "5rem" }}>{data[1].description}</p>
              <Image src="https://via.placeholder.com/800x300" />
            </Fade>
          </Container>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row style={{ backgroundColor: "#424242" }}>
        <Grid.Column>
          <Container text>
            <Fade bottom>
              <Header as="h3" className="primary">
                {data[2].title}
              </Header>
              <p style={{ color: "white", marginBottom: "5rem" }}>
                {data[2].description}
              </p>
              <Image src="https://via.placeholder.com/800x300" />
            </Fade>
          </Container>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default Pitch

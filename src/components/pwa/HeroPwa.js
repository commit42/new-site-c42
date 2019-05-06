import React from "react"
import "./Pwa.scss"
import { Container, Grid, Header, Image, Message } from "semantic-ui-react"
import Fade from "react-reveal/Fade"

const HeroPwa = () => {
  return (
    <Container>
      <Grid id="hero-pwa">
        <Grid.Row verticalAlign="middle">
          <Grid.Column computer={8} tablet={16} mobile={16}>
            <Fade left>
              <Image src="http://via.placeholder.com/640" centered alt="" />
            </Fade>
          </Grid.Column>
          <Grid.Column
            computer={8}
            tablet={16}
            mobile={16}
            className="hero-pwa-text"
          >
            <Fade top>
              <Header as="h1">Web App PWA</Header>
            </Fade>
            <Fade right>
              <p>
                Tempor est incididunt culpa enim incididunt deserunt duis minim
                deserunt dolor enim exercitation esse magna. Ex cillum aute
                deserunt adipisicing nulla irure pariatur magna veniam do
                ullamco esse laborum. Tempor cillum laborum et enim Lorem
                ullamco consectetur nisi labore aute sunt adipisicing. Veniam
                elit consequat nostrud cillum ipsum irure velit sint voluptate
                dolor voluptate irure aliqua.
              </p>
            </Fade>
            <Fade bottom>
              <Message>
                <Header as="h5">
                  Do elit ea non duis do ex reprehenderit.Do elit ea non duis do
                  ex reprehenderit.
                </Header>
              </Message>
            </Fade>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default HeroPwa

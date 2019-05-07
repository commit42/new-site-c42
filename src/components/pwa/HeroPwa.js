import React from "react"
import "./Pwa.scss"
import Image from "gatsby-image"
import { Container, Grid, Header, Message } from "semantic-ui-react"
import Fade from "react-reveal/Fade"

const HeroPwa = ({ data }) => {
  const altText = data.image.childImageSharp.fluid.originalName.slice(0, -4)
  return (
    <Container>
      <Grid id="hero-pwa">
        <Grid.Row verticalAlign="middle">
          <Grid.Column computer={8} tablet={16} mobile={16}>
            <Fade left>
              <Image fluid={data.image.childImageSharp.fluid} alt={altText} />
            </Fade>
          </Grid.Column>
          <Grid.Column
            computer={8}
            tablet={16}
            mobile={16}
            className="hero-pwa-text"
          >
            <Fade top>
              <Header as="h1">{data.heading}</Header>
            </Fade>
            <Fade right>
              <p>{data.text}</p>
            </Fade>
            <Fade bottom>
              <Message>
                <Header as="h5">{data.message}</Header>
              </Message>
            </Fade>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default HeroPwa

import React from "react"
import "./Ecommerce.scss"
import Image from "gatsby-image"
import { Container, Grid, Header } from "semantic-ui-react"
import Fade from "react-reveal/Fade"

const HeroEcommerce = ({ data }) => {
  return (
    <Grid as={Container} verticalAlign="middle" id="hero-ecommerce-container">
      <Grid.Row>
        <Grid.Column computer={8} tablet={8} mobile={16}>
          <Fade top cascade>
            <Header as="h1" className="hero-ecommerce-heading">
              {data.heading}
            </Header>
          </Fade>
          <Fade left>
            <p>{data.text}</p>
          </Fade>
        </Grid.Column>
        <Grid.Column
          computer={8}
          tablet={8}
          mobile={16}
          className="hero-ecommerce-img"
        >
          <Fade top>
            <Image fluid={data.image.childImageSharp.fluid} />
          </Fade>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default HeroEcommerce

import React from "react"
import "./HomePage.scss"
import Image from "gatsby-image"
import formatText from "../../helpers/formatText"
import { Container, Grid, Header } from "semantic-ui-react"
import Fade from "react-reveal/Fade"

const HeroHome = ({ data }) => {
  return (
    <Grid className="hero-home">
      <Grid.Row columns={2}>
        <Grid.Column mobile={16} tablet={8} computer={8}>
          <Fade top>
            <Image
              fluid={data.image.childImageSharp.fluid}
              alt="Motifs commit42"
              className="img-hero"
            />
          </Fade>
        </Grid.Column>
        <Grid.Column
          as={Container}
          text
          verticalAlign="middle"
          mobile={16}
          tablet={8}
          computer={8}
        >
          <div className="hero-text-container">
            <Header as="h1">
              <Fade top cascade duration={800} delay={500}>
                {data.heading}
              </Fade>
            </Header>
            <Fade bottom>{formatText(data.description)}</Fade>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default HeroHome

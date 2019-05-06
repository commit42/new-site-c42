import React from "react"
import "./HeroBlog.scss"
import "../../globals.scss"
import Fade from "react-reveal/Fade"
import Image from "gatsby-image"
import { Grid, Header } from "semantic-ui-react"

const HeroBlog = ({ data }) => {
  return (
    <Grid id="hero-blog">
      <Grid.Row>
        <Grid.Column textAlign="center">
          <Fade top duration={1000} delay={300}>
            <Image
              fixed={data.image.childImageSharp.fixed}
              alt={data.image.childImageSharp.fixed.originalName.slice(0, -4)}
            />
          </Fade>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row textAlign="center" className="mt-3">
        <Grid.Column>
          <Fade bottom cascade duration={1000} delay={300}>
            <Header as="h1" className="header-blog--heading">
              {data.header}
            </Header>
          </Fade>
          <Fade delay={300}>
            <p className="header-blog--description">{data.description}</p>
          </Fade>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default HeroBlog

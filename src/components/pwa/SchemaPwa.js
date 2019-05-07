import React from "react"
import "./Pwa.scss"
import Image from "gatsby-image"
import { Container, Grid, Header } from "semantic-ui-react"
import Fade from "react-reveal/Fade"

const SchemaPwa = ({ data }) => {
  const altText = data.image.childImageSharp.fluid.originalName.slice(0, -4)
  console.log(data)
  return (
    <Grid as={Container} id="pwa-characteristic-schema">
      <Grid.Row>
        <Grid.Column>
          <Fade>
            <Header as="h2">{data.heading}</Header>
          </Fade>
          <Fade>
            <p>{data.description}</p>
          </Fade>
          <Fade>
            <Image
              fluid={data.image.childImageSharp.fluid}
              alt={altText}
              className="pwa-schema"
            />
          </Fade>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default SchemaPwa

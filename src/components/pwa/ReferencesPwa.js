import React from "react"
import "./Pwa.scss"
import Image from "gatsby-image"
import { Grid, Header, Container } from "semantic-ui-react"
import Fade from "react-reveal/Fade"

const ReferencesPwa = ({ data }) => {
  return (
    <Grid as={Container} id="references-pwa-container">
      <Grid.Row>
        <Fade>
          <Header as="h2">{data.heading}</Header>
        </Fade>
      </Grid.Row>

      {data &&
        Array.isArray(data.referencesList) &&
        data.referencesList.map(reference => {
          const altText = reference.image.childImageSharp.fluid.originalName.slice(
            0,
            -4
          )
          return (
            <Grid.Row className="reference-pwa-item" key={reference.heading}>
              <Grid.Column computer={8} tablet={8} mobile={16}>
                <Fade>
                  <Image
                    fluid={reference.image.childImageSharp.fluid}
                    alt={altText}
                  />
                </Fade>
              </Grid.Column>
              <Grid.Column
                computer={8}
                tablet={8}
                mobile={16}
                verticalAlign="bottom"
              >
                <Fade>
                  <Header as="h3">{reference.heading}</Header>
                  <p>{reference.description}</p>
                </Fade>
              </Grid.Column>
            </Grid.Row>
          )
        })}
    </Grid>
  )
}

export default ReferencesPwa

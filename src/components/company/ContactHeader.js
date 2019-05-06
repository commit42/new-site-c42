import React from "react"
import "./CompanyPage.scss"
import Image from "gatsby-image"
import { Grid, Container, Header } from "semantic-ui-react"
import Fade from "react-reveal/Fade"

const ContactHeader = ({ data }) => {
  const altText = data.imgHeader.childImageSharp.fluid.originalName.slice(0, -4)
  return (
    <Container className="contact-header">
      <Grid>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Fade>
              <Image
                fluid={data.imgHeader.childImageSharp.fluid}
                style={{
                  maxWidth: `${
                    data.imgHeader.childImageSharp.fluid.presentationWidth
                  }px`,
                  margin: "auto",
                }}
                alt={altText}
              />
            </Fade>
            <Header as="h2" className="contact-header--header">
              {data.heading}
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default ContactHeader

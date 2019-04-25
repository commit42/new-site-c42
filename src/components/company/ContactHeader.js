import React from "react"
import "./CompanyPage.scss"
import Image from "gatsby-image"
import { Grid, Container, Header } from "semantic-ui-react"

const ContactHeader = ({ data }) => {
  return (
    <Container className="contact-header">
      <Grid>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Image
              fluid={data.imgHeader.childImageSharp.fluid}
              style={{
                maxWidth: `${
                  data.imgHeader.childImageSharp.fluid.presentationWidth
                }px`,
                margin: "auto",
              }}
            />
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

import React from "react"
import "./Contact.scss"
import { Grid, Container, Header, Image } from "semantic-ui-react"

const ContactHeader = () => {
  return (
    <Container className="contact-header">
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Image src="https://via.placeholder.com/250x150" fluid />
            <Header as="h2" textAlign="center">
              Ne soyez pas timides, contactez-nous !
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default ContactHeader

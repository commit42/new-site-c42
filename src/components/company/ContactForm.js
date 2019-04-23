import React from "react"
import "./Contact.scss"
import "../../globals.scss"
import {
  Grid,
  Container,
  Form,
  Button,
  TextArea,
  Icon,
} from "semantic-ui-react"

import ContactHeader from "./ContactHeader"

const ContactForm = () => {
  return (
    <>
      <ContactHeader />
      <Container fluid className="primary contact-form-container">
        <Grid as={Container}>
          <Grid.Row className="contact-form">
            <Grid.Column>
              <Form>
                <Form.Group widths="equal">
                  <Form.Input fluid label="Nom" placeholder="Michel" required />
                  <Form.Input
                    fluid
                    label="Prenom"
                    placeholder="Michel"
                    required
                  />
                </Form.Group>
                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    label="Email"
                    placeholder="michel@michel.michel"
                    required
                  />
                  <Form.Input
                    fluid
                    label="Numéro de téléphone"
                    placeholder="00 00 00 00 00"
                  />
                </Form.Group>
                <Form.Input
                  fluid
                  label="Une question ? Un projet ?"
                  placeholder="Où va la vie?"
                  required
                />
                <Form.Field
                  control={TextArea}
                  label="Parlez-nous !"
                  placeholder="Parlez-moi de votre enfance..."
                  rows="10"
                  required
                />
                <Button type="submit" className="submit-btn">
                  Envoyer !
                </Button>
              </Form>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className="contact-links">
            <Grid.Column width={7}>
              <Icon
                name="map marker alternate"
                color="blue"
                size="large"
                circular
                inverted
              />
              35B Boulevard des Récollets, 31400 Toulouse
            </Grid.Column>
            <Grid.Column width={4}>
              <Icon name="phone" color="blue" size="large" circular inverted />
              05 82 95 90 12
            </Grid.Column>
            <Grid.Column width={4}>
              <Icon
                name="envelope"
                color="blue"
                size="large"
                circular
                inverted
              />
              contact@commit42.fr
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </>
  )
}

export default ContactForm

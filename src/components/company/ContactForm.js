import React from "react"
import "./CompanyPage.scss"
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

const ContactForm = ({ data }) => {
  const { contactForm, contactLinks, headerContact } = data
  return (
    <>
      <ContactHeader data={headerContact} />
      <Container fluid className="primary contact-form-container">
        <Grid as={Container}>
          <Grid.Row className="contact-form">
            <Grid.Column>
              <Form
                name="contact"
                method="POST"
                action="/success"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />

                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    name="nom"
                    label={contactForm.name.label}
                    placeholder={contactForm.name.placeholder}
                    required
                  />
                  <Form.Input
                    fluid
                    name="prenom"
                    label="Prenom"
                    placeholder="Michel"
                    required
                  />
                </Form.Group>
                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    name="email"
                    label="Email"
                    placeholder="michel@michel.michel"
                    required
                  />
                  <Form.Input
                    fluid
                    name="telephone"
                    label="Numéro de téléphone"
                    placeholder="00 00 00 00 00"
                  />
                </Form.Group>
                <Form.Input
                  fluid
                  name="sujet"
                  label="Une question ? Un projet ?"
                  placeholder="Où va la vie?"
                  required
                />
                <Form.Field
                  control={TextArea}
                  name="text"
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
          <Grid.Row className="contact-links--container">
            <Grid.Column mobile={16} tablet={8} computer={7}>
              <a
                href=" https://goo.gl/maps/ybGL6XhSb1B2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  name="map marker alternate"
                  color="blue"
                  size="large"
                  circular
                  inverted
                />
                {contactLinks.adress}
              </a>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={8}
              computer={4}
              className="contact-links--item"
            >
              <a href="tel:0582959012">
                <Icon
                  name="phone"
                  color="blue"
                  size="large"
                  circular
                  inverted
                />
                {contactLinks.phoneNumber}
              </a>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={4}>
              <a href="mailto:contact@commit42.fr">
                <Icon
                  name="envelope"
                  color="blue"
                  size="large"
                  circular
                  inverted
                />
                {contactLinks.email}
              </a>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </>
  )
}

export default ContactForm

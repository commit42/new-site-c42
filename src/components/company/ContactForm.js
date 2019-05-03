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
import Fade from "react-reveal/Fade"

const ContactForm = ({ data }) => {
  const { contactForm, contactLinks, headerContact } = data
  return (
    <>
      <ContactHeader data={headerContact} />
      <Fade cascade>
        <Container
          fluid
          className="primary contact-form-container"
          id="contactForm"
        >
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
                  {/* <Button >
                    Envoyer !
                  </Button> */}
                  <Button animated type="submit" className="submit-btn">
                    <Button.Content visible>Envoyer !</Button.Content>
                    <Button.Content hidden>
                      <Icon name="arrow right" />
                    </Button.Content>
                  </Button>
                </Form>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row className="contact-links--container">
              <Grid.Column mobile={16} tablet={8} computer={7}>
                <Fade cascade>
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
                </Fade>
              </Grid.Column>
              <Grid.Column
                mobile={16}
                tablet={8}
                computer={4}
                className="contact-links--item"
              >
                <Fade>
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
                </Fade>
              </Grid.Column>
              <Grid.Column mobile={16} tablet={8} computer={4}>
                <Fade>
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
                </Fade>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Fade>
    </>
  )
}

export default ContactForm

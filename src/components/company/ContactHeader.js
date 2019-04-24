import React from "react"
import "./CompanyPage.scss"
import { Grid, Container, Header, Image } from "semantic-ui-react"

const ContactHeader = ({ data }) => {
  return (
    <Container className="contact-header">
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Image src={data.imgHeader} fluid />
            <Header
              as="h2"
              textAlign="center"
              className="contact-header--header"
            >
              {data.heading}
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default ContactHeader

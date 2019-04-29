import React from "react"
import { Container, Header, Icon } from "semantic-ui-react"
import Layout from "../components/Layout"
import SEO from "../components/seo/SEO"

const Success = () => (
  <Layout>
    <SEO
      title="Message envoyé ! | commit42"
      description="Merci de nous avoir envoyé un message,  nous y répondrons dans les plus bref délais !"
      pathname="/success"
    />
    <Container
      fluid
      className="primary"
      textAlign="center"
      style={{ padding: "20rem" }}
    >
      <Icon.Group size="huge">
        <Icon size="big" color="blue" name="circle outline" />
        <Icon name="check" color="blue" />
      </Icon.Group>
      <Header as="h1">Merci pour votre message !</Header>
      <p>Nous vous répondrons dans les plus bref délais 😃</p>
    </Container>
  </Layout>
)

export default Success

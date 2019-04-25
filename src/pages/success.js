import React from "react"
import { Container, Header } from "semantic-ui-react"
import Layout from "../components/Layout"
import SEO from "../components/seo/SEO"

const Success = () => (
  <Layout>
    <SEO
      title="Message envoyé ! | commit42"
      description="Merci de nous avoir envoyé un message,  nous y répondrons dans les plus bref délais !"
      pathname="/success"
    />
    <Container text textAlign="center" style={{ marginTop: "10%" }}>
      <Header>Merci pour votre message !</Header>
    </Container>
  </Layout>
)

export default Success

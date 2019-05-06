import React from "react"
import { Container } from "semantic-ui-react"

import Layout from "../components/Layout"
import HeroPwa from "../components/pwa/HeroPwa"
import CharactPwa from "../components/pwa/CharactPwa"
import ExamplesPwa from "../components/pwa/ExamplesPwa"
import ReferencesPwa from "../components/pwa/ReferencesPwa"

const Pwa = () => {
  return (
    <Layout>
      <HeroPwa />
      <Container fluid className="primary" id="pwa-container">
        <CharactPwa />
        <ExamplesPwa />
        <ReferencesPwa />
      </Container>
    </Layout>
  )
}

export default Pwa

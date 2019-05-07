import React, { Component } from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo/SEO"
import Hero from "../components/ecommerce/HeroEcommerce"
import References from "../components/ecommerce/ReferencesEcommerce"

class EcommercePage extends Component {
  render() {
    return (
      <Layout>
        <SEO title="E-commerce | commit42" pathname="/ecommerce" />
        <Hero />
        <References />
      </Layout>
    )
  }
}

export default EcommercePage

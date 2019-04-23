import React, { Component } from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo/SEO"
import HeaderCompany from "../components/company/HeaderCompany"
import MembersList from "../components/company/MembersList"
import OfficeCarousel from "../components/company/OfficeCarousel"
import ContactForm from "../components/company/ContactForm"
import MapToCompany from "../components/company/MapToCompany"

class CompanyPage extends Component {
  render() {
    return (
      <Layout>
        <SEO
          title="La sociéte | commit42"
          description="Découvrez l'équipe de commit42 !"
          pathname="/la-societe"
        />
        <HeaderCompany />
        <MembersList />
        <OfficeCarousel />
        <ContactForm />
        <MapToCompany />
      </Layout>
    )
  }
}

export default CompanyPage

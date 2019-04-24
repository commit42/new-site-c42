import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo/SEO"
import HeaderCompany from "../components/company/HeaderCompany"
import MembersList from "../components/company/MembersList"
import OfficeCarousel from "../components/company/OfficeCarousel"
import ContactForm from "../components/company/ContactForm"
import MapToCompany from "../components/company/MapToCompany"

class CompanyPage extends Component {
  render() {
    const {
      markdownRemark: { frontmatter: companyData },
    } = this.props.data
    return (
      <Layout>
        <SEO
          title="La sociéte | commit42"
          description="Découvrez l'équipe de commit42 !"
          pathname="/la-societe"
        />
        <HeaderCompany data={companyData.header} />
        <MembersList data={companyData.teamList} />
        <OfficeCarousel data={companyData.office} />
        <ContactForm data={companyData.contact} />
        <MapToCompany data={companyData.gpsDatas} />
      </Layout>
    )
  }
}

export default CompanyPage

export const companyPageQuery = graphql`
  query companyPageQuery {
    markdownRemark(frontmatter: { pageName: { eq: "societe" } }) {
      frontmatter {
        pageName
        header
        teamList {
          members {
            avatar {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                  originalName
                }
              }
            }
            name
            presentation
            socials {
              link
              name
            }
          }
        }
        office {
          heading
          description
          pictures {
            picture
          }
        }
        contact {
          headerContact {
            heading
            imgHeader {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid
                  originalName
                }
              }
            }
          }
          contactForm {
            name {
              label
              placeholder
            }
          }
          contactLinks {
            adress
            phoneNumber
            email
          }
        }
        gpsDatas {
          latitude
          longitude
        }
      }
    }
  }
`

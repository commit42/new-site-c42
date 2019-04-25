import React from "react"
import "./CompanyPage.scss"
import Image from "gatsby-image"
import { Container } from "semantic-ui-react"
import img from "../../../static/assets/huehuehue.jpg"
const HeaderCompany = ({ data }) => {
  return (
    <Container fluid className="header-comapny-img">
      <Image
        fluid={data.childImageSharp.fluid}
        style={{ maxHeight: "500px" }}
      />
    </Container>
  )
}

export default HeaderCompany

import React from "react"
import "./CompanyPage.scss"
// import Image from "gatsby-image"
import { Container, Image } from "semantic-ui-react"

const HeaderCompany = ({ data }) => {
  console.log(data)
  return (
    <Container fluid className="header-comapny-img">
      <Image src={data} style={{ maxHeight: "500px" }} />
    </Container>
  )
}

export default HeaderCompany

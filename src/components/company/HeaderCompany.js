import React from "react"
import "./CompanyPage.scss"
import { Container, Image } from "semantic-ui-react"

const HeaderCompany = ({ data }) => {
  return (
    <Container fluid className="header-comapny-img">
      <Image src={data} fluid style={{ maxHeight: "500px" }} />
    </Container>
  )
}

export default HeaderCompany

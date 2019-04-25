import React from "react"
import "./CompanyPage.scss"
import { Container, Image } from "semantic-ui-react"
import img from "../../../static/assets/huehuehue.jpg"
const HeaderCompany = ({ data }) => {
  return (
    <Container fluid className="header-comapny-img">
      <Image src={img} fluid style={{ maxHeight: "500px" }} />
    </Container>
  )
}

export default HeaderCompany

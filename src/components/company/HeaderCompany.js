import React from "react"
import { Container, Image } from "semantic-ui-react"

const HeaderCompany = ({ data }) => {
  return (
    <Container fluid>
      <Image src={data} fluid style={{ maxHeight: "500px" }} />
    </Container>
  )
}

export default HeaderCompany

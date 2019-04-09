import React from "react"
import { Menu, Image, Container, Header } from "semantic-ui-react"
import { Link } from "gatsby"
import Headroom from "react-headroom"
import Logo from "../../../static/assets/logo-c42.png"

const Nav = props => {
  return (
    <Headroom>
      <Menu
        borderless
        inverted
        size="massive"
        style={{ backgroundColor: "white", borderRadius: "0", margin: "0" }}
      >
        <Container>
          <Menu.Item as={Link} to="/" style={{ padding: "0" }}>
            <Image src={Logo} alt="Logo commit42" />
          </Menu.Item>
          <Menu.Item as={Link} to="/blog" position="right">
            <Header as="h3" style={{ fontFamily: "Poppins", color: "black" }}>
              Blog
            </Header>
          </Menu.Item>
        </Container>
      </Menu>
    </Headroom>
  )
}

export default Nav

import React from "react"
import { Menu, Image, Container, Header } from "semantic-ui-react"
import Headroom from "react-headroom"
import { Link } from "gatsby"
import Logo from "../../../static/assets/logo-c42.png"

const Nav = props => {
  return (
    <Menu
      fixed="top"
      borderless
      inverted
      size="massive"
      style={{
        backgroundColor: "white",
        borderRadius: "0",
        margin: "0",
        zIndex: "1",
      }}
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
  )
}

export default Nav

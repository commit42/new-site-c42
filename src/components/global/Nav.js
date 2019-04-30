import React from "react"
import "./Nav.scss"
import { Menu, Image, Container, Header, Icon } from "semantic-ui-react"
import { Link } from "gatsby"
import Logo from "../../../static/assets/logo-c42.png"

const Nav = props => {
  return (
    <Menu fixed="top" borderless size="massive">
      <Container>
        <Menu.Item as={Link} to="/" className="p-0">
          <Image src={Logo} alt="Logo commit42" />
        </Menu.Item>
        <Menu.Item as={Link} to="/blog" position="right">
          <Header as="h3" className="menu-item">
            Blog
          </Header>
        </Menu.Item>
        <Menu.Item as={Link} to="/la-societe">
          <Header as="h3" className="menu-item">
            La societe
          </Header>
        </Menu.Item>
      </Container>
    </Menu>
  )
}

export default Nav

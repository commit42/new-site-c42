import React from "react"
import "./Nav.scss"
import "../../globals.scss"
import { Menu, Image, Container, Header, Icon } from "semantic-ui-react"
import { Link } from "gatsby"
import Logo from "../../../static/assets/logo-c42.png"

import ResponsiveMenu from "react-responsive-navbar"

const Nav = props => {
  return (
    <ResponsiveMenu
      menuOpenButton={<Icon name="bars" size="large" />}
      menuCloseButton={<Icon name="close" size="large" />}
      changeMenuOn="768px"
      largeMenuClassName="large-menu-classname"
      smallMenuClassName="small-menu-classname"
      menu={
        <Menu fixed="top" borderless>
          <Menu.Item as={Link} to="/" className="p-0">
            <Image src={Logo} alt="Logo commit42" />
          </Menu.Item>
          <Menu.Item as={Link} to="/blog" position="right">
            <Header as="h3">Blog</Header>
          </Menu.Item>
          <Menu.Item as={Link} to="/la-societe">
            <Header as="h3">La societe</Header>
          </Menu.Item>
        </Menu>
      }
    />
  )
}

export default Nav

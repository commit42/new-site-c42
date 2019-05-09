import React from "react"
import { Link } from "gatsby"
import { Header, Menu, Icon } from "semantic-ui-react"
import Drawer from "react-motion-drawer"
import Logo from "../../../static/assets/logo-c42.png"
import Bounce from "react-reveal/Bounce"

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <Drawer
        width={250}
        fadeOut
        open={isOpen}
        onChange={() => setIsOpen(!isOpen)}
        className="small-menu-sidebar"
      >
        <div className="small-menu-sidebar--container">
          <Bounce left>
            <Link to="/pwa">
              <Header as="h3" className="menu-item ">
                <Icon name="mobile alternate" color="grey" size="big" />
                PWA
              </Header>
            </Link>
            <Link to="/ecommerce">
              <Header as="h3" className="menu-item">
                <Icon name="cart" color="grey" size="big" />
                E-commerce
              </Header>
            </Link>
            <Link to="/blog">
              <Header as="h3" className="menu-item ">
                <Icon name="quote right" color="grey" size="big" />
                Blog
              </Header>
            </Link>
            <Link to="/la-societe">
              <Header as="h3" className="menu-item">
                <Icon name="users" color="grey" size="big" />
                La Societe
              </Header>
            </Link>
          </Bounce>
        </div>
      </Drawer>
      <Menu fixed="top" borderless>
        <Menu.Item onClick={() => setIsOpen(!isOpen)}>
          <Icon name="bars" color="grey" size="big" />
        </Menu.Item>
        <Menu.Item position="right">
          <Link to="/">
            <img src={Logo} alt="Logo commit42" />
          </Link>
        </Menu.Item>
      </Menu>
    </>
  )
}

export default Sidebar

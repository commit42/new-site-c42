import React from "react"
import { Link } from "gatsby"
import { Header, Menu, Icon } from "semantic-ui-react"
import Drawer from "react-motion-drawer"
import Logo from "../../../static/assets/logo-c42.png"
import Roll from "react-reveal/Roll"

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
          <Roll left>
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
          </Roll>
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

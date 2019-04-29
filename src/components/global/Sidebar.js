import React from "react"
import { Link } from "gatsby"
import { Header, Menu, Icon } from "semantic-ui-react"
import Drawer from "react-motion-drawer"
import Logo from "../../../static/assets/logo-c42.png"

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
          <Header as="h3">
            <Link to="/">
              <img src={Logo} />
            </Link>
          </Header>
          <Link to="/blog">
            <Header as="h3" className="menu-item">
              Blog
            </Header>
          </Link>
          <Link to="/la-societe">
            <Header as="h3" className="menu-item">
              La Societe
            </Header>
          </Link>
        </div>
      </Drawer>
      <Menu fixed="top">
        <a
          style={{ padding: 15 }}
          className=""
          onClick={() => setIsOpen(!isOpen)}
        >
          <Icon name="bars" color="blue" size="large" />
        </a>
      </Menu>
    </>
  )
}

export default Sidebar

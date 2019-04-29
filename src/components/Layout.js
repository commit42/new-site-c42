import React, { useState } from "react"
import "semantic-ui-less/semantic.less"
import "../../static/css/c42-theme.css"
import Nav from "./global/Nav"
import Footer from "./global/Footer"
import { graphql, StaticQuery } from "gatsby"
import Drawer from "react-motion-drawer"
import { Icon, Button, Header, Menu } from "semantic-ui-react"
import { Link } from "gatsby"

const Layout = ({ children, path }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <StaticQuery
      query={graphql`
        query {
          allSitePage {
            edges {
              node {
                path
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <div
            style={{
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* <Nav /> */}
            <Drawer
              width={300}
              fadeOut
              open={isOpen}
              onChange={() => setIsOpen(!isOpen)}
              drawerStyle={{ backgroundColor: "white" }}
            >
              {val => (
                <ul style={{ opacity: 300 / val }}>
                  <Header as="h3">
                    <Link to="/">Home</Link>
                  </Header>
                  <Header as="h3">
                    <Link to="/blog">Blog</Link>
                  </Header>
                  <Header as="h3">
                    <Link to="/la-societe">Societe</Link>
                  </Header>
                </ul>
              )}
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
            <div style={{ flex: "1" }}>{children}</div>
            <Footer />
          </div>
        )
      }}
    />
  )
}
export default Layout

import React, { useState, useEffect } from "react"
import "semantic-ui-less/semantic.less"
import "../../static/css/c42-theme.css"
import "./global/Nav.scss"
import { graphql, StaticQuery } from "gatsby"
import { Icon, Header, Menu, Image } from "semantic-ui-react"
import { Link } from "gatsby"
import Nav from "./global/Nav"
import Sidebar from "./global/Sidebar"
import Footer from "./global/Footer"
import Drawer from "react-motion-drawer"
import Logo from "../../static/assets/logo-c42.png"
import Roll from "react-reveal/Roll"

const Layout = ({ children, path }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [width, setWidth] = useState(0)

  typeof window !== "undefined" &&
    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth)
      window.addEventListener("resize", handleResize)
      return () => {
        window.removeEventListener("resize", handleResize)
      }
    }, [])

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
            {width >= 768 ? (
              <Nav />
            ) : (
              // <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
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
                  <Menu.Item textAlign="center" position="right">
                    <Link to="/">
                      <img src={Logo} />
                    </Link>
                  </Menu.Item>
                </Menu>
              </>
            )}

            <div style={{ flex: "1" }}>{children}</div>
            <Footer />
          </div>
        )
      }}
    />
  )
}
export default Layout

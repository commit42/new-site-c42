import React from "react"
import "semantic-ui-less/semantic.less"
import "../../static/css/c42-theme.css"
import Nav from "./global/Nav"
import BurgerIcon from "./global/Burger"
import Footer from "./global/Footer"
import { graphql, StaticQuery } from "gatsby"

import { Modal, Button, Header, Image } from "semantic-ui-react"
import Menu from "../components/global/Menu"

const Layout = ({ children, path }) => {
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
            {/* <Nav path={path} /> */}
            <Modal
              basic
              size="mini"
              centered
              closeIcon
              trigger={<BurgerIcon />}
            >
              <Modal.Content>{<Menu close={true} />}</Modal.Content>
            </Modal>

            <div style={{ flex: "1" }}>{children}</div>
            <Footer />
          </div>
        )
      }}
    />
  )
}
export default Layout

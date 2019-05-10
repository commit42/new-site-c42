import React, { useState, useEffect } from "react"
import "semantic-ui-less/semantic.less"
import "../../static/css/c42-theme.css"
import "./global/Nav.scss"
import { graphql, StaticQuery } from "gatsby"

import Nav from "./global/Nav"
import Sidebar from "./global/Sidebar"
import Footer from "./global/Footer"

const Layout = ({ children, path }) => {
  const [isOpen, setIsOpen] = useState(false)

  // const [isResponsive, setIsResponsive] = useState(false)

  // if (window) {
  //   useEffect(() => {
  //     // const handleResize = () => setWidth(window.innerWidth)
  //     // window.addEventListener("resize", handleResize)

  //     if (window.innerWidth <= 768) {
  //       setIsResponsive(true)
  //     } else {
  //       setIsResponsive(false)
  //     }
  //   }, [])
  // }

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
            <Nav />
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

            <div style={{ flex: "1", marginTop: "58px" }}>{children}</div>
            <Footer />
          </div>
        )
      }}
    />
  )
}
export default Layout

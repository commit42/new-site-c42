import React from "react"
import "semantic-ui-less/semantic.less"
import "../../static/css/c42-theme.css"
import Nav from "./global/Nav"
import Footer from "./global/Footer"
import { graphql, StaticQuery } from "gatsby"

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
            <Nav />
            <div style={{ flex: "1" }}>{children}</div>
            <Footer />
          </div>
        )
      }}
    />
  )
}
export default Layout

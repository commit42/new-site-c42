import React from "react";
import "semantic-ui-less/semantic.less";
import Nav from './global/Nav';
import Footer from './global/Footer';
import { graphql, StaticQuery } from "gatsby";

const layout = ({ children, isHome, path }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allSitePage{
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
          <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
              <Nav path={path} />
              <div style={{ flex: '1' }}>
                {children}
              </div>
              {!isHome && <Footer />}
          </div>
        )
      }}
    />
  )
}
export default layout
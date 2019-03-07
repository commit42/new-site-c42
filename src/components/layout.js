import React from "react";
import SEO from "./global/SEO"
import Header from './global/header';
import Footer from './global/footer';
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
            <SEO />
              <Header path={path} />
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
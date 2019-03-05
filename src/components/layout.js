import React from "react";
import Header from './global/header';
import Footer from './global/footer';
import { graphql, StaticQuery } from "gatsby";

const layout = ({ children, isHome }) => {
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
          <Header />
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
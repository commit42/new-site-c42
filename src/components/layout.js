import React from "react";
import Header from './global/header'

export default ({ children }) => (
  <div style={{minHeight:'100vh'}}>
    <Header />
      <div >
        {children}
      </div>
      
  </div>
)
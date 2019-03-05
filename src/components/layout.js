import React from "react";
import Header from './global/header';
import Footer from './global/footer';

export default ({ children }) => (
  <div style={{minHeight:'100vh', display:'flex', flexDirection:'column'}}>
    <Header />
      <div style={{flex:'1'}}>
        {children}
      </div>
    <Footer/>
  </div>
)
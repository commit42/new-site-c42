import React from "react";
import Navigation from '../components/global/navigation'

export default ({ children }) => (
  <div>
    <Navigation />
      {children}
  </div>
)
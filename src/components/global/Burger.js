import React from "react"
import "./Burger.scss"

export default ({ open, ...props }) => (
  <div
    className={open === true ? "burger-menu open" : "burger-menu"}
    {...props}
  >
    <div className="bar1" key="b1" />
    <div className="bar2" key="b2" />
    <div className="bar3" key="b3" />
  </div>
)

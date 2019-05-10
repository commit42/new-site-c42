import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import { Header, Menu, Icon } from "semantic-ui-react"
import kebabCase from "lodash/kebabCase"
import Drawer from "react-motion-drawer"
import Bounce from "react-reveal/Bounce"
import Logo from "../../../static/assets/logo-c42.png"

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <StaticQuery
      query={graphql`
        query sidebarQuery {
          markdownRemark(frontmatter: { pageName: { eq: "navbar" } }) {
            frontmatter {
              pageName
              logo
              pageList {
                name
                icon
              }
            }
          }
        }
      `}
      render={data => {
        const sidebarDatas = data.markdownRemark.frontmatter
        return (
          <div id="sidebar-container">
            <Drawer
              width={250}
              fadeOut
              open={isOpen}
              onChange={() => setIsOpen(!isOpen)}
              className="sidebar"
            >
              <div className="sidebar--container">
                <Bounce left>
                  {sidebarDatas.pageList.map(item => {
                    return (
                      <Link to={`/${kebabCase(item.name)}`}>
                        <Header as="h3" className="menu-item ">
                          <Icon name={item.icon} color="grey" size="big" />
                          {item.name}
                        </Header>
                      </Link>
                    )
                  })}
                </Bounce>
              </div>
            </Drawer>
            <Menu fixed="top" borderless>
              <Menu.Item onClick={() => setIsOpen(!isOpen)}>
                <Icon name="bars" color="grey" size="big" />
              </Menu.Item>
              <Menu.Item position="right">
                <Link to="/">
                  <img src={sidebarDatas.logo} alt="Logo commit42" />
                </Link>
              </Menu.Item>
            </Menu>
          </div>
        )
      }}
    />
  )
}

export default Sidebar

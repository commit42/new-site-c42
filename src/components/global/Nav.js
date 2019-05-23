import React from "react"
import "./Nav.scss"
import Image from "gatsby-image"
import { Menu, Container, Header } from "semantic-ui-react"
import { Link, graphql, StaticQuery } from "gatsby"
import kebabCase from "lodash/kebabCase"

const Nav = props => {
  return (
    <StaticQuery
      query={graphql`
        query navbarQuery {
          markdownRemark(frontmatter: { pageName: { eq: "navbar" } }) {
            frontmatter {
              pageName
              image {
                childImageSharp {
                  fixed(width: 200) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
              pageList {
                name
                icon
              }
            }
          }
        }
      `}
      render={data => {
        const navDatas = data.markdownRemark.frontmatter
        return (
          <Menu fixed="top" borderless size="massive" id="navbar">
            <Container>
              <Menu.Item as={Link} to="/" className="p-0">
                <Image
                  fixed={navDatas.image.childImageSharp.fixed}
                  alt="Logo commit42"
                />
              </Menu.Item>
              {navDatas.pageList.map((item, index) => {
                const isFirst = index => {
                  if (index === 0) {
                    return "right"
                  }
                }
                return (
                  <Menu.Item
                    as={Link}
                    to={`/${kebabCase(item.name)}`}
                    position={isFirst(index)}
                  >
                    <Header as="h3" className="menu-item">
                      {item.name}
                    </Header>
                  </Menu.Item>
                )
              })}
            </Container>
          </Menu>
        )
      }}
    />
  )
}

export default Nav

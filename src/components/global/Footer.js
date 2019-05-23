import React from "react"
import "./Footer.scss"
import Image from "gatsby-image"
import { Link, StaticQuery, graphql } from "gatsby"
import { Grid, Container, Icon, List } from "semantic-ui-react"
import kebabCase from "lodash/kebabCase"

const Footer = () => {
  return (
    <StaticQuery
      query={graphql`
        query footerQuery {
          markdownRemark(frontmatter: { pageName: { eq: "footer" } }) {
            frontmatter {
              pageName
              bottomText
              contacts {
                logo {
                  childImageSharp {
                    fixed(width: 300) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
                contactsList {
                  icon
                  name
                  text
                  link
                }
              }
              pagesList {
                name
              }
              socialsList {
                name
                link
              }
            }
          }
        }
      `}
      render={data => {
        const footerDatas = data.markdownRemark.frontmatter
        return (
          <Grid as={Container} id="footer" stackable>
            <Grid.Row divided>
              <Grid.Column computer={8} tablet={16} mobile={16}>
                <Image
                  fixed={footerDatas.contacts.logo.childImageSharp.fixed}
                  as={Link}
                  to="/"
                  alt="Logo commit42"
                />
                <List className="contact-list">
                  {footerDatas.contacts.contactsList.map(contact => {
                    const formatLink = contact => {
                      if (contact.text.includes("@")) {
                        return `mailto:${contact.link}`
                      } else if (contact.icon.includes("phone")) {
                        return `tel:${contact.link}`
                      }
                      return contact.link
                    }
                    return (
                      <List.Item
                        as="a"
                        href={formatLink(contact)}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={contact.name}
                      >
                        <List.Icon name={contact.icon} link />
                        <List.Content>{contact.text}</List.Content>
                      </List.Item>
                    )
                  })}
                </List>
              </Grid.Column>
              <Grid.Column
                computer={8}
                only="computer"
                verticalAlign="middle"
                className="page-links"
              >
                <List>
                  {footerDatas.pagesList.map(page => {
                    return (
                      <List.Item key={page.name} className="page-links-item">
                        <Link to={kebabCase(page.name)}>{page.name}</Link>
                      </List.Item>
                    )
                  })}
                </List>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row className="socials-list">
              <Grid.Column textAlign="center">
                {footerDatas.socialsList.map(social => {
                  return (
                    <a
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={social.name}
                    >
                      <Icon
                        name={social.name}
                        size="big"
                        link
                        color="blue"
                        className="social-item"
                      />
                    </a>
                  )
                })}
              </Grid.Column>
            </Grid.Row>
            <Grid.Row textAlign="center" className="mt-1">
              <Grid.Column mobile={16} tablet={16} computer={16}>
                <small>{`${
                  footerDatas.bottomText
                } | commit42 © ${new Date().getFullYear()}`}</small>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        )
      }}
    />
  )
}

export default Footer

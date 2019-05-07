import React from "react"
import "./Footer.scss"
import { Link } from "gatsby"
import { Grid, Container, Header, Icon, Image, List } from "semantic-ui-react"
import Logo from "../../../static/assets/logo-noir-baseline-200.png"

const Footer = () => {
  return (
    <Grid as={Container} id="footer" stackable>
      <Grid.Row divided>
        <Grid.Column computer={7} tablet={16} mobile={16}>
          <Image src={Logo} as={Link} to="/" alt="Logo commit42" />
          <List className="contact-list">
            <List.Item
              as="a"
              href="https://goo.gl/maps/ybGL6XhSb1B2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <List.Icon name="marker map alternate" link />
              <List.Content>
                35B Boulevard des Recollets, 31400 Toulouse
              </List.Content>
            </List.Item>
            <List.Item as="a" href="tel:0582959012">
              <List.Icon name="phone" link />
              <List.Content>05 82 95 90 12</List.Content>
            </List.Item>
            <List.Item as="a" href="mailto:contact@commit42.fr">
              <List.Icon name="envelope" />
              <List.Content>contact@commit42.fr</List.Content>
            </List.Item>
          </List>
        </Grid.Column>
        <Grid.Column
          computer={7}
          tablet={16}
          mobile={16}
          as={Grid}
          verticalAlign="middle"
          textAlign="left"
        >
          <Grid.Row className="page-links" only="computer">
            <Grid.Column width="8">
              <List>
                <List.Item>
                  <Link to="/pwa">PWA</Link>
                </List.Item>
                <List.Item>
                  <Link to="/ecommerce">E-commerce</Link>
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width="8">
              <List>
                <List.Item>
                  <Link to="/blog">Blog</Link>
                </List.Item>
                <List.Item>
                  <Link to="/la-societe">La société</Link>
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <div className="mt-2" style={{ margin: "auto" }}>
              <a
                href="https://www.facebook.com/commit42/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="facebook" size="big" link />
              </a>
              <a
                href="https://www.linkedin.com/company/commit42/?originalSubdomain=fr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="linkedin" size="big" link />
              </a>
              <a
                href="https://twitter.com/commit42"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="twitter square" size="big" link />
              </a>
            </div>
          </Grid.Row>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row textAlign="center" className="mt-1">
        <Grid.Column mobile={16} tablet={16} computer={16}>
          <small>{`Tous droits réservés | commit42 © ${new Date().getFullYear()}`}</small>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default Footer

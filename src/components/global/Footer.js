import React from "react"
import "../../globals.scss"
import { Link } from "gatsby"
import { Grid, Container, Header, Icon, Image, List } from "semantic-ui-react"
import Logo from "../../../static/assets/logo-noir-baseline-200.png"

const Footer = () => {
  return (
    <Grid as={Container}>
      <Grid.Row centered className="mt-4">
        <Grid.Column verticalAlign="middle" computer={4} only="computer">
          <Image src={Logo} as={Link} to="/" alt="Logo commit42" />
        </Grid.Column>

        <Grid.Column computer={6} mobile={10}>
          <List>
            <List.Item>
              <List.Icon name="marker map alternate" />
              <List.Content>
                <a href="https://goo.gl/maps/ybGL6XhSb1B2">
                  35B Boulevard des Recollets, 31400 Toulouse
                </a>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="phone" />
              <List.Content>
                <a href="tel:0582959012">05 82 95 90 12</a>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="envelope" />
              <List.Content>
                <a href="mailto:contact@commit42.fr">contact@commit42.fr</a>
              </List.Content>
            </List.Item>
          </List>
          <div className="mt-2">
            <a href="https://www.facebook.com/commit42/">
              <Icon name="facebook" size="big" link />
            </a>
            <a href="https://www.linkedin.com/company/commit42/?originalSubdomain=fr">
              <Icon name="linkedin" size="big" link />
            </a>
            <a href="https://twitter.com/commit42">
              <Icon name="twitter square" size="big" link />
            </a>
          </div>
        </Grid.Column>

        <Grid.Column computer={5} only="computer">
          <Header>Sur le site</Header>
          <List>
            <List.Item as={Link} to="/">
              Accueil
            </List.Item>
            <List.Item as={Link} to="/blog">
              Blog
            </List.Item>
          </List>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row textAlign="center" className="mt-1">
        <Grid.Column mobile={16} tablet={16} computer={16}>
          <small>{`Tous droits réservés commit42 © ${new Date().getFullYear()}`}</small>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default Footer

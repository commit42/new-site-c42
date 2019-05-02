import React from "react"
import "./CompanyPage.scss"
import Image from "gatsby-image"
import { Grid, Header, Container, Button } from "semantic-ui-react"
import AnchorLink from "react-anchor-link-smooth-scroll"

const HeaderCompany = ({ data }) => {
  return (
    <Grid
      as={Container}
      className="header-company-container"
      verticalAlign="middle"
    >
      <Grid.Column width={8}>
        <Header as="h2" className="secondary">
          Qui sommes-nous ?
        </Header>
        <p>
          Elit fugiat eiusmod mollit sint proident sunt id sunt ut non sint
          voluptate. Laboris tempor eu magna id irure aliquip sint culpa. Ut
          minim cillum voluptate reprehenderit ex. Lorem deserunt minim minim
          duis eiusmod aliqua duis anim sunt.
        </p>
        <AnchorLink href="#contactForm">
          <Button>Nous contacter ?</Button>
        </AnchorLink>
      </Grid.Column>
      <Grid.Column width={8}>
        <Image fluid={data.childImageSharp.fluid} />
      </Grid.Column>
    </Grid>
  )
}

export default HeaderCompany

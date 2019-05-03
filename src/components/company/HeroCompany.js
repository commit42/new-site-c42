import React, { useState } from "react"
import "./CompanyPage.scss"
import Image from "gatsby-image"
import { Grid, Header, Container, Button } from "semantic-ui-react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Fade from "react-reveal/Fade"

const HeaderCompany = ({ data }) => {
  const time = 1800
  return (
    <Grid
      as={Container}
      className="header-company-container"
      verticalAlign="middle"
      stackable
      columns={2}
      reversed=" mobile"
    >
      <Grid.Column computer={9} mobile={16} className="header-company-text">
        <Header as="h2" className="secondary">
          <Fade top cascade duration={1000} delay={500}>
            Qui sommes-nous ?
          </Fade>
        </Header>
        <p>
          <Fade left duration={time}>
            Elit fugiat eiusmod mollit sint proident sunt id sunt ut non sint
            voluptate. Laboris tempor eu magna id irure aliquip sint culpa. Ut
            minim cillum voluptate reprehenderit ex. Lorem deserunt minim minim
            duis eiusmod aliqua duis anim sunt.
          </Fade>
        </p>
        <AnchorLink href="#contactForm">
          <Fade bottom duration={time}>
            <Button>Nous contacter ?</Button>
          </Fade>
        </AnchorLink>
      </Grid.Column>
      <Grid.Column computer={6} mobile={5}>
        <Fade right duration={time}>
          <Image fluid={data.childImageSharp.fluid} />
        </Fade>
      </Grid.Column>
    </Grid>
  )
}

export default HeaderCompany

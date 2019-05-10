import React, { useState } from "react"
import "./CompanyPage.scss"
import Image from "gatsby-image"
import { Grid, Header, Container, Button } from "semantic-ui-react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Fade from "react-reveal/Fade"

const HeaderCompany = ({ data }) => {
  const time = 1800
  const [newImg, setImage] = useState(false)

  function changeImg() {
    setImage(!newImg)
  }
  const srcImg = !newImg
    ? data.imgHeader.childImageSharp.fluid
    : data.imgHeaderAnim.childImageSharp.fluid
  const altText = srcImg.originalName.slice(0, -4)
  return (
    <Grid
      as={Container}
      id="header-company-container"
      verticalAlign="middle"
      stackable
      columns={2}
      reversed="mobile"
    >
      <Grid.Column
        computer={9}
        tablet={8}
        mobile={16}
        className="header-company-text"
      >
        <Fade top cascade duration={1000} delay={500}>
          <Header as="h1" className="secondary">
            Qui sommes-nous ?
          </Header>
        </Fade>
        <Fade left duration={time}>
          <p>
            Elit fugiat eiusmod mollit sint proident sunt id sunt ut non sint
            voluptate. Laboris tempor eu magna id irure aliquip sint culpa. Ut
            minim cillum voluptate reprehenderit ex. Lorem deserunt minim minim
            duis eiusmod aliqua duis anim sunt.
          </p>
        </Fade>
        <AnchorLink href="#contactForm">
          <Fade bottom duration={time} delay={500}>
            <Button
              onMouseOver={() => changeImg()}
              onMouseLeave={() => changeImg()}
            >
              Nous contacter ?
            </Button>
          </Fade>
        </AnchorLink>
      </Grid.Column>
      <Grid.Column computer={6} tablet={8} mobile={5}>
        <Fade right duration={time}>
          <Image fluid={srcImg} alt={altText} />
        </Fade>
      </Grid.Column>
    </Grid>
  )
}

export default HeaderCompany

import React from "react"
import "./Ecommerce.scss"
import { Container, Grid, Header } from "semantic-ui-react"
import Fade from "react-reveal/Fade"

const HeroEcommerce = () => {
  return (
    <Grid as={Container} verticalAlign="middle" id="hero-ecommerce-container">
      <Grid.Row>
        <Grid.Column computer={8} tablet={8} mobile={16}>
          <Fade top cascade>
            <Header as="h1" className="hero-ecommerce-heading">
              E-commerce
            </Header>
          </Fade>
          <Fade left>
            <p>
              Nulla enim officia excepteur consequat sit. Sit excepteur veniam
              aliqua consequat dolore tempor. Consequat exercitation excepteur
              proident dolore aliquip. Ea do ipsum mollit magna occaecat dolor
              qui magna. Occaecat nulla non Lorem duis elit dolor ea Lorem.
            </p>
          </Fade>
        </Grid.Column>
        <Grid.Column
          computer={8}
          tablet={8}
          mobile={16}
          className="hero-ecommerce-img"
        >
          <Fade top>
            <img src="http://via.placeholder.com/640x360" />
          </Fade>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default HeroEcommerce

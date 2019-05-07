import React from "react"
import "./Ecommerce.scss"
import { Container, Grid, Header } from "semantic-ui-react"

const HeroEcommerce = () => {
  return (
    <Grid as={Container} verticalAlign="middle" id="hero-ecommerce-container">
      <Grid.Row>
        <Grid.Column computer={8} tablet={8} mobile={16}>
          <Header as="h1">E-commerce</Header>
          <p>
            Nulla enim officia excepteur consequat sit. Sit excepteur veniam
            aliqua consequat dolore tempor. Consequat exercitation excepteur
            proident dolore aliquip. Ea do ipsum mollit magna occaecat dolor qui
            magna. Occaecat nulla non Lorem duis elit dolor ea Lorem.
          </p>
        </Grid.Column>
        <Grid.Column computer={8} tablet={8} mobile={16}>
          <img src="http://via.placeholder.com/640x360" />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default HeroEcommerce

import React from "react"
import "./Ecommerce.scss"
import { Container, Grid, Header } from "semantic-ui-react"

const HeroEcommerce = () => {
  return (
    <Container fluid className="primary" id="references-ecommerce-container">
      <Grid as={Container}>
        <Grid.Row>
          <Grid.Column>
            <Header as="h2">Nos références E-commerce</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column computer={8} tablet={8} mobile={16}>
            <img src="http://via.placeholder.com/640x360" />
          </Grid.Column>
          <Grid.Column
            computer={8}
            tablet={8}
            mobile={16}
            verticalAlign="bottom"
          >
            <Header as="h3">Jumbobag</Header>
            <p>
              Consequat aliquip deserunt ut velit sint adipisicing eiusmod
              fugiat enim non. Aute cupidatat cupidatat consectetur ad
              consectetur cupidatat amet voluptate do est commodo. Aliqua minim
              in qui cupidatat ut exercitation deserunt cillum Lorem.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default HeroEcommerce

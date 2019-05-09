import React from "react"
import "./Ecommerce.scss"
import { Container, Grid, Header } from "semantic-ui-react"
import Fade from "react-reveal/Fade"

const HeroEcommerce = () => {
  return (
    <Container fluid className="primary" id="references-ecommerce-container">
      <Grid as={Container}>
        <Grid.Row>
          <Grid.Column className="references-ecommerce-heading">
            <Fade>
              <Header as="h2">Nos références E-commerce</Header>
            </Fade>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column computer={8} tablet={8} mobile={16}>
            <Fade>
              <img src="http://via.placeholder.com/640x360" />
            </Fade>
          </Grid.Column>
          <Grid.Column
            computer={8}
            tablet={8}
            mobile={16}
            verticalAlign="bottom"
          >
            <Fade>
              <Header as="h3" className="reference-item-heading">
                Jumbobag
              </Header>
            </Fade>
            <Fade>
              <p>
                Consequat aliquip deserunt ut velit sint adipisicing eiusmod
                fugiat enim non. Aute cupidatat cupidatat consectetur ad
                consectetur cupidatat amet voluptate do est commodo. Aliqua
                minim in qui cupidatat ut exercitation deserunt cillum Lorem.
              </p>
            </Fade>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default HeroEcommerce

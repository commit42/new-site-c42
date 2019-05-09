import React from "react"
import "./Ecommerce.scss"
import Image from "gatsby-image"
import { Container, Grid, Header } from "semantic-ui-react"
import Fade from "react-reveal/Fade"

const HeroEcommerce = ({ data }) => {
  return (
    <Container fluid className="primary" id="references-ecommerce-container">
      <Grid as={Container}>
        <Grid.Row>
          <Grid.Column className="references-ecommerce-heading">
            <Fade>
              <Header as="h2">{data.title}</Header>
            </Fade>
          </Grid.Column>
        </Grid.Row>
        {data.referencesList.map(item => {
          return (
            <Grid.Row className="reference-item" key={item.title}>
              <Grid.Column computer={8} tablet={8} mobile={16}>
                <Fade>
                  <Image fluid={item.image.childImageSharp.fluid} />
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
                    {item.title}
                  </Header>
                </Fade>
                <Fade>
                  <p>{item.description}</p>
                </Fade>
              </Grid.Column>
            </Grid.Row>
          )
        })}
      </Grid>
    </Container>
  )
}

export default HeroEcommerce

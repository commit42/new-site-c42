import React from "react"
import "./CompanyPage.scss"
import Image from "gatsby-image"
import { Container, Grid, Header, Button, Icon } from "semantic-ui-react"
import Carousel from "nuka-carousel"

const OfficeCarousel = ({ data }) => {
  return (
    <Container className="secondary office-carousel" fluid>
      <Grid as={Container}>
        <Grid.Row>
          <Grid.Column>
            <Header as="h2">{data.heading}</Header>
            <p>{data.description}</p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className="office-carousel--carousel">
          <Carousel
            renderBottomCenterControls={() => false}
            enableKeyboardControls={true}
            dragging={true}
            swiping={true}
            renderCenterLeftControls={({ previousSlide }) => (
              <Button className="swiper-button-prev" onClick={previousSlide}>
                <Icon name="arrow left" />
              </Button>
            )}
            renderCenterRightControls={({ nextSlide }) => (
              <Button className="swiper-button-next" onClick={nextSlide}>
                <Icon name="arrow right" />
              </Button>
            )}
          >
            {data.pictures &&
              data.pictures.map((picture, index) => {
                return (
                  <Grid.Column key={index}>
                    <Image fluid={picture.picture.childImageSharp.fluid} />
                  </Grid.Column>
                )
              })}
          </Carousel>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default OfficeCarousel

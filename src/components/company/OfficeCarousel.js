import React from "react"
import "./CompanyPage.scss"
import Swiper from "react-id-swiper"
import Image from "gatsby-image"
import { Pagination, Navigation } from "swiper/dist/js/swiper.esm"
import { Container, Grid, Header, Button, Icon } from "semantic-ui-react"
import Carousel from "nuka-carousel"

const OfficeCarousel = ({ data }) => {
  return (
    <Container className="primary office-carousel" fluid>
      <Grid as={Container}>
        <Grid.Row>
          <Grid.Column>
            <Header as="h2" className="secondary">
              {data.heading}
            </Header>
            <p>{data.description}</p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{ minHeight: "700px" }}>
          <Carousel
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

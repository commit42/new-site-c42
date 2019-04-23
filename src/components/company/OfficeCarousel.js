import React from "react"
import "./OfficeCarousel.scss"
import Swiper from "react-id-swiper"
import { Pagination, Navigation } from "swiper/dist/js/swiper.esm"
import { Container, Grid, Header, Image, Button, Icon } from "semantic-ui-react"

const OfficeCarousel = () => {
  const params = {
    modules: [Pagination, Navigation],
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    renderPrevButton: () => (
      <Button className="swiper-button-prev">
        <Icon name="arrow left" />
      </Button>
    ),
    renderNextButton: () => (
      <Button className="swiper-button-next">
        <Icon name="arrow right" />
      </Button>
    ),
  }
  return (
    <Container className="primary office-carousel" fluid>
      <Grid as={Container}>
        <Grid.Row>
          <Grid.Column>
            <Header as="h2" className="secondary">
              Les locaux
            </Header>
            <p>
              Quis dolor excepteur ex voluptate in elit. Reprehenderit
              reprehenderit non nulla mollit labore exercitation elit ea veniam.
              Esse nostrud anim laboris commodo cillum officia aliquip anim ea
              proident consectetur irure officia irure. In exercitation
              consectetur proident adipisicing sit veniam magna non
              reprehenderit.
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Swiper {...params}>
            <Grid.Column>
              <Image src="http://placeimg.com/640/300/animals" fluid />
            </Grid.Column>
            <Grid.Column>
              <Image src="http://placeimg.com/640/300/animals" fluid />
            </Grid.Column>
            <Grid.Column>
              <Image src="http://placeimg.com/640/300/animals" fluid />
            </Grid.Column>
          </Swiper>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default OfficeCarousel

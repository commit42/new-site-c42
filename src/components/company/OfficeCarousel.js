import React from "react"
import "./CompanyPage.scss"
import Swiper from "react-id-swiper"
import { Pagination, Navigation } from "swiper/dist/js/swiper.esm"
import { Container, Grid, Header, Image, Button, Icon } from "semantic-ui-react"

const OfficeCarousel = ({ data }) => {
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
              {data.heading}
            </Header>
            <p>{data.description}</p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Swiper {...params}>
            {data.pictures &&
              data.pictures.map((picture, index) => {
                return (
                  <Grid.Column key={index}>
                    <Image src={picture} fluid />
                  </Grid.Column>
                )
              })}
          </Swiper>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default OfficeCarousel

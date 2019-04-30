import React from "react"
import "./CompanyPage.scss"
import Swiper from "react-id-swiper"
import Image from "gatsby-image"
import { Pagination, Navigation } from "swiper/dist/js/swiper.esm"
import { Container, Grid, Header, Button, Icon } from "semantic-ui-react"
import Carousel from "nuka-carousel"

const OfficeCarousel = ({ data }) => {
  // const params = {
  //   modules: [Pagination, Navigation],
  //   spaceBetween: 30,
  //   slidesPerView: 1,
  //   rebuildOnUpdate: true,
  //   pagination: {
  //     el: ".swiper-pagination",
  //     type: "bullets",
  //     clickable: true,
  //   },
  //   breakpoints: {
  //     320: {
  //       slidesPerView: 1,
  //       spaceBetween: 10,
  //     },
  //     480: {
  //       slidesPerView: 1,
  //       spaceBetween: 20,
  //     },
  //     640: {
  //       slidesPerView: 1,
  //       spaceBetween: 20,
  //     },
  //     1920: {
  //       slidesPerView: 1,
  //       spaceBetween: 20,
  //     },
  //   },
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  //   renderPrevButton: () => (
  //     <Button className="swiper-button-prev">
  //       <Icon name="arrow left" />
  //     </Button>
  //   ),
  //   renderNextButton: () => (
  //     <Button className="swiper-button-next">
  //       <Icon name="arrow right" />
  //     </Button>
  //   ),
  // }

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
          {/* <Swiper {...params}>
            {data.pictures &&
              data.pictures.map((picture, index) => {
                return (
                  <Grid.Column
                    style={{ marginBottom: "3rem" }}
                    mobile={16}
                    tablet={16}
                    computer={5}
                    textAlign="center"
                    key={index}
                  >
                    <Image fluid={picture.picture.childImageSharp.fluid} />
                  </Grid.Column>
                )
              })}
          </Swiper> */}

          <Carousel
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

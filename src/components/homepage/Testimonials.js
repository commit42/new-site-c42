import React, { useState } from "react"
import "./testimonials.scss"
import { Grid, Icon, Header, Card, Container, Button } from "semantic-ui-react"
import Fade from "react-reveal/Fade"
import Carousel from "nuka-carousel"
import Swiper from "react-id-swiper"
import { Navigation, Pagination, Autoplay } from "swiper/dist/js/swiper.esm"

const Testimonials = ({ data, isMobile }) => {
  const [swiper, updateSwiper] = useState(null)

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext()
    }
  }

  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev()
    }
  }

  const params = {
    modules: [Pagination, Navigation, Autoplay], // Add nescessary modules here
    loop: true,
    spaceBetween: 80,
    autoplay: true,
    slidesPerView: "3",
    breakpoints: {
      // when window width is <= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      // when window width is <= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is <= 640px
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1920: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  }

  return (
    <Container fluid className="testimonials-list">
      <Grid as={Container}>
        <Grid.Row textAlign="center">
          <Grid.Column>
            <Fade bottom>
              <Header as="h2">Ce que nos clients en pensent</Header>
            </Fade>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row textAlign="center" style={{ marginTop: "6rem" }} centered>
          <Swiper getSwiper={updateSwiper} modules={[Navigation]} {...params}>
            {data.testimonialsList.map((testimonial, index) => {
              return (
                <Grid.Column
                  style={{ marginBottom: "3rem" }}
                  mobile={16}
                  tablet={16}
                  computer={5}
                  textAlign="center"
                >
                  <Card fluid key={index} className="testimonial">
                    <Card.Content>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        {Array.apply(null, { length: testimonial.rating }).map(
                          (e, i) => (
                            <Icon name="star" color="yellow" key={i} />
                          )
                        )}
                      </div>
                      <Card.Description
                        textAlign="left"
                        style={{ marginTop: "2rem" }}
                      >
                        {testimonial.text}
                      </Card.Description>
                    </Card.Content>

                    <Card.Content extra>
                      <Card.Header textAlign="center">
                        {testimonial.author}
                      </Card.Header>
                    </Card.Content>
                  </Card>
                </Grid.Column>
              )
            })}
          </Swiper>
          <div style={{ marginTop: "2rem" }}>
            <Button
              onClick={goPrev}
              primary
              style={{ marginRight: "1rem" }}
              icon="arrow left"
            />
            <Button
              onClick={goNext}
              style={{ marginLeft: "1rem" }}
              primary
              icon="arrow right"
            />
          </div>
        </Grid.Row>
        <Grid.Row style={{ marginTop: "2rem" }}>
          <Grid.Column textAlign="center">
            <Header as="h4">
              <a href="https://www.google.com/search?q=commit42+avis&oq=commit42+avis&aqs=chrome..69i57.2474j0j7&sourceid=chrome&ie=UTF-8#lrd=0x12aebb873c60e57b:0x2ca3be697d36200,1,,,">
                Voir tous les avis <Icon name="long arrow alternate right" />
              </a>
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default Testimonials

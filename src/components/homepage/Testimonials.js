import React, { useState } from "react"
import "./Testimonials.scss"
import "../../globals.scss"
import { Grid, Icon, Header, Card, Container, Button } from "semantic-ui-react"
import { Navigation, Pagination, Autoplay } from "swiper/dist/js/swiper.esm"
import Fade from "react-reveal/Fade"
import Swiper from "react-id-swiper"

const Testimonials = ({ data }) => {
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
    modules: [Pagination, Navigation, Autoplay],
    loop: true,
    spaceBetween: 80,
    slidesPerView: "3",
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
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
        <Grid.Row textAlign="center" className="mt-5" centered>
          <Swiper getSwiper={updateSwiper} modules={[Navigation]} {...params}>
            {data.testimonialsList.map((testimonial, index) => {
              return (
                <Grid.Column
                  style={{ marginBottom: "3rem" }}
                  mobile={16}
                  tablet={16}
                  computer={5}
                  textAlign="center"
                  key={index}
                >
                  <Card fluid key={index} className="testimonial">
                    <Card.Content>
                      <div className="rating-container">
                        {Array.apply(null, { length: testimonial.rating }).map(
                          (e, i) => (
                            <Icon name="star" color="yellow" key={i} />
                          )
                        )}
                      </div>
                      <Card.Description textAlign="left" className="mt-2">
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
          <div className="mt-2 btn">
            <Button
              onClick={goPrev}
              primary
              className="btn--prev"
              icon="arrow left"
            />
            <Button
              className="btn--next"
              onClick={goNext}
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

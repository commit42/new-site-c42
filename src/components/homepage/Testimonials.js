import React, { useState, useEffect } from "react"
import "./Testimonials.scss"
import "../../globals.scss"
import { Grid, Icon, Header, Card, Container, Button } from "semantic-ui-react"
import Fade from "react-reveal/Fade"
import Carousel from "nuka-carousel"

const Testimonials = ({ data }) => {
  const [width, setWidth] = useState(
    typeof window !== "undefined" && window.innerWidth
  )
  typeof window !== "undefined" &&
    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth)
      window.addEventListener("resize", handleResize)
      return () => {
        window.removeEventListener("resize", handleResize)
      }
    }, [])

  const getSlides = width => {
    if (width >= 1200) {
      return 3
    } else if (width < 1200 && width > 768) {
      return 2
    }
    return 1
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
          <Carousel
            style={{ maxWidth: "90%" }}
            slidesToShow={getSlides(width)}
            cellSpacing={50}
            renderCenterLeftControls={({ previousSlide }) => (
              <Button className="carousel-button-prev" onClick={previousSlide}>
                <Icon name="arrow left" />
              </Button>
            )}
            renderCenterRightControls={({ nextSlide }) => (
              <Button className="carousel-button-next" onClick={nextSlide}>
                <Icon name="arrow right" />
              </Button>
            )}
          >
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
                      <Card.Description
                        textAlign="left"
                        className="mt-2 testimonial-card-description"
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
          </Carousel>
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

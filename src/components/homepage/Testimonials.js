import React from "react"
import "./testimonials.scss"
import { Grid, Icon, Header, Card, Container, Button } from "semantic-ui-react"
import Fade from "react-reveal/Fade"
import Carousel from "nuka-carousel"

const Testimonials = ({ data, isMobile }) => {
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
        <Grid.Row
          as={Container}
          textAlign="center"
          style={{ marginTop: "6rem" }}
          centered
        >
          <Carousel
            transitionMode="scroll3d"
            slidesToScroll="auto"
            autoplay={true}
            autoplayReverse={true}
            autoplayInterval={5000}
            cellAlign="center"
            dragging={true}
            swiping={true}
            slideWidth={isMobile ? "500px" : "700px"}
            withoutControls={false}
            slideIndex={3}
            wrapAround={true}
            pauseOnHover={true}
            renderCenterLeftControls={({ previousSlide }) => (
              <Button
                onClick={previousSlide}
                compact
                icon="arrow left"
                primary
              />
            )}
            renderCenterRightControls={({ nextSlide }) => (
              <Button onClick={nextSlide} compact icon="arrow right" primary />
            )}
          >
            {data.testimonialsList.map((testimonial, index) => {
              return (
                <Grid.Column
                  style={{ marginBottom: "3rem" }}
                  mobile={16}
                  tablet={8}
                  computer={10}
                  key={index}
                >
                  <Card fluid>
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
          </Carousel>
        </Grid.Row>
        <Grid.Row>
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

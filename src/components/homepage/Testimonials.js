import React from "react"
import { Grid, Icon, Header, Card, Container } from "semantic-ui-react"
import Fade from "react-reveal/Fade"
import Carousel from "nuka-carousel"

const Testimonials = ({ data }) => {
  return (
    <Container
      fluid
      style={{
        paddingTop: "5%",
        paddingBottom: "5%",
        backgroundColor: "#F9F9F9",
      }}
    >
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
            cellAlign="center"
            dragging={true}
            swiping={true}
            // slideWidth="500px"
            withoutControls={true}
            slideIndex="3"
            wrapAround={true}
            
          >
            {data.testimonialsList.map((t, index) => {
              return (
                <Grid.Column
                  style={{ marginBottom: "3rem" }}
                  mobile={16}
                  tablet={8}
                  computer={5}
                >
                  <Card fluid key={index}>
                    <Card.Content>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        {Array.apply(null, { length: t.rating }).map((e, i) => (
                          <Icon name="star" color="yellow" key={i} />
                        ))}
                      </div>
                      <Card.Description
                        textAlign="left"
                        style={{ marginTop: "2rem" }}
                      >
                        {t.text}
                      </Card.Description>
                    </Card.Content>

                    <Card.Content extra>
                      <Card.Header textAlign="center">{t.author}</Card.Header>
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

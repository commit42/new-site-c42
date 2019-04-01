import React from "react"
import { Grid, Icon, Header, Card } from "semantic-ui-react"
import Fade from "react-reveal/Fade"


const Testimonials = ({ data }) => {
  return (
    <Grid
      style={{
        paddingTop: "5%",
        paddingBottom: "5%",
        backgroundColor: "#F9F9F9",
      }}
    >
      <Grid.Row textAlign="center">
        <Grid.Column>
          <Fade bottom>
            <Header as="h2">Ce que nos clients en pensent</Header>
          </Fade>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row textAlign="center" style={{ marginTop: "5rem" }}>
        <Grid.Column>
          <Card.Group centered>
            {data.testimonialsList.map((t, index) => {
              return (
                <Fade  key={index}>
                  <Card>
                    <Card.Content>
                      <div>
                        {
                          Array.apply(null, { length: t.rating }).map((e, i) => (
                            <Icon name="star" color="yellow" key={i} />
                          ))
                        }
                      </div>
                      <Card.Description
                        textAlign="left"
                        style={{ marginTop: "1rem" }}
                      >
                        {t.text}
                      </Card.Description>
                      <Card.Header style={{ marginTop: "1rem" }}>
                        {t.author}
                      </Card.Header>
                    </Card.Content>
                  </Card>
                </Fade>
              )
            })}
          </Card.Group>
          <Header as="h4" style={{ marginTop: "3rem" }}>
            Voir tous les avis <Icon name="long arrow alternate right" />
          </Header>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default Testimonials

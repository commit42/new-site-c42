import React from "react"
import "./HomePage.scss"
import { Grid, Header, Container, Icon } from "semantic-ui-react"
import Fade from "react-reveal/Fade"

const Services = ({ data }) => {
  return (
    <Container fluid className="primary" id="services-container">
      <Grid textAlign="center" className="services-container">
        <Grid.Row style={{ maxWidth: "80%" }}>
          <Header as="h2" textAlign="center">
            <Fade bottom>Découvrez tous nos services</Fade>
          </Header>
        </Grid.Row>
        <Grid.Row>
          {data.servicesList.map((service, key) => {
            console.log(service.icon)
            return (
              <Grid.Column mobile={14} tablet={14} computer={4} key={key}>
                <Grid textAlign="left">
                  <Grid.Row>
                    <Grid.Column mobile={2} tablet={1} computer={2}>
                      <Fade bottom>
                        <Header as="h3">
                          <Icon name={`${service.icon}`} />
                          <i className={`far fa-${service.icon}`} />
                        </Header>
                      </Fade>
                    </Grid.Column>
                    <Grid.Column mobile={14} tablet={15} computer={14}>
                      <Fade bottom>
                        <Header as="h3" style={{ marginBottom: "1rem" }}>
                          {service.title}
                        </Header>
                        <p>{service.description}</p>
                      </Fade>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Grid.Column>
            )
          })}
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default Services

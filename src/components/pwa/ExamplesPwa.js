import React from "react"
import "./Pwa.scss"
import { Container, Grid, Header, Icon, Segment } from "semantic-ui-react"
import Fade from "react-reveal/Fade"

const ExamplesPwa = ({ data }) => {
  return (
    <Grid as={Container} id="pwa-examples">
      <Grid.Row>
        <Fade>
          <Header as="h2" className="pwa-examples-header">
            {data.heading}
          </Header>
        </Fade>
        <Fade>
          <p>{data.description}</p>
        </Fade>
      </Grid.Row>
      <Grid.Row>
        {data &&
          Array.isArray(data.examplesList) &&
          data.examplesList.map(item => {
            return (
              <Grid.Column
                computer={4}
                tablet={8}
                mobile={16}
                className="example-item"
                textAlign="center"
                key={item.title}
              >
                <Fade>
                  <Segment className={`${item.bgColor ? `primary` : ""}`}>
                    <Icon name={item.icon} size="massive" color="grey" />
                  </Segment>
                  <Header as="h3">{item.title}</Header>
                </Fade>
              </Grid.Column>
            )
          })}
      </Grid.Row>
    </Grid>
  )
}

export default ExamplesPwa

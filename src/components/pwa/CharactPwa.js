import React from "react"
import "./Pwa.scss"
import { Container, Grid, Header, Icon, Segment } from "semantic-ui-react"
import Fade from "react-reveal/Fade"

const CharactPwa = ({ data }) => {
  return (
    <Grid as={Container} id="pwa-characteristic-container">
      <Grid.Row textAlign="center">
        {data &&
          data.map(charact => {
            return (
              <Grid.Column
                computer={4}
                tablet={8}
                mobile={16}
                className="charact-item"
                key={charact.title}
              >
                <Fade>
                  <Segment className={`${charact.bgColor ? `primary` : ""}`}>
                    <Icon name={charact.icon} size="massive" color="grey" />
                  </Segment>
                  <Header as="h3">{charact.title}</Header>
                  <p>{charact.description}</p>
                </Fade>
              </Grid.Column>
            )
          })}
      </Grid.Row>
    </Grid>
  )
}

export default CharactPwa

import React from "react"
import "./Pwa.scss"
import { Container, Grid, Header, Icon, Segment } from "semantic-ui-react"
import Fade from "react-reveal/Fade"

const ExamplesPwa = () => {
  return (
    <Grid as={Container} id="pwa-examples">
      <Grid.Row>
        <Fade>
          <Header as="h2" className="pwa-examples-header">
            Examples d'usage
          </Header>
        </Fade>
        <Fade>
          <p>
            Laborum in irure id eu sint consectetur occaecat amet amet cillum.
            Cillum cupidatat velit ad velit cillum deserunt. Sunt excepteur
            irure pariatur in ullamco mollit non tempor velit ullamco esse nulla
            sunt qui. Et nostrud culpa mollit veniam cillum et est occaecat.
            Proident et ex cupidatat culpa elit velit consectetur cupidatat amet
            nostrud mollit enim.
          </p>
        </Fade>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column
          computer={4}
          tablet={8}
          mobile={16}
          className="example-item"
          textAlign="center"
        >
          <Fade>
            <Segment>
              <Icon name="talk" size="massive" color="grey" />
            </Segment>
            <Header as="h3">Messagerie</Header>
          </Fade>
        </Grid.Column>
        <Grid.Column
          computer={4}
          tablet={8}
          mobile={16}
          className="example-item"
          textAlign="center"
        >
          <Segment className="primary">
            <Icon name="camera" size="massive" color="grey" />
          </Segment>
          <Header as="h3">Photo</Header>
        </Grid.Column>
        <Grid.Column
          computer={4}
          tablet={8}
          mobile={16}
          className="example-item"
          textAlign="center"
        >
          <Segment>
            <Icon name="map" size="massive" color="grey" />
          </Segment>
          <Header as="h3">Carte</Header>
        </Grid.Column>
        <Grid.Column
          computer={4}
          tablet={8}
          mobile={16}
          className="example-item"
          textAlign="center"
        >
          <Segment className="primary">
            <Icon name="list" size="massive" color="grey" />
          </Segment>
          <Header as="h3">Pense-bête</Header>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default ExamplesPwa

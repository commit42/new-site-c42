import React from "react"
import "./Pwa.scss"
import {
  Container,
  Grid,
  Header,
  Icon,
  Segment,
  Image,
} from "semantic-ui-react"
import Fade from "react-reveal/Fade"

const CharactPwa = () => {
  return (
    <Grid as={Container} id="pwa-characteristic-container">
      <Grid.Row textAlign="center">
        <Grid.Column
          computer={4}
          tablet={8}
          mobile={16}
          className="charact-item"
        >
          <Fade>
            <Segment>
              <Icon name="hourglass end" size="massive" color="grey" />
            </Segment>
            <Header as="h3">Rapide</Header>
            <p>
              Eu in eiusmod amet laboris labore ullamco sunt ullamco qui magna
              quis voluptate ullamco nostrud.
            </p>
          </Fade>
        </Grid.Column>
        <Grid.Column
          computer={4}
          tablet={8}
          mobile={16}
          className="charact-item"
        >
          <Fade>
            <Segment className="primary">
              <Icon name="lock" size="massive" color="grey" />
            </Segment>
            <Header as="h3">Sécurisé</Header>
            <p>
              Eu in eiusmod amet laboris labore ullamco sunt ullamco qui magna
              quis voluptate ullamco nostrud.
            </p>
          </Fade>
        </Grid.Column>
        <Grid.Column
          computer={4}
          tablet={8}
          mobile={16}
          className="charact-item"
        >
          <Fade>
            <Segment>
              <Icon name="dont" size="massive" color="grey" />
            </Segment>
            <Header as="h3">Hors-ligne</Header>
            <p>
              Eu in eiusmod amet laboris labore ullamco sunt ullamco qui magna
              quis voluptate ullamco nostrud.
            </p>
          </Fade>
        </Grid.Column>
        <Grid.Column
          computer={4}
          tablet={8}
          mobile={16}
          className="charact-item"
        >
          <Fade>
            <Segment className="primary">
              <Icon size="massive" name="cogs" color="grey" />
            </Segment>
            <Header as="h3">Intégré</Header>
            <p>
              Eu in eiusmod amet laboris labore ullamco sunt ullamco qui magna
              quis voluptate ullamco nostrud.
            </p>
          </Fade>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row id="pwa-characteristic-schema">
        <Fade>
          <Header as="h2">Une seule version pour tous les appareils</Header>
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
        <Fade>
          <Image
            src="http://via.placeholder.com/640x350"
            alt=""
            className="pwa-schema"
          />
        </Fade>
      </Grid.Row>
    </Grid>
  )
}

export default CharactPwa

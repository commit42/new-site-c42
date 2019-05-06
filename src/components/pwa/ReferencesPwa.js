import React from "react"
import "./Pwa.scss"
import { Grid, Header, Container, Image } from "semantic-ui-react"
import Fade from "react-reveal/Fade"

const ReferencesPwa = () => {
  return (
    <Grid as={Container} id="references-pwa-container">
      <Grid.Row>
        <Fade>
          <Header as="h2">Nos références Web App PWA</Header>
        </Fade>
      </Grid.Row>
      <Grid.Row className="reference-pwa-item">
        <Grid.Column computer={8} tablet={8} mobile={16}>
          <Fade>
            <Image src="http://via.placeholder.com/640x400" centered alt="" />
          </Fade>
        </Grid.Column>
        <Grid.Column computer={8} tablet={8} mobile={16} verticalAlign="bottom">
          <Fade>
            <Header as="h3">Easy Mile</Header>
            <p>
              Anim commodo officia qui sint tempor minim ullamco enim voluptate
              cillum mollit reprehenderit cillum. Aliqua incididunt commodo
              aliquip sit sint laboris fugiat nostrud exercitation aute deserunt
              commodo do. Ex adipisicing culpa sit laborum aliquip pariatur
              fugiat cupidatat voluptate.
            </p>
          </Fade>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default ReferencesPwa

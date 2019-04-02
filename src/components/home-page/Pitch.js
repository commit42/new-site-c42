import React from "react"
import "./pitch.scss"
import { Image, Container, Grid, Header } from "semantic-ui-react"
import Fade from "react-reveal/Fade"

const Pitch = ({ data }) => {
  return (
    <Grid id="pitch-container" >
      {
        data.map((p, index) => {
          return (
            <Grid.Row style={{ backgroundColor: "#424242" }} key={index}>
              <Grid.Column>
                <Container text>
                  <Fade bottom>
                    <Header as="h3" className="primary" style={{marginBottom:'1rem'}}>
                      {p.title}
                    </Header>
                    <p style={{ color: "white", marginBottom: "5rem" }}>
                      {p.description}
                    </p>
                      <Image style={{ margin: "auto" }} src={p.image.childImageSharp.fluid.src} />
                  </Fade>
                </Container>
              </Grid.Column>
            </Grid.Row>
          )
        })
      }
    </Grid>
  )
}

export default Pitch

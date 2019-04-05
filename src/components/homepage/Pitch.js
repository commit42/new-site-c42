import React from "react"
import "./pitch.scss"
import Image from "gatsby-image"
import { Container, Grid, Header } from "semantic-ui-react"
import Fade from "react-reveal/Fade"

const Pitch = ({ data }) => {
  return (
    <Grid id="pitch-container">
      {data.map((row, index) => {
        const altText = row.image.childImageSharp.fixed.src.slice(47, -4)
        const isDarkBg = row.darkBg ? "#424242" : "white"
        const isDarkText = row.darkBg ? "white" : "black"
        return (
          <Grid.Row key={index} style={{ backgroundColor: `${isDarkBg}` }}>
            <Grid.Column>
              <Container text>
                <Fade bottom>
                  <Header
                    as="h3"
                    className="primary"
                    style={{ marginBottom: "1rem" }}
                  >
                    {row.title}
                  </Header>
                  <p style={{ color: `${isDarkText}`, marginBottom: "5rem" }}>
                    {row.description}
                  </p>
                  <div style={{ textAlign: "center" }}>
                    <Image
                      style={{ margin: "auto" }}
                      fixed={row.image.childImageSharp.fixed}
                      alt={altText}
                    />
                  </div>
                </Fade>
              </Container>
            </Grid.Column>
          </Grid.Row>
        )
      })}
    </Grid>
  )
}

export default Pitch

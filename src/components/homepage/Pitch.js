import React from "react"
import "./pitch.scss"
import Image from "gatsby-image"
import Fade from "react-reveal/Fade"
import { Container, Grid, Header } from "semantic-ui-react"

import formatText from "../../helpers/formatText"

const Pitch = ({ data }) => {
  return (
    <Grid id="pitch-container">
      {data.map((row, index) => {
        const altText = row.image.childImageSharp.fluid.originalName.slice(0, -4)
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
                  <div style={{ color: `${isDarkText}`, marginBottom: "5rem" }}>
                    {formatText(row.description)}
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <Image
                      style={{ margin: "auto" }}
                      fluid={row.image.childImageSharp.fluid}
                      alt={altText}
                      className={`${altText}`}
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

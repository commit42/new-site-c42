import React from "react"
import "./Pitch.scss"
import Image from "gatsby-image"
import Fade from "react-reveal/Fade"
import { Container, Grid, Header } from "semantic-ui-react"
import formatText from "../../helpers/formatText"

const Pitch = ({ data }) => {
  return (
    <Grid id="pitch-container">
      {data.map((row, index) => {
        const altText = row.image.childImageSharp.fluid.originalName.slice(
          0,
          -4
        )
        const isDarkBg = row.darkBg ? "#424242" : "white"
        const isDarkText = row.darkBg ? "white" : "black"
        return (
          <Grid.Row key={index} style={{ backgroundColor: `${isDarkBg}` }}>
            <Grid.Column>
              <Container text>
                <Fade cascade>
                  <Header as="h3" className="primary">
                    {row.title}
                  </Header>
                  <div style={{ color: `${isDarkText}` }} className="mb-5">
                    {formatText(row.description)}
                  </div>
                  <div>
                    <Image
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

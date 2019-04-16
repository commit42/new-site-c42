import React from "react"
import "./HeaderHome.scss"
import Image from "gatsby-image"
import formatText from "../../helpers/formatText"
import { Container, Grid, Header } from "semantic-ui-react"

const HeaderHome = ({ data }) => {
  return (
    <Grid>
      <Grid.Row columns={2}>
        <Grid.Column only="large screen computer">
          <Image
            style={{ maxHeight: "100vh" }}
            fluid={data.image.childImageSharp.fluid}
            alt="Motifs commit42"
          />
        </Grid.Column>
        <Grid.Column as={Container} text verticalAlign="middle">
          <Header as="h1">{data.heading}</Header>
          {formatText(data.description)}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default HeaderHome

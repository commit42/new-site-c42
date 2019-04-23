import React from "react"
import "./HeaderHome.scss"
import Image from "gatsby-image"
import formatText from "../../helpers/formatText"
import { Container, Grid, Header } from "semantic-ui-react"

const HeaderHome = ({ data }) => {
  return (
    <Grid>
      <Grid.Row columns={2}>
        <Grid.Column mobile={16} tablet={16} computer={8}>
          <Image
            style={{ maxHeight: "100vh" }}
            fluid={data.image.childImageSharp.fluid}
            alt="Motifs commit42"
          />
        </Grid.Column>
        <Grid.Column
          as={Container}
          text
          verticalAlign="middle"
          mobile={16}
          tablet={16}
          computer={8}
        >
          <div className="header-text-container">
            <Header as="h1">{data.heading}</Header>
            {formatText(data.description)}
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default HeaderHome

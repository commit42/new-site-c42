import React from "react"
import "./headerIndex.scss"
import { Image, Container, Grid, Header } from "semantic-ui-react"

const HeaderIndex = ({ data }) => {
  return (
    <Grid>
      <Grid.Row columns={2}>
        <Grid.Column only="large screen computer">
          <Image
            fluid
            style={{ maxHeight: "100vh" }}
            src={data.image.childImageSharp.fluid.src}
            alt="Motifs commit42"
          />
        </Grid.Column>
        <Grid.Column as={Container} text verticalAlign="middle">
          <Header as="h1">{data.heading}</Header>
          <p>{data.description}</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default HeaderIndex

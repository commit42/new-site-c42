import React from "react"
import { Link } from "gatsby"
import { Container, Grid, Header, Button } from "semantic-ui-react"

const PageNotFound = () => {
  return (
    <Container fluid>
      <Grid textAlign="center">
        <Grid.Row>
          <Grid.Column>
            <Header as="h2" textAlign="center">
              404
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>Oups, cette page n'existe pas...</Grid.Row>
        <Grid.Row>
          <Button as={Link} to="/">
            Retourner sur la page d'accueil ?
          </Button>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default PageNotFound

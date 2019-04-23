import React from "react"
import "../globals.scss"
import "./404.scss"
import { Link } from "gatsby"
import { Container, Grid, Header, Button } from "semantic-ui-react"
import Layout from "../components/Layout"

const PageNotFound = () => {
  return (
    <Layout>
      <Container fluid className="notfound--container">
        <Grid textAlign="center">
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Header
                as="h2"
                textAlign="center"
                className="m-0 notfound--header"
              >
                404
              </Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Header as="h3" className="notfound--text">
              Oups, on dirait que cette page n'existe pas...
            </Header>
          </Grid.Row>
          <Grid.Row className="notfound--btn">
            <Button as={Link} to="/">
              Retourner sur la page d'accueil ?
            </Button>
          </Grid.Row>
        </Grid>
      </Container>
    </Layout>
  )
}

export default PageNotFound

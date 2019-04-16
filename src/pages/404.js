import React from "react"
import { Link } from "gatsby"
import { Container, Grid, Header, Button } from "semantic-ui-react"
import Layout from "../components/Layout"
import "./404.scss"

const PageNotFound = () => {
  return (
    <Layout>
      <Container fluid>
        <Grid textAlign="center">
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Header
                as="h2"
                textAlign="center"
                style={{ fontSize: "10rem", marginBottom: "3rem" }}
              >
                404
              </Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Header as="h3" style={{ maxWidth: "90%", textAlign: "center" }}>
              Oups, on dirait que cette page n'existe pas...
            </Header>
          </Grid.Row>
          <Grid.Row style={{ marginTop: "10rem" }}>
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

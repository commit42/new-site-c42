import React from "react"
import "../globals.scss"
import "./404.scss"
import { Link } from "gatsby"
import { Container, Grid, Header, Button } from "semantic-ui-react"
import Layout from "../components/Layout"
import SEO from "../components/seo/SEO"

const PageNotFound = () => {
  return (
    <Layout>
      <SEO
        title="404 | commit42"
        description="Oups ! Désolée cette page n'existe pas..."
      />
      <Container fluid id="notfound-container" className="primary">
        <Grid textAlign="center">
          <Grid.Row>
            <Grid.Column>
              <Header as="h2" className="m-0 notfound-header">
                404
              </Header>
              <Header as="h3" className="notfound-text">
                Oups, on dirait que cette page n'existe pas...
              </Header>
              <Button as={Link} to="/">
                Retourner sur la page d'accueil ?
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Layout>
  )
}

export default PageNotFound

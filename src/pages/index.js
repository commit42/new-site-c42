import React from "react";
import 'semantic-ui-css/semantic.min.css'
import { Image, Container, Grid } from 'semantic-ui-react'
import Layout from "../components/layout";
import Navigation from '../components/navigation';
import logo from '../../static/assets/logo-c42.png'

const IndexPage = () => {
  return (
    <div style={{backgroundColor: '#424242'}}>
      <Layout>
        <Container fluid style={{marginTop:"30vh", maxWidth:'100%'}}>
          <Grid centered>
            <Grid.Row >
              <Grid.Column>
                <Image src={logo} centered />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row >
              <Grid.Column>
                <Navigation />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Layout>
    </div>
  )
}

export default IndexPage;

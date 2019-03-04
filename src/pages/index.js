import React from "react";
import 'semantic-ui-css/semantic.min.css'
import './index.scss';
import { Image, Container, Grid, Header, Responsive } from 'semantic-ui-react'
import Layout from "../components/layout";
import Navigation from '../components/navigation';
import logo from '../../static/assets/logo-c42.png'

const IndexPage = () => {
  return (
    <div style={{ backgroundColor: '#424242' }}>
      <Layout>
        <Container style={{ marginTop: "30vh", maxWidth: '50%' }}>
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
            <Grid.Row style={{marginTop:'3vh'}}>
              <Grid.Column textAlign="center">
                <Header as="h1">
                  <a href="https://reactjs.org/" target="_blank">#React</a>
                  <a href="https://developers.google.com/web/progressive-web-apps/" target="_blank">#PWA</a>
                  <a href="https://cakephp.org/" target="_blank">#CakePHP</a>
                  <a href="https://magento.com/" target="_blank">#Magento</a>
                </Header>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Layout>
    </div>
  )
}

export default IndexPage;

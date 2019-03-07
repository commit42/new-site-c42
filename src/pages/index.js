import React, { Component } from "react";
import 'semantic-ui-css/semantic.min.css'
import './index.scss';
import { Image, Container, Grid, Header, Transition } from 'semantic-ui-react'
import SEO from "../components/SEO"
import Layout from "../components/layout";
import Navigation from '../components/navigation';
import logo from '../../static/assets/logo-c42.png'

class IndexPage extends Component {
  state = { visible: false }

  componentDidMount() {
    this.setState({ visible: !this.state.visible })
  }

  render() {
    return (
      <div style={{ backgroundColor: '#424242' }}>
        <Layout isHome={true} path={this.props.location.pathname}>
          <SEO />
          <Container style={{ marginTop: "30vh", maxWidth: '50%' }}>
            <Grid centered>
              <Grid.Row >
                <Grid.Column>
                  <Transition visible={this.state.visible} animation='fade down' duration={1000}>
                    <Image src={logo} centered />
                  </Transition>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row >
                <Grid.Column>
                  <Navigation visible={this.state.visible} />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row style={{ marginTop: '3vh' }}>
                <Grid.Column textAlign="center">
                  <Transition visible={this.state.visible} animation='vertical flip' duration={1500}>
                    <Header as="h1">
                      <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" >#React</a>
                      <a href="https://developers.google.com/web/progressive-web-apps/" target="_blank" rel="noopener noreferrer">#PWA</a>
                      <a href="https://cakephp.org/" target="_blank" rel="noopener noreferrer">#CakePHP</a>
                      <a href="https://magento.com/" target="_blank" rel="noopener noreferrer">#Magento</a>
                    </Header>
                  </Transition>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Layout>
      </div>
    )
  }
}

export default IndexPage;

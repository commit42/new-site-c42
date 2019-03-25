import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Image, Container, Grid, Header, Icon } from 'semantic-ui-react'
import SEO from "../components/SEO/SEO"
import Layout from "../components/layout";
import Services from '../components/homepage/Services'
import Pitch from '../components/homepage/Pitch'


class IndexPage extends Component {
  state = { visible: false }

  componentDidMount() {
    this.setState({ visible: !this.state.visible })
  }

  render() {
    return (
      <div>
        <Layout isHome={true} path={this.props.location.pathname}>
          <SEO />
          <Grid>
            <Grid.Row>
              <Grid.Column width={8} >
                <Image fluid style={{ maxHeight: '100vh' }} src="https://via.placeholder.com/800x1000" />
              </Grid.Column>
              <Grid.Column width={8} as={Container} text style={{ marginTop: '70vh' }}>
                <Header as="h1">Studio d'innovation web</Header>
                <p>Mollit nostrud tempor eiusmod duis in. Magna aliquip et reprehenderit sunt eu ad. Do cillum non sunt eu mollit anim magna pariatur amet velit.</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <Services />
          <Pitch />
        </Layout>
      </div>
    )
  }
}

export default IndexPage;

import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import SEO from "../components/SEO/SEO"
import Layout from "../components/layout";
import HeaderIndex from '../components/homepage/HeaderIndex'
import Services from '../components/homepage/Services'
import Pitch from '../components/homepage/Pitch'
import Testimonials from '../components/homepage/Testimonials'
import CallToAction from "../components/homepage/CallToAction";

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
          <HeaderIndex />
          <Services />
          <Pitch />
          <Testimonials />
          <CallToAction />
        </Layout>
      </div>
    )
  }
}

export default IndexPage;

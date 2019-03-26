import React from 'react';
import { Image, Container, Grid, Header, Icon } from 'semantic-ui-react'

const Services = () => {
  return (
    <Grid textAlign='center' style={{ marginTop:'0',paddingTop: '8%', paddingBottom: '8%', backgroundColor: '#F9F9F9' }}>
      <Grid.Row>
        <Header as="h2">Découvrez tous nos services</Header>
      </Grid.Row>
      <Grid.Row style={{marginTop:'8rem'}}>
        <Grid.Column width={4}>
          <Grid textAlign='left'>
            <Grid.Row>
              <Grid.Column width={1}>
                <Header>
                  <i className="far fa-mobile"></i>
                </Header>
              </Grid.Column>
              <Grid.Column width={15}>
                <Header as="h3">Web App PWA</Header>
                <p>Ex ad sunt magna proident ullamco do velit. Laboris do nisi eu esse enim ullamco. Velit nisi nostrud sunt laborum tempor mollit adipisicing anim ut aliquip mollit. Nulla pariatur ex qui consequat ipsum exercitation culpa incididunt.</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
        <Grid.Column width={4}>
          <Grid textAlign='left'>
            <Grid.Row>
              <Grid.Column width={1}>
                <Header><i className="far fa-shopping-cart"></i></Header>
              </Grid.Column>
              <Grid.Column width={15}>
                <Header as="h3">E-commerce</Header>
                <p>Ex ad sunt magna proident ullamco do velit. Laboris do nisi eu esse enim ullamco. Velit nisi nostrud sunt laborum tempor mollit adipisicing anim ut aliquip mollit. Nulla pariatur ex qui consequat ipsum exercitation culpa incididunt.</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
        <Grid.Column width={4}>
          <Grid textAlign='left'>
            <Grid.Row>
              <Grid.Column width={1}>
                <Header><i className="far fa-ruler-combined"></i></Header>
              </Grid.Column>
              <Grid.Column width={15}>
                <Header as="h3">Sites sur-mesure</Header>
                <p>Ex ad sunt magna proident ullamco do velit. Laboris do nisi eu esse enim ullamco. Velit nisi nostrud sunt laborum tempor mollit adipisicing anim ut aliquip mollit. Nulla pariatur ex qui consequat ipsum exercitation culpa incididunt.</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Services;
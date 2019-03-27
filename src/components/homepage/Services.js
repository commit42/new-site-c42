import React from 'react';
import './services.scss';
import { Grid, Header } from 'semantic-ui-react'

const Services = () => {
  return (
    <Grid textAlign='center' style={{ marginTop: '0', paddingTop: '8%', paddingBottom: '8%', backgroundColor: '#F9F9F9' }}>
      <Grid.Row>
        <Header as="h2" style={{maxWidth:'70%'}}>Découvrez tous nos services</Header>
      </Grid.Row>
      <Grid.Row style={{ marginTop: '8rem' }}>
        <Grid.Column mobile={14} tablet={14} computer={4}>
          <Grid textAlign='left'>
            <Grid.Row>
              <Grid.Column mobile={2} tablet={1} computer={2}>
                <Header as="h3">
                  <i className="far fa-mobile"></i>
                </Header>
              </Grid.Column>
              <Grid.Column mobile={14} tablet={15} computer={14}>
                <Header as="h3">Web App PWA</Header>
                <p>Ex ad sunt magna proident ullamco do velit. Laboris do nisi eu esse enim ullamco. Velit nisi nostrud sunt laborum tempor mollit adipisicing anim ut aliquip mollit. Nulla pariatur ex qui consequat ipsum exercitation culpa incididunt.</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
        <Grid.Column mobile={14} tablet={14} computer={4}>
          <Grid textAlign='left'>
            <Grid.Row>
              <Grid.Column mobile={2} tablet={1} computer={2}>
                <Header as="h3">
                  <i className="far fa-shopping-cart"></i>
                </Header>
              </Grid.Column>
              <Grid.Column mobile={14} tablet={15} computer={14}>
                <Header as="h3">E-commerce</Header>
                <p>Ex ad sunt magna proident ullamco do velit. Laboris do nisi eu esse enim ullamco. Velit nisi nostrud sunt laborum tempor mollit adipisicing anim ut aliquip mollit. Nulla pariatur ex qui consequat ipsum exercitation culpa incididunt.</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
        <Grid.Column mobile={14} tablet={14} computer={4}>
          <Grid textAlign='left'>
            <Grid.Row>
              <Grid.Column mobile={2} tablet={1} computer={2}>
                <Header as="h3">
                  <i className="far fa-ruler-combined"></i>
                </Header>
              </Grid.Column>
              <Grid.Column mobile={14} tablet={15} computer={14}>
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
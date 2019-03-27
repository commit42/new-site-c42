import React from 'react';
import { Grid, Icon, Header, Card } from 'semantic-ui-react'
import Fade from 'react-reveal/Fade';

const Testimonials = () => {
  return (
    <Grid style={{ paddingTop: '5%', paddingBottom: '5%', backgroundColor: '#F9F9F9' }}>
      <Grid.Row textAlign='center'>
        <Grid.Column>
          <Fade bottom>
          <Header as="h2">Ce que nos clients en pensent</Header>
          </Fade>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row textAlign='center' style={{ marginTop: '5rem' }}>
        <Grid.Column>
          <Card.Group centered>
          <Fade bottom>
            <Card>
              <Card.Content>
                <div>
                  <Icon name="star" color='yellow' />
                  <Icon name="star" color='yellow' />
                  <Icon name="star" color='yellow' />
                  <Icon name="star" color='yellow' />
                  <Icon name="star" />
                </div>
                <Card.Description textAlign="left" style={{ marginTop: '1rem' }}>Consectetur ullamco aliqua Lorem sit sit voluptate consectetur commodo officia. Eu incididunt proident dolore aliqua sint sint cupidatat ipsum sunt in magna. Quis incididunt fugiat labore in occaecat ullamco aliqua non ipsum incididunt ipsum.</Card.Description>
                <Card.Header style={{ marginTop: '1rem' }}>Matthew Harris</Card.Header>
              </Card.Content>
            </Card>
            </Fade>
            <Fade bottom>
            <Card>
              <Card.Content>
                <div>
                  <Icon name="star" color='yellow' />
                  <Icon name="star" color='yellow' />
                  <Icon name="star" color='yellow' />
                  <Icon name="star" color='yellow' />
                  <Icon name="star" />
                </div>
                <Card.Description textAlign="left" style={{ marginTop: '1rem' }}>Consectetur ullamco aliqua Lorem sit sit voluptate consectetur commodo officia. Eu incididunt proident dolore aliqua sint sint cupidatat ipsum sunt in magna. Quis incididunt fugiat labore in occaecat ullamco aliqua non ipsum incididunt ipsum.</Card.Description>
                <Card.Header style={{ marginTop: '1rem' }}>Matthew Harris</Card.Header>
              </Card.Content>
            </Card>
            </Fade>
            <Fade bottom>
            <Card>
              <Card.Content>
                <div>
                  <Icon name="star" color='yellow' />
                  <Icon name="star" color='yellow' />
                  <Icon name="star" color='yellow' />
                  <Icon name="star" color='yellow' />
                  <Icon name="star" />
                </div>
                <Card.Description textAlign="left" style={{ marginTop: '1rem' }}>Consectetur ullamco aliqua Lorem sit sit voluptate consectetur commodo officia. Eu incididunt proident dolore aliqua sint sint cupidatat ipsum sunt in magna. Quis incididunt fugiat labore in occaecat ullamco aliqua non ipsum incididunt ipsum.</Card.Description>
                <Card.Header style={{ marginTop: '1rem' }}>Matthew Harris</Card.Header>
              </Card.Content>
            </Card>
            </Fade>
          </Card.Group>
          <Header as="h4" style={{ marginTop: '3rem' }}>Voir tous les avis <Icon name="long arrow alternate right" /></Header>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Testimonials;
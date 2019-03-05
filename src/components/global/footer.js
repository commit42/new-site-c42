import React from 'react';
import { Grid, Container, Segment, Header, Icon } from 'semantic-ui-react';

const Footer = () => {
  return (
    <Segment inverted style={{ backgroundColor:'#424242',borderRadius:'0'}}>
      <Container >
        <Grid textAlign="center" inverted>
          <Grid.Row centered style={{marginTop:'2rem',marginBottom:'2rem'}}>
            <Grid.Column mobile={16} tablet={8} computer={4}>
              <Header inverted>Studio d'innovation web</Header>
              <div>
                <p><Icon name="marker" />35 boulevard des Récollets, 31400 Toulouse</p>
                <p><Icon name="phone" />05 82 95 90 12</p>
                <p><Icon name="mail" />contact@commit42.fr</p>
              </div>
            </Grid.Column>
            <Grid.Column only='tablet' tablet={8} computer={4}>
              <h3>Web App PWA</h3>
              <h3>E-commerce</h3>
              <h3>Applications dédiées</h3>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row textAlign="center">
            <Grid.Column mobile={16} tablet={16} computer={16}>
              {`Tous droits réservés commit42 © ${new Date().getFullYear()} | Mentions légales`}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
}


export default Footer;
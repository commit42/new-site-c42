import React from 'react';
import Link from 'gatsby'
import { Grid, Container, Segment, Header, Icon, Image, List } from 'semantic-ui-react';
import Logo from '../../../static/assets/logo-noir-baseline-200.png'

const Footer = () => {
  return (

    <Grid as={Container} columns={2} divided style={{marginTop:'3rem'}}>
      <Grid.Row>
        <Grid.Column>
          <Image src={Logo} />
          <List size="big">
            <List.Item>
              <List.Icon name='marker map alternate' />
              <List.Content>
                <a href='#'>35B Boulevard des Recollets, 31400 Toulouse</a>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='phone' />
              <List.Content>
                <a href='tel:0582959012'>05 82 95 90 12</a>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='envelope' />
              <List.Content>
                <a href='mailto:contact@commit42.fr'>contact@commit42.fr</a>
              </List.Content>
            </List.Item>
          </List>
        </Grid.Column>
        <Grid.Column textAlign="center" style={{marginTop:'3rem'}}>
          <Grid>
            <Grid.Row >
              <Grid.Column computer={8} >
                <Header as="h4">PWA</Header>
                <Header as="h4">E-commerce</Header>
              </Grid.Column>
              <Grid.Column computer={8}>
                <Header as="h4">Blog</Header>
                <Header as="h4">La société</Header>
              </Grid.Column>
            </Grid.Row>
          </Grid> 
          <div style={{marginTop:'3rem'}}>
            <a><Icon name="facebook" size='big' link /></a>
            <a><Icon name="linkedin" size='big' link /></a>
            <a><Icon name="twitter square" size='big' link /></a>
          </div>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row textAlign="center" style={{marginTop:'3rem'}}>
        <Grid.Column mobile={16} tablet={16} computer={16}>
          {`Tous droits réservés commit42 © ${new Date().getFullYear()}`}
        </Grid.Column>
      </Grid.Row>
    </Grid>

  );
}


export default Footer;
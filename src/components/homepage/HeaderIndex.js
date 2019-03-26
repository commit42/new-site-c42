import React from 'react';
import './headerIndex.scss';
import { Image, Container, Grid, Header } from 'semantic-ui-react'

const HeaderIndex = () => {
  return (
    <Grid>
      <Grid.Row columns={2}>
        <Grid.Column only='large screen computer'>
          <Image fluid style={{ maxHeight: '100vh' }} src="https://via.placeholder.com/800x1000" />
        </Grid.Column>
        <Grid.Column as={Container} text verticalAlign='middle'>
          <Header as="h1">Studio d'innovation web</Header>
          <p>Mollit nostrud tempor eiusmod duis in. Magna aliquip et reprehenderit sunt eu ad. Do cillum non sunt eu mollit anim magna pariatur amet velit.</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default HeaderIndex;
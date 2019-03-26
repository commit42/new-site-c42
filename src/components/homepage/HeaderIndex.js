import React from 'react';
import { Image, Container, Grid, Header } from 'semantic-ui-react'

const HeaderIndex = () => {
  return (
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
  );
}

export default HeaderIndex;
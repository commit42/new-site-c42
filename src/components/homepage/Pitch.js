import React from 'react';
import { Image, Container, Grid, Header } from 'semantic-ui-react'


const Pitch = () => {
  return (
    <Grid>
      <Grid.Row style={{ paddingTop: '5%', paddingBottom: '5%', backgroundColor: '#424242' }}>
        <Grid.Column>
          <Container text>
            <Header as="h3" inverted>Made in toulouse</Header>
            <p style={{color:"white", marginBottom:"5rem"}}>Et cupidatat deserunt proident nisi do pariatur nisi pariatur aute excepteur magna. Mollit ut dolore sunt tempor. Non elit minim elit elit ex irure minim id nostrud. Aliquip ex fugiat nostrud duis consectetur do ad labore eiusmod nostrud enim. Et incididunt occaecat velit Lorem irure enim. Eiusmod nostrud consequat esse aliqua labore do laboris.</p>
            <Image src="https://via.placeholder.com/800x300" />
          </Container>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row style={{ paddingTop: '5%', paddingBottom: '5%', backgroundColor: '#F9F9F9' }}>
        <Grid.Column>
          <Container text>
            <Header as="h3">A la pointe</Header>
            <p style={{marginBottom:"5rem"}}>Et cupidatat deserunt proident nisi do pariatur nisi pariatur aute excepteur magna. Mollit ut dolore sunt tempor. Non elit minim elit elit ex irure minim id nostrud. Aliquip ex fugiat nostrud duis consectetur do ad labore eiusmod nostrud enim. Et incididunt occaecat velit Lorem irure enim. Eiusmod nostrud consequat esse aliqua labore do laboris.</p>
            <Image src="https://via.placeholder.com/800x300" />
          </Container>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row style={{ paddingTop: '5%', paddingBottom: '5%', backgroundColor: '#424242' }}>
        <Grid.Column>
          <Container text>
            <Header as="h3" inverted>Flexibilité</Header>
            <p style={{color:"white", marginBottom:"5rem"}}>Et cupidatat deserunt proident nisi do pariatur nisi pariatur aute excepteur magna. Mollit ut dolore sunt tempor. Non elit minim elit elit ex irure minim id nostrud. Aliquip ex fugiat nostrud duis consectetur do ad labore eiusmod nostrud enim. Et incididunt occaecat velit Lorem irure enim. Eiusmod nostrud consequat esse aliqua labore do laboris.</p>
            <Image src="https://via.placeholder.com/800x300" />
          </Container>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Pitch;
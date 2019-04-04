import React from 'react';
import { Message, Container, Button, Grid, Icon } from 'semantic-ui-react'

const CallToAction = () => {
  return (
    <Grid >
      <Grid.Row style={{ backgroundColor: '#F9F9F9' }} only='large screen widescreen'>
        <Grid.Column>
          <Container style={{ marginBottom: '5rem' }}>
            <Message size='massive' as={Grid}>
              <Grid.Row>
                <Grid.Column width={12} verticalAlign='middle'>
                  <Message.Header>Des questions ? Besoin d'information ?</Message.Header>
                </Grid.Column>
                <Grid.Column width={4}>
                  <Button animated='vertical' primary>
                    <Button.Content visible>Contactez-nous !</Button.Content>
                    <Button.Content hidden>
                      <Icon name='envelope' />
                    </Button.Content>
                  </Button>
                </Grid.Column>
              </Grid.Row>
            </Message>
          </Container>
        </Grid.Column>
      </Grid.Row>
    </Grid>

  );
}

export default CallToAction;
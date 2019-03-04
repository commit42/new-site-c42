import React from 'react';
import { Menu, Icon, Popup, Grid } from 'semantic-ui-react';
import './navigation.scss';

const Navigation = () => {
  return (
    <Menu style={{ backgroundColor: '#424242', justifyContent: 'center' }} borderless inverted size="massive" secondary>
      <Grid>
        <Grid.Column mobile={8} tablet={8} computer={4} >
          <Menu.Item as="a" href="mailto:contact@commit42.fr" className="navlink">
            <Popup
              trigger={<Icon name="mail" size="big" circular inverted></Icon>}
              content='contact@commit42.fr'
              position='bottom center'
              inverted
            />
          </Menu.Item>
        </Grid.Column>

        <Grid.Column mobile={8} tablet={8} computer={4} >
          <Menu.Item className="navlink">
            <Popup
              trigger={<Icon name="phone" size="big" circular inverted></Icon>}
              content='05.82.95.90.12'
              position='bottom center'
              inverted
            />
          </Menu.Item>
        </Grid.Column>

        <Grid.Column mobile={8} tablet={8} computer={4} >
          <Menu.Item as="a" href="https://twitter.com/commit42" target="_blank" className="navlink">
            <Popup
              trigger={<Icon name="twitter" size="big" circular inverted></Icon>}
              content='@commit42'
              position='bottom center'
              inverted
            />
          </Menu.Item>
        </Grid.Column>

        <Grid.Column mobile={8} tablet={8} computer={4} >
          <Menu.Item as="a" href="https://www.linkedin.com/company/commit42" target="_blank" className="navlink">
            <Popup
              trigger={<Icon name="linkedin" size="big" circular inverted></Icon>}
              content='commit42'
              position='bottom center'
              inverted
            />
          </Menu.Item>
        </Grid.Column>
      </Grid>







    </Menu>
  );
}

export default Navigation;
import React from 'react';
import { Menu, Icon, Popup, Responsive, Transition } from 'semantic-ui-react';
import './navigation.scss';

const Navigation = ({ visible }) => {
  return (
    <Menu as={Responsive} inverted borderless className="navigation" style={{ backgroundColor: '#424242', justifyContent: 'center' }}>
      <Transition visible={visible} animation='zoom' duration={500}>
        <Menu.Item as="a" href="mailto:contact@commit42.fr">
          <Popup
            trigger={<Icon name="mail" size="big" circular inverted></Icon>}
            content='contact@commit42.fr'
            position='bottom center'
            inverted
          />
        </Menu.Item>
      </Transition>

      <Transition visible={visible} animation='zoom' duration={700}>
        <Menu.Item as="a" href="tel:+33582959012">
          <Popup
            trigger={<Icon name="phone" size="big" circular inverted></Icon>}
            content='05.82.95.90.12'
            position='bottom center'
            inverted
          />
        </Menu.Item>
      </Transition>
      
      <Transition visible={visible} animation='zoom' duration={900}>
      <Menu.Item as="a" href="https://twitter.com/commit42" target="_blank">
        <Popup
          trigger={<Icon name="twitter" size="big" circular inverted></Icon>}
          content='@commit42'
          position='bottom center'
          inverted
        />
      </Menu.Item>
      </Transition>

      <Transition visible={visible} animation='zoom' duration={1000}>      
      <Menu.Item as="a" href="https://www.linkedin.com/company/commit42" target="_blank">
        <Popup
          trigger={<Icon name="linkedin" size="big" circular inverted></Icon>}
          content='commit42'
          position='bottom center'
          inverted
        />
      </Menu.Item>
      </Transition>
    </Menu>
  );
}

export default Navigation;

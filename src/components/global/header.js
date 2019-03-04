import React from 'react';
import { Menu, Container, Header } from 'semantic-ui-react';
import { Link } from 'gatsby'


const Navigation = () => {
  return (
    <Menu borderless inverted stackable size="massive" style={{backgroundColor: '#424242'}}>
      <Container>
        <Menu.Item position="right" as={Link} to="/blog">
          <Header inverted>Blog</Header>
        </Menu.Item>
      </Container>
    </Menu>
  )
}

export default Navigation;
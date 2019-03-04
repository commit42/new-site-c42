import React from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { Link } from 'gatsby'


const Navigation = () => {
  return (
    <Menu borderless stackable size="massive">
      <Container>
        <Menu.Item position="right" as={Link} to="/blog">
          Blog
        </Menu.Item>
      </Container>
    </Menu>
  )
}

export default Navigation;
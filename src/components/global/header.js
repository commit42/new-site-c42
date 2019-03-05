import React, { Component } from 'react';
import './header.scss'
import { Menu, Container, Image, Button, Icon, Sidebar, Segment, Header } from 'semantic-ui-react';
import { Link } from 'gatsby'
import Logo from '../../../static/assets/logo-c42.png'


const Navigation = () => {

  return (
    <Menu borderless inverted stackable size="massive" style={{ backgroundColor: '#424242', borderRadius: '0' }}>
      <Container>
        <Menu.Item as={Link} to="/">
          <Image src={Logo} style={{ maxWidth: "15%" }} />
        </Menu.Item>
        <Menu.Item position="right" as={Link} to="/blog">
          <Icon name="quote right" inverted></Icon>Blog
          </Menu.Item>
      </Container>
    </Menu>

  )
}

export default Navigation;
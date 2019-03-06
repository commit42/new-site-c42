import React, { Component } from 'react';
import './header.scss'
import { Menu, Container, Image, Icon, Grid, Segment } from 'semantic-ui-react';
import { Link } from 'gatsby'
import Logo from '../../../static/assets/logo-c42.png'


const Header = () => {

  return (
    <Menu borderless inverted size="massive" style={{backgroundColor: '#424242',borderRadius:'0'}}>
      <Grid container>
        <Grid.Column mobile={10} computer={14}>
          <Menu.Item as={Link} to="/">
            <Image src={Logo} style={{ width: "10rem" }} />
          </Menu.Item>
        </Grid.Column>
        <Grid.Column mobile={6} computer={2} verticalAlign='middle'>
          <Menu.Item as={Link} to="/blog">
            <Icon name="quote right" inverted></Icon>Blog
         </Menu.Item>
        </Grid.Column>
      </Grid>
    </Menu>
  )
}

export default Header;
import React, { Component } from 'react';
import './header.scss'
import { Menu, Image, Icon, Grid } from 'semantic-ui-react';
import { Link } from 'gatsby'
import Logo from '../../../static/assets/logo-mini-c42-N&B-sansfond.png'


const Header = (props) => {
  return (
    <Menu borderless inverted size="massive" style={{ backgroundColor: '#424242', borderRadius: '0', height: '103.406px' }}>
      <Grid container>

        <Grid.Column mobile={10} computer={14}>
          {props.path !== "/" && <Menu.Item as={Link} to="/" >
            <Image src={Logo} style={{ maxWidth: "5rem" }} />
          </Menu.Item>}

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
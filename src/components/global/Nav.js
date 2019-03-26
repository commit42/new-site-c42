import React from 'react';
import './nav.scss'
import { Menu, Image, Grid } from 'semantic-ui-react';
import { Link } from 'gatsby'
import Logo from '../../../static/assets/logo-noir-sansfond.png'


const Nav = (props) => {
  return (
    <Menu fixed='top' borderless inverted size="massive" style={{ backgroundColor: 'transparent', borderRadius: '0', margin:'0' }}>
      <Grid container>
        <Grid.Column mobile={10} computer={14}>
          <Menu.Item as={Link} to="/" >
            <Image src={Logo}/>
          </Menu.Item>
        </Grid.Column>
        <Grid.Column mobile={6} computer={2} verticalAlign='middle'>
          <Menu.Item as={Link} to="/blog">
            <h2 style={{fontFamily:'Poppins', color:'black'}}>Blog</h2>
          </Menu.Item>
        </Grid.Column>
      </Grid>
    </Menu>
  )
}



export default Nav;
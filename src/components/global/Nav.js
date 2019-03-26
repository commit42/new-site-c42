import React from 'react';
import { Menu, Image, Grid, Container } from 'semantic-ui-react';
import { Link } from 'gatsby'
import Logo from '../../../static/assets/logo-noir-sansfond.png'


const Nav = (props) => {
  return (
    <Menu fixed='top' borderless inverted size="massive" style={{ backgroundColor: 'transparent', borderRadius: '0', margin: '0' }}>
     <Container>
      <Menu.Item as={Link} to="/" >
            <Image src={Logo}/>
          </Menu.Item>
      <Menu.Item as={Link} to="/blog" position="right">
        <h2 style={{ fontFamily: 'Poppins', color: 'black' }}>Blog</h2>
      </Menu.Item>
      </Container>

      {/* <Grid container>
        <Grid.Column mobile={10} computer={14}>
          <Menu.Item as={Link} to="/" >
            <Image src={Logo}/>
          </Menu.Item>
        </Grid.Column>
        <Grid.Column mobile={6} computer={2} verticalAlign='middle'>
          <Menu.Item as={Link} to="/blog">
            <h2 style={{fontFamily:'Poppins', color:'black'}}>Blog</h2>
          </Menu.Item>
          <Menu.Item as={Link} to="/blog">
            <h2 style={{fontFamily:'Poppins', color:'black'}}>Blog</h2>
          </Menu.Item>
        </Grid.Column>
      </Grid> */}
    </Menu>
  )
}



export default Nav;
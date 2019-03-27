import React from 'react';
import { Menu, Image, Container } from 'semantic-ui-react';
import { Link } from 'gatsby'
import Headroom from 'react-headroom';
import Logo from '../../../static/assets/logo-noir-sansfond.png'


const Nav = (props) => {
  return (
    <Headroom>
    <Menu  borderless inverted size="massive" style={{ backgroundColor: 'white', borderRadius: '0', margin: '0' }}>
     <Container>
      <Menu.Item as={Link} to="/" >
            <Image src={Logo}/>
          </Menu.Item>
      <Menu.Item as={Link} to="/blog" position="right">
        <h2 style={{ fontFamily: 'Poppins', color: 'black' }}>Blog</h2>
      </Menu.Item>
      </Container>
    </Menu>
    </Headroom>
  )
}



export default Nav;
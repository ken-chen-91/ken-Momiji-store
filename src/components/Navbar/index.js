import React from 'react'
import { Bars, Img, Nav, NavIcon, NavLink } from './NavbarElements'
import Logo from '../../images/Momiji_Logo.png'

const Navbar = ({toggle}) => { 
  return (
    <>
      <Nav >
        <NavLink to='/'><Img src={Logo} /></NavLink>
        <NavIcon onClick={toggle}>
          <p>Menu</p> 
          <Bars />
        </NavIcon>
      </Nav>
    </>
  )
}

export default Navbar

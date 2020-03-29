import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavContainer, Nav, NavList, ListItem } from './Navbar.styles'

const Navbar = (props) => {
  return (
    <NavContainer>
      <Nav>
        <NavList>
          <ListItem>
            <NavLink to='/launches' activeClassName='active'>Launches</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to='/landing-pads' activeClassName='active'>Landing pads</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to='/landing-pads' activeClassName='active'>Landing pads</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to='/landing-pads' activeClassName='active'>Landing pads</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to='/landing-pads' activeClassName='active'>Landing pads</NavLink>
          </ListItem>
        </NavList>
      </Nav>
    </NavContainer>
  )
}

export default Navbar
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cart from './Cart/Cart';
import { NavLink } from 'react-router-dom';



function NavBar() {
  const aboutClickHandler = ()=>{

  }
  return (
    <Navbar bg="dark" variant="dark" className=' fixed-top'>
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto d-flex align-item-center justify-content-center">
            <NavLink className='m-3 text-light text-decoration-none' to="/">Home</NavLink>
            <NavLink className='m-3 text-light text-decoration-none'  to="/store">Store</NavLink>
            <NavLink className='m-3 text-light text-decoration-none' onClick={aboutClickHandler} to="/about">About</NavLink>

          </Nav>
          <Cart />
        </Container>
      </Navbar>
  )
}

export default NavBar
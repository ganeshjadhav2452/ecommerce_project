import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Cart from "./Cart/Cart";
import { NavLink } from "react-router-dom";

function NavBar() {
  const aboutClickHandler = () => {};
  return (
    <Navbar bg="dark" variant="dark" className=" fixed-top">
      <Container>
        <Navbar.Brand to="/">Navbar</Navbar.Brand>
        <Nav className="me-auto d-flex align-item-center justify-content-center">
          <NavLink
            activeClassName="fw-bold bg-info rounded-3 p-1"
            className="m-3 text-light text-decoration-none"
            to="/"
            exact
          >
            Home
          </NavLink>
          <NavLink
         
            activeClassName="fw-bold bg-info rounded-3 p-1"
            className="m-3 text-light text-decoration-none"
            to="/store"
          >
            Store
          </NavLink>
          <NavLink
            activeClassName="fw-bold bg-info rounded-3 p-1"
            className="m-3 text-light text-decoration-none"
           
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            activeClassName="fw-bold bg-info rounded-3 p-1"
            className="m-3 text-light text-decoration-none"
           
            to="/contactus"
          >
            Contact Us
          </NavLink>
        </Nav>
        <Cart />
      </Container>
    </Navbar>
  );
}

export default NavBar;

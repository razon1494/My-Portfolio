import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Navbar.css';


const NavBar=() => {

    return (
  <div className=" navigation">
  <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Arifur Rahman</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mx-auto">
      <Nav.Link href="#navigation">Home</Nav.Link>
      <Nav.Link href="#aboutme">About Me</Nav.Link>
      <Nav.Link href="#resume">Resume</Nav.Link>
      <Nav.Link href="#portfolio">Portfolio</Nav.Link>
      <Nav.Link href="#testimonial">Testimonial</Nav.Link>
      <Nav.Link href="#contactme">Contact Me</Nav.Link>

    </Nav>
    <Nav>
     <Nav.Link href="Arifur-Rahman-Resume.pdf" download> <button className='btn btn-secondary'>Resume</button> </Nav.Link>

    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default NavBar;
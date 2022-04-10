import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const NavBar = () => {

    return (
        <div className="">
            <Navbar className='navigation-bar' collapseOnSelect expand="lg">
  <Container>
            <Navbar.Brand>
              <NavLink to='/home' className='navbar-title'>
                <h2 className='nav-head'>Arifur Rahman</h2>
                </NavLink>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav " />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    </Nav>
    <Nav className='mx-auto'>
      <NavLink className='nav-items fs-6 px-3  py-2 fw-bold text-white' to='/home'>Home</NavLink>
      <NavLink className='nav-items fs-6 px-3  py-2 fw-bold text-white' to="/aboutmedetails">About me</NavLink>
      <NavLink className='nav-items fs-6 px-3  py-2 fw-bold text-white' to="/blogs">My Blogs</NavLink>
      <NavLink className='nav-items fs-6 px-3  py-2 fw-bold text-white' to="/">Contact Me</NavLink>
              </Nav><Nav.Link href="Arifur-Rahman-Resume.pdf" download> <button className='button-80 px-3 py-2'>Resume</button> </Nav.Link>
  </Navbar.Collapse>
  </Container>
</Navbar>

        </div>
    );
};

export default NavBar;
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const TopBar = () => {
    return (
        
        <>
      <Navbar variant="light" fixed='top'>
        <Container>
          <Nav className="ms-auto">
            <Nav.Link className='link ms-5' href="/">Home</Nav.Link>
            <Nav.Link className='link ms-5' href="#features">About</Nav.Link>
            <Nav.Link className='link ms-5' href="#pricing">Services</Nav.Link>
            <Nav.Link className='link ms-5 text-white' href="#pricing">Reviews</Nav.Link>
            <Nav.Link className='link ms-5 text-white' href="#pricing">Blog</Nav.Link>
            <Nav.Link className='link ms-5 text-white' href="#pricing">Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </>
        
    );
};

export default TopBar;
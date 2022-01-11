import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  const addStyle = {
    marginRight:"20px",
    textDecoration:"none",
    color:"white",
    fontSize:"15px"
  }
    return (
        <div className='mb-4 ' >
        <Navbar bg="info" >
    <Container>
    
    <Nav className="m-auto p-5" >
      <Link style ={addStyle}  variant="dark" to ="/">Home</Link>
      <Link style ={addStyle} to="/about">About Us</Link>
      <Link style ={addStyle} to ="/services">Our Services</Link>
      <Link style ={addStyle} to ="/blogs">Blogs</Link>
    </Nav>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'



export const TopNavigation = () => {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link  as={Link} to="/products">Products</Nav.Link>
            <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

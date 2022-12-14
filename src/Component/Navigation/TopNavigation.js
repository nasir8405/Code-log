import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export const TopNavigation = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/products">
            Products
          </Nav.Link>
          <Nav.Link as={Link} to="/accordian">
            Accordian
          </Nav.Link>
          <Nav.Link as={Link} to="/accordianDrag">
            AccordianDrag
          </Nav.Link>
          <Nav.Link as={Link} to="/counter">
            Counter
          </Nav.Link>
          <Nav.Link as={Link} to="/tabular">
            Tabular
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

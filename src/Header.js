import './App.css';
import React from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar expand="lg" className="App-header">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#home">Events</Nav.Link>
            <Nav.Link href="#home">My books</Nav.Link>
            <Nav.Link href="#link">Single book</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;

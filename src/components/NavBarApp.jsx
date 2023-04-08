import { User } from "@phosphor-icons/react";
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const NavBarApp = () => {
  return (
    <Navbar expand="lg" bg="primary" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#home">Groc</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="More" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Projects</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Recent Projects
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Templates</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav style={{ alignItems: "center" }}>
            <Nav.Link href="#deets">Settings</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <User size={32} weight="bold" color="#fff" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarApp;

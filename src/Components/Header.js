import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { Link } from "react-router-dom";
import logo from "../logo.png";

export const Header = () => {
    return (
        <Container>
            <Navbar collapseOnSelect expand="md">
                <Navbar.Brand href="/">
                    <img
                        src={logo}
                        height="30"
                        width="30"
                        className="d-inlineblock align-top"
                        alt="Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <NavbarCollapse id="responsive-navbar-nav">
                    <Nav className="mr-auto bg-transparent">
                        <Nav.Link to="/" as={Link}>
                            Home
                        </Nav.Link>
                        <Nav.Link to="/salon" as={Link}>
                            Salon
                        </Nav.Link>
                        <Nav.Link to="/service" as={Link}>
                            Service
                        </Nav.Link>
                        <Nav.Link to="/about" as={Link}>
                            Über uns
                        </Nav.Link>
                        <Nav.Link to="/contacts" as={Link}>
                            Kontakt
                        </Nav.Link>
                    </Nav>
                </NavbarCollapse>
            </Navbar>
        </Container>
    );
};

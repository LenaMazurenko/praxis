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
                        <Nav.Link>
                            <Link to="/">Home</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/salon">Salon</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/service">Service</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/about">Über uns</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/contacts">Kontakt</Link>
                        </Nav.Link>
                    </Nav>
                </NavbarCollapse>
            </Navbar>
        </Container>
    );
};

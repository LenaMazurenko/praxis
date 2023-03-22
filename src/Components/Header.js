import React, { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import logo from "./logo192.png";

export default class Header extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
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
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/">Salon</Nav.Link>
                            <Nav.Link href="/">Leistungen</Nav.Link>
                            <Nav.Link href="/">Über uns</Nav.Link>
                            <Nav.Link href="/">Kontakt</Nav.Link>
                        </Nav>
                    </NavbarCollapse>
                </Container>
            </Navbar>
        );
    }
}

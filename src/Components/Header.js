import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import logo from "./logo192.png";

export const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="md">
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
                        <Nav className="mr-auto bg-transparent">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/salon">Salon</Nav.Link>
                            <Nav.Link href="/service">Leistungen</Nav.Link>
                            <Nav.Link href="/about">Über uns</Nav.Link>
                            <Nav.Link href="/contacts">Kontakt</Nav.Link>
                        </Nav>
                    </NavbarCollapse>
                </Container>
            </Navbar>
        </>
    );
};

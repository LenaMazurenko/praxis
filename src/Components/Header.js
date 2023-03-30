import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import logo from "../logo.png";

export const Header = () => {
    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            bg="dark"
            variant="dark"
            fixed="top"
        >
            <Container>
                <Navbar.Brand href="/">
                    <img
                        src={logo}
                        width="30"
                        height="30"
                        class="d-inline-block align-top"
                        alt=""
                    />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link
                            href="/"
                            className="d-flex justify-content-center"
                        >
                            HOME
                        </Nav.Link>
                        <Nav.Link
                            href="/salon"
                            className="d-flex justify-content-center"
                        >
                            SALON
                        </Nav.Link>
                        <Nav.Link
                            href="/service"
                            className="d-flex justify-content-center"
                        >
                            SERVICE
                        </Nav.Link>
                        <Nav.Link
                            href="/about"
                            className="d-flex justify-content-center"
                        >
                            ÜBER UNS
                        </Nav.Link>
                        <Nav.Link
                            href="/contacts"
                            className="d-flex justify-content-center"
                        >
                            KONTAKT
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

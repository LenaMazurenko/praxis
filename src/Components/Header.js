import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
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
                            to="/"
                            as={Link}
                            className="d-flex justify-content-center"
                        >
                            HOME
                        </Nav.Link>
                        <Nav.Link
                            to="/salon"
                            as={Link}
                            className="d-flex justify-content-center"
                        >
                            SALON
                        </Nav.Link>
                        <Nav.Link
                            to="/service"
                            as={Link}
                            className="d-flex justify-content-center"
                        >
                            SERVICE
                        </Nav.Link>
                        <Nav.Link
                            to="/about"
                            as={Link}
                            className="d-flex justify-content-center"
                        >
                            ÜBER UNS
                        </Nav.Link>
                        <Nav.Link
                            to="/contacts"
                            as={Link}
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

import React, { useState } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";

export const Header = () => {
    const [expanded, setExpanded] = useState(false);
    return (
        <Navbar
            expanded={expanded}
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
                        width="auto"
                        height="50"
                        class="d-inline-block align-top"
                        alt=""
                    />
                </Navbar.Brand>

                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    onClick={() => setExpanded(expanded ? false : "expanded")}
                />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto" onClick={() => setExpanded(false)}>
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

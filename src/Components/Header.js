import React, { useState } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../Images/logo2.png";
import s from "../Pages/home.module.css";

export const Header = () => {
    const [expanded, setExpanded] = useState(false);
    return (
        <>
            <Navbar
                expanded={expanded}
                collapseOnSelect
                expand="lg"
                bg="light"
                fixed="top"
            >
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            class="d-flex align-top"
                            alt="Brand"
                            className={s.logoHeader}
                        />
                    </Navbar.Brand>

                    <Navbar.Toggle
                        aria-controls="responsive-navbar-nav"
                        onClick={() =>
                            setExpanded(expanded ? false : "expanded")
                        }
                    />

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav
                            className="ms-auto"
                            onClick={() => setExpanded(false)}
                        >
                            <Nav.Link
                                to="/"
                                as={Link}
                                className="d-flex justify-content-center"
                            >
                                HOME
                            </Nav.Link>

                            <Nav.Link
                                to="/praxis"
                                as={Link}
                                className="d-flex justify-content-center"
                            >
                                PRAXIS
                            </Nav.Link>
                            <Nav.Link
                                to="/service"
                                as={Link}
                                className="d-flex justify-content-center"
                            >
                                LEISTUNGEN
                            </Nav.Link>
                            <Nav.Link
                                to="/price"
                                as={Link}
                                className="d-flex justify-content-center"
                            >
                                PREISLISTE
                            </Nav.Link>
                            <Nav.Link
                                to="/about"
                                as={Link}
                                className="d-flex justify-content-center"
                            >
                                ÜBER MICH
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
            <div className={s.horisontalLinie}></div>
        </>
    );
};

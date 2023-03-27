import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { Link } from "react-router-dom";
//import logo from "../logo.png";
import s from "./header.module.css";

export const Header = () => {
    return (
        <Container>
            <Navbar
                collapseOnSelect
                expand="md"
                bg="light"
                fixed="top"
                className="opacity-75 border-bottom"
            >
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <NavbarCollapse id="responsive-navbar-nav ">
                    <Nav className=" ms-auto pe-5 bg-transparent">
                        <Nav.Link to="/" as={Link} className={s.textStyle}>
                            Home
                        </Nav.Link>
                        <Nav.Link to="/salon" as={Link} className={s.textStyle}>
                            Salon
                        </Nav.Link>
                        <Nav.Link
                            to="/service"
                            as={Link}
                            className={s.textStyle}
                        >
                            Service
                        </Nav.Link>
                        <Nav.Link to="/about" as={Link} className={s.textStyle}>
                            Über uns
                        </Nav.Link>
                        <Nav.Link
                            to="/contacts"
                            as={Link}
                            className={s.textStyle}
                        >
                            Kontakt
                        </Nav.Link>
                    </Nav>
                </NavbarCollapse>
            </Navbar>
        </Container>
    );
};

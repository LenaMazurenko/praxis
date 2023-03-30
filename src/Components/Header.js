import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { Link } from "react-router-dom";
import logo from "../logo.png";

export const Header = () => {
    return (
        <Container>
            <Navbar
                collapseOnSelect
                expand="md"
                fixed="top"
                style={{
                    backgroundColor: " gray",
                    paddingRight: " 10px",
                    paddingLeft: "10px",
                }}
            >
                <a className="navbar-brand" href="/">
                    <img
                        src={logo}
                        width="30"
                        height="30"
                        class="d-inline-block align-top"
                        alt=""
                    />
                    BeutyStudia
                </a>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <NavbarCollapse id="responsive-navbar-nav ">
                    <Nav
                        className=" ms-auto pe-5"
                        style={{ fontWeight: "bold" }}
                    >
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

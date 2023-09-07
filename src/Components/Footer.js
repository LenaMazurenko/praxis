import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <Navbar bg="light">
            <Container>
                <Navbar.Text>&copy; 2023</Navbar.Text>

                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link to="/impressum" as={Link}>
                            Impressum
                        </Nav.Link>
                        <Nav.Link to="/datenschutz" as={Link}>
                            Datenschutz
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

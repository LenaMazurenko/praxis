import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export const Footer = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Text>&copy; 2023</Navbar.Text>

                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link href="/impressum">Impressum</Nav.Link>
                        <Nav.Link thref="/">Datenschutz</Nav.Link>
                        <Nav.Link thref="/">AGB</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

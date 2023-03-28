import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <Container fluid style={{ background: "rgba(0, 0, 0, 0.55)" }}>
            <div className="row align-items-center">
                <div className="col-auto me-auto">&copy; 2023</div>
                <Navbar className="col-auto my-auto ">
                    <Nav className=" bg-transparent">
                        <Nav.Link to="/impressum" as={Link}>
                            Impressum
                        </Nav.Link>
                        <Nav.Link to="/" as={Link}>
                            AGB
                        </Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        </Container>
    );
};

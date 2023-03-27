import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import s from "./footer.module.css";

export const Footer = () => {
    return (
        <>
            <div className={s.contactText}>
                <Container>
                    <div className="row align-items-center">
                        <div className="col-auto me-auto">&copy; 2023</div>
                        <Navbar className="col-auto my-auto ">
                            <Nav className=" bg-transparent">
                                <Nav.Link to="/" as={Link}>
                                    Impressum
                                </Nav.Link>
                                <Nav.Link to="/" as={Link}>
                                    AGB
                                </Nav.Link>
                            </Nav>
                        </Navbar>
                    </div>
                </Container>
            </div>
        </>
    );
};

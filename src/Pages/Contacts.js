import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Image, Row, Col } from "react-bootstrap";
import map from "../Images/Map.png";
import s from "./home.module.css";

export const Contacts = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <section className={s.wrapperPage}>
            <Container className={s.conteinerPages}>
                <h1>KONTAKTS</h1>
                <hr />

                <Row>
                    <Col xs={12} xl={6}>
                        <Image src={map} alt="" fluid />
                    </Col>

                    <Col xs={12} xl={6}>
                        <Row xs={1} md={3} xl={2} xxl={2} className="mt-4">
                            <Col>
                                <h3>ADRESSE</h3>
                                <p>Strasse 5</p>
                                <p>38100 Braunschweig</p>
                                <p>Tel: 0531 00 00 00 00</p>
                            </Col>
                            <Col>
                                <h3>ÖFFNUNGSZEITEN</h3>
                                <p>Montag - Freitag</p>
                                <p>09:00 - 18:00</p>
                                <p>Samstags nach Terminvergabe</p>
                            </Col>
                            <Col>
                                <h3>QUICK LINKS</h3>
                                <p>Impressum</p>
                                <p>Datenschutz</p>
                                <p>AGB</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

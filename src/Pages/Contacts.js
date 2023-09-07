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
        <section className={s.wrapperPage2}>
            <Container className={s.conteinerPages}>
                <h1 className={`${s.headersText} ${s.zentredText}`}>
                    Sie finden uns hier
                </h1>
                <hr />

                <Row>
                    <Col xs={12} xl={6}>
                        <Image src={map} alt="" fluid />
                    </Col>

                    <Col xs={12} xl={6}>
                        <Row xs={1} md={2} xl={2} xxl={2} className="mt-4">
                            <Col>
                                <h3 className={s.headersText_withIcon}>
                                    Kontakt
                                </h3>
                                <ul>
                                    <li>Marina Wentland</li>
                                    <li>
                                        Praxis für Naturheilkunde und Ästhetik
                                    </li>
                                    <li>-</li>
                                    <li>Mitgaustraße 18 </li>
                                    <li>38106 Braunschweig Nord</li>
                                    <li>-</li>
                                    <li>
                                        {" "}
                                        <b>Tel.:</b> 0151 275 045 49
                                    </li>
                                    <li>
                                        {" "}
                                        <b>E-Mail:</b> marina@gmail.com
                                    </li>
                                </ul>{" "}
                            </Col>
                            <Col>
                                <h3 className={s.headersText_withIcon}>
                                    Öffnungszeiten
                                </h3>
                                <ul>
                                    <li>Montag - Freitag:</li>
                                    <li>10:00 - 18:00 Uhr</li>
                                    <li>-</li>
                                    <li>Termine nach Vereinbarung</li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

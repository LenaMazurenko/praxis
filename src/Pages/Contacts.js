import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Image, Row, Col } from "react-bootstrap";
import map from "../Images/Map.png";
import Icons from "./sprite.svg";
import s from "./home.module.css";

export const Contacts = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <div className={`${s.wrapperPage} ${s.conteinerPage} ${s.background1}`}>
            <section>
                <Container className={s.conteinerSection}>
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
                                        Adresse
                                    </h3>
                                    <ul>
                                        <li>Marina Wentland</li>
                                        <li>
                                            Praxis für Naturheilkunde und
                                            Ästhetik
                                        </li>
                                        <li>-</li>
                                        <li>Mitgaustraße 18 </li>
                                        <li>38106 Braunschweig Nord</li>
                                    </ul>

                                    <h3 className={s.headersText_withIcon}>
                                        Kontakt
                                    </h3>

                                    <ul>
                                        <li>
                                            <b>Tel.:</b>{" "}
                                            <a
                                                href="tel:+4915127504549"
                                                className={s.textStyleLink}
                                            >
                                                0151 275 045 49
                                            </a>
                                        </li>
                                        <li>
                                            <b>E-Mail: </b>
                                            <a
                                                href="mailto: info@praxis-wentland.de"
                                                className={s.textStyleLink}
                                            >
                                                info@praxis-wentland.de
                                            </a>
                                        </li>
                                        <li>-</li>

                                        <li>
                                            <div className={s.socialLinks}>
                                                <a
                                                    href="https://instagram.com/praxismw?igshid=MzMyNGUyNmU2YQ=="
                                                    className={
                                                        s.socialLinksItem
                                                    }
                                                >
                                                    <svg
                                                        className={
                                                            s.iconInstagram
                                                        }
                                                    >
                                                        <use
                                                            href={
                                                                Icons +
                                                                "#instagram"
                                                            }
                                                        ></use>
                                                    </svg>
                                                </a>

                                                <a
                                                    href="https://api.whatsapp.com/send?phone=+4915127504549"
                                                    className={
                                                        s.socialLinksItem
                                                    }
                                                >
                                                    <svg
                                                        className={
                                                            s.iconWhatsapp
                                                        }
                                                    >
                                                        <use
                                                            href={
                                                                Icons +
                                                                "#whatsapp"
                                                            }
                                                        ></use>
                                                    </svg>
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
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
        </div>
    );
};

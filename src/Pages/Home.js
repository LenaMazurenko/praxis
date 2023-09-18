import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import hero from "../Images/logo3.png";
import salonImg from "../Images/salon.jpg";
import serviceImg from "../Images/service4.jpeg";
import arztImg from "../Images/service3.jpeg";
import Icons from "./sprite.svg";

import s from "./home.module.css";

export const Home = () => {
    const [show, setShow] = useState(false);
    const { pathname } = useLocation();
    useEffect(() => {
        setShow(true);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className={s.wrapperPage}>
            {/* Hero section */}
            <section className={s.heroBg}>
                <Container>
                    <div
                        className={show ? `${s.heroLogoShow}` : `${s.heroLogo}`}
                    >
                        <img
                            className={s.heroLogoImg}
                            src={hero}
                            alt="Praxis"
                        />
                        <div className={s.heroBtn}>
                            <a href="tel:+4915127504549" className={s.btn}>
                                TELEFONISCH TERMIN VEREINBAREN
                            </a>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Losung/About section. */}
            <section className={s.losung}>
                <Container>
                    <p>
                        <b>Ihre Gesundheit und Schönheit zu bewahren</b> <br />
                        sanft, natürlich und ganzheitlich - das ist meine
                        Passion.
                    </p>
                </Container>
            </section>

            {/* Salon & Service & About section*/}
            <section className={s.background1}>
                <Container className={s.conteinerSection}>
                    <Row className="g-0">
                        <Col lg={6} className=" ps-4 pe-4 pt-2 pb-4">
                            <div className={s.textBlockHome}>
                                <h2 className={s.headersText}> Über mich</h2>
                                <hr />
                                <div className={s.textFormat}>
                                    <p>
                                        Herzlich willkommen auf meiner Seite der
                                        Praxis. Mein Name ist Marina Wentland,
                                        ich bin Diplom Physiotherapeutin,
                                        Heilpraktikerin und staatlich anerkannte
                                        Kosmetikerin.
                                    </p>
                                </div>
                                <Link to="/about" className={s.btn}>
                                    ÜBER MICH...
                                </Link>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <img
                                src={arztImg}
                                alt="Arztin"
                                Width="100%"
                                height="auto"
                                className={s.imgShadow}
                            />
                        </Col>
                    </Row>

                    <Row className="g-0">
                        <Col lg={6} className="ps-4 pt-4 pb-4 order-lg-2">
                            <div className={s.textBlockHome}>
                                <h2 className={s.headersText}>Leistungen</h2>
                                <hr />
                                <div className={s.textFormat}>
                                    <p>
                                        Unsere Angebot umfasst eine breite
                                        Palette Therapien für Ihr Wohlbefinden
                                        wie Klassische-und
                                        Sportmassage,Lympfdrainage, Schröpfen,
                                        Kinesio Tape, Wirbelsäulen Therapie.
                                        Vielfältige Optionen für kosmetische und
                                        ästhetische Behandlungen:
                                        Microdermabrasion,Aqua-Peel,Microneedling,Mesotherapie,
                                        Biorevitalisierung und Unterspritzungen.
                                    </p>
                                </div>

                                <Link to="/service" className={s.btn}>
                                    LEISTUNGEN...
                                </Link>
                            </div>
                        </Col>
                        <Col lg={6} className="order-lg-1">
                            <img
                                src={serviceImg}
                                alt="Service"
                                Width="100%"
                                height="auto"
                                className={s.imgShadow}
                            />
                        </Col>
                    </Row>

                    <Row className="g-0">
                        <Col lg={6} className=" ps-4 pe-4 pt-4 pb-4">
                            <div className={s.textBlockHome}>
                                <h2 className={s.headersText}>Praxis</h2>
                                <hr />
                                <div className={s.textFormat}>
                                    <p>
                                        Moderne, neueingerichtete Praxis im
                                        Neubaugebiet Braunschweig-Nord. Die
                                        Praxis ist sehr gut mit dem Auto aus
                                        allen Richtungen zu erreichen und bitet
                                        ausreichend Parkmöglichkeiten an.
                                    </p>
                                </div>
                                <Link to="/praxis" className={s.btn}>
                                    PRAXIS...
                                </Link>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <img
                                src={salonImg}
                                alt="PraxisC"
                                Width="100%"
                                height="auto"
                                className={s.imgShadow}
                            />
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Adress section*/}
            <section className={s.background3}>
                <Container className={s.conteinerSection}>
                    <Row className="g-0 mr-auto p-4">
                        <Col lg={6}>
                            <h3 className={s.headersText_withIcon}>Kontakt</h3>
                            <ul>
                                <li>Marina Wentland</li>
                                <li>Praxis für Naturheilkunde und Ästhetik</li>
                                <li>-</li>
                                <li>Mitgaustraße 18 </li>
                                <li>38106 Braunschweig Nord</li>
                                <li>-</li>
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
                                            className={s.socialLinksItem}
                                        >
                                            <svg className={s.iconInstagram}>
                                                <use
                                                    href={Icons + "#instagram"}
                                                ></use>
                                            </svg>
                                        </a>

                                        <a
                                            href="https://api.whatsapp.com/send?phone=+4915127504549"
                                            className={s.socialLinksItem}
                                        >
                                            <svg className={s.iconWhatsapp}>
                                                <use
                                                    href={Icons + "#whatsapp"}
                                                ></use>
                                            </svg>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </Col>
                        <Col lg={6}>
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
                </Container>
            </section>
        </div>
    );
};

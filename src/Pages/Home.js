import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import hero from "../Images/logo3.png";
import salonImg from "../Images/salon.jpg";
import serviceImg from "../Images/service3.jpeg";
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
                        <b>"Ihre Gesundheit und Schönheit zu bewahren</b> <br />
                        sanft, natürlich und ganzheitlich - das ist meine
                        Passion."
                    </p>
                </Container>
            </section>

            {/* Salon & Service section*/}
            <section className={s.background1}>
                <Container className={s.conteinerSection}>
                    <Row className="g-0">
                        <Col lg={6} className=" ps-4 pe-4 pt-4 pb-4">
                            <h2 className={s.headersText}>Praxis</h2>
                            <hr />
                            <p>
                                "Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Ullam omnis eligendi. Lorem
                                ipsum, dolor sit amet consectetur adipisicing
                                elit. Ullam omnis eligendi."
                            </p>
                            <Link to="/praxis" className={s.btn}>
                                ZUM PRAXIS
                            </Link>
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

                    <Row className="g-0">
                        <Col lg={6} className="ps-4 pt-4 pb-4 order-lg-2">
                            <h2 className={s.headersText}>Leistungen</h2>
                            <hr />
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Iure vero dolor adipisci quae
                                cupiditate eaque cum. Impedit doloribus,
                                perferendis exercitationem facere ex quas vitae
                                porro deleniti, odio, aut fugiat esse.
                            </p>

                            <Link to="/service" className={s.btn}>
                                LEISTUNGEN
                            </Link>
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
                </Container>
            </section>

            {/* Adress section*/}
            <section className={s.background3}>
                <Container className={s.conteinerSection}>
                    <div className="row mt-4 pt-4 justify-content-center">
                        <div className="col-sm-4">
                            <h3 className={s.headersText_withIcon2}>Kontakt</h3>
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
                                            href="https://www.instagram.com/"
                                            className={s.socialLinksItem}
                                        >
                                            <svg className={s.iconInstagram}>
                                                <use
                                                    href={Icons + "#instagram"}
                                                ></use>
                                            </svg>
                                        </a>

                                        <a
                                            href="tel:+4915127504549"
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
                        </div>
                        <div className="col-sm-4">
                            <h3 className={s.headersText_withIcon2}>
                                Öffnungszeiten
                            </h3>
                            <ul>
                                <li>Montag - Freitag:</li>
                                <li>10:00 - 18:00 Uhr</li>
                                <li>-</li>
                                <li>Termine nach Vereinbarung</li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
};

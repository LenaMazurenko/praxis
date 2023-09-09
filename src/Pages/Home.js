import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import praxisName from "../Images/logo3.png";
import salonImg from "../Images/salon.jpg";
import serviceImg from "../Images/service3.jpeg";

import s from "./home.module.css";

export const Home = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className={s.home}>
            {/* Hero section */}
            <section className={s.heroBg}>
                <Container>
                    <div className={s.heroLogo}>
                        <img
                            src={praxisName}
                            alt="Praxis Name"
                            Width="100%"
                            height="auto"
                        />
                        <div className={s.heroBtn}>
                            <a
                                href="tel:+4915127504549"
                                className={s.textStyleBtnLink}
                            >
                                TELEFONISCH TERMIN VEREINBAREN
                            </a>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Losung/About section. */}
            <section className={s.losungText}>
                <Container>
                    <p>
                        <b>"Ihre Gesundheit und Schönheit zu bewahren</b> <br />
                        sanft, natürlich und ganzheitlich - das ist meine
                        Passion."
                    </p>
                </Container>
            </section>

            {/* Salon & Service section*/}
            <section className={s.wrapperPage}>
                <Container className="mb-4 pt-4">
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
                            <Link to="/praxis" className={s.textStyleBtnLink}>
                                ZUM PRAXIS
                            </Link>
                        </Col>
                        <Col lg={6}>
                            <img
                                src={salonImg}
                                alt="PraxisC"
                                Width="100%"
                                height="auto"
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

                            <Link to="/service" className={s.textStyleBtnLink}>
                                LEISTUNGEN
                            </Link>
                        </Col>
                        <Col lg={6} className="order-lg-1">
                            <img
                                src={serviceImg}
                                alt="Service"
                                Width="100%"
                                height="auto"
                            />
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Adress section*/}
            <section className={s.sectionContacts}>
                <Container>
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
                                    {" "}
                                    <b>Tel:</b> +49151 275 045 49
                                </li>
                                <li>
                                    {" "}
                                    <b>E-mail: </b> info@praxis-wentland.de
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

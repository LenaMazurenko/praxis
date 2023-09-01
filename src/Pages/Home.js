import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import praxisName from "../Images/Logo-Marina-Wentland_2.png";
import salonImg from "../Images/salon.jpg";
import serviceImg from "../Images/service.jpg";

import s from "./home.module.css";

export const Home = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            {/* Hero section */}
            <section className={s.heroImg}>
                <Container>
                    <div className={s.heroText}>
                        <img
                            src={praxisName}
                            alt="Praxis Name"
                            Width="100%"
                            height="auto"
                        />

                        <a href="tel:12345678" className={s.textStyleBtnLink}>
                            TELEFONISCH TERMIN VEREINBAREN
                        </a>
                    </div>
                </Container>
            </section>

            {/* Losung/About section. */}
            <section className={s.losungText}>
                <Container>
                    <p>
                        "Ihre Gesundheit und Schönheit zu bewahren- sanft,
                        natürlich und ganzheitlich. Das ist meine Passion."
                    </p>
                </Container>
            </section>

            {/* Salon & Service & Adress section*/}
            <section className={s.wrapperPage}>
                <Container className="mb-4 pt-4">
                    <Row className="g-0">
                        <Col lg={6} className=" ps-4 pe-4 pt-4 pb-4">
                            <h2>PRAXIS</h2>
                            <hr />
                            <p>
                                "Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Ullam omnis eligendi. Lorem
                                ipsum, dolor sit amet consectetur adipisicing
                                elit. Ullam omnis eligendi."
                            </p>
                            <Link to="/salon" className={s.textStyleBtnLink}>
                                ZUM PRAXIS
                            </Link>
                        </Col>
                        <Col lg={6}>
                            <img
                                src={salonImg}
                                alt="Salon"
                                Width="100%"
                                height="auto"
                            />
                        </Col>
                    </Row>

                    <Row className="g-0">
                        <Col lg={6} className="ps-4 pt-4 pb-4 order-lg-2">
                            <h2>LEISTUNGEN</h2>
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

                    <hr />
                    <div className="row mt-4 pt-4 justify-content-center">
                        <div className="col-sm-4">
                            <h3>ADRESSE</h3>
                            <p>Strasse 5</p>
                            <p>38100 Braunschweig</p>
                            <p>Tel: 0531 00 00 00 00</p>
                        </div>
                        <div className="col-sm-4">
                            <h3>ÖFFNUNGSZEITEN</h3>
                            <p>Montag - Freitag</p>
                            <p>09:00 - 18:00</p>
                            <p>Samstags nach Terminvergabe</p>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
};

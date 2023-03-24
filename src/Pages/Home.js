import React from "react";
import { Button, Container } from "react-bootstrap";
import { Header } from "../Components/Header";
import salonImg from "../Static/salon.jpg";
import serviceImg from "../Static/service.jpg";

import s from "./home.module.scss";

export const Home = () => {
    return (
        <>
            <div className={s.heroSection}>
                <div className={s.heroImg}>
                    <Container>
                        <Header />
                        <hr className={s.heroLine} />
                        <div className={s.heroText}>
                            <h1> Center Aestetik Medicine und Beauty</h1>
                            <p>Dr. Marina Wentland</p>
                            <button className={s.heroBtn}>
                                TELEFONISCH TERMIN VEREINBAREN
                            </button>
                        </div>
                    </Container>
                </div>
                <div className={s.losungText}>
                    <Container>
                        <p>
                            "Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit.
                        </p>
                        <p>
                            Ab voluptate corrupti totam necessitatibus iste
                            natus, excepturi quasi, nobis vero eum voluptatum!
                            Adipisci quod sequi dicta culpa blanditiis autem,
                            rem excepturi.""
                        </p>
                    </Container>
                </div>
            </div>

            <div className={s.mainFon}>
                <Container>
                    <div className="row pt-4">
                        <div className="col-6">
                            <h2>SALON</h2>
                            <hr />
                            <p>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Ullam omnis eligendi, expedita
                                ab, corrupti totam incidunt nam molestias ame...
                            </p>
                            <Button className={s.heroBtn}>ZUM SALON</Button>
                        </div>

                        <img src={salonImg} alt="" className="col-6" />
                    </div>

                    <div className="row pt-4">
                        <img src={serviceImg} alt="" className="col-6" />
                        <div className="col-6">
                            <h2>SERVICE</h2>
                            <hr />
                            <p>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Ullam omnis eligendi, expedita
                                ab, corrupti totam incidunt nam molestias ame...
                            </p>
                            <Button className={s.heroBtn}>SERVICE</Button>
                        </div>
                    </div>

                    <hr />
                    <div className="row mt-4 pt-4">
                        <div className="col-4">
                            <h3>ADRESSE</h3>
                            <p>Strasse 5</p>
                            <p>38100 Braunschweig</p>
                            <p>Tel: 0531 00 00 00 00</p>
                        </div>
                        <div className="col-4">
                            <h3>ÖFFNUNGSZEITEN</h3>
                            <p>Montag - Freitag</p>
                            <p>09:00 - 18:00</p>
                            <p>Samstags nach Terminvergabe</p>
                        </div>
                        <div className="col-4">
                            <h3>QUICK LINKS</h3>
                            <p>Impressum</p>
                            <p>Datenschutz</p>
                            <p>AGB</p>
                        </div>
                    </div>
                </Container>
            </div>

            <div className={s.contactText}>
                <Container>
                    <p>2023</p>
                </Container>
            </div>
        </>
    );
};

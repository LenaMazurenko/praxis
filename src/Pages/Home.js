import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
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
            <div className={s.heroSection}>
                <div className={s.heroImg}>
                    <Container>
                        <div className={s.heroText}>
                            <h1> Center Aestetik Medicine und Beauty</h1>
                            <p>Dr. Marina Wentland</p>
                            <button className={s.btn}>
                                TELEFONISCH TERMIN VEREINBAREN
                            </button>
                        </div>
                    </Container>
                </div>
                <div className={s.losungText}>
                    <Container>
                        <p>
                            "Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit.Lorem ipsum dolor sit amet consectetur,
                            adipisicing elit."
                        </p>
                    </Container>
                </div>
            </div>

            <div className={s.mainBg}>
                <Container>
                    <div className="row pt-4">
                        <div className="col-6">
                            <h2>SALON</h2>
                            <hr />
                            <p>
                                "Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Ullam omnis eligendi. Lorem
                                ipsum, dolor sit amet consectetur adipisicing
                                elit. Ullam omnis eligendi."
                            </p>

                            <Link to="/salon" className={s.textStyleBtnLink}>
                                ZUM SALON
                            </Link>
                        </div>

                        <img src={salonImg} alt="" className="col-6" />
                    </div>

                    <div className="row pt-4">
                        <img src={serviceImg} alt="Service" className="col-6" />
                        <div className="col-6">
                            <h2>SERVICE</h2>
                            <hr />
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Iure vero dolor adipisci quae
                                cupiditate eaque cum. Impedit doloribus,
                                perferendis exercitationem facere ex quas vitae
                                porro deleniti, odio, aut fugiat esse.
                            </p>

                            <Link to="/service" className={s.textStyleBtnLink}>
                                SERVICE
                            </Link>
                        </div>
                    </div>

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
            </div>
        </>
    );
};

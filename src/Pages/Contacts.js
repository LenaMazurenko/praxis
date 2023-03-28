import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import map from "../Images/Map.png";
import s from "./home.module.css";

export const Contacts = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <div className={s.wrapperPage}>
            <Container className={s.conteinerPages}>
                <h1>KONTAKTS</h1>
                <Container>
                    <img src={map} alt="" />
                </Container>
                <div className="row mt-4 pt-4">
                    <div className="col-md-4">
                        <h3>ADRESSE</h3>
                        <p>Strasse 5</p>
                        <p>38100 Braunschweig</p>
                        <p>Tel: 0531 00 00 00 00</p>
                    </div>
                    <div className="col-md-4">
                        <h3>ÖFFNUNGSZEITEN</h3>
                        <p>Montag - Freitag</p>
                        <p>09:00 - 18:00</p>
                        <p>Samstags nach Terminvergabe</p>
                    </div>
                    <div className="col-md-4">
                        <h3>QUICK LINKS</h3>
                        <p>Impressum</p>
                        <p>Datenschutz</p>
                        <p>AGB</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

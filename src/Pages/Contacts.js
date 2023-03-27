import React from "react";
import { Container } from "react-bootstrap";
import map from "../Images/Map.png";
import s from "./home.module.css";

export const Contacts = () => {
    return (
        <>
            <div className={s.mainFon}>
                <Container className={s.coteinerPages}>
                    <h1>Kontakts</h1>
                    <div className="row mt-4 pt-4">
                        <div>
                            {" "}
                            <img src={map} alt="" />
                        </div>
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
        </>
    );
};

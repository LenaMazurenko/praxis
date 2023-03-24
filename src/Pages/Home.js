import React from "react";
import { Header } from "../Components/Header";
//import { Container } from "react-bootstrap";

import s from "./home.module.scss";

export const Home = () => {
    return (
        <>
            <div className={s.heroSection}>
                <Header />
                <div className={s.heroImg}>
                    <div className={s.heroText}>
                        <h1> Center Aestetik Medicine und Beauty</h1>
                        <p>Dr. Marina Wentland</p>
                        <button>TELEFONOSCH TERMIN VEREINBAREN</button>
                    </div>
                </div>
            </div>
        </>
    );
};

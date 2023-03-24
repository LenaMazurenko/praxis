import React from "react";
import { Container } from "react-bootstrap";
import { Header } from "../Components/Header";
//import { Container } from "react-bootstrap";

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
            </div>
        </>
    );
};

import React from "react";
import { Container } from "react-bootstrap";

import s from "./footer.module.css";

export const Footer = () => {
    return (
        <>
            <div className={s.contactText}>
                <Container>
                    <p>2023</p>
                </Container>
            </div>
        </>
    );
};

import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import s from "./home.module.css";
import arzt from "../Images/3.jpg";
import sertificate1 from "../Images/diploms/Heilpraktikererlaubnis.jpg";
import sertificate2 from "../Images/diploms/BA_Medizinalfachberufe.jpg";
//import sertificate3 from "../Images/diploms/Urkunde_Kosmetikerin.jpg";
//import sertificate4 from "../Images/diploms/Urkunde_Physiotherapie.jpg";

export const About = () => {
    const [currentImg, setCurrentImg] = useState("");
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className={`${s.wrapperPage} ${s.conteinerPage} ${s.background1}`}>
            {/*------Image Preview Block----------- */}
            {currentImg && (
                <div className={`${s.bgGaleryPopup} ${s.bgGaleryPopupActive} `}>
                    <button
                        className={s.btnClose}
                        onClick={() => {
                            setCurrentImg("");
                        }}
                    >
                        X
                    </button>
                    <img
                        src={currentImg}
                        alt="Sertifecate"
                        className={s.imgGaleryPopup}
                    />
                </div>
            )}

            {/*------Section Uber Mich----------- */}
            <section>
                <Container className={s.conteinerSection}>
                    <h1 className={`${s.headersText} ${s.zentredText}`}>
                        Über mich
                    </h1>
                    <hr />

                    <Row className="mt-4">
                        <Col md={6}>
                            <img
                                src={arzt}
                                alt="Arzt"
                                Width="100%"
                                height="auto"
                                className={s.imgShadow}
                            />
                        </Col>
                        <Col md={6}>
                            <div>
                                <p>
                                    Lorem ipsum dolor sit amet{" "}
                                    <button
                                        className={s.btnSertificate}
                                        onClick={() => {
                                            setCurrentImg(sertificate1);
                                        }}
                                    >
                                        Sertificate1*
                                    </button>{" "}
                                    consectetur adipisicing elit. Numquam
                                    aliquam tempore deserunt cumque repudiandae!
                                    Consequatur vero dolor quia dolore cum.
                                    Reiciendis nobis officia eum voluptatibus
                                    magni esse accusantium? Sint, ex!
                                </p>
                                <p>
                                    {" "}
                                    consectetur adipisicing{" "}
                                    <button
                                        className={s.btnSertificate}
                                        onClick={() => {
                                            setCurrentImg(sertificate2);
                                        }}
                                    >
                                        Sertificate1*
                                    </button>{" "}
                                    elit. Numquam aliquam tempore deserunt
                                    cumque repudiandae! Consequatur vero dolor
                                    quia dolore cum. Reiciendis nobis officia
                                    eum voluptatibus magni esse accusantium?
                                    Sint, ex!
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

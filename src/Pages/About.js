import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import s from "./home.module.css";
//import arzt from "../Images/3.jpg";
import sertificate1 from "../Images/diploms/Heilpraktikererlaubnis.jpg";
import sertificate2 from "../Images/diploms/BA_Medizinalfachberufe.jpg";
import sertificate3 from "../Images/diploms/Urkunde_Kosmetikerin.jpg";
import sertificate4 from "../Images/diploms/Urkunde_Physiotherapie.jpg";

//const imagesArray = [sertificate1, sertificate2, sertificate3, sertificate4];

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
                        Herzlich willkommen
                    </h1>
                    <hr />
                    <div className={s.textFormat}>
                        <p>
                            Mein Name ist Marina Wentland. Ich bin Diplom
                            Physiotherapeutin, Heilpraktikerin und staatlich
                            anerkannte Kosmetikerin. Herzlich willkommen auf der
                            Seite meiner Praxis.
                        </p>

                        {/*    <Row className="mt-4">
                         <Col md={6} className="mb-4">
                            <img
                                src={arzt}
                                alt="Arzt"
                                Width="100%"
                                height="auto"
                                loading="lazy"
                                className={s.imgShadow}
                               
                            />
                        </Col>
                   
                        <Col md={6}> 
                            <div> */}
                        <p>
                            Während meiner beruflichen Laufbahn habe ich mehrere
                            Jahre in meinem erlernten Beruf als
                            Physiotherapeutin gearbeitet.
                        </p>
                        <p>
                            {" "}
                            Die Schwerpunkte meiner Arbeit lagen bei
                            Sportphysiotherapie, Rehasport sowie Erkrankungen
                            des Bewegungsapparates. Dabei war und ist meine
                            Priorität, mich ständig weiter zu bilden und mein
                            Wissen auf dem neusten Stand zu halten. So habe ich
                            Weiterbildungen in manuellen Lymphdrainage,
                            Krankengymnastik am Gerät, Wirbelsäulentherapie nach
                            Dorn und Sportphysiotherapie absolviert.
                            Anschließend folgte der Bachelor Studiengang für
                            Medizinalfachberufe an der Diploma Hochschule
                            Nordhessen.
                        </p>
                        <p>
                            {" "}
                            Gesundheitssport, Wellness und Kosmetik waren schon
                            immer ein wichtiger Teil meines Lifestyles. Der Spaß
                            daran hat mich bewegt, weitere Berufsrichtungen zu
                            erlernen. Dabei habe ich die Ausbildung zur
                            staatlich anerkannten Kosmetikerin und zur
                            Heilpraktikerin in Freiburg absolviert. Um meinen
                            Kunden ganzheitliche Beratung zu bieten, folgten
                            zahlreiche Seminare für ästhetische Medizin und
                            Naturheilkunde.
                        </p>
                        <p>
                            In meiner Praxis arbeite ich ausschließlich mit
                            hochwertigen Produkten und lege sehr viel Wert auf
                            ein natürliches Behandlungsergebnis.
                        </p>
                        <p>
                            Ich freue mich Sie persönlich in meiner Praxis zu
                            begrüßen, <br />
                            Eure Marina Wentland
                        </p>
                    </div>
                    {/*}   </div>
                        </Col>
        </Row>
         */}
                    <hr />
                </Container>
            </section>

            {/*------Diplome und Sertificate----------- */}

            <section>
                <Container className={s.conteinerSection}>
                    <h1 className={`${s.headersText} ${s.zentredText}`}>
                        Meine Diplome und Zertifikate
                    </h1>
                    <div className={s.btnGaleryBlock}>
                        <button
                            className={s.btn}
                            onClick={() => {
                                setCurrentImg(sertificate1);
                            }}
                        >
                            Heilpraktikerin
                        </button>
                        <button
                            className={s.btn}
                            onClick={() => {
                                setCurrentImg(sertificate2);
                            }}
                        >
                            Medizinalfachberufe
                        </button>
                        <button
                            className={s.btn}
                            onClick={() => {
                                setCurrentImg(sertificate3);
                            }}
                        >
                            Kosmetikerin
                        </button>
                        <button
                            className={s.btn}
                            onClick={() => {
                                setCurrentImg(sertificate4);
                            }}
                        >
                            Physiotherapie
                        </button>
                    </div>
                </Container>
            </section>
        </div>
    );
};

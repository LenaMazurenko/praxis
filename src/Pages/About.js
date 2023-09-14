import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import s from "./home.module.css";
import arzt from "../Images/3.jpg";
import sertificate1 from "../Images/diploms/Heilpraktikererlaubnis.jpg";
import sertificate2 from "../Images/diploms/BA_Medizinalfachberufe.jpg";
import sertificate3 from "../Images/diploms/Urkunde_Kosmetikerin.jpg";
import sertificate4 from "../Images/diploms/Urkunde Physiotherapie.jpg";

const imagesArray1 = [sertificate1, sertificate2, sertificate3, sertificate4];
const imagesArray2 = [
    sertificate1,
    sertificate2,
    sertificate3,
    sertificate4,
    sertificate1,
    sertificate2,
    sertificate3,
    sertificate4,
];

export const About = () => {
    const [currentImg, setCurrentImg] = useState("");
    const [currenArray, setCurrentArray] = useState(imagesArray1);

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
                    <p>
                        Mein Name ist Marina Wentland, ich bin Diplom
                        Physiotherapeutin, Heilpraktikerin und staatlich
                        anerkannte Kosmetikerin. Herzlich willkommen auf meiner
                        Seite der Praxis.
                    </p>
                    <Row className="mt-4">
                        <Col md={6} className="mb-4">
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
                                    Während meiner beruflichen Laufbahn habe ich
                                    mehrere Jahre in meinem erlernten Beruf als
                                    Physiotherapeutin gearbeitet.
                                </p>
                                <p>
                                    {" "}
                                    Die Schwerpunkte meiner Arbeit lagen bei
                                    Sportphysiotherapie, Rehasport sowie
                                    Erkrankungen des Bewegungsapparates. Dabei
                                    war und ist meine Priorität, mich ständig
                                    weiter zu bilden und mein Wissen auf dem
                                    neusten Stand zu halten. So habe ich
                                    Weiterbildungen in{" "}
                                    <button
                                        className={s.btnSertificate}
                                        onClick={() => {
                                            setCurrentImg(sertificate2);
                                        }}
                                    >
                                        manuellen Lymphdrainage*
                                    </button>{" "}
                                    manuellen Lymphdrainage, Krankengymnastik am
                                    Gerät, Wirbelsäulentherapie nach Dorn und
                                    Sportphysiotherapie{" "}
                                    <button
                                        className={s.btnSertificate}
                                        onClick={() => {
                                            setCurrentImg(sertificate1);
                                        }}
                                    >
                                        Sportphysiotherapie*
                                    </button>{" "}
                                    absolviert. Anschließend folgte der Bachelor
                                    Studiengang für Medizinalfachberufe an der
                                    Diploma Hochschule Nordhessen.
                                </p>
                                <p>
                                    {" "}
                                    Gesundheitssport, Wellness und Kosmetik
                                    waren schon immer ein wichtiger Teil meines
                                    Lifestyles. Der Spaß daran hat mich dazu
                                    bewegt weitere Berufsrichtungen zu erlernen.
                                    Dabei habe ich die Ausbildung zur staatlich
                                    anerkannten Kosmetikerin und zur
                                    Heilpraktikerin in Freiburg absolviert. Um
                                    meinen Kunden ganzheitliche Beratung zu
                                    bieten, folgten zahlreiche Seminare für
                                    ästhetische Medizin und Naturheilkunde.
                                </p>
                                <p>
                                    In meiner Praxis arbeite ich ausschließlich
                                    mit hochwertigen Produkten und lege sehr
                                    viel Wert auf ein natürliches
                                    Behandlungsergebnis.
                                </p>
                                <p>
                                    Ich freue mich Sie persönlich in meiner
                                    Praxis zu begrüßen, <br />
                                    Eure Marina Wentland
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/*------Diplome und Sertificate----------- */}
            <hr />

            <section>
                <Container className={s.conteinerSection}>
                    <h1 className={`${s.headersText} ${s.zentredText}`}>
                        Meine Diplome und Sertifikate
                    </h1>
                    <ResponsiveMasonry
                        columnsCountBreakPoints={{ 350: 1, 768: 2, 992: 3 }}
                    >
                        <Masonry gutter="10px">
                            {currenArray.map((image, i) => (
                                <div
                                    className={s.imgInGaleryBlock}
                                    onClick={() => setCurrentImg(image)}
                                >
                                    <img
                                        key={i}
                                        src={image}
                                        alt="Sertigicate"
                                        className={s.imgSertificate}
                                    />
                                </div>
                            ))}
                        </Masonry>
                    </ResponsiveMasonry>

                    <button
                        className={s.btn}
                        onClick={() => {
                            setCurrentArray(imagesArray2);
                        }}
                    >
                        All Setrifikaten...
                    </button>
                </Container>
            </section>
        </div>
    );
};

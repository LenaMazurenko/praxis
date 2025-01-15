import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import praxis1 from "../Images/praxis1.jpg";
import praxis2 from "../Images/praxis2.jpg";
import praxis3 from "../Images/praxis3.jpg";
import praxis4 from "../Images/praxis4.jpg";
import praxis5 from "../Images/praxis5.jpg";
import praxis6 from "../Images/praxis6.jpg";
import praxis7 from "../Images/praxis7.jpg";
import praxis8 from "../Images/praxis8.jpg";
import praxis9 from "../Images/praxis9.jpg";
import praxis10 from "../Images/praxis10.jpg";
import praxis11 from "../Images/praxis11.jpg";
import praxis12 from "../Images/praxis12.jpg";
import praxis13 from "../Images/praxis13.jpg";
import praxis14 from "../Images/praxis14.jpg";
import service2 from "../Images/service2.jpg";
import service3 from "../Images/service3.jpg";
import service4 from "../Images/service4.jpg";
import service5 from "../Images/service5.jpg";
import service6 from "../Images/service6.jpg";
import service7 from "../Images/service7.jpg";
import service8 from "../Images/service8.jpg";
import service9 from "../Images/service9.jpg";
import service10 from "../Images/service10.jpg";
import service11 from "../Images/service11.jpg";
import service12 from "../Images/service12.jpg";
import service13 from "../Images/service13.jpg";
import service14 from "../Images/service14.jpg";
import service15 from "../Images/service15.jpg";
import service16 from "../Images/service16.jpg";

import s from "./home.module.css";

const images = [
    praxis1,
    praxis2,
    praxis3,
    praxis4,
    praxis5,
    praxis6,
    praxis7,
    praxis8,
    praxis9,
    praxis10,
    praxis11,
    praxis12,
    praxis13,
    praxis14,
    service2,
    service3,
    service4,
    service5,
    service6,
    service7,
    service8,
    service9,
    service10,
    service11,
    service12,
    service13,
    service14,
    service15,
    service16,
];
const imagesPraxis = [
    praxis1,
    praxis2,
    praxis3,
    praxis4,
    praxis5,
    praxis6,
    praxis7,
    praxis8,
    praxis9,
    praxis10,
    praxis11,
    praxis12,
    praxis13,
    praxis14,
];
const imagesService = [
    service2,
    service3,
    service4,
    service5,
    service6,
    service7,
    service8,
    service9,
    service10,
    service11,
    service12,
    service13,
    service14,
    service15,
    service16,
];

export const Praxis = () => {
    const { pathname } = useLocation();
    const [data, setData] = useState({ img: "", i: 0 });
    const [currentArray, setCurrentArray] = useState(images);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const viewImg = (img, i) => {
        console.log(img);
        setData({ img, i });
    };

    const imgAction = (action) => {
        let i = data.i;
        if (action === "next-img") {
            setData({ img: currentArray[i + 1], i: i + 1 });
        }
        if (action === "previous-img") {
            setData({ img: currentArray[i - 1], i: i - 1 });
        }
        if (!action) {
            setData({ img: "", i: 0 });
        }
    };
    return (
        <div className={`${s.wrapperPage} ${s.conteinerPage} ${s.background1}`}>
            {data.img && (
                <div className={s.bgGaleryPopup}>
                    <button className={s.btnClose} onClick={() => imgAction()}>
                        X
                    </button>
                    <button
                        className={`${s.btnClose} ${s.btnLeft} `}
                        onClick={() => imgAction("previous-img")}
                    >
                        &#x2190;
                    </button>
                    <button
                        className={`${s.btnClose} ${s.btnRight} `}
                        onClick={() => imgAction("next-img")}
                    >
                        &#x2192;
                    </button>
                    <img
                        src={data.img}
                        alt="Galery"
                        className={s.imgGaleryPopup}
                    />
                </div>
            )}
            <section>
                <Container className={s.conteinerSection}>
                    <h1 className={`${s.headersText} ${s.zentredText}`}>
                        Praxis
                    </h1>
                    <hr />

                    <Row className="mt-4">
                        <Col md={6}>
                            <div className={s.textFormat}>
                                <p>
                                    Meine moderne und neueingerichtete Praxis
                                    liegt im Neubaugebiet Braunschweig-Nord. Die
                                    Praxis ist sehr gut mit dem Auto aus allen
                                    Richtungen zu erreichen und bietet
                                    ausreichend Parkmöglichkeiten. In
                                    unmittelbare Nähe befindet sich eine
                                    Bushaltestelle der Linie 426.
                                </p>
                            </div>
                        </Col>

                        <Col md={6}>
                            <img
                                src={praxis2}
                                alt="Praxis"
                                Width="100%"
                                height="auto"
                                className={s.imgShadow}
                            />
                        </Col>
                    </Row>
                    <hr />
                </Container>
            </section>

            <section>
                <Container className={s.conteinerSection}>
                    <h3 className={`${s.headersText} ${s.zentredText}`}>
                        Bildergalerie
                    </h3>
                    <div className={s.btnGaleryBlock}>
                        <button
                            className={s.btn}
                            onClick={() => {
                                setCurrentArray(images);
                            }}
                        >
                            ALLE
                        </button>
                        <button
                            className={s.btn}
                            onClick={() => {
                                setCurrentArray(imagesPraxis);
                            }}
                        >
                            PRAXIS
                        </button>
                        <button
                            className={s.btn}
                            onClick={() => {
                                setCurrentArray(imagesService);
                            }}
                        >
                            LEISTUNGEN
                        </button>
                    </div>

                    <ResponsiveMasonry
                        columnsCountBreakPoints={{ 350: 1, 768: 2, 992: 3 }}
                    >
                        <Masonry gutter="10px">
                            {currentArray.map((image, i) => (
                                <div
                                    className={s.imgInGaleryBlock}
                                    onClick={() => {
                                        viewImg(image, i);
                                    }}
                                >
                                    <img
                                        key={i}
                                        src={image}
                                        alt="Galery"
                                        className={s.imgInGalery}
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </Masonry>
                    </ResponsiveMasonry>
                </Container>
            </section>
        </div>
    );
};

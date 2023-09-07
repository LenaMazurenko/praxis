import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import salon from "../Images/salon.jpg";
import salon2 from "../Images/salon2.jpg";
import salon3 from "../Images/salon3.jpg";
import salon4 from "../Images/salon4.jpg";
import salon5 from "../Images/salon5.jpg";
import salon6 from "../Images/salon6.jpg";
import service from "../Images/service.jpg";
import service2 from "../Images/service2.jpeg";
import service3 from "../Images/service3.jpeg";
import service4 from "../Images/service4.jpeg";
import service5 from "../Images/service5.jpeg";
import service6 from "../Images/service6.jpeg";
import service7 from "../Images/service7.jpeg";
import s from "./home.module.css";

const images = [
    salon,
    salon2,
    salon3,
    salon4,
    salon5,
    salon6,
    salon2,
    service,
    service2,
    service3,
    service4,
    service5,
    service6,
    service7,
    salon,
];
const imagesSalon = [salon, salon2, salon3, salon4, salon5, salon6, salon2];
const imagesService = [
    service,
    service2,
    service3,
    service4,
    service5,
    service6,
    service7,
];

export const Praxis = () => {
    const { pathname } = useLocation();
    const [data, setData] = useState({ img: "", i: 0 });
    const [currentArray, setCurrentArray] = useState(images);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const viewImg = (img, i) => {
        setData({ img, i });
    };

    return (
        <>
            {data.img && (
                <div className={s.bgGaleryPopup}>
                    <button
                        className={s.btnClose}
                        onClick={() => {
                            setData({ img: "", i: 0 });
                        }}
                    >
                        X
                    </button>
                    <img
                        src={data.img}
                        alt="Galery"
                        className={s.imgGaleryPopup}
                    />
                </div>
            )}
            <section className={s.wrapperPage}>
                <Container className={s.conteinerPages}>
                    <h1 className={`${s.headersText} ${s.zentredText}`}>
                        Praxis
                    </h1>
                    <hr />

                    <Row className="mt-4">
                        <Col md={6}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Perspiciatis veritatis vitae, pariatur quos
                            iusto dolor minus quaerat magni? Aut exercitationem
                            architecto dolorum velit corporis repellat vitae
                            sapiente esse pariatur dolore.
                        </Col>

                        <Col md={6}>
                            <img
                                src={salon}
                                alt="Salon"
                                Width="100%"
                                height="auto"
                            />
                        </Col>
                    </Row>
                    <hr />
                    <h3 className={`${s.headersText} ${s.zentredText}`}>
                        Bildergalerie
                    </h3>
                    <div className="d-flex justify-content-center mb-2 mt-4">
                        <button
                            className={s.btn}
                            onClick={() => {
                                setCurrentArray(images);
                            }}
                        >
                            Alle
                        </button>
                        <button
                            className={s.btn}
                            onClick={() => {
                                setCurrentArray(imagesSalon);
                            }}
                        >
                            Praxis
                        </button>
                        <button
                            className={s.btn}
                            onClick={() => {
                                setCurrentArray(imagesService);
                            }}
                        >
                            Leistungen
                        </button>
                    </div>
                    <Container>
                        <ResponsiveMasonry
                            columnsCountBreakPoints={{ 350: 1, 768: 2, 992: 3 }}
                        >
                            <Masonry gutter="10px">
                                {currentArray.map((image, i) => (
                                    <div
                                        className={s.imgInGaleryBlock}
                                        onClick={() => viewImg(image, i)}
                                    >
                                        <img
                                            key={i}
                                            src={image}
                                            alt="Galery"
                                            className={s.imgInGalery}
                                        />
                                    </div>
                                ))}
                            </Masonry>
                        </ResponsiveMasonry>
                    </Container>
                </Container>
            </section>
        </>
    );
};

import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import salon from "../Images/salon.jpg";
import salon2 from "../Images/salon2.jpg";
import salon3 from "../Images/salon3.jpg";
import salon4 from "../Images/salon4.jpg";
import salon5 from "../Images/salon5.jpg";
import salon6 from "../Images/salon6.jpg";
import s from "./home.module.css";

const images = [
    salon,
    salon2,
    salon3,
    salon4,
    salon5,
    salon6,
    salon2,
    salon,
    salon,
    salon2,
    salon3,
    salon4,
    salon5,
    salon6,
    salon2,
    salon3,
    salon,
    salon,
];
export const Salon = () => {
    const { pathname } = useLocation();
    const [data, setData] = useState({ img: "", i: 0 });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const viewImg = (img, i) => {
        setData({ img, i });
    };

    return (
        <>
            {data.img && (
                <div
                    style={{
                        width: "100%",
                        height: "100vh",
                        background: "black",
                        position: "fixed",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        overflow: "hidden",
                    }}
                >
                    <button
                        style={{
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                        }}
                        onClick={() => {
                            setData({ img: "", i: 0 });
                        }}
                    >
                        X
                    </button>
                    <img
                        src={data.img}
                        alt=""
                        style={{
                            width: "auto",
                            maxWidth: "90%",
                            maxHeight: "90%",
                        }}
                    />
                </div>
            )}
            <div className={s.wrapperPage}>
                <Container className={s.conteinerPages}>
                    <h1>SALON</h1>
                    <hr />
                    <div className="row">
                        <div className="col-md-6">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Perspiciatis veritatis vitae, pariatur quos
                            iusto dolor minus quaerat magni? Aut exercitationem
                            architecto dolorum velit corporis repellat vitae
                            sapiente esse pariatur dolore.
                        </div>

                        <img src={salon} alt="" className="col-6" />
                    </div>
                    <hr />
                    <h3 className="d-flex justify-content-center">
                        BILDERGALERIE
                    </h3>
                    <div className="d-flex justify-content-center mb-2 mt-4">
                        <button className={s.btn}>ALLE</button>
                        <button className={s.btn}>SALON</button>
                        <button className={s.btn}>SERVICE</button>
                    </div>
                    <Container>
                        <ResponsiveMasonry
                            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                        >
                            <Masonry gutter="20px">
                                {images.map((image, i) => (
                                    <img
                                        key={i}
                                        src={image}
                                        alt=""
                                        style={{
                                            width: "100%",
                                            display: "block",
                                            cursor: "pointer",
                                        }}
                                        onClick={() => viewImg(image, i)}
                                    />
                                ))}
                            </Masonry>
                        </ResponsiveMasonry>
                    </Container>
                </Container>
            </div>
        </>
    );
};

import React from "react";
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
];
export const Salon = () => {
    return (
        <div className={s.wrapperPage}>
            <Container className={s.conteinerPages}>
                <h1>SALON</h1>
                <hr />
                <div className="row">
                    <div className="col-md-6">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Perspiciatis veritatis vitae, pariatur quos iusto
                        dolor minus quaerat magni? Aut exercitationem architecto
                        dolorum velit corporis repellat vitae sapiente esse
                        pariatur dolore.
                    </div>

                    <img src={salon} alt="" className="col-6" />
                </div>
                <hr />
                <h3>BILDERGALERIE</h3>
                <div className="d-flex justify-content-center mb-2">
                    <button className={s.btn}>ALLE</button>
                    <button className={s.btn}>SALON</button>
                    <button className={s.btn}>SERVICE</button>
                </div>

                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                >
                    <Masonry>
                        {images.map((image, i) => (
                            <img
                                key={i}
                                src={image}
                                style={{ width: "100%", display: "block" }}
                                alt=""
                            />
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            </Container>
        </div>
    );
};

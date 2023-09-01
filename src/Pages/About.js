import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import s from "./home.module.css";

export const About = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <section className={s.wrapperPage}>
            <Container className={s.conteinerPages}>
                <h1>ÜBER MICH</h1>
                <hr />
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam aliquam tempore deserunt cumque repudiandae!
                    Consequatur vero dolor quia dolore cum. Reiciendis nobis
                    officia eum voluptatibus magni esse accusantium? Sint, ex!
                </div>

                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam aliquam tempore deserunt cumque repudiandae!
                    Consequatur vero dolor quia dolore cum. Reiciendis nobis
                    officia eum voluptatibus magni esse accusantium? Sint, ex!
                </div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam aliquam tempore deserunt cumque repudiandae!
                    Consequatur vero dolor quia dolore cum. Reiciendis nobis
                    officia eum voluptatibus magni esse accusantium? Sint, ex!
                </div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam aliquam tempore deserunt cumque repudiandae!
                    Consequatur vero dolor quia dolore cum. Reiciendis nobis
                    officia eum voluptatibus magni esse accusantium? Sint, ex!
                </div>
            </Container>
        </section>
    );
};

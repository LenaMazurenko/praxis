import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";

import s from "./home.module.css";

export const Daten = (prop) => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            {prop.teil === "im" && (
                <div className={s.wrapperPage}>
                    <Container className={s.conteinerPages}>
                        <h1>Impressum</h1>
                        <hr />
                        <p>
                            Naturheilpraxis Wentland Straße 1 77777 Braunschweig
                        </p>
                        <p>E-mail: info@studiobeuty.de</p>
                        <p>Tel.: +49 176 238 837 29</p>
                        <p>Inhaltlich verantwortlich gemäß §6 MDstV:</p>
                        <p>
                            Marina Wentland als Heilpraktikerin für
                            Psychotherapie tätig aufgrund der Erlaubnis zur
                            Ausübung der Heilkunde gemäß §1 Abs. 1 des Gesetzes
                            über die Ausübung der Heilkunde ohne Bestallung
                            (Heilpraktikergesetz) vom 17.02.1939. Die Erlaubnis
                            wurde durch Gesundheitsamt Freiburg erteilt.
                        </p>
                        <p>-Befreit von der Umsatzsteuer nach § 4 UStG</p>
                        <p>-Aufsichtsbehörde Gesundheitsamt Ortenau</p>
                        <p>
                            -Wir unterliegen der Schweigepflicht nach § 203
                            StGB.
                        </p>
                        <p>
                            Selbstverständlich werden sämtliche Informationen
                            und Daten diskret und streng vertraulich behandelt.
                        </p>
                    </Container>
                </div>
            )}
            {prop.teil === "ds" && (
                <div className={s.wrapperPage}>
                    <Container className={s.conteinerPages}>
                        <h1>Datenschutz</h1>
                        <hr />

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Inventore officiis omnis, totam, beatae ex
                            fugit dicta repellendus unde itaque, repudiandae
                            dolorem quod quibusdam temporibus sit nostrum
                            architecto modi eaque fugiat?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Sapiente facere, aliquam accusamus maiores
                            totam eos expedita illum quidem vitae laudantium
                            beatae sequi, porro est fuga, in dolor. Voluptatum,
                            veniam dolor.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Dolorum, velit quisquam ipsam sit perferendis
                            nihil natus, repellat at omnis autem fugit, dolore
                            perspiciatis! Fuga voluptates similique ad adipisci
                            unde voluptatibus.
                        </p>
                        <p>
                            Selbstverständlich werden sämtliche Informationen
                            und Daten diskret und streng vertraulich behandelt.
                        </p>
                    </Container>
                </div>
            )}
            {prop.teil === "agb" && (
                <div className={s.wrapperPage}>
                    <Container className={s.conteinerPages}>
                        <h1>AGB</h1>
                        <hr />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Inventore officiis omnis, totam, beatae ex
                            fugit dicta repellendus unde itaque, repudiandae
                            dolorem quod quibusdam temporibus sit nostrum
                            architecto modi eaque fugiat?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Sapiente facere, aliquam accusamus maiores
                            totam eos expedita illum quidem vitae laudantium
                            beatae sequi, porro est fuga, in dolor. Voluptatum,
                            veniam dolor.
                        </p>
                    </Container>
                </div>
            )}
        </>
    );
};

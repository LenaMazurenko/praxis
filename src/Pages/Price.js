import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Table } from "react-bootstrap";
import s from "./home.module.css";

export const Price = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <div className={`${s.wrapperPage} ${s.conteinerPage}`}>
            <section className={s.background1}>
                <Container className={s.conteinerSection}>
                    <div style={{ marginTop: "10px" }}>
                        <h1 className={`${s.headersText} ${s.zentredText}`}>
                            Preisliste Naturheilkunde
                        </h1>
                        <hr />

                        {/*---1Table--- */}
                        <Table striped hover>
                            <tbody>
                                <tr>
                                    <td>Therapeutische Massage</td>
                                    <td>
                                        25 Min <br />
                                        55 Min
                                    </td>
                                    <td>
                                        35,-€ <br />
                                        65,-€
                                    </td>
                                </tr>
                                <tr>
                                    <td>Sportmassage</td>
                                    <td>
                                        25 Min
                                        <br />
                                        55 Min
                                    </td>
                                    <td>
                                        35,-€ <br />
                                        65,-€
                                    </td>
                                </tr>
                                <tr>
                                    <td>Aromaölmassage</td>
                                    <td>55 Min</td>
                                    <td>70,-€</td>
                                </tr>
                                <tr>
                                    <td>
                                        Therapeutische Kopf-und Gesichtsmassage
                                    </td>
                                    <td>25 Min</td>
                                    <td>35,-€</td>
                                </tr>
                                <tr>
                                    <td>Manuelle Therapie</td>
                                    <td>30 Min</td>
                                    <td>39,-€ </td>
                                </tr>
                                <tr>
                                    <td>
                                        Kurze therapeutische Massage + Schröpfen
                                    </td>
                                    <td>45 Min</td>
                                    <td>49,-€</td>
                                </tr>
                                <tr>
                                    <td>Schröpfen (mit Schröpfglassmassage)</td>
                                    <td>30 Min</td>
                                    <td>29,-€</td>
                                </tr>
                                <tr>
                                    <td>Baunscheidtherapie</td>
                                    <td>je nach Bereich </td>
                                    <td>
                                        <span className={s.textNoWrapp}>
                                            ab 20,-€
                                        </span>
                                    </td>
                                </tr>

                                <tr>
                                    <td>Kinesio Tape</td>
                                    <td>1 Bereich</td>
                                    <td>15,-€</td>
                                </tr>
                                <tr>
                                    <td>Lymphdräinage Tape</td>
                                    <td>
                                        Arm
                                        <br />
                                        Bein
                                    </td>
                                    <td>
                                        22,-€ <br />
                                        28,-€
                                    </td>
                                </tr>
                                <tr>
                                    <td>Wärmeanwendung</td>
                                    <td>10 Min</td>
                                    <td>5,-€</td>
                                </tr>
                                <tr>
                                    <td>Ultraschall</td>
                                    <td>10 Min</td>
                                    <td>15,-€</td>
                                </tr>
                                <tr>
                                    <td>Vit-C Infusion</td>
                                    <td></td>
                                    <td>39,-€</td>
                                </tr>
                                <tr>
                                    <td>Beatydrip-Aminosäure Infusion</td>
                                    <td></td>
                                    <td>89,-€</td>
                                </tr>
                                <tr>
                                    <td>Body Gen DNA Test Face</td>
                                    <td></td>
                                    <td>139,-€</td>
                                </tr>
                                <tr>
                                    <td>Body Gen DNA Test Body</td>
                                    <td></td>
                                    <td>139,-€</td>
                                </tr>
                                <tr>
                                    <td>Body Gen Skin Check Bluttest</td>
                                    <td></td>
                                    <td>79,-€</td>
                                </tr>
                                <tr>
                                    <td>Body Gen antihairloss Bluttest</td>
                                    <td></td>
                                    <td>119,-€</td>
                                </tr>
                                <tr>
                                    <td>Body Gen Vitanin D Bluttest</td>
                                    <td></td>
                                    <td>39,-€</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>

                    {/*---2Table--- */}

                    <div style={{ marginTop: "60px", overflow: "auto" }}>
                        <h2 className={`${s.headersText} ${s.zentredText}`}>
                            Preisliste Kosmetische und Ästhetische Behandlungen
                        </h2>
                        <hr />
                        <Table striped hover responsive>
                            <tbody>
                                <tr>
                                    <td>
                                        Injektionen mit Hyaluronsäure/
                                        Polymilchsäure
                                    </td>

                                    <td>je nach Bereich und Präparat</td>
                                    <td>ab 200,-€</td>
                                </tr>

                                <tr>
                                    <td>Ästhetische Mesotherapie</td>

                                    <td>
                                        Gesicht <br />
                                        Gesicht und Hals
                                    </td>
                                    <td>
                                        ab 89,-€ <br />
                                        ab 99,-€
                                    </td>
                                </tr>
                                <tr>
                                    <td>Biorevitalisierung </td>
                                    <td>je nach Präparat</td>
                                    <td> ab 150,-€</td>
                                </tr>
                                <tr>
                                    <td>Redermalisation</td>
                                    <td>je nach Präparat</td>
                                    <td> ab 150,-€</td>
                                </tr>
                                <tr>
                                    <td>Perfoskin Complex</td>
                                    <td>5ml</td>
                                    <td>180,-€</td>
                                </tr>
                                <tr>
                                    <td>Fadenlifting</td>
                                    <td>pro PDO-Faden</td>
                                    <td>ab 10,-€</td>
                                </tr>
                                <tr>
                                    <td>Dermatologischer Peeling</td>
                                    <td>
                                        PRX-T33 <br />
                                        <br />
                                        PRX-T33 Lady <br />
                                        <br />
                                        Jalupro glowpeel
                                    </td>
                                    <td>
                                        79,-€ <br />
                                        <span className={s.textNoWrapp}>
                                            (+100,-€ Heimpflege)
                                        </span>{" "}
                                        <br />
                                        79,-€ <br />
                                        (+59,-€ Heimpflege) <br />
                                        ab 89,-€
                                    </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td> Diamant Microdermabrasion</td>
                                    <td></td>
                                    <td>ab 99,-€</td>
                                </tr>
                                <tr>
                                    <td>Aquapeel</td>
                                    <td></td>
                                    <td>ab 99,-€</td>
                                </tr>
                                <tr>
                                    <td>Microneedling</td>
                                    <td>
                                        Gesicht
                                        <br />
                                        Gesicht und Hals
                                    </td>
                                    <td>
                                        ab 99,-€ <br />
                                        ab 149,-€
                                    </td>
                                </tr>
                                <tr>
                                    <td>Kosmetische Gesichtsbehandlungen</td>
                                    <td>je nach Hautbedürfnis</td>
                                    <td>ab 69,-€ </td>
                                </tr>
                                <tr>
                                    <td>
                                        Augenbrauen färben (während der
                                        Behandlung)
                                    </td>
                                    <td></td>
                                    <td>10,-€ </td>
                                </tr>

                                <tr>
                                    <td>
                                        Wimpern färben (während der Behandlung)
                                    </td>
                                    <td></td>
                                    <td>10,-€</td>
                                </tr>
                                <tr>
                                    <td>Sculpture Gesichtsmassage</td>
                                    <td>30 Min</td>
                                    <td>39,-€</td>
                                </tr>
                                <tr>
                                    <td>Jalupro 7 Punkte Lifting</td>
                                    <td></td>
                                    <td>180,-€</td>
                                </tr>
                                <tr>
                                    <td>Profhilo 5 Punkte Lifting</td>
                                    <td></td>
                                    <td>200,-€</td>
                                </tr>
                                <tr>
                                    <td>Profhilo Body</td>
                                    <td></td>
                                    <td>299,-€</td>
                                </tr>
                                <tr>
                                    <td>
                                        Mesohair-Behandlung beim Haarausfall
                                    </td>
                                    <td></td>
                                    <td> ab 120,-€</td>
                                </tr>
                                <tr>
                                    <td>Toxin freier Botox Ersatz</td>
                                    <td></td>
                                    <td>ab 100,-€</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </Container>
            </section>
        </div>
    );
};

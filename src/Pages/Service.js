import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Table } from "react-bootstrap";
import s from "./home.module.css";

export const Service = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <div className={`${s.wrapperPage} ${s.conteinerPage}`}>
            <section className={s.background1}>
                <Container className={s.conteinerSection}>
                    <h1 className={`${s.headersText} ${s.zentredText}`}>
                        Leistungen & Preisliste
                    </h1>
                    <hr />
                    {/*<h2 className={s.headersText}>Ich biete an:</h2>*/}

                    {/*------ */}
                    <h3 className={s.headersText_withIcon}> Naturheilkunde:</h3>
                    <ul className={s.serviseList}>
                        <li>- Therapeutische Massage</li>
                        <li>- Sportmassage</li>
                        <li>- Aromaölmassage</li>
                        <li>- Kopf- und Gesichtsmassage</li>
                        <li>
                            - Wirbelsäulentherapie nach Dorn und Breussmassage
                        </li>
                        <li>- Baunscheidtherapie</li>
                        <li>- Schröpfen</li>
                        <li>- Manuelle Therapie</li>
                        <li>- Infusionen</li>
                        <li>- Kinesio Tape</li>
                        <li>- Ultraschall</li>
                        <li>- Wärmeanwendung (Rotlicht)</li>
                    </ul>

                    {/*------ */}
                    <h3 className={s.headersText_withIcon}>
                        Ästhetische Behandlungen:
                    </h3>
                    <ul className={s.serviseList}>
                        <li>
                            - Injektionen mit Hyaluronsäure/
                            Kalziumhydroxylapatit
                        </li>
                        <li>
                            - Ästhetische Mesotherapie, Biorevitalisierung,
                            Redermalisation
                        </li>
                        <li>- Fadenlifting</li>
                        <li>
                            - Dermatologische Peeling: PRX-T33, PRX-T33 Lady,
                            Hyalual Peels
                        </li>
                        <li>
                            - Appatative Kosmetik: Microdermabrasion, Aquapeel,
                            Microneedling
                        </li>
                        <li>
                            - Anti-Aging Gesichtsbehandlungen je nach
                            Hautbedürfnis
                        </li>
                        <li>- Gesichtslymphdrainage</li>
                        <li>- Profhilo 5 Punkte Lifting</li>
                        <li>- Profhilo Body</li>
                    </ul>

                    {/*------ */}
                    <h3 className={s.headersText_withIcon}>
                        Gesichtsmodelierung:
                    </h3>
                    <ul className={s.serviseList}>
                        <li>
                            - Korrektur der Lippenkonturen und des
                            Lippenvolumens
                        </li>
                        <li>- Augenfältchen, Tränensäcke</li>
                        <li>- Wangenauffüllung</li>
                        <li>- Korrektur der Mundregion und Mundwinkel</li>
                        <li>- Korrektur der Nasolabialfalte</li>
                        <li>- Kinn-und Kieferlinienstraffung</li>
                        <li>- Ohrläppchen Verschönerung</li>
                        <li>- Hände-, Hals- und Dekolteeverjungung</li>
                        <li>
                            - Lipolyse (Fett-Weg-Spritze) Gesicht und Körper
                        </li>
                        <li>- Mesohair-Behandlung beim Haarausfall</li>
                    </ul>

                    <hr />

                    <div style={{ marginTop: "60px" }}>
                        <h2 className={`${s.headersText} ${s.zentredText}`}>
                            Preisliste Naturheilkunde
                        </h2>
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
                                    <td>38,50€ </td>
                                </tr>
                                <tr>
                                    <td>
                                        Wirbelsäulentherapie nach Dorn und
                                        Breuss
                                    </td>
                                    <td>30 Min</td>
                                    <td>38,50€</td>
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
                                    <td>Schröpfen (mit Schröpfglassmassage)</td>
                                    <td>30 Min</td>
                                    <td>29,-€</td>
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
                            </tbody>
                        </Table>
                    </div>

                    {/*---2Table--- */}
                    <div style={{ marginTop: "60px", overflow: "auto" }}>
                        <h2 className={`${s.headersText} ${s.zentredText}`}>
                            Preisliste Ästhetische Behandlungen
                        </h2>
                        <Table striped hover responsive>
                            <tbody>
                                <tr>
                                    <td>
                                        Injektionen mit Hyaluronsäure/
                                        Kalziumhydroxylapatit
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
                                        150,-€ <br />
                                        250,-€
                                    </td>
                                </tr>
                                <tr>
                                    <td>Biorevitalisierung </td>
                                    <td>je nach Präparat</td>
                                    <td> ab 180,-€</td>
                                </tr>
                                <tr>
                                    <td>Redermalisation</td>
                                    <td>je nach Präparat</td>
                                    <td> ab 180,-€</td>
                                </tr>
                                <tr>
                                    <td>Perfoskin Complex</td>
                                    <td>5ml</td>
                                    <td>180,-€</td>
                                </tr>
                                <tr>
                                    <td>Fadenlifting</td>
                                    <td>pro Faden</td>
                                    <td>ab 10,-€</td>
                                </tr>
                                <tr>
                                    <td>Dermatologischer Peeling</td>
                                    <td>
                                        PRX-T33 <br />
                                        <br />
                                        PRX-T33 Lady <br />
                                        <br />
                                        Hyalual Peels{" "}
                                    </td>
                                    <td>
                                        79,-€ <br />
                                        <span className={s.textNoWrapp}>
                                            (+100,-€ Heimpflege)
                                        </span>{" "}
                                        <br />
                                        79,-€ <br />
                                        (+59,-€ Heimpflege) <br />
                                        89,-€
                                    </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td> Diamant Microdermabrasion</td>
                                    <td></td>
                                    <td>99,-€</td>
                                </tr>
                                <tr>
                                    <td>Aquapeel</td>
                                    <td></td>
                                    <td>99,-€</td>
                                </tr>
                                <tr>
                                    <td>Microneedling</td>
                                    <td>
                                        Gesicht
                                        <br />
                                        Gesicht und Hals
                                    </td>
                                    <td>
                                        99,-€ <br />
                                        149,-€
                                    </td>
                                </tr>
                                <tr>
                                    <td>Anti-Aging Gesichtsbehandlungen</td>
                                    <td>je nach Hautbedürfnis</td>
                                    <td>ab 69,-€ </td>
                                </tr>
                                <tr>
                                    <td>Gesichtslymphdrainage</td>
                                    <td>30 Min</td>
                                    <td>35,-€</td>
                                </tr>
                                <tr>
                                    <td>Sculpture Gesichtsmassage</td>
                                    <td>30 Min</td>
                                    <td>35,-€</td>
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
                                        Lipolyse (Fett-Weg-Spritze) <br />
                                        Gesicht und Körper{" "}
                                    </td>
                                    <td>1ml</td>
                                    <td>5,-€</td>
                                </tr>
                                <tr>
                                    <td>
                                        Mesohair-Behandlung beim Haarausfall
                                    </td>
                                    <td></td>
                                    <td>120,-€</td>
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

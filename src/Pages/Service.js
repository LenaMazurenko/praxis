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
            <section className={s.background2}>
                <Container className={s.conteinerSection}>
                    <h1 className={`${s.headersText} ${s.zentredText}`}>
                        Leistungen & Priceliste
                    </h1>
                    <hr />
                    {/*<h2 className={s.headersText}>Ich biete an:</h2>*/}

                    {/*------ */}
                    <h3 className={s.headersText_withIcon}> Naturheilkunde:</h3>
                    <ul className={s.serviseList}>
                        <li>-Therapeutische Massage</li>
                        <li> -Sportmassage</li>
                        <li>-Aromaölmassage</li>
                        <li>-Kopf-und Gesichtsmassage</li>
                        <li>
                            -Wirbelsäulentherapie nach Dorn und Breussmassage
                        </li>
                        <li>-Baunscheidtherapie</li>
                        <li>-Schröpfen</li>
                        <li>-Manuelle Therapie</li>
                        <li>-Infusionen</li>
                        <li>- Tape</li>
                        <li> -Ultraschall</li>
                        <li> -Wärmeanwendung(Rotlicht)</li>
                    </ul>

                    {/*------ */}
                    <h3 className={s.headersText_withIcon}>
                        Ästhetische Behandlungen:
                    </h3>
                    <ul className={s.serviseList}>
                        <li>
                            -Injektionen mit Hyaluronsäure/
                            Kalziumhydroxylapatit
                        </li>
                        <li>
                            -Ästhetische Mesotherapie, Biorevitalisierung,
                            Redermalisation
                        </li>
                        <li>-Fadenlifting</li>
                        <li>
                            -Dermatologische Peeling :PRX-T33, PRX-T33 Lady,
                            Hyalual Peels
                        </li>
                        <li>
                            -Appatative Kosmetik: Microdermabrasion, Aquapeel,
                            Microneedling
                        </li>
                        <li>
                            -Anti Aging Gesichtsbehandlungen je nach
                            Hautbedürfnis
                        </li>
                        <li>-Gesichtslympdrainage</li>
                        <li>-Profhilo 5 Punkte Lifting</li>
                        <li>-Prophilo</li>
                    </ul>

                    {/*------ */}
                    <h3 className={s.headersText_withIcon}>
                        Gesichtsmodelierung:
                    </h3>
                    <ul className={s.serviseList}>
                        <li>
                            -Korrektur der Lippenkonturen und des Lippenvolumens
                        </li>
                        <li>-Augenfältchen, Tränensäcke</li>
                        <li> -Wangenauffüllung</li>
                        <li>-Korrektur der Mundregion und Mundwinkel</li>
                        <li>-Korrektur der Nasolabialfalte</li>
                        <li> -Kinn-und Kieferlinienstraffung</li>
                        <li>-Ohrläppchen Verschönerung</li>
                        <li> -Hände- ,Hals- und Dekolteeverjungung</li>
                        <li>
                            -Lipolyse ( Fett-Weg-Spritze) Gesicht und Körper
                        </li>
                        <li>-Mesohair Behandlung beim Haarausfall</li>
                    </ul>

                    <hr />
                    <h2 className={`${s.headersText} ${s.zentredText}`}>
                        Preisliste Naturheilkunde
                    </h2>
                    {/*---1Table--- */}
                    <Table striped>
                        <tbody>
                            <tr>
                                <td>Therapeutische Massage</td>
                                <td>
                                    25 Min/35,-€ <br />
                                    55 Min/65,-€
                                </td>
                            </tr>
                            <tr>
                                <td>Sportmassage</td>
                                <td>
                                    25 Min/35,-€ <br /> 55 Min/65,-€
                                </td>
                            </tr>
                            <tr>
                                <td>Aromaölmassage</td>
                                <td>55 Min/70,-€ </td>
                            </tr>
                            <tr>
                                <td>Therapeutische Kopf-und Gesichtsmassage</td>
                                <td>25 Min/35,-€ </td>
                            </tr>
                            <tr>
                                <td>Manuelle Therapie</td>
                                <td>30 Min/38,50€ </td>
                            </tr>
                            <tr>
                                <td>
                                    Wirbelsäulentherapie nach Dorn und Breuss
                                </td>
                                <td>30min/38,50€ </td>
                            </tr>
                            <tr>
                                <td>Baunscheidtherapie</td>
                                <td>ab 20,-€/je nach Bereich </td>
                            </tr>
                            <tr>
                                <td>Schröpfen, mit Schröpfkopfmassage</td>
                                <td>30 Min/29,-€ </td>
                            </tr>
                            <tr>
                                <td>Kinesio Tape</td>
                                <td> 1 Bereich/15,-€</td>
                            </tr>
                            <tr>
                                <td>Lymphdräinage Tape</td>
                                <td>
                                    Arm/22,-€ <br />
                                    Bein/28,-€
                                </td>
                            </tr>
                            <tr>
                                <td>Wärmeanwendung</td>
                                <td>10 Min/5,-€</td>
                            </tr>
                            <tr>
                                <td>Ultraschall</td>
                                <td>10 Min/15,-€</td>
                            </tr>
                        </tbody>
                    </Table>

                    {/*---2Table--- */}
                    <h2 className={`${s.headersText} ${s.zentredText}`}>
                        Preisliste Ästhetische Behandlungen
                    </h2>
                    <Table striped>
                        <tbody>
                            <tr>
                                <td>
                                    Injektionen mit Hyaluronsäure/
                                    Kalziumhydroxylapatit
                                </td>
                                <td>
                                    ab 200,-€ <br />
                                    /je nach Bereich und Präparat
                                </td>
                            </tr>
                            <tr>
                                <td>Ästhetische Mesotherapie</td>
                                <td>
                                    Gesicht/150,-€ (min 3 Sitzungen notwendig)
                                    <br />
                                    Gesicht und Hals/250,-€
                                </td>
                            </tr>
                            <tr>
                                <td>Biorevitalisierung: </td>
                                <td>
                                    ab 180,-€ <br />
                                    /je nach Präparat
                                </td>
                            </tr>
                            <tr>
                                <td>Redermalisation</td>
                                <td>
                                    Ab 180,-€ <br />
                                    /je nach Präparat
                                </td>
                            </tr>
                            <tr>
                                <td>Perfoskin Complex</td>
                                <td>5ml/180,-€</td>
                            </tr>
                            <tr>
                                <td>Fadenlifting</td>
                                <td>ab 10,-€/pro Faden</td>
                            </tr>
                            <tr>
                                <td>Dermatologischer Peeling</td>
                                <td>
                                    PRX-T33/79,-€ +100,-€/Heimpflege einmalig{" "}
                                    <br />
                                    (5 Sitzungen notwendig) <br />
                                    PRX-T33 Lady/79,-€ +59,-€/Heimpflege <br />
                                    (3 Sitzungen notwendig) <br />
                                    Hyalual Peels/89,-€ (3 Sitzungen notwendig)
                                </td>
                            </tr>
                            <tr>
                                <td> Diamant Microdermabrasion</td>
                                <td>99,-€</td>
                            </tr>
                            <tr>
                                <td>Aquapeel</td>
                                <td>99,-€</td>
                            </tr>
                            <tr>
                                <td>Microneedling</td>
                                <td>
                                    Gesicht 99,-€ <br />
                                    Gesicht und Hals/149,-€
                                </td>
                            </tr>
                            <tr>
                                <td>Anti Aging Gesichtsbehandlungen</td>
                                <td>
                                    ab 69,-€ <br />
                                    /je nach Hautbedürfnis
                                </td>
                            </tr>
                            <tr>
                                <td>Gesichtslympdrainage</td>
                                <td>30 Min/35,-€ </td>
                            </tr>
                            <tr>
                                <td>Sculpture Gesichtsmassage</td>
                                <td>30 Min 35,-€</td>
                            </tr>
                            <tr>
                                <td>Profhilo 5 Punkte Lifting</td>
                                <td>200,-€</td>
                            </tr>
                            <tr>
                                <td>Prophilo Body</td>
                                <td>299,-€</td>
                            </tr>
                            <tr>
                                <td>Lipolyse ( Fett-Weg-Spritze)</td>
                                <td>
                                    Gesicht und Körper <br /> /1ml 5,-€
                                </td>
                            </tr>
                            <tr>
                                <td>Mesohair Behandlung beim Haarausfall</td>
                                <td>120,-€</td>
                            </tr>
                            <tr>
                                <td>Toxin freier Botox Ersatz</td>
                                <td>ab 100,-€</td>
                            </tr>
                        </tbody>
                    </Table>
                </Container>
            </section>
        </div>
    );
};

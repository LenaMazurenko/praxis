import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
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
                        Leistungen
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
                </Container>
            </section>
        </div>
    );
};

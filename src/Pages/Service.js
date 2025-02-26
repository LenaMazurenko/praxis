import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import s from "./home.module.css";

export const Service = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const [activeIndexOne, setActiveIndexOne] = useState(null);
    const [activeIndexTwo, setActiveIndexTwo] = useState(null);
    const [activeIndexThree, setActiveIndexThree] = useState(null);

    const toggleItemOne = (index) => {
        setActiveIndexOne(activeIndexOne === index ? null : index);
    };
    const toggleItemTwo = (index) => {
        setActiveIndexTwo(activeIndexTwo === index ? null : index);
    };
    const toggleItemThree = (index) => {
        setActiveIndexThree(activeIndexThree === index ? null : index);
    };
    const items_one = [
        {
            title: "Therapeutische Massage",
            content: (
                <p className="pt-2 ps-4">
                    Fördert die Durchblutung, lockert die Muskulatur und löst
                    Verspannungen
                </p>
            ),
        },
        {
            title: "Sportmassage",
            content: (
                <p className="pt-2 ps-4">
                    Speziell für Sportler entwickelt; kann vor und nach
                    Wettkämpfen angewendet werden
                </p>
            ),
        },
        {
            title: "Rollen-Massage",
            content: (
                <p className="pt-2 ps-4">
                    Eine Massage mit Hilfe einer Rolle, um Verspannungen zu
                    lösen und die Beweglichkeit zu verbessern
                </p>
            ),
        },
        {
            title: "Aromaölmassage",
            content: (
                <p className="pt-2 ps-4">
                    Eine sanfte Massage mit ätherischen Ölen, die Entspannung
                    und Wohlbefinden fördert und die Sinne stimuliert
                </p>
            ),
        },
        {
            title: "Lymphdrainage",
            content: (
                <p className="pt-2 ps-4">
                    Eine sanfte Massage, die den Abfluss von Lymph- flüssigkeit
                    fördert und Schwellungen reduziert
                </p>
            ),
        },
        {
            title: "Kopf- und Gesichtsmassage",
            content: (
                <p className="pt-2 ps-4">
                    Wohltuende Gesichts- und Kopfmassage kann bei Migräne und
                    Spannungskopfschmerzen angewendet werden
                </p>
            ),
        },
        {
            title: "Baunscheidtherapie",
            content: (
                <p className="pt-2 ps-4">
                    Eine naturheilkundliche Methode zur Stimulation des
                    Immunsystems und zur Schmerzlinderung besteht darin, die
                    Haut mit Nadeln und bestimmten Ölen zu reizen
                </p>
            ),
        },
        {
            title: "Schröpfen",
            content: (
                <p className="pt-2 ps-4">
                    Das Schröpfen und die einleitende Massage regen die
                    Durchblutung, den Stoffwechsel und die Sauerstoffversorgung
                    an
                </p>
            ),
        },
        {
            title: "Manuelle Therapie",
            content: <p className="pt-2 ps-4"></p>,
        },
        {
            title: "Infusionen",
            content: (
                <p className="pt-2 ps-4">
                    <span>-</span>{" "}
                    <i>
                        {" "}
                        <u>Vit C Infusion:</u>
                    </i>{" "}
                    <br />
                    Die wichtigste Eigenschaft von Vitamin C ist die Fähigkeit
                    im Körper freie Radikale zu fangen und zu neutralisieren.
                    Vit C ist sehr wichtig für das Immunsystem und unterstüzt
                    die Entgiftung der Leber Darüber hinaus wird Vit C für
                    Kollagenaufbau benötigt, was für Haut, Knochen, Sehnen und
                    Blutgefäße wichtig ist. Auch Eisen wird in Verbindung mit
                    Vit C besser in Dünndarm aufgenommen. Das beugt einen
                    Eisenmangel vor.
                    <br />
                    <span>-</span>{" "}
                    <i>
                        {" "}
                        <u>Beautydrip Aminisäure Infusion:</u>
                    </i>{" "}
                    <br />
                    Ziel der Beauty drip Infusion ist das Auffüllen von
                    Nährstoffspeichern und der Stärkung von körpereigenen
                    Stoffwechselprozessen im präventiven Bereich. <br />
                    Bestandteile der Infusion: <br />
                    <span> *</span>Glycin: Zellschutz als Antioxidans, Anregung
                    der Kollagensyntese, unterstützung der Entgiftungsvorgängen;{" "}
                    <br />
                    <span> *</span>L-Aginin: Verbesserung der Durchblutung,
                    Verbesserung der Immunität; <br />
                    <span>*</span>L-Prolin: auch Hauptbestandteil des Kollagens,
                    unterstüzt heilungsprozess von Verletzungen und anderen
                    Gewebsschädigungen; <br />
                    <span>*</span>L-Lysin: Anregung der Kollagensyntese,
                    gefäßkräftigende und gefäßschützende Effekte, Förderung des
                    Immunsystems und der Wundheilung; <br />
                    <span>*</span>Taurin: antioxidative Wirkung, Verbesserung
                    der Haarstruktur, antientzündliche Wirkung; <br />
                    <span>*</span>L-Metionin: Verbessert die Struktur von Haaren
                    und Nägel; <br />
                    <span>*</span>Biotin: wichtig für Haut, Haare und Nägel,
                    wichtige Funktion in Metochondrien Soffwechsel; <br />
                    <span>*</span>Elyktrolyt-Injektionslösung:
                    Magnesium,Calzium, Kalium.
                </p>
            ),
        },
        {
            title: "Kinesio Tape",
            content: (
                <p className="pt-2 ps-4">
                    Das Anbringen von elastischen Bändern auf die Haut, um
                    Muskeln und Gelenke zu unterstützen
                </p>
            ),
        },

        { title: "Ultraschall", content: <p className="pt-2 ps-4"></p> },
        {
            title: "Wärmeanwendung (Rotlicht)",
            content: <p className="pt-2 ps-4"></p>,
        },
        {
            title: "Body Gen innovativer DNA-Test",
            content: (
                <p className="pt-2 ps-4">
                    Gibt wertvolle Eisicht in deine Gesundheit, deinen
                    Lebensstil und dein Wohlbefinden. Es werden die Biomarker
                    getestet die tiefgreifende Einblicke in das Hautbild geben.
                    Die wissenschaftlich fundirte Empfelungen werden auf jeden
                    persönlich zugeschnitten. <br />
                    <span>-</span>
                    <i>
                        {" "}
                        <u>Beauty Face DNA Test: </u>{" "}
                    </i>{" "}
                    oxidativer Stress und Hautglykation Kollagenabbau,
                    Hauthydration,UV Schutz und
                    Enzundungsanfälligkeit,Hautalterung. <br />
                    <span>-</span>
                    <i>
                        {" "}
                        <u>Body DNA Test:</u>
                    </i>{" "}
                    Entzündungsfähigkeit, Cellulite, Krampfadern,
                    Dehnungsstreifen, UV Schutz. <br />
                    <span>-</span>
                    <i>
                        {" "}
                        <u>Body Gen Bluttest: </u>{" "}
                    </i>{" "}
                    Vit A, Vit B12, Zink, Kupfer, Ferritin/Eisen. <br />
                    <span>-</span>
                    <i>
                        <u>Antihairloss Bluttest: </u>
                    </i>{" "}
                    Vitamim B12, Vitamin D, Vitamin A, Ferritin/ Eisen, Zink,
                    Selen.
                </p>
            ),
        },
    ];
    const items_two = [
        {
            title: " Injektionen mit Hyaluronsäure/Polymilchsäure",
            content: (
                <p className="pt-2 ps-4">
                    Durch eine Behandlung mit Hyaluronsäure kann eine natürlich
                    wirkende Hautverjüngung erreicht, Volumen hergestellt und
                    Feuchtigkeitsdepots aufgefüllt werden
                </p>
            ),
        },
        {
            title: "Ästhetische Mesotherapie, Biorevitalisierung",
            content: (
                <p className="pt-2 ps-4">
                    Mesotherapie ist eine Behandlung mit besonderen Wirkstoffen,
                    um die Haut zu regenerieren, zu straffen und mit Nährstoffen
                    zu versorgen. Biorevitalisierung ist die Injektion von
                    speziellen Präparaten, um die Haut- qualität zu verbessern,
                    Feuchtigkeit zu spenden und das Hautbild zu verjüngen
                </p>
            ),
        },
        {
            title: "Fadenlifting",
            content: (
                <p className="pt-2 ps-4">
                    Eine Methode zur Straffung der Haut mit Hilfe von
                    resorbierbaren Fäden, um ein jugendlicheres Erscheinungsbild
                    zu erzielen
                </p>
            ),
        },
        {
            title: "Dermatologische Peeling: PRX-T33, PRX-T33 Lady, Jalupro glowpeel",
            content: (
                <p className="pt-2 ps-4">
                    PRX-T33, Hyalual, Green Peel - Je nach Bedarf und
                    Hautzustand: entfernt abgestorbene Hautzellen für ein
                    frisches und strahlendes Aussehen
                </p>
            ),
        },
        {
            title: "Apparative Kosmetik: Microdermabrasion, Aquapeel, Microneedling",
            content: (
                <p className="pt-2 ps-4">
                    Microdermabrasion ist effektive Methode zur Hauterneuerung,
                    entfernt abgestorbene Hautzellen und verbessert das Hautbild
                    sowie die Hautstruktur. Aqua Peel ist sanfte Reinigung,
                    Peeling und Pflege mit nährenden Substanzen für ein frisches
                    und strahlendes Hautbild. Microneedling regt die
                    Kollagenproduktion an, verbessert das Hautbild und reduziert
                    Falten sowie Pigmentflecken
                </p>
            ),
        },
        {
            title: "Kosmetische Gesichtsbehandlungen je nach Hautbedürfnis",
            content: (
                <p className="pt-2 ps-4">
                    Eine umfassende Gesichtsbehandlung, die Reinigung, Peeling,
                    Dampfanwendung, Ausreinigung, Massage und Maske umfasst
                </p>
            ),
        },
        {
            title: "Gesichtslymphdrainage",
            content: (
                <p className="pt-2 ps-4">
                    Eine sanfte Massage, die den Abfluss von Lymphflüssigkeit
                    fördert und Schwellungen reduziert
                </p>
            ),
        },
        {
            title: "Profhilo/Jalupro Lifting",
            content: <p className="pt-2 ps-4"></p>,
        },
        {
            title: "Profhilo Body",
            content: <p className="pt-2 ps-4"></p>,
        },
    ];
    const items_three = [
        {
            title: "Korrektur der Lippenkonturen und des Lippenvolumens",
            content: "",
        },
        {
            title: "Augenfältchen, Tränensäcke",
            content: "",
        },
        {
            title: "Wangenauffüllung",
            content: "",
        },
        {
            title: "Korrektur der Mundregion und Mundwinkel",
            content: "",
        },
        {
            title: "Korrektur der Nasolabialfalte",
            content: "",
        },
        {
            title: "Kinn-und Kieferlinienstraffung",
            content: "",
        },
        {
            title: "Ohrläppchen Verschönerung",
            content: "",
        },
        {
            title: "Hände-, Hals- und Dekolteeverjungung",
            content: "",
        },
        {
            title: "Mesohair-Behandlung beim Haarausfall",
            content: "",
        },
    ];

    return (
        <div className={`${s.wrapperPage} ${s.conteinerPage}`}>
            <section className={s.background1}>
                <Container className={s.conteinerSection}>
                    <h1 className={`${s.headersText} ${s.zentredText}`}>
                        Leistungen
                    </h1>
                    <hr />
                    {/*<h2 className={s.headersText}>Ich biete an:</h2>*/}

                    <h3 className={s.headersText_withIcon}> Naturheilkunde:</h3>
                    <div className={s.serviseList}>
                        {items_one.map((item, index) => (
                            <div key={index}>
                                <div
                                    className={`${s.titleText} p-2`}
                                    onClick={() => toggleItemOne(index)}
                                    style={{ cursor: "pointer" }}
                                >
                                    <span className="pe-2">
                                        <span
                                            className={`${s.icon} ${
                                                activeIndexOne === index
                                                    ? s.iconOpen
                                                    : s.iconClosed
                                            } `}
                                        >
                                            {activeIndexOne === index
                                                ? "−"
                                                : "+"}
                                        </span>
                                    </span>
                                    {item.title}
                                </div>
                                <div
                                    className={`${s.content} ${
                                        activeIndexOne === index
                                            ? s.contentOpen
                                            : s.contentClosed
                                    }`}
                                >
                                    <p>{item.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/*------ */}
                    <h3 className={s.headersText_withIcon}>
                        Ästhetische Behandlungen:
                    </h3>
                    <div className={s.serviseList}>
                        {items_two.map((item, index) => (
                            <div key={index}>
                                <div
                                    className={`${s.titleText} p-2`}
                                    onClick={() => toggleItemTwo(index)}
                                    style={{ cursor: "pointer" }}
                                >
                                    <span className="pe-2">
                                        <span
                                            className={`${s.icon} ${
                                                activeIndexTwo === index
                                                    ? s.iconOpen
                                                    : s.iconClosed
                                            } `}
                                        >
                                            {activeIndexTwo === index
                                                ? "−"
                                                : "+"}
                                        </span>
                                    </span>
                                    {item.title}
                                </div>
                                <div
                                    className={` ${s.content} ${
                                        activeIndexTwo === index
                                            ? s.contentOpen
                                            : s.contentClosed
                                    }`}
                                >
                                    <p>{item.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/*------ */}
                    <h3 className={s.headersText_withIcon}>
                        Gesichtsmodelierung:
                    </h3>
                    <div className={s.serviseList}>
                        {items_three.map((item, index) => (
                            <div key={index}>
                                <div
                                    className={`${s.titleText} p-2`}
                                    onClick={() => toggleItemThree(index)}
                                    style={{ cursor: "pointer" }}
                                >
                                    <span className="pe-2">
                                        <span
                                            className={`${s.icon} ${
                                                activeIndexThree === index
                                                    ? s.iconOpen
                                                    : s.iconClosed
                                            } `}
                                        >
                                            {activeIndexThree === index
                                                ? "−"
                                                : "+"}
                                        </span>
                                    </span>
                                    {item.title}
                                </div>
                                <div
                                    className={`${s.content} ${
                                        activeIndexThree === index
                                            ? s.contentOpen
                                            : s.contentClosed
                                    }`}
                                >
                                    <p>{item.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>
        </div>
    );
};

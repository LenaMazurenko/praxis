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
            content:
                "Fördert die Durchblutung, lockert die Muskulatur und löst Verspannungen",
        },
        {
            title: "Sportmassage",
            content:
                "Speziell für Sportler entwickelt; kann vor und nach Wett- kämpfen angewendet werden",
        },
        {
            title: "Rollen-Massage",
            content:
                "Eine Massage mit Hilfe einer Rolle, um Verspannungen zu lösen und die Beweglichkeit zu verbessern",
        },
        {
            title: "Aromaölmassage",
            content:
                "Eine sanfte Massage mit ätherischen Ölen, die Entspannung und Wohlbefinden fördert und die Sinne stimuliert",
        },
        {
            title: "Lymphdrainage",
            content:
                "Eine sanfte Massage, die den Abfluss von Lymph- flüssigkeit fördert und Schwellungen reduziert",
        },
        {
            title: "Kopf- und Gesichtsmassage",
            content:
                "Wohltuende Gesichts- und Kopfmassage kann bei Migräneund Spannungskopfschmerzen angewendet werden",
        },
        {
            title: "Wirbelsäulentherapie nach Dorn und Breussmassage",
            content:
                "Therapie nach Dorn-Breuss-Methode ist eine sanfte Wirbelsäulentherapie zur Korrektur von Fehlstellungen und zur Linderung von Rückenschmerzen",
        },
        {
            title: "Baunscheidtherapie",
            content:
                "Eine naturheilkundliche Methode zur Stimulation des Immunsystems und zur Schmerzlinderung besteht darin, die Haut mit Nadeln und bestimmten Ölen zu reizen",
        },
        {
            title: "Schröpfen",
            content:
                "Das Schröpfen und die einleitende Massage gegen die Durchblutung, den Stoffwechsel und die Sauerstoff- versorgung an",
        },
        {
            title: "Manuelle Therapie",
            content: "",
        },
        { title: "Infusionen", content: "" },
        {
            title: "Kinesio Tape",
            content:
                "Das Anbringen von elastischen Bändern auf die Haut, um Muskeln und Gelenke zu unterstützen",
        },

        { title: "Ultraschall", content: "" },
        {
            title: "Wärmeanwendung (Rotlicht)",
            content: "",
        },
    ];
    const items_two = [
        {
            title: " Injektionen mit Hyaluronsäure/Polymilchsäure",
            content:
                "Durch eine Behandlung mit Hyaluronsäure kann eine natürlich wirkende Hautverjüngung erreicht, Volumen hergestellt und Feuchtigkeitsdepots aufgefüllt werden",
        },
        {
            title: "Ästhetische Mesotherapie, Biorevitalisierung",
            content:
                "Mesotherapie ist eine Behandlung mit besonderen Wirkstoffen, um die Haut zu regenerieren, zu straffen und mit Nährstoffen zu versorgen. Biorevitalisierung ist die Injektion von speziellen Präparaten, um die Haut- qualität zu verbessern, Feuchtigkeit zu spenden und das Hautbild zu verjüngen",
        },
        {
            title: "Fadenlifting",
            content:
                "Eine Methode zur Straffung der Haut mit Hilfe von resorbierbaren Fäden, um ein jugendlicheres Erscheinungsbild zu erzielen",
        },
        {
            title: "Dermatologische Peeling: PRX-T33, PRX-T33 Lady, Hyalual Peels, Jalupro",
            content:
                "PRX-T33, Hyalual, Green Peel - Je nach Bedarf und Hautzustand: entfernt abgestorbene Hautzellen für ein frisches und strahlendes Aussehen",
        },
        {
            title: "Appatative Kosmetik: Microdermabrasion, Aquapeel, Microneedling",
            content:
                "Microdermabrasion ist effektive Methode zur Hauterneuerung, entfernt abgestorbene Hautzellen und verbessert das Hautbild sowie die Hautstruktur. Aqua Peel ist sanfte Reinigung, Peeling und Pflege mit nährenden Substanzen für ein frisches und strahlendes Hautbild. Microneedling regt die Kollagenproduktion an, verbessert das Hautbild und reduziert Falten sowie Pigmentflecken",
        },
        {
            title: "Kosmetische Gesichtsbehandlungen je nach Hautbedürfnis",
            content:
                "Eine umfassende Gesichtsbehandlung, die Reinigung, Peeling, Dampfanwendung, Ausreinigung, Massage und Maske umfasst",
        },
        {
            title: "Gesichtslymphdrainage",
            content:
                "Eine sanfte Massage, die den Abfluss von Lymph- flüssigkeit fördert und Schwellungen reduziert",
        },
        {
            title: "Profhilo/Jalupro Lifting",
            content: "",
        },
        {
            title: "Profhilo Body",
            content: "",
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
            title: "Lipolyse (Fett-Weg-Spritze) Gesicht und Körper",
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
                            <div key={index} className="p-2">
                                <div
                                    onClick={() => toggleItemOne(index)}
                                    style={{ cursor: "pointer" }}
                                >
                                    <span className="p-2">
                                        {activeIndexOne === index ? "−" : "+"}
                                    </span>
                                    {item.title}
                                </div>
                                {activeIndexOne === index && (
                                    <div className="m-2">
                                        <small>{item.content}</small>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/*------ */}
                    <h3 className={s.headersText_withIcon}>
                        Ästhetische Behandlungen:
                    </h3>
                    <div className={s.serviseList}>
                        {items_two.map((item, index) => (
                            <div key={index} className="p-2">
                                <div
                                    onClick={() => toggleItemTwo(index)}
                                    style={{ cursor: "pointer" }}
                                >
                                    <span className="p-2">
                                        {activeIndexTwo === index ? "−" : "+"}
                                    </span>
                                    {item.title}
                                </div>
                                {activeIndexTwo === index && (
                                    <div className="m-2">
                                        <small>{item.content}</small>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/*------ */}
                    <h3 className={s.headersText_withIcon}>
                        Gesichtsmodelierung:
                    </h3>
                    <div className={s.serviseList}>
                        {items_three.map((item, index) => (
                            <div key={index} className="p-2">
                                <div
                                    onClick={() => toggleItemThree(index)}
                                    style={{ cursor: "pointer" }}
                                >
                                    <span className="p-2">
                                        {activeIndexThree === index ? "−" : "+"}
                                    </span>
                                    {item.title}
                                </div>
                                {activeIndexThree === index && (
                                    <div className="m-2">
                                        <small>{item.content}</small>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </Container>
            </section>
        </div>
    );
};

import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import hero from "../Images/logo3.png";
import praxisImg from "../Images/praxis2.jpg";
import serviceImg from "../Images/service4.jpg";
import arztImg from "../Images/arztin2.jpg";
import Icons from "./sprite.svg";

import rev1 from "../Images/rev1.png";
import rev2 from "../Images/rev2.png";
import rev3 from "../Images/rev3.png";
import rev4 from "../Images/rev4.png";
import rev5 from "../Images/rev5.png";
import rev6 from "../Images/rev6.png";
import rev7 from "../Images/rev7.png";
import rev8 from "../Images/rev8.png";
import rev9 from "../Images/rev9.png";
import rev10 from "../Images/rev10.png";
import rev11 from "../Images/rev11.png";
import rev12 from "../Images/rev12.png";
import rev13 from "../Images/rev13.png";
import rev14 from "../Images/rev14.png";
import rev15 from "../Images/rev15.png";
import stars from "../Images/stars.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import s from "./home.module.css";

export const Home = () => {
    const [show, setShow] = useState(false);
    const { pathname } = useLocation();
    useEffect(() => {
        setShow(true);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const [activeIndex, setActiveIndex] = useState(null);
    const toggleItem = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    const items = [
        {
            title: "Wie lange dauert eine Behandlung?",
            content:
                "Ich plane für den Erstkontakt 60min ein. Die Dauer eines Folgetermins wird dann zusammen mit Ihnen besprochen.",
        },
        {
            title: "Was muss ich vor und nach einer osteopathischen Behandlung beachten?",
            content:
                "Bitte wählen Sie Ihren Termin, so dass Sie möglichst entspannt ankommen und wenn möglich nicht zu viele Termine im Anschluss wahrnehmen müssen. Trinken Sie viel Wasser, wenig Alkohol und bewegen Sie sich ohne Überanstrengung oder gönnen sich Ruhe. Die Behandlung ist nicht mit dem Verlassen der Praxis beendet, sie fängt da erst an. Ihr Körper wird auf die Behandlungsreize noch einige Zeit reagieren. Erstverschlimmerungen sind sehr selten, zeigen sich bestenfalls in Form eines Muskelkaters. Sollten Beschwerden verstärkt auftreten und länger als 2 Tage andauern, bitte ich Sie, sich mit mir in Verbindung zu setzten. ",
        },
        {
            title: "Was muss ich bei Terminabsagen / Verschiebungen beachten?",
            content:
                "Ich bitte darum, wenn Sie einen Termin nicht wahrnehmen können, dass Sie diesen so früh wie möglich absagen. Bei Absagen innerhalb der 24 Stundenfrist werde ich mich bemühen einen Ersatz zu finden, ist dieses nicht möglich, müss ich den Termin leider in Rechnung stellen. In der Regel habe ich immer Patienten auf unserer Warteliste, die sich freuen, wenn ein Termin vorverlegt werden kann. ",
        },
    ];

    return (
        <div className={s.wrapperPage}>
            {/* Hero section */}
            <section className={s.heroBg}>
                <Container>
                    <div
                        className={show ? `${s.heroLogoShow}` : `${s.heroLogo}`}
                    >
                        <img
                            className={s.heroLogoImg}
                            src={hero}
                            alt="Praxis"
                        />
                        <div className={s.heroBtn}>
                            <a
                                href="tel:+4915127504549"
                                className={s.btn}
                                style={{
                                    color: "#545655",
                                    outline: "1px solid rgb(84, 86, 85)",
                                }}
                            >
                                TELEFONISCH TERMIN VEREINBAREN
                            </a>
                        </div>
                        <div className={s.heroBtn}>
                            <a
                                href="https://api.whatsapp.com/send?phone=+4915127504549"
                                className={s.btn}
                                style={{
                                    color: "#545655",
                                    outline: "1px solid rgb(84, 86, 85)",
                                }}
                            >
                                WHATSAPP
                            </a>
                        </div>
                    </div>
                </Container>
            </section>
            {/* Losung/About section. */}
            <section className={s.losung}>
                <Container>
                    <p>
                        <b>Ihre Gesundheit und Schönheit zu bewahren</b> <br />
                        sanft, natürlich und ganzheitlich - das ist meine
                        Passion.
                    </p>
                </Container>
            </section>
            {/* Salon & Service & About section*/}
            <section className={s.background1}>
                <Container className={s.conteinerSection}>
                    <Row className="g-0">
                        <Col lg={6} className=" ps-4 pe-4 pt-2 pb-4">
                            <div className={s.textBlockHome}>
                                <h2 className={s.headersText}> Über mich</h2>
                                <hr />
                                <div className={s.textFormat}>
                                    <p>
                                        Herzlich willkommen auf der Seite meiner
                                        Praxis. Mein Name ist Marina Wentland.
                                        Ich bin Diplom Physiotherapeutin,
                                        Heilpraktikerin und staatlich anerkannte
                                        Kosmetikerin.
                                    </p>
                                </div>
                                <Link to="/about" className={s.btn}>
                                    ÜBER MICH...
                                </Link>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <img
                                src={arztImg}
                                alt="Arztin"
                                Width="100%"
                                height="auto"
                                className={s.imgShadow}
                                loading="lazy"
                            />
                        </Col>
                    </Row>

                    <Row className="g-0">
                        <Col lg={6} className="ps-4 pe-4 pt-4 pb-4 order-lg-2">
                            <div className={s.textBlockHome}>
                                <h2 className={s.headersText}>Leistungen</h2>
                                <hr />
                                <div className={s.textFormat}>
                                    <p>
                                        Unsere Angebote umfassen eine breite
                                        Palette Therapien für Ihr Wohlbefinden
                                        wie Klassische-und Sportmassage,
                                        Lympfdrainage, Schröpfen, Kinesio Tape,
                                        Wirbelsäulen Therapie. Vielfältige
                                        Optionen für kosmetische und ästhetische
                                        Behandlungen: Microdermabrasion,
                                        Aqua-Peel, Microneedling, Mesotherapie,
                                        Biorevitalisierung und Unterspritzungen.
                                    </p>
                                </div>

                                <Link to="/service" className={s.btn}>
                                    LEISTUNGEN...
                                </Link>
                            </div>
                        </Col>
                        <Col lg={6} className="order-lg-1">
                            <img
                                src={serviceImg}
                                alt="Service"
                                Width="100%"
                                height="auto"
                                className={s.imgShadow}
                                loading="lazy"
                            />
                        </Col>
                    </Row>

                    <Row className="g-0">
                        <Col lg={6} className=" ps-4 pe-4 pt-4 pb-4">
                            <div className={s.textBlockHome}>
                                <h2 className={s.headersText}>Praxis</h2>
                                <hr />
                                <div className={s.textFormat}>
                                    <p>
                                        Meine moderne und neueingerichtete
                                        Praxis liegt im Neubaugebiet
                                        Braunschweig-Nord. Die Praxis ist sehr
                                        gut mit dem Auto aus allen Richtungen zu
                                        erreichen und bietet ausreichend
                                        Parkmöglichkeiten.
                                    </p>
                                </div>
                                <Link to="/praxis" className={s.btn}>
                                    PRAXIS...
                                </Link>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <img
                                src={praxisImg}
                                alt="PraxisC"
                                Width="100%"
                                height="auto"
                                className={s.imgShadow}
                                loading="lazy"
                            />
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* Reviews section*/}
            <section className={s.background3}>
                <Container className={s.conteinerSection}>
                    <div className={s.losung}>
                        <Container>
                            <p>
                                „ <b>Ein guter Ruf</b> ist wertvoller als Gold“
                            </p>
                        </Container>
                    </div>

                    {/*Reviews Slider*/}
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={10}
                        slidesPerView={3}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            700: {
                                slidesPerView: 2,
                            },
                            1000: { slidesPerView: 3 },
                        }}
                        pagination={{ clickable: true }}
                    >
                        <SwiperSlide>
                            <div className={s.cardReview}>
                                <div className={s.cardHeader}>
                                    <img
                                        src={rev15}
                                        alt="Klients Foto"
                                        Width="40px"
                                        height="40px"
                                        loading="lazy"
                                    />
                                    <div>
                                        <p>Tati E</p>
                                    </div>
                                </div>
                                <p className={s.cardText}>
                                    Ich kann Fr Wentland einfach nur
                                    weiterempfehlen, super hilfsbereit, sehr
                                    schnell einen Termin bekommen. Sie hat mich
                                    super beraten und aufgeklärt. Hat bei meiner
                                    Mutter sofort einen Bandscheiben Vorfall
                                    entdeckt, was die Hausärztin nicht gesehen
                                    hat. Wir sind mega begeistert und sehr
                                    zufrieden.
                                </p>
                                <div className={s.starsImg}>
                                    <img
                                        src={stars}
                                        width="100px"
                                        height="auto"
                                        alt="Stars"
                                        loading="lazy"
                                    />
                                </div>
                                <div className={s.cardDate}>
                                    <p>10.11.2024</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={s.cardReview}>
                                <div className={s.cardHeader}>
                                    <img
                                        src={rev14}
                                        alt="Klients Foto"
                                        Width="40px"
                                        height="40px"
                                        loading="lazy"
                                    />
                                    <div>
                                        <p>Sandra Litz-Dams</p>
                                    </div>
                                </div>
                                <p className={s.cardText}>
                                    Die Praxis von Frau Wentland ist sehr modern
                                    und gemütlich. Sie hat mir ausführlich
                                    erklärt, welche Behandlung ich erhalten
                                    werde und wie sie funktioniert. Sie ist eine
                                    kompetente Fachkraft, die liebt, was sie
                                    tut, und das macht den Unterschied, wenn man
                                    mit Menschen arbeitet. Die Organisation und
                                    die Sauberkeit des Ortes waren sehr
                                    offensichtlich.
                                </p>
                                <div className={s.starsImg}>
                                    <img
                                        src={stars}
                                        width="100px"
                                        height="auto"
                                        alt="Stars"
                                        loading="lazy"
                                    />
                                </div>
                                <div className={s.cardDate}>
                                    <p>21.11.2024</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={s.cardReview}>
                                <div className={s.cardHeader}>
                                    <img
                                        src={rev12}
                                        alt="Klients Foto"
                                        Width="40px"
                                        height="40px"
                                        loading="lazy"
                                    />
                                    <div>
                                        <p>Jan</p>
                                    </div>
                                </div>
                                <p className={s.cardText}>
                                    Ich bin hier zur Mesotherapie für die Haare
                                    und zu 100% begeistert. Besonders gefällt
                                    mir die kompetente und immer ehrliche
                                    Beratung sowie die professionelle
                                    Behandlung. Dazu gibts tolle Gespräche in
                                    einer Praxis mit Wohlfühlcharakter. Absolute
                                    Weiterempfehlung 👍🏼
                                </p>
                                <div className={s.starsImg}>
                                    <img
                                        src={stars}
                                        width="100px"
                                        height="auto"
                                        alt="Stars"
                                        loading="lazy"
                                    />
                                </div>
                                <div className={s.cardDate}>
                                    <p>25.11.2024</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={s.cardReview}>
                                <div className={s.cardHeader}>
                                    <img
                                        src={rev13}
                                        alt="Klients Foto"
                                        Width="40px"
                                        height="40px"
                                        loading="lazy"
                                    />
                                    <div>
                                        <p>Olesja Rempel</p>
                                    </div>
                                </div>
                                <p className={s.cardText}>
                                    Ich habe Frau Wentland glücklicherweise in
                                    der Nachbarschaft. Sie überzeugt durch
                                    authentische und ehrliche Beratungen und
                                    ausgewählte Behandlungsempfehlungen. Ich
                                    fühle mich bei ihr sehr gut aufgehoben und
                                    freue mich auf zukünftige Termine.
                                    Inzwischen habe ich auch meine Familie bei
                                    ihr eingeschrieben, sodass meine Mutter,
                                    Grossmutter und Schwester von Frau Wentland
                                    zu voller Zufriedenheit behandelt werden.
                                </p>
                                <div className={s.starsImg}>
                                    <img
                                        src={stars}
                                        width="100px"
                                        height="auto"
                                        alt="Stars"
                                        loading="lazy"
                                    />
                                </div>
                                <div className={s.cardDate}>
                                    <p>05.10.2024</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={s.cardReview}>
                                <div className={s.cardHeader}>
                                    <img
                                        src={rev11}
                                        alt="Klients Foto"
                                        Width="40px"
                                        height="40px"
                                        loading="lazy"
                                    />
                                    <div>
                                        <p>Christian Ehlers</p>
                                    </div>
                                </div>
                                <p className={s.cardText}>
                                    Sehr ausführliche und Kompetente Beratung.
                                    Ich bin mit einem Rückenleiden gekommen und
                                    nach 6 Behandlungen schmerzfrei gegangen.
                                    Ich kann die Praxis wärmstens empfehlen.
                                    👍👍👍
                                </p>
                                <div className={s.starsImg}>
                                    <img
                                        src={stars}
                                        width="100px"
                                        height="auto"
                                        alt="Stars"
                                        loading="lazy"
                                    />
                                </div>
                                <div className={s.cardDate}>
                                    <p>08.10.2024</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={s.cardReview}>
                                <div className={s.cardHeader}>
                                    <img
                                        src={rev10}
                                        alt="Klients Foto"
                                        Width="40px"
                                        height="40px"
                                        loading="lazy"
                                    />
                                    <div>
                                        <p>Richard</p>
                                    </div>
                                </div>
                                <p className={s.cardText}>
                                    Ich bin bei Marina zur Meso-Therapie und bin
                                    nach den bisherigen 5 Behandlungen total
                                    begeistert + modern und chic eingerichtete
                                    Praxis und Räumlichkeiten + Marina ist sehr
                                    professionell, arbeitet wunderbar sauber und
                                    erfreulich sanft: wer schon einmal Meso-
                                    oder PRP-Therapien auf der Kopfhaut bekommen
                                    hat, weiß wie das normalerweise schmerzen
                                    kann + immer gut gelaunt und für coole
                                    Gespräche aufgelegt + erste positive Effekte
                                    sind auch zu sehen, sodass ich am Ball
                                    bleiben werde Marina's Angebots- und
                                    Produkt-Portfolio ist sehr groß: ich kann
                                    ihre Praxis für alle, männlich und weiblich,
                                    nur wärmstens empfehlen.
                                </p>
                                <div className={s.starsImg}>
                                    <img
                                        src={stars}
                                        width="100px"
                                        height="auto"
                                        alt="Stars"
                                        loading="lazy"
                                    />
                                </div>
                                <div className={s.cardDate}>
                                    <p>10.10.2024</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={s.cardReview}>
                                <div className={s.cardHeader}>
                                    <img
                                        src={rev9}
                                        alt="Klients Foto"
                                        Width="40px"
                                        height="40px"
                                        loading="lazy"
                                    />
                                    <div>
                                        <p>J. Zaa.</p>
                                    </div>
                                </div>
                                <p className={s.cardText}>
                                    Die Einrichtung das Ambiente und natürlich
                                    Marina einfach wunderbar. Sie weiß genau was
                                    zu tun ist und bietet immer eine perfekte
                                    Beratung an. Meine Kosmetikerin des
                                    Vertrauens!!!
                                </p>
                                <div className={s.starsImg}>
                                    <img
                                        src={stars}
                                        width="100px"
                                        height="auto"
                                        alt="Stars"
                                        loading="lazy"
                                    />
                                </div>
                                <div className={s.cardDate}>
                                    <p>15.10.2024</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={s.cardReview}>
                                <div className={s.cardHeader}>
                                    <img
                                        src={rev8}
                                        alt="Klients Foto"
                                        Width="40px"
                                        height="40px"
                                        loading="lazy"
                                    />
                                    <div>
                                        <p>Oxana Ibe</p>
                                    </div>
                                </div>
                                <p className={s.cardText}>
                                    Ich war bereits mehrmals in der Praxis, topp
                                    Beratung und super viele
                                    Anwendungsmöglichkeiten. Frau Wentland ist
                                    super freundlich, locker und professionell.
                                    Ich habe kosmetische Behandlungen und
                                    ästhetisch Mesotherapie sowie Falten
                                    unterspritzungen gemacht ,sehe super
                                    Ergebnisse und komme bestimmt wieder.
                                </p>
                                <div className={s.starsImg}>
                                    <img
                                        src={stars}
                                        width="100px"
                                        height="auto"
                                        alt="Stars"
                                        loading="lazy"
                                    />
                                </div>
                                <div className={s.cardDate}>
                                    <p>20.09.2024</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={s.cardReview}>
                                <div className={s.cardHeader}>
                                    <img
                                        src={rev7}
                                        alt="Klients Foto"
                                        Width="40px"
                                        height="40px"
                                        loading="lazy"
                                    />
                                    <div>
                                        <p>Helen Mazurenko</p>
                                    </div>
                                </div>
                                <p className={s.cardText}>
                                    Vielen Dank für den tollen Service. Qualität
                                    auf höchstem Niveau. Professionelle
                                    Anwendung, erfahrene und typgerechte
                                    Beratung. Ich kann die Praxis jedem ans Herz
                                    legen.
                                </p>
                                <div className={s.starsImg}>
                                    <img
                                        src={stars}
                                        width="100px"
                                        height="auto"
                                        alt="Stars"
                                        loading="lazy"
                                    />
                                </div>
                                <div className={s.cardDate}>
                                    <p>28.02.2024</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={s.cardReview}>
                                <div className={s.cardHeader}>
                                    <img
                                        src={rev3}
                                        alt="Klients Foto"
                                        Width="40px"
                                        height="40px"
                                        loading="lazy"
                                    />
                                    <div>
                                        <p>Sandra Stolze</p>
                                    </div>
                                </div>
                                <p className={s.cardText}>
                                    Ich bin auf die Praxis von Frau Wentland
                                    durch einen Flyer aufmerksam geworden und
                                    gehe seither alle 14 Tage zur Massage. Die
                                    Praxis ist schön eingerichtet, ich habe mich
                                    direkt wohlgefühlt. Frau Wentland selbst ist
                                    freundlich, sehr kompetent und gibt rundum
                                    eine gute Beratung. Die Massagen sind sehr
                                    gut (sonst würde ich ja nicht immer wieder
                                    hingehen 😏). Und auch das
                                    Preis-Leistungs-Verhältnis ist absolut
                                    passend. Ich kann sie zu 100%
                                    weiterempfehlen. 👍
                                </p>
                                <div className={s.starsImg}>
                                    <img
                                        src={stars}
                                        width="100px"
                                        height="auto"
                                        alt="Stars"
                                        loading="lazy"
                                    />
                                </div>
                                <div className={s.cardDate}>
                                    <p>25.02.2024</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={s.cardReview}>
                                <div className={s.cardHeader}>
                                    <img
                                        src={rev2}
                                        alt="Klients Foto"
                                        Width="40px"
                                        height="40px"
                                        loading="lazy"
                                    />
                                    <div>
                                        <p>Katarzyna Majorczyk-Norek</p>
                                    </div>
                                </div>

                                <p className={s.cardText}>
                                    Marina ist sehr freundlich und hilfsbereit.
                                    Frau Wentland hat sich bei jeder Behandlung
                                    sehr viel Zeit genommen für mich. Ich kann
                                    Frau Wentland zu 100% weiter empfehlen.
                                </p>
                                <div className={s.starsImg}>
                                    <img
                                        src={stars}
                                        width="100px"
                                        height="auto"
                                        alt="Stars"
                                        loading="lazy"
                                    />
                                </div>
                                <div className={s.cardDate}>
                                    <p>08.02.2024</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={s.cardReview}>
                                <div className={s.cardHeader}>
                                    <img
                                        src={rev6}
                                        alt="Klients Foto"
                                        Width="40px"
                                        height="40px"
                                        loading="lazy"
                                    />
                                    <div>
                                        <p>Nicole Haenisch</p>
                                    </div>
                                </div>

                                <p className={s.cardText}>
                                    Sehr professionell!!! Einfach
                                    empfehlenswert!!!!
                                </p>
                                <div className={s.starsImg}>
                                    <img
                                        src={stars}
                                        width="100px"
                                        height="auto"
                                        alt="Stars"
                                        loading="lazy"
                                    />
                                </div>
                                <div className={s.cardDate}>
                                    <p>26.01.2024</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={s.cardReview}>
                                <div className={s.cardHeader}>
                                    <img
                                        src={rev1}
                                        alt="Klients Foto"
                                        Width="40px"
                                        height="40px"
                                        loading="lazy"
                                    />
                                    <div>
                                        <p>Marina Fischer</p>
                                    </div>
                                </div>
                                <p className={s.cardText}>
                                    Fachkompetente Beratung, sehr freundliche
                                    und hygienische Atmosphäre. Frau Wendland
                                    nimmt sich Zeit alle Fragen zu beantworten
                                    und stellt einen individuellen
                                    Behandlugsplan auf. Freue mich auf mein
                                    nächsten Termin.
                                </p>
                                <div className={s.starsImg}>
                                    <img
                                        src={stars}
                                        width="100px"
                                        height="auto"
                                        alt="Stars"
                                        loading="lazy"
                                    />
                                </div>
                                <div className={s.cardDate}>
                                    <p>26.01.2024</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className={s.cardReview}>
                                <div className={s.cardHeader}>
                                    <img
                                        src={rev4}
                                        alt="Klients Foto"
                                        Width="40px"
                                        height="40px"
                                        loading="lazy"
                                    />
                                    <div>
                                        <p>Annie Adiprasito</p>
                                    </div>
                                </div>
                                <p className={s.cardText}>
                                    Eine sehr sympathische Praxis mit
                                    kompetenter Beratung und Behandlung
                                </p>
                                <div className={s.starsImg}>
                                    <img
                                        src={stars}
                                        width="100px"
                                        height="auto"
                                        alt="Stars"
                                        loading="lazy"
                                    />
                                </div>
                                <div className={s.cardDate}>
                                    <p>28.01.2024</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={s.cardReview}>
                                <div className={s.cardHeader}>
                                    <img
                                        src={rev5}
                                        alt="Klients Foto"
                                        Width="40px"
                                        height="40px"
                                        loading="lazy"
                                    />
                                    <div>
                                        <p>Ina Brocke</p>
                                    </div>
                                </div>
                                <p className={s.cardText}>
                                    Ich war in den neuen Räumlichkeiten "Praxis
                                    für Naturheilkunde und Ästhetik" welche sehr
                                    schön und ansprechend eingerichtet sind.
                                    Dazu zeichnet sich die Praxis über
                                    professionelle Anwendungen, fachliche
                                    Kompetenz, Kundenfreundlichkeit und
                                    typgerechte Beratung aus. Nach jeder
                                    Behandlung mit natürlich tollen Ergebnis
                                    kann ich nur sagen - wow. Rundum perfekt und
                                    absolut empfehlenswert.
                                </p>
                                <div className={s.starsImg}>
                                    <img
                                        src={stars}
                                        width="100px"
                                        height="auto"
                                        alt="Stars"
                                        loading="lazy"
                                    />
                                </div>
                                <div className={s.cardDate}>
                                    <p>28.01.2024</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </Container>
            </section>

            {/* Häufige Fragen section*/}
            <section className={s.background1}>
                <Container className={s.conteinerSection}>
                    <h2 className={`${s.headersText} ${s.zentredText}`}>
                        {" "}
                        Häufige Fragen{" "}
                    </h2>
                    <div className="mt-4">
                        {items.map((item, index) => (
                            <div key={index} className="p-2">
                                <div
                                    className={`${s.titleText} d-flex justify-content-between align-items-center`}
                                    onClick={() => toggleItem(index)}
                                    style={{ cursor: "pointer" }}
                                >
                                    {item.title}
                                    <span
                                        className={`${s.icon} ${
                                            activeIndex === index
                                                ? s.iconOpen
                                                : s.iconClosed
                                        }`}
                                    >
                                        {activeIndex === index ? "−" : "+"}
                                    </span>
                                </div>
                                <div
                                    className={`${s.content} ${
                                        activeIndex === index
                                            ? s.contentOpen
                                            : s.contentClosed
                                    }`}
                                >
                                    <small>{item.content}</small>
                                </div>
                                <hr />
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Adress section*/}
            <section className={s.background3}>
                <Container className={s.conteinerSection}>
                    <Row className="g-0 mr-auto p-4">
                        <Col lg={6}>
                            <h3 className={s.headersText_withIcon}>Kontakt</h3>
                            <ul>
                                <li>Marina Wentland</li>
                                <li>Praxis für Naturheilkunde und Ästhetik</li>
                                <li>-</li>
                                <li>Mitgaustraße 18 </li>
                                <li>38106 Braunschweig Nord</li>
                                <li>-</li>
                                <li>
                                    <b>Tel.:</b>{" "}
                                    <a
                                        href="tel:+4915127504549"
                                        className={s.textStyleLink}
                                    >
                                        0151 275 045 49
                                    </a>
                                </li>
                                <li>
                                    <b>E-Mail: </b>
                                    <a
                                        href="mailto: info@praxis-wentland.de"
                                        className={s.textStyleLink}
                                    >
                                        info@praxis-wentland.de
                                    </a>
                                </li>
                                <li>-</li>

                                <li>
                                    <div className={s.socialLinks}>
                                        <a
                                            href="https://instagram.com/praxismw?igshid=MzMyNGUyNmU2YQ=="
                                            className={s.socialLinksItem}
                                        >
                                            <svg className={s.iconInstagram}>
                                                <use
                                                    href={Icons + "#instagram"}
                                                ></use>
                                            </svg>
                                        </a>

                                        <a
                                            href="https://api.whatsapp.com/send?phone=+4915127504549"
                                            className={s.socialLinksItem}
                                        >
                                            <svg className={s.iconWhatsapp}>
                                                <use
                                                    href={Icons + "#whatsapp"}
                                                ></use>
                                            </svg>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </Col>
                        <Col lg={6}>
                            <h3 className={s.headersText_withIcon}>
                                Öffnungszeiten
                            </h3>
                            <ul>
                                <li>Montag - Freitag:</li>
                                <li>10:00 - 18:00 Uhr</li>
                                <li>-</li>
                                <li>Termine nach Vereinbarung</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

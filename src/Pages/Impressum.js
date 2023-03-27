import React from "react";
import { Container } from "react-bootstrap";

import s from "./home.module.css";

export const Impressum = () => {
    return (
        <div className={s.mainFon}>
            <Container className={s.coteinerPages}>
                <h1>Impressum</h1>
                <p>Naturheilpraxis Wentland Straße 1 77777 Braunschweig</p>
                <p>E-mail: info@studiobeuty.de</p>
                <p>Tel.: +49 176 238 837 29</p>
                <p>Inhaltlich verantwortlich gemäß §6 MDstV:</p>
                <p>
                    Marina Wentland als Heilpraktikerin für Psychotherapie tätig
                    aufgrund der Erlaubnis zur Ausübung der Heilkunde gemäß §1
                    Abs. 1 des Gesetzes über die Ausübung der Heilkunde ohne
                    Bestallung (Heilpraktikergesetz) vom 17.02.1939. Die
                    Erlaubnis wurde durch Gesundheitsamt Freiburg erteilt.
                </p>
                <p>-Befreit von der Umsatzsteuer nach § 4 UStG</p>
                <p>-Aufsichtsbehörde Gesundheitsamt Ortenau</p>
                <p>-Wir unterliegen der Schweigepflicht nach § 203 StGB.</p>
                <p>
                    Selbstverständlich werden sämtliche Informationen und Daten
                    diskret und streng vertraulich behandelt.
                </p>
            </Container>
        </div>
    );
};

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
        <div className={`${s.wrapperPage} ${s.conteinerPage}`}>
            {prop.teil === "im" && (
                <section className={s.background1}>
                    <Container className={s.conteinerSection}>
                        <h1 className={`${s.headersText} ${s.zentredText}`}>
                            Impressum
                        </h1>
                        <hr />
                        <p>
                            Marina Wentland <br />
                            Praxis für Naturheilkunde und Ästhetik <br />{" "}
                            Mitgaustraße 18 <br /> 38106 Braunschweig Nord
                        </p>

                        <p>Tel.: +49151 275 045 49</p>
                        <p>E-mail: info@praxis-wentland.de</p>
                        <p>Umsatzsteuer-ID: DE361140100</p>
                        <p>Inhaltlich verantwortlich gemäß §6 MDstV:</p>
                        <p>
                            Marina Wentland als Heilpraktikerin tätig aufgrund
                            der Erlaubnis zur Ausübung der Heilkunde gemäß §1
                            Abs. 1 des Gesetzes über die Ausübung der Heilkunde
                            ohne Bestallung (Heilpraktikergesetz) vom
                            17.02.1939. Die Erlaubnis wurde durch Gesundheitsamt
                            Hannover erteilt.
                        </p>
                        <p>-Befreit von der Umsatzsteuer nach § 4 UStG</p>
                        <p>-Aufsichtsbehörde Gesundheitsamt Braunschweig</p>
                        <p>
                            -Wir unterliegen der Schweigepflicht nach § 203
                            StGB.
                        </p>
                        <p>
                            Haftungsausschluss <br /> Haftung für Inhalte Als
                            Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für
                            eigene Inhalte auf diesen Seiten nach den
                            allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis
                            10 TMG sind wir als Diensteanbieter jedoch nicht
                            verpflichtet, übermittelte oder gespeicherte fremde
                            Informationen zu überwachen oder nach Umständen zu
                            forschen, die auf eine rechtswidrige Tätigkeit
                            hinweisen. Verpflichtungen zur Entfernung oder
                            Sperrung der Nutzung von Informationen nach den
                            allgemeinen Gesetzen bleiben hiervon unberührt. Eine
                            diesbezügliche Haftung ist jedoch erst ab dem
                            Zeitpunkt der Kenntnis einer konkreten
                            Rechtsverletzung möglich. Bei Bekanntwerden von
                            entsprechenden Rechtsverletzungen werden wir diese
                            Inhalte umgehend entfernen. <br />
                            Haftung für Links <br />
                            Unser Angebot enthält Links zu externen Webseiten
                            Dritter, auf deren Inhalte wir keinen Einfluss
                            haben. Deshalb können wir für diese fremden Inhalte
                            auch keine Gewähr übernehmen. Für die Inhalte der
                            verlinkten Seiten ist stets der jeweilige Anbieter
                            oder Betreiber der Seiten verantwortlich. Die
                            verlinkten Seiten wurden zum Zeitpunkt der
                            Verlinkung auf mögliche Rechtsverstöße überprüft.
                            Rechtswidrige Inhalte waren zum Zeitpunkt der
                            Verlinkung nicht erkennbar. Eine permanente
                            inhaltliche Kontrolle der verlinkten Seiten ist
                            jedoch ohne konkrete Anhaltspunkte einer
                            Rechtsverletzung nicht zumutbar. Bei Bekanntwerden
                            von Rechtsverletzungen werden wir derartige Links
                            umgehend entfernen.
                        </p>
                        <p>
                            Urheberrecht <br /> Die durch die Seitenbetreiber
                            erstellten Inhalte und Werke auf diesen Seiten
                            unterliegen dem deutschen Urheberrecht. Die
                            Vervielfältigung, Bearbeitung, Verbreitung und jede
                            Art der Verwertung außerhalb der Grenzen des
                            Urheberrechtes bedürfen der schriftlichen Zustimmung
                            des jeweiligen Autors bzw. Erstellers. Downloads und
                            Kopien dieser Seite sind nur für den privaten, nicht
                            kommerziellen Gebrauch gestattet. Soweit die Inhalte
                            auf dieser Seite nicht vom Betreiber erstellt
                            wurden, werden die Urheberrechte Dritter beachtet.
                            Insbesondere werden Inhalte Dritter als solche
                            gekennzeichnet. Sollten Sie trotzdem auf eine
                            Urheberrechtsverletzung aufmerksam werden, bitten
                            wir um einen entsprechenden Hinweis. Bei
                            Bekanntwerden von Rechtsverletzungen werden wir
                            derartige Inhalte umgehend entfernen.
                        </p>
                        <p>
                            Selbstverständlich werden sämtliche Informationen
                            und Daten diskret und streng vertraulich behandelt.
                        </p>
                    </Container>
                </section>
            )}
            {prop.teil === "ds" && (
                <section className={s.background1}>
                    <Container className={s.conteinerSection}>
                        <h1 className={`${s.headersText} ${s.zentredText}`}>
                            Datenschutzerklärung
                        </h1>
                        <hr />
                        <p>1. Geltungsbereich</p>
                        <p>
                            Der Schutz personenbezogener Daten ist uns sehr
                            wichtig. Mit den nachfolgenden Hinweisen zum
                            Datenschutz wollen wir Ihnen näherbringen, welche
                            personenbezogenen Daten wir für welche Zwecke
                            verarbeiten, während Sie unser Internetangebot
                            nutzen. Die nachfolgenden Hinweise gelten für alle
                            Inhalte der oben genannten Internetseite
                            (nachfolgend „Angebot“ / „Webseite“). Die
                            rechtlichen Grundlagen des Datenschutzes finden sich
                            in der EU-Datenschutzgrundverordnung (nachfolgend
                            DSGVO) und den in der EU geltenden nationalen
                            Durchführungsvorschriften, in Deutschland im
                            Bundesdatenschutzgesetz (BDSG).
                        </p>
                        <p>2. Begriffsbestimmungen</p>
                        <p>
                            Personenbezogene Daten <br />
                            „Personenbezogene Daten“ sind alle Informationen,
                            die sich auf eine identifizierte oder
                            identifizierbare natürliche Person beziehen; als
                            identifizierbar wird eine natürliche Person
                            angesehen, die direkt oder indirekt, insbesondere
                            mittels Zuordnung zu einer Kennung wie einem Namen,
                            zu einer Kennnummer, zu Standortdaten, zu einer
                            Online-Kennung oder zu einem oder mehreren
                            besonderen Merkmalen identifiziert werden kann, die
                            Ausdruck der physischen, physiologischen,
                            genetischen, psychischen, wirtschaftlichen,
                            kulturellen oder sozialen Identität dieser
                            natürlichen Person sind. <br />
                            Verarbeitung <br />
                            „Verarbeitung“ meint jeden mit oder ohne Hilfe
                            automatisierter Verfahren ausgeführten Vorgang oder
                            jede solche Vorgangsreihe im Zusammenhang mit
                            personenbezogenen Daten wie das Erheben, das
                            Erfassen, die Organisation, das Ordnen, die
                            Speicherung, die Anpassung oder Veränderung, das
                            Auslesen, das Abfragen, die Verwendung, die
                            Offenlegung durch Übermittlung, Verbreitung oder
                            eine andere Form der Bereitstellung, den Abgleich
                            oder die Verknüpfung, die Einschränkung, das Löschen
                            oder die Vernichtung.
                        </p>
                        <p>3. Arten von personenbezogenen Daten</p>
                        <p>
                            Zugriffsdaten <br />
                            Zugriffsdaten sind Daten über jeden Zugriff auf den
                            Server, auf dem sich meine Webseite befindet. Zu den
                            Zugriffsdaten gehören, IP-Adresse des
                            Zugriffsgerätes, Datum und Uhrzeit der Anfrage,
                            Zeitzonendifferenz zur Greenwich Mean Time (GMT),
                            Inhalt der Anforderung ,
                            Zugriffsstatus/HTTP-Statuscode, jeweils übertragene
                            Datenmenge, Website, von der die Anforderung kommt,
                            Browser, Betriebssystem und dessen Oberfläche,
                            Sprache und Version der Browsersoftware. <br />
                            Cookies <br />
                            Zusätzlich zu den zuvor genannten Daten werden bei
                            Ihrer Nutzung unserer Website Cookies auf Ihrem
                            Zugriffsgerät gespeichert. Bei Cookies handelt es
                            sich um kleine Textdateien, die dem von Ihnen
                            verwendeten Browser zugeordnet gespeichert werden
                            und durch welche der Stelle, die den Cookie setzt
                            (hier durch uns oder durch Drittanbieter), bestimmte
                            Informationen zufließen. <br />
                            Mitteilungsdaten <br /> Sofern Sie das
                            Kontaktformular unserer Webseite ausfüllen oder auf
                            anderem Wege mit uns Kontakt aufnehmen, verarbeiten
                            wir die personenbezogenen Daten, die Sie uns
                            mitteilen.
                        </p>
                        <p>4. Zwecke der Verarbeitung</p>
                        <p>
                            Zugriffsdaten <br /> Unser Hosting-Anbieter erhebt
                            die Zugriffsdaten in unserem Auftrag zum Betrieb und
                            zur Erreichbarkeit unserer Webseite sowie aus
                            Sicherheitsgründen zur Betrugs- und
                            Missbrauchskontrolle. Rechtsgrundlage für die
                            Verarbeitung ist Art. 6 Abs. 1 Satz 1 f DSGVO. Zur
                            Verarbeitung der IP-Adresse durch Drittanbieter
                            siehe Ziffer 6. <br /> Cookies <br /> Cookies dienen
                            zum einem der Benutzerfreundlichkeit unserer
                            Webseite und damit den Nutzern (z.B. Speicherung von
                            Logindaten). Zum anderen dienen Sie dazu, die
                            statistischen Daten der Webseitennutzung zu erfassen
                            und sie zwecks Verbesserung unserer Angebote zu
                            analysieren zu können. Hinsichtlich des Einsatzes
                            von Cookies durch Drittanbieter verweisen wir auf
                            Ziffer 6. Rechtsgrundlage für den Einsatz von
                            Cookies ist Art. 6 Abs. 1 Satz 1 f DSGVO. Die Nutzer
                            können auf den Einsatz der Cookies Einfluss nehmen.
                            Die meisten Browser verfügen über eine Option mit
                            der das Speichern von Cookies eingeschränkt oder
                            komplett verhindert wird. Allerdings wird darauf
                            hingewiesen, dass die Nutzung und insbesondere der
                            Nutzungskomfort der Webseite ohne Cookies
                            eingeschränkt werden. <br /> Mitteilungsdaten <br />{" "}
                            Sofern Sie personenbezogene Daten über unser
                            Kontaktformular eingeben und uns durch Absenden
                            übermitteln oder uns auf anderem Wege mitteilen,
                            hängt der Zweck der Datenverarbeitung von Ihrem
                            Anliegen ab. Wir werden Ihre Personenbezogenen Daten
                            dazu verwenden, um Ihr Anliegen zu bearbeiten
                            (Rechtsgrundlage ist Art. 6 Abs. 1 Satz 1 f DSGVO).
                            Ihren Vor- und Nachnamen und Ihre Adresse verwenden
                            wir zusätzlich für postalische Direktwerbung
                            (Rechtsgrundlage ist Art. 6 Abs. 1 Satz 1 f DSGVO).
                        </p>
                        <p>
                            5. Kategorien von Empfängern personenbezogener Daten
                        </p>
                        <p>
                            Webhosting-Anbieter <br /> Die in Ziffer 3 genannten
                            Daten werden in unseren Auftrag auf den Servern
                            unseres Webhosting-Anbieters gespeichert. Sofern Sie
                            mit mir über E-Mail kommunizieren, werden Ihre
                            E-Mails und die darin mitgeteilten personenbezogenen
                            Daten in unserem Auftrag ebenfalls auf den Servern
                            unseres Hosting-Anbieters gespeichert
                            (Rechtsgrundlage ist Art. 6 Abs. 1 Satz 1 a, f
                            DSGVO). <br /> IT-Dienstleister <br /> Sofern wir
                            die in Ziffer 3 genannten Daten auf unseren Servern
                            speichern, erhalten unsere IT-Dienstleister Zugriff,
                            sofern dies aus technischen Gründen und zur
                            Systempflege erforderlich ist (Rechtsgrundlage ist
                            Art. 6 Abs. 1 Satz 1 f DSGVO). Einbindung von
                            Diensten und Inhalten Dritter Hinsichtlich der
                            Einbindung von Diensten und Inhalten Dritter auf
                            unserer Webseite und der diesbezüglichen
                            Datenübermittlungen siehe Ziffer 6.
                        </p>
                        <p>6. Einbindung von Diensten und Inhalten Dritter</p>
                        <p>
                            Wir binden innerhalb der Webseite Dienste anderer
                            Unternehmen ein, um unser Angebot für Sie
                            attraktiver zu gestalten und fortlaufend zu
                            optimieren (Rechtsgrundlage ist Art. 6 Abs. 1 Satz 1
                            a, f DSGVO). <br />
                            Google Fonts <br /> Diese Webseite nutzt so genannte
                            Web Fonts, die von Google bereitgestellt werden.
                            Beim Aufruf einer Seite werden von Deinem Browser
                            die benötigten Web Fonts in Deinen Browsercache
                            geladen, damit Schriftarten richtig angezeigt
                            werden. Hierzu nimmt der von Dir verwendete Browser
                            Verbindung zu den Servern von Google auf. Google
                            erhält auf diesem Wege die Information, dass über
                            Ihre IP-Adresse unsere Website aufgerufen wurde.
                            Rechtsgrundlage für die Datenverarbeitung ist Art. 6
                            Abs. 1 Satz 1 f DSGVO. Unser berechtigtes Interesse
                            zur Datenerhebung folgt daraus, dass wir den Einsatz
                            von Web Fonts zur vereinfachten und optimierten
                            Darstellung unserer Webseite benötigen. <br />
                            Instagrem Like-Button <br />
                            Wir setzen derzeit folgende Social-Media-Plug-ins
                            ein: Instagram Like-Button. Wir nutzen dabei die
                            sog. Zwei-Klick-Lösung. Das heißt, wenn Sie unsere
                            Seite besuchen, werden zunächst keine
                            personenbezogenen Daten an die Anbieter der Plug-ins
                            weitergegeben. Nur wenn Sie auf den Plug-In auf
                            unserer Webseite klicken und ihn dadurch aktivieren,
                            erhält der Plug-in-Anbieter die Information, dass
                            Sie die entsprechende Website aufgerufen haben.
                            Zudem wird die IP-Adresse des Gerätes, mit dem Sie
                            unsere Webseite besuchen, an den Anbieter
                            übermittelt und dort verarbeitet. Der Anbieter kann
                            Sie mit diesen Informationen einem bei ihm
                            unterhaltenen Benutzerkonto zuordnen, sofern dieses
                            besteht. Der Anbieter speichert die über Sie
                            erhobenen Daten als Nutzungsprofile und nutzt diese
                            für Zwecke der Werbung, Marktforschung und/oder
                            bedarfsgerechten Gestaltung seines Dienstes. Eine
                            solche Auswertung erfolgt insbesondere (auch für
                            nicht eingeloggte Nutzer) zur Darstellung von
                            bedarfsgerechter Werbung und um andere Nutzer des
                            sozialen Netzwerks über Ihren Besuch auf unserer
                            Website zu informieren. Ihnen steht ein
                            Widerspruchsrecht gegen die Bildung dieser
                            Nutzerprofile zu, wobei Sie sich zur Ausübung dessen
                            an den jeweiligen Plug-in-Anbieter wenden müssen.
                            Die Datenweitergabe erfolgt unabhängig davon, ob Sie
                            ein Konto bei dem Plug-in-Anbieter besitzen und dort
                            eingeloggt sind. Wenn Sie bei dem Plug-in-Anbieter
                            eingeloggt sind, werden Ihre bei uns erhobenen Daten
                            direkt Ihrem beim Plug-in-Anbieter bestehenden Konto
                            zugeordnet. Wenn Sie den aktivierten Button
                            betätigen und z. B. die Seite verlinken, speichert
                            der Plug-in-Anbieter auch diese Information in Ihrem
                            Nutzerkonto und teilt sie Ihren Kontakten öffentlich
                            mit. Wir empfehlen Ihnen, sich nach Nutzung eines
                            sozialen Netzwerks regelmäßig auszuloggen,
                            insbesondere jedoch vor Aktivierung des Buttons, da
                            Sie so eine Zuordnung zu Ihrem Profil bei dem
                            Plug-in-Anbieter vermeiden können. Rechtsgrundlage
                            für die Nutzung der Plug-ins ist Art. 6 Abs. 1 Satz
                            1 f DSGVO. Über die Plug-ins bietet wir Ihnen die
                            Möglichkeit, mit den sozialen Netzwerken und anderen
                            Nutzern zu interagieren, so dass wir unser Angebot
                            optimieren und für Sie interessanter ausgestalten
                            können. Weitere Informationen zu Zwecken und Umfang
                            der Datenerhebung und ihrer Verarbeitung durch den
                            Plug-in-Anbieter erhalten Sie in den im Folgenden
                            mitgeteilten Datenschutzerklärungen dieser Anbieter.
                            Dort erhalten Sie auch weitere Informationen zu
                            Ihren diesbezüglichen Rechten und
                            Einstellungsmöglichkeiten zum Schutze Ihrer
                            Privatsphäre.
                        </p>
                        <p>7. Dauer der Verarbeitung</p>
                        <p>
                            Zugriffsdaten <br /> Die Zugriffsdaten werden aus
                            Sicherheitsgründen (z.B. zur Aufklärung von
                            Missbrauchs- oder Betrugshandlungen) fortlaufend
                            gespeichert.
                            <br />
                            IP-Adressen <br />
                            Sofern von Drittanbietern IP-Adressen verarbeitet
                            werden, haben wir auf die Dauer der Verarbeitung
                            keinen Einfluss. Unter Ziffer 6 finden Sie die Links
                            zu den Datenschutzerklärungen der Drittanbieter.
                            Dort können Sie sich über die Dauer der Verarbeitung
                            informieren. <br />
                            Mitteilungsdaten <br /> Die sonstigen von Ihnen
                            mitgeteilten Daten speichern wir solange, wie wir
                            Sie für die Bearbeitung Ihres Anliegens benötigen
                            werden, sofern diese Daten nicht längeren
                            steuerrechtlichen und handelsrechtlichen
                            Aufbewahrungsfristen unterliegen.
                        </p>
                        <p>8. Widerspruchsrecht</p>
                        <p>
                            Sie haben das Recht, jederzeit Widerspruch gegen die
                            auf Grundlage von Art. 6 Abs. 1 Satz 1 f DSGVO
                            verarbeiteten personenbezogenen Daten zu erheben,
                            sofern Gründe für den Widerspruch vorliegen, die
                            sich aus Ihrer besonderen Situation ergeben. Ihre
                            personenbezogenen Daten werden jedoch
                            weiterverarbeitet, wenn zwingende schutzwürdigen
                            Gründe vorliegen, die Daten weiter zu verarbeiten,
                            die die Interessen, Rechte und Freiheiten Ihrer
                            Person überwiegen, oder wenn die Verarbeitung der
                            Geltendmachung, Ausübung oder Verteidigung von
                            Rechtsansprüchen dient. Sofern wir von Ihnen
                            Personenbezogene Daten verarbeiten, um Direktwerbung
                            zu betreiben, haben Sie das Recht, jederzeit ohne
                            Vorliegen von Gründen Widerspruch gegen die
                            Verarbeitung der personenbezogenen Daten zum Zwecke
                            derartiger Werbung einzulegen (Art. 21 DSGVO).
                        </p>
                        <p>9. Weitere Betroffenenrechte</p>
                        <p>
                            Ihre Rechte nach der DSGVO können Sie per E-Mail
                            oder schriftlich geltend machen. Unsere Kontaktdaten
                            finden Sie nachstehend: <br />
                            Marina Wentland <br />
                            Praxis für Naturheilkunde und Ästhetik <br />
                            Mitgaustraße 18 <br />
                            38106 Braunschweig Nord <br />
                            Tel.: 0151 275 045 49 <br />
                            E-Mail: marina@gmail.com
                        </p>
                    </Container>
                </section>
            )}
        </div>
    );
};

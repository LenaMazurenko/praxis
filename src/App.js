//import logo from "./logo.svg";
import React from "react";
import { Routes, Route } from "react-router-dom";
import CookieConsent from "react-cookie-consent";

import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Praxis } from "./Pages/Praxis";
import { Service } from "./Pages/Service";
import { Contacts } from "./Pages/Contacts";
import { Daten } from "./Pages/Daten";
import { Header } from "./Components/Header";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Footer } from "./Components/Footer";

export default function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/praxis" element={<Praxis />} />
                <Route path="/service" element={<Service />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/impressum" element={<Daten teil="im" />} />
                <Route path="/agb" element={<Daten teil="agb" />} />
                <Route path="/datenschutz" element={<Daten teil="ds" />} />
            </Routes>
            <Footer />
            <CookieConsent
                location="bottom"
                buttonStyle={{
                    background: "#fff",
                    textAlign: "left",
                }}
                buttonText="Cookies erlauben"
                expires={365}
            >
                Cookies auf praxis-wentland.de
                <br />
                Wir nutzen personenbezogene Daten, um den Besuch auf unserer
                Website komfortabler zu gestalten.
                <br />
                Mehr Informationen findest du in der{" "}
                <a href="/datenschutz">Datenschutzerklärung.</a>
            </CookieConsent>
        </>
    );
}

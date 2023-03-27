//import logo from "./logo.svg";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Salon } from "./Pages/Salon";
import { Service } from "./Pages/Service";
import { Contacts } from "./Pages/Contacts";
import { Impressum } from "./Pages/Impressum";
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
                <Route path="/salon" element={<Salon />} />
                <Route path="/service" element={<Service />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/impressum" element={<Impressum />} />
            </Routes>
            <Footer />
        </>
    );
}

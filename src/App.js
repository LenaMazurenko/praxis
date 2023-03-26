//import logo from "./logo.svg";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
//import { About } from "./Pages/About";
import { Salon } from "./Pages/Salon";
import { Service } from "./Pages/Service";
import { Contacts } from "./Pages/Contacts";
import { Header } from "./Components/Header";
import "./App.css";

export default function App() {
    return (
        <>
            <Header />
            <hr />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<Home />} />
                <Route path="/salon" element={<Salon />} />
                <Route path="/service" element={<Service />} />
                <Route path="/contacts" element={<Contacts />} />
            </Routes>
        </>
    );
}

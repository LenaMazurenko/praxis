//import logo from "./logo.svg";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Salon } from "./Pages/Salon";
import { Service } from "./Pages/Service";
import { Contacts } from "./Pages/Contacts";
import "./App.css";

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Salon" element={<Salon />} />
                <Route path="/Service" element={<Service />} />
                <Route path="/Contacts" element={<Contacts />} />
            </Routes>
        </>
    );
}

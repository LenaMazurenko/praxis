//import logo from "./logo.svg";
import React from "react";
import { Routes, Route } from "react-router-dom";
//import { Home } from "../src/Pages/Home";
//import { About } from "../src/Pages/About";
//import { Salon } from "../src/Pages/Salon";
import { Service } from "./Pages/Service";
import { Contacts } from "./Pages/Contacts";
import "./App.css";

export default function App() {
    return (
        <>
            <h1>hello</h1>
            <Routes>
                <Route path="/" element={<Contacts />} />
                <Route path="/Service" element={<Service />} />
            </Routes>
        </>
    );
}

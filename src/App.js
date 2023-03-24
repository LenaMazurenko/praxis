import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route } from "react-router-dom";
import { Home } from "../src/Pages/Home";
import { About } from "../src/Pages/About";
import { Salon } from "../src/Pages/Salon";
import { Service } from "../src/Pages/Service";
import { Contacts } from "../src/Pages/Contacts";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/salon" element={<Salon />} />
            <Route path="/service" element={<Service />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contacts />} />
        </Routes>
    );
}

export default App;

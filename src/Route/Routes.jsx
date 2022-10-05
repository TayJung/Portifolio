import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Header from "../Pages/Header";
import About from "../Pages/aboult";
import Work from "../Pages/work";
import Contact from "../Pages/contact";

function Router() {
  return (
    <BrowserRouter>
      <Header rota="Home" rota2="Work" rota3="About" rota4="Contact me" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;

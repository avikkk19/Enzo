import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Tech from "./pages/Tech";
import Hero from "./components/Hero";
import Pricing from "./components/fone";
import Contactme from "./components/Contactme";
const App = () => {
  return ( 
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<>
        <Hero/>
        <Pricing />
        <Contactme/>
        </>} />
        <Route path="/Tech" element={<Tech />} />
      </Routes>
      <Footer />
    </> 
  );
};

export default App;

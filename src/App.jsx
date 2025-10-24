import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import BoardOfDirector from "./Pages/BoardOfDirector";
import OurManagement from "./Pages/OurManagement";
import CorporateInformation from "./Pages/CorporateInformation";
import HealthSafety from "./Pages/HealthSafety";
import SustainabilityInitiatives from "./Pages/SustainabilityInitiatives";
import WhoWeAre from "./Pages/WhoWeAre";
import FuelProduct from "./Pages/FuelProducts";
import BecomeADealer from "./Pages/BecomeADealer";
import IndustrialLubricants from "./Pages/IndustrialLubricant";
import AutomotiveEngineOils from "./Pages/AutomotiveEngineOils";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/directors" element={<BoardOfDirector />} />
        <Route path="/management" element={<OurManagement />} />
        <Route path="/corporate-info" element={<CorporateInformation />} />
        <Route path="/health-safety" element={<HealthSafety />} />
        <Route path="/sustainability" element={<SustainabilityInitiatives />} />
        <Route path="/fuel-products" element={<FuelProduct />} />
        <Route path="/dealer" element={<BecomeADealer />} />
        <Route path="/lubricants" element={<IndustrialLubricants />} />
        <Route path="/automotive-engine" element={<AutomotiveEngineOils />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

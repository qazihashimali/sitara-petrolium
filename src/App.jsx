import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import WhoWeAre from "./Pages/AboutUs/WhoWeAre";
import OurOperations from "./Pages/AboutUs/OurOperations";
import BoardOfDirector from "./Pages/AboutUs/BoardOfDirector";
import OurManagement from "./Pages/AboutUs/OurManagement";
import CorporateInformation from "./Pages/AboutUs/CorporateInformation";
import HealthSafety from "./Pages/AboutUs/HealthSafety";
import SustainabilityInitiatives from "./Pages/AboutUs/SustainabilityInitiatives";
import RetailNetwork from "./Pages/Fuel&Facilities/RetailNetwork";
import FuelProduct from "./Pages/Fuel&Facilities/FuelProducts";
import BecomeADealer from "./Pages/Fuel&Facilities/BecomeADealer";
import IndustrialFuelSolutons from "./Pages/Fuel&Facilities/IndustrialFuelSolution";
import AutomotiveEngineOils from "./Pages/Lubricants/AutomotiveEngineOils";
import IndustrialLubricants from "./Pages/Lubricants/IndustrialLubricant";
import EngineOilInsights from "./Pages/Lubricants/EngineOilInsights";
import ProductCatalog from "./Pages/Lubricants/Products";
import DistributerSupport from "./Pages/Lubricants/DistributerSupport";
import AutoService from "./Pages/Services/AutoService";
import SitaraConvenienceStore from "./Pages/Services/SitaraConvenienceStore";
import SitaraCarWash from "./Pages/Services/SitaraCarWash";
import SitaraRestrooms from "./Pages/Services/SitaraRestrooms";
import FoodAndDining from "./Pages/Services/FoodAndDining";
import MobileAppComingSoon from "./Pages/DigitalPaymentSolution/MobileAppComingSoon";
import CustomerHelpline from "./Pages/News&Promotions/CustomerHelpline";
import DealerOpportunities from "./Pages/News&Promotions/DealerOpportunities";
import InvestorRelations from "./Pages/News&Promotions/InvestorRelations";
import FeedbackQueries from "./Pages/News&Promotions/FeedbackQueries";
import IndustrialSolutions from "./Pages/News&Promotions/IndustrialSolutions";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        // About Us Routes
        <Route path="/about/who-we-are" element={<WhoWeAre />} />
        <Route path="/about/operations" element={<OurOperations />} />
        <Route path="/about/directors" element={<BoardOfDirector />} />
        <Route path="/about/management" element={<OurManagement />} />
        <Route
          path="/about/corporate-info"
          element={<CorporateInformation />}
        />
        <Route path="/about/health-safety" element={<HealthSafety />} />
        <Route
          path="/about/sustainability"
          element={<SustainabilityInitiatives />}
        />
        // Fuel & Facilities Routes
        <Route path="/fuel/retail-network" element={<RetailNetwork />} />
        <Route path="/fuel/fuel-products" element={<FuelProduct />} />
        <Route path="/fuel/dealer" element={<BecomeADealer />} />
        <Route
          path="/fuel/industrial--fuel-solutions"
          element={<IndustrialFuelSolutons />}
        />
        // Lubricants Routes
        <Route
          path="/lubricants/industrial-lubricants"
          element={<IndustrialLubricants />}
        />
        <Route
          path="/lubricants/automotive-engine"
          element={<AutomotiveEngineOils />}
        />
        <Route path="/lubricants/insights" element={<EngineOilInsights />} />
        <Route path="/lubricants/catalog" element={<ProductCatalog />} />
        <Route
          path="/lubricants/distributer-support"
          element={<DistributerSupport />}
        />
        // Services Routes
        <Route path="/services/sas" element={<AutoService />} />
        <Route
          path="/services/convenience-stores"
          element={<SitaraConvenienceStore />}
        />
        <Route path="/services/car-wash" element={<SitaraCarWash />} />
        <Route path="/services/restrooms" element={<SitaraRestrooms />} />
        <Route path="/services/food-dining" element={<FoodAndDining />} />
        // Digital Payment Solutions Routes
        <Route path="/digital/mobile-app" element={<MobileAppComingSoon />} />
        // News Routes
        <Route path="/news/customer-helpline" element={<CustomerHelpline />} />
        <Route
          path="/news/dealer-opportunities"
          element={<DealerOpportunities />}
        />
        <Route
          path="/news/investor-relations"
          element={<InvestorRelations />}
        />
        <Route path="/news/feedback" element={<FeedbackQueries />} />
        <Route
          path="/news/industrial-solutions"
          element={<IndustrialSolutions />}
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

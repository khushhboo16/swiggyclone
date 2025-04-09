import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderYes from "./components/HeaderYes";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import InsidePage from "./components/InsidePage";
import CampusPage from "./components/CampusPage";
import OutsideCampus from "./components/OutsideCampus";
import PizzaBakers from "./restaurants/PizzaBakers";
import Chatkara from "./restaurants/Chatkara"; 
import BurgerFarm from "./restaurants/BurgerFarm"; 
import ItalianOven from "./restaurants/ItalianOven";  
import NBC from "./restaurants/NBC";
import HK from "./restaurants/HK";
import PartnerRestaurants from "./components/PartnerRestaurants";
import IntroSection from "./components/IntroSection";

function App() {
  return (
    <Router>
      <HeaderYes /> {/* Header on all pages */}

      <Routes>
        {/* Home page route */}
        <Route path="/" element={
          <>
            <HeroSection />
            <IntroSection />
            <PartnerRestaurants />
          </>
        } />

        {/* Other pages */}
        <Route path="/hostel" element={<InsidePage />} />
        <Route path="/campus" element={<CampusPage />} />
        <Route path="/outside-hostel" element={<OutsideCampus />} />

        {/* Restaurant pages */}
        <Route path="/restaurant/pizza-bakers" element={<PizzaBakers />} />
        <Route path="/restaurant/chatkara" element={<Chatkara />} />
        <Route path="/restaurant/burger-farm" element={<BurgerFarm />} />
        <Route path="/restaurant/italian-oven" element={<ItalianOven />} />
        <Route path="/restaurant/nbc" element={<NBC />} />
        <Route path="/restaurant/hk" element={<HK />} />
      </Routes>

      <Footer /> {/* Footer on all pages */}
    </Router>
  );
}

export default App;


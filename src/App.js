
import './App.css';

// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CardsSection from "./components/CardsSection";
import AboutSection from "./components/AboutSection";
import Tokenomics from './components/Tokenomics';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';



const App = () => {
  return (
    <div className="bg-[#00161C] text-white font-sans">
      <Navbar />
      <HeroSection />
      <CardsSection />
      <AboutSection />
      <Tokenomics />
      <Roadmap />
      <Footer />
      
    </div>
  );
};

export default App;
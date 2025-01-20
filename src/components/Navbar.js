import React, { useState } from "react";
import logo from "../images/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="p-4 border-b border-gray-700 bg-[#00161D] text-white">
      <div className="container mx-auto flex justify-between items-center">
        
        
        <div className="text-2xl font-extrabold">
        <img
            src={logo} 
            alt="logo" 
            className="rounded-lg w-200 h-200 mb-4"
          />
        </div>

        {/*  Menu Icon for Mobile */}
        <button
          className="sm:hidden block text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* navigation Links */}
        <ul
          className={`sm:flex space-x-6 items-center ${
            isMenuOpen ? "block" : "hidden"
          } sm:block absolute sm:static bg-[#022029] sm:bg-transparent top-16 left-0 w-full sm:w-auto p-4 sm:p-0 translate-x-10 shadow-2xl`}
        >
          <li className="py-2 sm:py-0">Features</li>
          <li className="py-2 sm:py-0">Why Us</li>
          <li className="py-2 sm:py-0">Tokenomics</li>
          <li className="py-2 sm:py-0">Roadmap</li>
        </ul>

        
        <div className="hidden sm:flex space-x-4">
          <button className="">
            Login
          </button>
          <button
            className="border border-white px-4 py-2 text-black rounded-xl"
            style={{ backgroundColor: "#B0F9FF" }}
          >
            Whitepaper
          </button>
        </div>
      </div>

      {/* Buttons for Mobile */}
      {isMenuOpen && (
        <div className="flex flex-col space-y-2 sm:hidden mt-4">
          <button className="bg-white text-[#00161D] px-4 py-2 rounded">
            Login
          </button>
          <button
            className="border border-white px-4 py-2 rounded text-black"
            style={{ backgroundColor: "#B0F9FF" }}
          >
            Whitepaper
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;



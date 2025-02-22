import React from 'react';
import logo from "../images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegramPlane, faInstagram, faTwitter, faFacebookF, faDiscord } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 space-y-6 md:space-y-0">
        {/* Logo and Social Icons */}
        <div className="flex flex-col items-center space-y-4 md:items-start">
          {/* Logo */}
          <div>
            <img
              src={logo}
              alt="logo"
              className="w-40 h-auto" // Adjusted width for responsiveness
            />
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-blue-400">
              <FontAwesomeIcon icon={faTelegramPlane} />
            </a>
            <a href="#" className="hover:text-blue-500">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FontAwesomeIcon icon={faDiscord} />
            </a>
          </div>
        </div>

        {/* Tagline and Email Input */}
        <div className="text-center md:text-left w-full md:w-auto">
          <h1 className="text-2xl font-semibold mb-4">
            “Designed for traders <br /> of today, just like you.”
          </h1>
          <div className="flex flex-col md:flex-row items-center md:items-start bg-gray-800 p-4 rounded-2xl space-y-4 md:space-y-0">
            <input
              type="email"
              placeholder="What’s your work email?"
              className="bg-transparent text-white focus:outline-none px-4 py-2 w-full md:w-64"
            />
            <button className="bg-[#022029] text-white px-6 py-2 rounded-lg hover:bg-blue-400 w-full md:w-auto">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

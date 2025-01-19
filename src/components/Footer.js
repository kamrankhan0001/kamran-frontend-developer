import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegramPlane, faInstagram, faTwitter, faFacebookF, faDiscord } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
      <footer className="bg-black text-white py-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 space-y-6 md:space-y-0">
          {/* Logo and Social Icons */}
          <div className="flex items-center space-x-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#022029] rounded-md"></div>
              <span className="text-lg font-bold">EthAI</span>
            </div>

 {/* Social Media Icons */}
 
 <div className="flex space-x-4 text-xl">
  <a href="#" className="hover:text-blue-400">
    <FontAwesomeIcon icon={faTelegramPlane} />
  </a>
  <a href="#" className="hover:text-blue-400">
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
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-semibold mb-4">
              “Designed for traders <br></br>of today, just like you.”
            </h1>
            <div className="flex items-center space-x-4 bg-gray-800 p-2 rounded-2xl">
              <input
                type="email"
                placeholder="What’s your work email?"
                className="bg-transparent text-white focus:outline-none px-4 py-2 w-64"
              />
              <button className="bg-[#022029] text-white px-6 py-2 rounded-lg hover:bg-blue-400">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
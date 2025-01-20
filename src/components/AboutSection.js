import React from "react";
import graph from "../images/graph.png";
import tools from "../images/Tools.png";
import FutureTech from "../images/FutureTech.png";
import wallet from "../images/wallet.png";


const AboutSection = () => {
  return (
    <section className="p-8 justify-items-center">
      <h2 className="text-3xl font-bold mb-4">About BitAi</h2>
      <p className="mb-4" style={{color: '#B0F9FF'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fermentum <br></br>orci vel tortor euismod, vitae vulputate sapien dictum.
      </p>
      <button className="bg-white text-[#00161D] px-4 py-2 rounded-xl"
      style={{ backgroundColor: "#B0F9FF" }}
      >Read More</button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mt-8 bg-[#022029] rounded-3xl shadow-2xl">
        <div className="p-10 rounded">
        <img
            src={graph} 
            alt="Stay Ahead" 
            className="rounded-lg w-200 h-200 mb-4"
          />
          <h2 className="text-xl py-2">Stay Ahead</h2>
          <p className="text-sm" style={{color: '#B0F9FF'}}>No more Guesswork-get clear, trustable insight</p>

        </div>
        <div className="p-10 rounded">
        <img
            src={wallet} 
            alt="wallet" 
            className="rounded-lg w-200 h-200 mb-4"
          />
          <h2 className="text-xl py-2">Know Your Assets</h2>
          <p className="text-sm" style={{color: '#B0F9FF'}}>Always stay on top how your </p>
        </div>
        <div className="p-10 rounded">
        <img
            src={tools} 
            alt="Simple" 
            className="rounded-lg w-200 h-200 mb-4"
          />
          <h2 className="text-xl py-2">Simple, Not Overwhelming</h2>
          <p className="text-sm" style={{color: '#B0F9FF'}}>Our tools are designed to make <br></br>
          complex market analysis easy to<br></br>
          understand and act on
          
          </p>


        </div>
        <div className="p-10 rounded">
        <img
            src={FutureTech} 
            alt="FutureTech" 
            className="rounded-lg w-200 h-200 mb-4"
          />
          <h2 className="text-xl py-2">Future-proof</h2>
          <p className="text-sm" style={{color: '#B0F9FF'}}>We are constently adding<br></br> 
            new feature to help You make the <br></br>
            most informed decisions possible</p>



        </div>
      </div>
    </section>
  );
};

export default AboutSection;
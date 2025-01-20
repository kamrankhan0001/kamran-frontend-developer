import React from "react";
import img1 from "../images/img1.jpeg"; // Import your image
import preview from "../images/preview.png";

const Roadmap = () => {
  return (
    <div className="bg-[#022029] text-white min-h-screen">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-12">Roadmap</h1>

        {/* Phase 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div className="space-y-6">
            <div className="text-white p-6 rounded-lg shadow-2xl">
              <span className="bg-gray-500 text-sm text-white px-3 py-1 rounded-md uppercase font-bold">
                Phase 1
              </span>
              <h2 className="text-2xl font-bold mt-4 mb-6">Kicking Off</h2>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center">
                  <span className="text-[#4CAF50] mr-2">●</span>
                  Launch of EthAI: Officially
                </li>
                <li className="flex items-center">
                  <span className="text-[#4CAF50] mr-2">●</span>
                  Development of Core AI Agents
                </li>
                <li className="flex items-center">
                  <span className="text-[#4CAF50] mr-2">●</span>
                  User Onboarding Campaign
                </li>
                <li className="flex items-center">
                  <span className="text-[#4CAF50] mr-2">●</span>
                  Community Engagement Initiatives
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section (Image Background) */}
          <div
            className="h-[400px] rounded-lg shadow-2xl"
            style={{
              backgroundImage: `url(${img1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="w-full h-full bg-black bg-opacity-0 rounded-lg"></div>
          </div>
        </div>

        {/* Phase 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">

          {/* Left Section (PreviewImage) */}
          

<div
            className="h-[400px] rounded-lg shadow-2xl"
            style={{
              backgroundImage: `url(${preview})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>



          {/* Right Section */}
          <div className="bg-[#0F2933] text-white p-6 rounded-lg shadow-md">
            <span className="text-sm text-white px-4 py-1 rounded-md uppercase font-bold">
              Phase 2
            </span>
            <h2 className="text-2xl font-bold mt-4 mb-6">Bigger Insights</h2>
            <ul className="space-y-6 text-gray-300">
              <li className="flex items-center">
                <span className="text-[#4CAF50] mr-2">●</span>
                Introduction of Advanced AI Agents
              </li>
              <li className="flex items-center">
                <span className="text-[#4CAF50] mr-2">●</span>
                Development of Core AI Agents
              </li>
              <li className="flex items-center">
                <span className="text-[#4CAF50] mr-2">●</span>
                User Interface Optimization
              </li>
              <li className="flex items-center">
                <span className="text-[#4CAF50] mr-2">●</span>
                Development Marketing Campaign
              </li>
            </ul>
          </div>
        </div>

        {/* Phase 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {/* Left Section */}
          <div className=" text-white p-6 rounded-lg shadow-2xl">
            <span className="text-sm text-white px-3 py-1 rounded-md uppercase font-bold">
              Phase 3
            </span>
            <h2 className="text-2xl font-bold mt-4 mb-6">Full Power</h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center">
                <span className="text-[#4CAF50] mr-2">●</span>
                Launch of EthAI: Officially
              </li>
              <li className="flex items-center">
                <span className="text-[#4CAF50] mr-2">●</span>
                Development of Core AI Agents
              </li>
              <li className="flex items-center">
                <span className="text-[#4CAF50] mr-2">●</span>
                User Onboarding Campaign
              </li>
              <li className="flex items-center">
                <span className="text-[#4CAF50] mr-2">●</span>
                Community Engagement Initiatives
              </li>
            </ul>
          </div>

          {/* Right Section (PreviewImage) */}
          <div>
            <PreviewImage />
          </div>
        </div>


        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-12 w-full max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-bold">
          Frequently Asked<br /> Questions
        </h2>
        <ul className="space-y-6">
  {[
    "What is EthAI?",
    "How can EthAI help me as a Trader?",
    "Who can use EthAI?",
    "How does EthAI track smart money flow?",
    "How does EthAI ensure data security?",
  ].map((question, index) => (
    <li
      key={index}
      className="flex items-center border-b border-gray-600 pb-4 cursor-pointer hover:text-blue-400 group"
    >
      {/* "+" Sign */}
      <span className="text-xl font-bold text-blue-400 group-hover:scale-110 transition-transform duration-200">
        +
      </span>
      
      {/* Question */}
      <span className="text-lg ml-4 group-hover:underline">
        {question}
      </span>
    </li>
  ))}
</ul>

      </div>

      
      <div className="flex-1 flex items-center justify-center w-full mt-16">
        <div className="p-4 bg-[#022029] rounded-lg text-center max-w-2xl shadow-2xl">
          <h1 className="text-3xl md:text-2xl mb-4">Explore Our{" "}
          <span style={{ color: "#B0F9FF" }}>dApp</span></h1>
          <p className="text-md md:text-base text-gray-100 mb-6 shadow-2xl rounded-2xl w-full" style={{color: '#B0F9FF'}}>
            EthAI is an AI-powered dApp designed to help traders make smarter, data-driven decisions. By tracking smart
            money flows, monitoring key wallets, and providing real-time market insights, EthAI empowers users to stay
            ahead of trends. The platform offers intuitive AI features for asset recommendations, market analysis, and
            personalized crypto Q&A, making it the ultimate tool for both novice and experienced traders.
          </p>
          <button className="px-6 py-2 text-black font-semibold rounded-lg" style={{ backgroundColor: "#B0F9FF" }}>
            Open dApp
          </button>
        </div>
      </div>
      



      </div>
    </div>
  );
};

const PreviewImage = () => {
  return (
    <div className="relative flex items-center justify-center h-96 shadow-2xl">
      {/* Text */}
      <div className="absolute text-[6rem] font-extrabold text-blue-500 opacity-30 tracking-wider">
        PREVIEW
      </div>


      <div className="relative flex items-center justify-center">
        <div className="absolute w-32 h-32 transform rotate-45 border border-blue-500 opacity-60 blur-md"></div>
        <div className="absolute w-32 h-32 transform rotate-45 border border-blue-500 animate-pulse"></div>
      </div>

    
      <div className="absolute top-1/2 left-1/2 w-4 h-4 transform -translate-x-5 -translate-y-5 border-t-2 border-l-2 border-white rotate-45"></div>
    </div>
  );
};

export default Roadmap;

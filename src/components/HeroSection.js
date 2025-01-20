// import React from "react";
// import bg from "../images/bg1.png";

// const HeroSection = () => {
//   return (
//     <div>
//       <img
//             src={bg} 
//             alt="background" 
//             className="rounded-lg w-full h-auto mb-4"
//           />

//     <section className="text-center py-16">
//       <h1 className="text-4xl font-semibold">When Innovation<br /> Meets <span style={{color: '#B0F9FF'}}>Investment</span> </h1>
      
      
//       <p style={{color: '#B0F9FF'}}>Empowering Trading Through the Advance Technology</p>
//       <button className="mt-6 px-5 py-3 bg-black-600 text-white rounded-md hover:bg-gray-600 transition-shadow">Open dApp</button>
//     </section>
//     </div>
//   );
// };

// export default HeroSection;

import React from "react";
import bg from "../images/bg1.png";

const HeroSection = () => {
  return (
    <section
      className="text-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bg})`,
        height: "50vh", // Full viewport height
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 1rem", // Add padding for mobile devices
      }}
    >
      <h1 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
        When Innovation<br /> Meets{" "}
        <span style={{ color: "#B0F9FF" }}>Investment</span>
      </h1>

      <p
        className="mt-4 text-base md:text-lg"
        style={{ color: "#B0F9FF" }}
      >
        Empowering Trading Through Advanced Technology
      </p>

      <button className="mt-6 px-4 py-2 md:px-5 md:py-3 bg-black text-white rounded-md hover:bg-gray-600 transition-shadow text-sm md:text-base">
        Open dApp
      </button>
    </section>
  );
};

export default HeroSection;

import React from "react";

const CardsSection = () => {
  return (
    <div className="rounded-full">
    
    <div class="container mx-auto p-4">
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
    <div class=" shadow-md rounded-lg p-4 flex flex-col justify-between row-span-2 bg-[#022029] ">
      <h2 class="text-lg sm:text-xl font-bold mb-2">Trade Optimizer</h2>
      <p class="text-gray-400 text-sm sm:text-base mb-4" style={{color: '#B0F9FF'}}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown</p>
    </div>

    <div class="shadow-md rounded-lg p-4 flex flex-col justify-between bg-[#022029]">
      <h2 class="text-lg sm:text-xl font-bold mb-2">Market Insight</h2>
      <p class="text-gray-400 text-sm sm:text-base mb-4" style={{color: '#B0F9FF'}}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown.</p>
    </div>

    <div class="bg-[#022029] shadow-md rounded-lg p-4 flex flex-col justify-between row-span-2">
      <h2 class="text-lg sm:text-xl font-bold mb-2">Risk Guard</h2>
      <p class="text-gray-400 text-sm sm:text-base mb-4" style={{color: '#B0F9FF'}}>This is some content for the third cardLorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown.</p>
    </div>

    <div class="bg-[#022029] shadow-md rounded-lg p-20 flex flex-col justify-between">
      <h2 class="text-lg sm:text-xl font-bold mb-2"></h2>
      
    </div>

    <div class="bg-[#022029] shadow-md rounded-lg p-4 flex flex-col justify-between">
      <h2 class="text-lg sm:text-xl font-bold mb-2">Portfolio Sync</h2>
      <p class="text-gray-400 text-sm sm:text-base mb-2" style={{color: '#B0F9FF'}}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown.</p>
    </div>

    <div class="bg-[#022029] shadow-md rounded-lg p-4 flex flex-col justify-between col-span-1 sm:col-span-2">
      <h2 class="text-lg sm:text-xl font-bold mb-2">Opportunity Soout</h2>
      <p class="text-gray-400 text-sm sm:text-base mb-4" style={{color: '#B0F9FF'}}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown.</p>
    </div>
  </div>
</div>
</div>
  );
};

export default CardsSection;


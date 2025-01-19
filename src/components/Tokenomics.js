import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Tokenomics = () => {
    const data = {
        labels: ["Liquidity Pool (90%)", "Team (35%)", "Marketing (5%)"],
        datasets: [
          {
            label: "Token Distribution",
            data: [90, 35, 5],
            backgroundColor: ["#B0F9FF", "#616569", "#03A9F5"],
            borderWidth: 1,
          },
        ],
      };

      return (
        <div className="text-white p-6">
          <h2 className="text-3xl font-bold text-center mb-8">Tokenomics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            {/* Pie Chart */}
            <div className="flex justify-center">
              <Pie data={data} options={{ maintainAspectRatio: false }} width={300} height={300}/>
            </div>
    
            {/* Tokenomics Details */}
            <div className=" p-0 rounded-3xl shadow-md bg-[#022029]">
              
              <div className="space-y-2 mt-6">
                <div className="p-4 rounded-md shadow-2xl">
                <ul>
                <li>
                  <strong>Name:</strong> EthAi
                </li>
                <li>
                  <strong>Token Name:</strong> $EthAi
                </li>
                <li>
                  <strong>Token Standard:</strong> ERC20
                </li>
                <li>
                  <strong>Blockchain:</strong> Ethereum
                </li>
                <li>
                  <strong>Total Supply:</strong> 100 Million
                </li>
                <li>
                  <strong>Tax:</strong> 5%/5%
                </li>
                </ul>
                </div>

              </div>
    
              {/* Separate Divs for Token Distribution */}
              <div className="mt-2 space-y-4">
                
                <div className="p-4 rounded-md shadow-2xl bg-[#022029]">
                    <ul>
                <li>
                  <strong>Team:</strong> 35%
                </li>
                <li>
                  <strong>Marketing:</strong> 5%
                </li>
                <li>
                  <strong>Liquidity Pool:</strong> 90%
                </li>
                </ul>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      );
};

export default Tokenomics;

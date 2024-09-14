import React, { useState } from 'react';

const NumberGrid = () => {
  // State to track selected number
  const [selectedNumber, setSelectedNumber] = useState(null);

  // Handle number click
  const handleNumberClick = (number) => {
    setSelectedNumber(number === selectedNumber ? null : number);
  };

  return (
    <div className="min-h-screen bg-purple-200 p-8 flex justify-center items-center">
      {/* Inner Container */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        {/* Section Title */}
        <h1 className="text-2xl font-bold text-center mb-6">Pick your sign</h1>
        
        {/* Grid of numbers/icons */}
        <div className="grid grid-cols-6 gap-4 justify-center items-center">
          {Array.from({ length: 36 }, (_, i) => i + 1).map((number) => (
            <button
              key={number}
              className={`flex justify-center items-center w-16 h-16 border-2 rounded-lg text-xl font-bold
                ${number === selectedNumber
                  ? 'bg-purple-600 border-purple-700 text-white' 
                  : 'bg-white border-gray-300 text-purple-600'}
                hover:bg-purple-100 transition-colors duration-300 ease-in-out`}
              onClick={() => handleNumberClick(number)}
            >
              {number}
            </button>
          ))}
        </div>

        {/* Multiplier buttons */}
        <div className="mt-8 flex justify-center gap-4">
          {[1, 5, 10, 20, 50, 2000].map((value) => (
            <button
              key={value}
              className="bg-purple-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-purple-700 transition"
            >
              x{value}
            </button>
          ))}
        </div>

        {/* Pay/Win Section */}
        <div className="mt-4 flex justify-center items-center">
          <p className="text-gray-700 font-semibold mr-4">Pay Rs 10</p>
          <p className="text-gray-700 font-semibold">Win Rs 70</p>
        </div>

        {/* Footer (Optional based on design) */}
        <div className="mt-4 flex justify-center items-center gap-2">
          <button className="text-2xl font-bold text-gray-600">-</button>
          <span className="text-xl font-bold">0</span>
          <button className="text-2xl font-bold text-gray-600">+</button>
        </div>

        {/* Add to Cart Button */}
        <div className="mt-6 flex justify-center">
          <button className="bg-gray-400 text-white py-2 px-6 rounded-lg font-bold opacity-50 cursor-not-allowed">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default NumberGrid;

import React, { useState } from 'react';
import { Col, Button, Card } from 'reactstrap';

const NumberingButtons = ({ onRemove, onUpdate }) => {
  const [selectedValues, setSelectedValues] = useState([]);

  const handleAutoSelectClick = () => {
    const randomValues = generateRandomValues();
    setSelectedValues(randomValues);
    onUpdate(randomValues);
  };

  const handleButtonClick = (value) => {
    let updatedSelectedValues;

    if (selectedValues.includes(value)) {
      updatedSelectedValues = selectedValues.filter(
        (selectedValue) => selectedValue !== value
      );
    } else {
      updatedSelectedValues = [...selectedValues, value];
    }

    updatedSelectedValues = updatedSelectedValues.slice(0, 6);
    setSelectedValues(updatedSelectedValues);
    onUpdate(updatedSelectedValues);
  };

  const handleClearClick = () => {
    setSelectedValues([]);
    onUpdate([]);
  };

  const generateRandomValues = () => {
    const randomValues = [];
    while (randomValues.length < 6) {
      const randomValue = Math.floor(Math.random() * 39) + 1;
      if (!randomValues.includes(randomValue)) {
        randomValues.push(randomValue);
      }
    }
    return randomValues;
  };

  return (
    <>
      <Col lg="12">
        {/* Buttons for Auto-select and Clear */}
        <div className="flex justify-start bg-purple-200 bg-opacity-75 p-2 rounded-lg mb-4">
          <Button
            className="mr-2 rounded-full bg-white text-purple-400 hover:bg-purple-400 hover:text-white transition-all duration-300 w-14 h-14 flex items-center justify-center"
            onClick={handleAutoSelectClick}
          >
            <i className="fa fa-random" />
          </Button>
          <Button
            className="rounded-full bg-white text-purple-400 hover:bg-purple-400 hover:text-white transition-all duration-300 w-14 h-14 flex items-center justify-center"
            onClick={handleClearClick}
          >
            <i className="fa fa-times" aria-hidden="true" />
          </Button>
        </div>

        {/* Number Grid */}
        <Card className="bg-white rounded-lg p-4 shadow-md grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
          {Array.from({ length: 39 }, (_, index) => index + 1).map((value) => (
            <Button
              key={value}
              onClick={() => handleButtonClick(value)}
              disabled={selectedValues.length >= 6 && !selectedValues.includes(value)}
              className={`rounded-full p-2 text-xl font-bold transition-all duration-300 
              ${selectedValues.includes(value) ? 'bg-purple-400 text-white' : 'bg-white text-black'}
              ${selectedValues.includes(value) ? 'hover:bg-purple-500' : 'hover:bg-gray-200'}
              `}
            >
              {value}
            </Button>
          ))}
        </Card>
      </Col>
    </>
  );
};

export default NumberingButtons;

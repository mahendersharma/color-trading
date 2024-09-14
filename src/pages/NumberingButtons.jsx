import React, { useState } from 'react';
import { Col, Button, Card } from 'reactstrap';
import '../../src/NumberingButtons.css'; // Import the CSS file

const NumberingButtons = ({ onRemove, onUpdate }) => {
  const [selectedValues, setSelectedValues] = useState([]);

  const handleAutoSelectClick = () => {
    const randomValues = generateRandomValues();
    setSelectedValues(randomValues);
    onUpdate(randomValues);
    console.log('Selected Values:', randomValues);
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
    console.log('Selected Values:', updatedSelectedValues);
  };

  const handleClearClick = () => {
    setSelectedValues([]);
    onUpdate([]);
    console.log('Selected Values cleared');
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
        <div className="button-bar">
          <Button onClick={handleAutoSelectClick}>
            <i className="fa fa-random" /> Auto Select
          </Button>
          <Button onClick={handleClearClick}>
            Clear All
          </Button>
        </div>
        <Card className="shadow card">
          {Array.from({ length: 39 }, (_, index) => index + 1).map((value) => (
            <Button
              key={value}
              onClick={() => handleButtonClick(value)}
              color={selectedValues.includes(value) ? 'danger' : 'white'}
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

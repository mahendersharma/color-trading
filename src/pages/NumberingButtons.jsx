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
        <div style={{
          display: 'flex',
          justifyContent: 'flex-start',
          backgroundColor: 'rgb(183 162 229 / 86%)',
          padding: '10px',
          borderRadius: '10px',
          marginBottom: '10px'
        }}>
          <Button
            style={{
              borderRadius: '10px',
              marginRight: '10px',
              fontSize: '16px',
              backgroundColor: '#ffffff',
              color: 'rgb(183 162 229 / 86%)',
              borderRadius: '50%',
              margin: '9px',
              width: '60px',
              height: '60px',
              fontSize: '18px',
            }}
            onClick={handleAutoSelectClick}
          >
           <i className="fa fa-random" />
          </Button>
          <Button
            style={{
              borderRadius: '10px',
              backgroundColor: '#ffffff',
              color: 'rgb(183 162 229 / 86%)',
              borderRadius: '50%',
              margin: '9px',
              width: '60px',
              height: '60px',
              fontSize: '18px',
            }}
            onClick={handleClearClick}
          >
            <i class="fa fa-times" aria-hidden="true"></i>
          </Button>
        </div>
        <Card style={{
          backgroundColor: 'white',
          borderRadius: '10px',
          padding: '15px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          display: 'grid',
          gridTemplateColumns: 'repeat(8, 1fr)',
          gap: '10px'
        }}>
          {Array.from({ length: 39 }, (_, index) => index + 1).map((value) => (
            <Button
              key={value}
              onClick={() => handleButtonClick(value)}
              disabled={selectedValues.length >= 6 && !selectedValues.includes(value)}
              style={{
                borderRadius: '50%',
                margin: '9px',
                width: '60px',
                height: '60px',
                fontSize: '18px',
                color: selectedValues.includes(value) ? 'white' : 'black',
                backgroundColor: selectedValues.includes(value) ? 'rgb(183 162 229 / 86%)' : 'white',
                border: '2px solid #ddd',
                transition: 'background-color 0.3s ease, color 0.3s ease',
              }}
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

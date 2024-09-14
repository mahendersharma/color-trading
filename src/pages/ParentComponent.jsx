// ParentComponent.js

import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import NumberingButtons from './NumberingButtons'; // Adjust the import path based on your project structure

const ParentComponent = () => {
  const [allSelectedValues, setAllSelectedValues] = useState([]);

  // Adding initial component on component mount
  useEffect(() => {
    handleAddClick();
  }, []);

  const handleAddClick = () => {
    setAllSelectedValues((prevSelectedValues) => [...prevSelectedValues, []]);
    console.log('Component added');
  };

  const handleRemoveClick = (index) => {
    if (allSelectedValues.length === 1) {
      console.log('Cannot remove the only remaining component');
      return;
    }

    setAllSelectedValues((prevSelectedValues) =>
      prevSelectedValues.filter((_, i) => i !== index)
    );
    console.log('Component removed');
  };

  const updateSelectedValues = (index, selectedValues) => {
    setAllSelectedValues((prevSelectedValues) => {
      const newSelectedValues = [...prevSelectedValues];
      newSelectedValues[index] = selectedValues;
      return newSelectedValues;
    });
  };

  const printAllSelectedValues = () => {
    console.log('Print All Selected Values:', allSelectedValues);
  };

  return (
    <>
      {allSelectedValues.map((selectedValues, index) => (
        <div key={index}>
          <NumberingButtons
            selectedValues={selectedValues}
            onRemove={() => handleRemoveClick(index)}
            onUpdate={(newSelectedValues) => updateSelectedValues(index, newSelectedValues)}
          />
          {allSelectedValues.length > 1 ? (
            <Button onClick={() => handleRemoveClick(index)} color="danger" style={{ marginLeft: '10px' }}>
             <i className="fa fa-trash-o" />
            </Button>
          ) : (
            <Button disabled color="danger" style={{ marginLeft: '10px' }}>
              <i className="fa fa-trash-o" />
            </Button>
          )}
          <hr />
        </div>
      ))}
      <Button onClick={handleAddClick} color="info" style={{ marginRight: '10px' }}>
        Add
      </Button>
      <Button onClick={printAllSelectedValues} color="primary">
        Print All Selected Values
      </Button>
    </>
  );
};

export default ParentComponent;

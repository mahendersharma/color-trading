import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import NumberingButtons from './NumberingButtons'; // Adjust the import path based on your project structure

const ParentComponent = () => {
  const [allSelectedValues, setAllSelectedValues] = useState([[]]); // Initialize with one component

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
            <Button
              onClick={() => handleRemoveClick(index)}
              color="danger"
              style={{
                marginLeft: '10px', 
                backgroundColor: '#f5365c',
                color: 'white',
                borderRadius: '50%',
                margin: '9px',
                width: '60px',
                height: '60px',
                fontSize: '18px',
                border: '2px solid #ddd',
              }}
            >
              <i className="fa fa-trash-o" aria-hidden="true"></i>
            </Button>
          ) : (
            <Button
              disabled
              color="danger"
              style={{
                marginLeft: '10px',
                backgroundColor: '#f5365c',
                color: 'white',
                borderRadius: '50%',
                margin: '9px',
                width: '60px',
                height: '60px',
                fontSize: '18px',
                border: '2px solid #ddd',
                transition: 'background-color 0.3s ease, color 0.3s ease',
                opacity: 0.6, // Custom opacity for disabled state
                cursor: 'not-allowed', // To show disabled cursor
              }}
            >
              <i className="fa fa-trash-o" />
            </Button>
          )}
          <hr />
        </div>
      ))}

      <div className="p-8 flex justify-center items-center">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={handleAddClick}
        >
          <i className="fa fa-plus-circle" aria-hidden="true" style={{ marginRight: '5px' }} /> Add
        </button>

        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={printAllSelectedValues}
        >
          Print All Selected Values
        </button>
      </div>
    </>
  );
};

export default ParentComponent;

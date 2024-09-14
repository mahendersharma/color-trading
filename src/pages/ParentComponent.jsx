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
        <div key={index} className="flex flex-col md:flex-row items-center justify-center w-full mb-4">
          <div className="w-full md:w-auto">
            <NumberingButtons
              selectedValues={selectedValues}
              onRemove={() => handleRemoveClick(index)}
              onUpdate={(newSelectedValues) => updateSelectedValues(index, newSelectedValues)}
            />
          </div>

          {allSelectedValues.length > 1 ? (
            <Button
              onClick={() => handleRemoveClick(index)}
              color="danger"
              className="ml-4 mt-4 md:mt-0 bg-red-600 text-white rounded-full p-3 hover:bg-red-700 transition-all duration-300"
              style={{
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
              className="ml-4 mt-4 md:mt-0 bg-red-600 text-white rounded-full p-3 opacity-60 cursor-not-allowed"
              style={{
                width: '60px',
                height: '60px',
                fontSize: '18px',
                border: '2px solid #ddd',
              }}
            >
              <i className="fa fa-trash-o" aria-hidden="true"></i>
            </Button>
          )}
          <hr className="w-full mt-4 md:hidden" />
        </div>
      ))}

      <div className="p-8 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 transition-all duration-300"
          onClick={handleAddClick}
        >
          <i className="fa fa-plus-circle" aria-hidden="true" style={{ marginRight: '5px' }} />
          Add
        </button>

        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 transition-all duration-300"
          onClick={printAllSelectedValues}
        >
          Print All Selected Values
        </button>
      </div>
    </>
  );
};

export default ParentComponent;

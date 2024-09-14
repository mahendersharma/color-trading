import React, { useState } from 'react';
import CommonHeader from './CommonHeader';

function Withdraw() {
  const [formData, setFormData] = useState({
    amount: '',
    accountNumber: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.amount && formData.accountNumber) {
      alert('Withdrawal request submitted successfully!');
      console.log(formData); // This is where you'd send formData to the backend
    } else {
      alert('Please fill in all the required fields.');
    }
  };

  return (
    <>
      <CommonHeader />

      <div className="max-w-lg mx-auto p-8 bg-white shadow-md rounded">
        <h1 className="text-2xl font-bold mb-4">Withdraw Funds</h1>

        <form onSubmit={handleSubmit}>
          {/* Amount Input */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="amount">
              Amount to Withdraw *
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          {/* Account Number Selection */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="accountNumber">
              Account Number *
            </label>
            <input
              type="text"
              id="accountNumber"
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Withdraw;

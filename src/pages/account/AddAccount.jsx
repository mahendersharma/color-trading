import React, { useState } from 'react';
import CommonHeader from './CommonHeader';

function AddAccount() {
  const [formData, setFormData] = useState({
    accountHolderName: '',
    accountNumber: '',
    bankName: '',
    ifscCode: '',
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
    // Basic validation to ensure all fields are filled
    if (Object.values(formData).every((field) => field !== '')) {
      alert('Account added successfully!');
      console.log(formData); // This is where you'd send the form data to the backend
    } else {
      alert('Please fill in all the required fields.');
    }
  };

  return (
    <>
      <CommonHeader />

      <div className="max-w-lg mx-auto p-8 bg-white shadow-md rounded">
        <h1 className="text-2xl font-bold mb-4">Add Account</h1>

        <form onSubmit={handleSubmit}>
          {/* Account Holder's Name */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="accountHolderName">
              Account Holder's Name *
            </label>
            <input
              type="text"
              id="accountHolderName"
              name="accountHolderName"
              value={formData.accountHolderName}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          {/* Account Number */}
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

          {/* Bank Name */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="bankName">
              Bank Name *
            </label>
            <input
              type="text"
              id="bankName"
              name="bankName"
              value={formData.bankName}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          {/* IFSC Code */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="ifscCode">
              IFSC Code *
            </label>
            <input
              type="text"
              id="ifscCode"
              name="ifscCode"
              value={formData.ifscCode}
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
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddAccount;

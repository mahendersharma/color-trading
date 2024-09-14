import React, { useState } from 'react';
import CommonHeader from './CommonHeader';

function AddCredit() {
  const [formData, setFormData] = useState({
    amount: "",
    uniqueTransactionRef: "",
    paymentProof: null,
  });

  const [isAmountSubmitted, setIsAmountSubmitted] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(""); // To track the selected payment method

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "paymentProof") {
      setFormData({
        ...formData,
        paymentProof: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleAmountSubmit = (e) => {
    e.preventDefault();
    setIsAmountSubmitted(true);
  };

  const handlePaymentMethodClick = (method) => {
    setSelectedPaymentMethod(method); // Update selected payment method
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <>
      <CommonHeader />

      <div className="max-w-lg mx-auto p-8 bg-white shadow-md rounded">
        <h1 className="text-2xl font-bold mb-4">Bank Account</h1>

        {/* Amount Submission */}
        {!isAmountSubmitted ? (
          <form onSubmit={handleAmountSubmit}>
            {/* Amount Input */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="amount">
                Amount *
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

            {/* Submit Amount Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
              >
                Submit Amount
              </button>
            </div>
          </form>
        ) : (
          <>
            {/* Payment Method Selection */}
            <div className="mb-4">
              <h2 className="text-xl font-bold mb-2">Choose Payment Method</h2>
              <div className="flex space-x-4">
                <button
                  className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none"
                  onClick={() => handlePaymentMethodClick("gpay")}
                >
                  GPay
                </button>
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
                  onClick={() => handlePaymentMethodClick("phonepay")}
                >
                  PhonePe
                </button>
                <button
                  className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 focus:outline-none"
                  onClick={() => handlePaymentMethodClick("paytm")}
                >
                  Paytm
                </button>
              </div>
            </div>

            {/* Show Selected Payment Method Image */}
            {selectedPaymentMethod && (
              <div className="mb-4">
                <h2 className="text-xl font-bold mb-2">Selected Payment Method:</h2>
                <img
                  src={`/images/${selectedPaymentMethod}.jpeg`} // Use corresponding image based on the selected method
                  alt={selectedPaymentMethod}
                  className="w-32 mx-auto"
                />
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {/* Amount Input (Disabled after submission) */}
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="amount">
                  Amount *
                </label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  value={formData.amount}
                  disabled
                  className="w-full px-3 py-2 border rounded-md bg-gray-100"
                />
              </div>

              {/* Unique Transaction Reference Input */}
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="uniqueTransactionRef">
                  Unique Transaction Reference *
                </label>
                <input
                  type="text"
                  id="uniqueTransactionRef"
                  name="uniqueTransactionRef"
                  value={formData.uniqueTransactionRef}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>

              {/* File Upload */}
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="paymentProof">
                  Upload Your Payment Proof [Required]
                </label>
                <input
                  type="file"
                  id="paymentProof"
                  name="paymentProof"
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
                  Submit Form
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </>
  );
}

export default AddCredit;

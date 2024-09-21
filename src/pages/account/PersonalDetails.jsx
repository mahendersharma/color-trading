import React, { useEffect, useState } from 'react';
import CommonHeader from './CommonHeader';
import UserService from '../../services/UserService'; // Import the service

function PersonalDetails() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    accountNo: '',
    ifsc: '',
    phone: '',
    email: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await UserService.getProfile();
      alert('Details submitted successfully!');
      // Optionally, refresh data or navigate
    } catch (error) {
      console.error(error);
      alert('Error submitting details. Please try again.');
    }
  };

  // Fetch personal details on component mount
  useEffect(() => {
    const fetchPersonalDetails = async () => {
      try {
        const response = await UserService.getProfile();
        console.log("response",response)
        setFormData(response.data); // Adjust based on your API response structure
      } catch (error) {
        console.error(error);
        alert('Error fetching details. Please try again.');
      }
    };

    fetchPersonalDetails();
  }, []);

  return (
    <>
      <CommonHeader />
      <div className='mx-auto max-w-7xl px-2 py-3 sm:px-3 lg:px-4'>
        <div className="min-h-screen p-4 md:p-8 flex justify-center items-center bg-gradient-to-b from-purple-500 to-purple-700" style={{ borderRadius: '20px' }}>
          <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg w-full max-w-4xl">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                  <input type="text" id="name" value={formData.name} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John" required />
                </div>
                <div>
                  <label htmlFor="userName" className="block mb-2 text-sm font-medium text-gray-900">UserName</label>
                  <input type="text" id="userName" value={formData.userName} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Doe" required />
                </div>
                <div>
                  <label htmlFor="accountNo" className="block mb-2 text-sm font-medium text-gray-900">Account No</label>
                  <input type="text" id="accountNo" value={formData.accountNo} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Account No" required />
                </div>
                <div>
                  <label htmlFor="ifsc" className="block mb-2 text-sm font-medium text-gray-900">IFSC Code</label>
                  <input type="text" id="ifsc" value={formData.ifsc} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="IFSC Code" required />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Phone number</label>
                  <input type="tel" id="phone" value={formData.phone} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="123-45-678" required />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email address</label>
                <input type="email" id="email" value={formData.email} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="john.doe@company.com" required />
              </div>
              <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5">Submit</button>
              <button type="button" className="ml-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5">Edit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default PersonalDetails;

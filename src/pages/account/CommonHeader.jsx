import React from 'react';
import { Link } from 'react-router-dom';

function CommonHeader() {
  return (
    <>
    
      <div className="bg-gradient-to-b from-purple-500 to-purple-700 p-4" >
        {/* Main Container */}
        <div className="px-4 py-8">
          <div className="text-center mb-12 md:mb-0">
            <p className="text-2xl md:text-4xl font-semibold text-white tracking-tight">
              MY ACCOUNT
            </p>
          </div>
        </div>
        <div className="border-t border-purple-600 mt-8 py-4 text-center">
          <div className="flex flex-wrap justify-center space-x-2 md:space-x-4 text-white text-xs md:text-lg">
            <Link to="/personal-details" className="hover:text-gray-600">
              Personal Details
            </Link>
            <Link to="/add-account" className="hover:text-gray-600">
              Add Account
            </Link>
            <Link to="/transactions" className="hover:text-gray-600">
              Transactions
            </Link>
            <Link to="/withdraw" className="hover:text-gray-600">
              Withdrawal
            </Link>
            <Link to="/add-deposit" className="hover:text-gray-600">
              Deposit
            </Link>
            <Link to="/orders" className="hover:text-gray-600">
              Orders
            </Link>
            <Link to="/change-password" className="hover:text-gray-600">
              Change Password
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default CommonHeader;

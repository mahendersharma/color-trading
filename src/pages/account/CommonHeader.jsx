import React from 'react'

function CommonHeader() {
  return (
    <>
    <div className="bg-gradient-to-b from-purple-500 to-purple-700 p-4">
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
          <a href="/personal-details" className="hover:text-gray-600">Personal Details</a>
            <a href="/add-account" className="hover:text-gray-600">Add Account</a>
            <a href="/transactions" className="hover:text-gray-600">Transactions</a>
            <a href="/withdraw" className="hover:text-gray-600">Withdrawal</a>
            <a href="/deposit" className="hover:text-gray-600">Deposit</a>
            <a href="/orders" className="hover:text-gray-600">Orders</a>
            <a href="/change-password" className="hover:text-gray-600">Change Password</a>
          </div>
        </div>
      </div>
      </>
  )
}

export default CommonHeader
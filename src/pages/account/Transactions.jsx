import React, { useState, useEffect } from 'react';
import CommonHeader from './CommonHeader';

// Dummy transaction data
const dummyTransactions = [
  { id: '1', amount: -20.50, description: 'Purchase at Store A', date: '2024-09-12', transactionType: 'debit', merchantName: 'Store A', category: 'Shopping' },
  { id: '2', amount: 1500.00, description: 'Salary Payment', date: '2024-09-01', transactionType: 'credit', merchantName: 'Employer', category: 'Income' },
  { id: '3', amount: -35.75, description: 'Purchase at Store B', date: '2024-09-10', transactionType: 'debit', merchantName: 'Store B', category: 'Shopping' },
  // Add more transactions as needed
];

function Transactions() {
  const [transactions, setTransactions] = useState(dummyTransactions);

  // Uncomment this part when integrating with an API
  /*
  useEffect(() => {
    // Replace with your API endpoint
    fetch('https://api.example.com/transactions')
      .then(response => response.json())
      .then(data => setTransactions(data))
      .catch(error => console.error('Error fetching transactions:', error));
  }, []);
  */

  return (
    <>
      <CommonHeader />
      <div className="p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-xl font-bold mb-4">Transaction History</h2>
        <ul className="space-y-4">
          {transactions.map((transaction) => (
            <li key={transaction.id} className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
              <div className="flex flex-col flex-1">
                <span className="text-lg font-medium">{transaction.description}</span>
                <span className="text-sm text-gray-500">{transaction.date}</span>
              </div>
              <div className="flex flex-col items-end">
                <span className={`text-lg font-semibold ${transaction.transactionType === 'debit' ? 'text-red-600' : 'text-green-600'}`}>
                  {transaction.amount.toFixed(2)}
                </span>
                <span className="text-sm text-gray-400">{transaction.merchantName}</span>
                <span className="text-sm text-gray-400">{transaction.category}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Transactions;

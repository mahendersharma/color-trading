import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto py-10 px-6 sm:px-8 lg:px-10">

        {/* Centered container */}
        <div className="flex flex-col items-center space-y-8">

          {/* Social Icons */}
          <div className="flex space-x-5 justify-center">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <i className="fa fa-facebook fa-lg"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <i className="fa fa-instagram fa-lg"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <i className="fa fa-twitter fa-lg"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <i className="fa fa-github fa-lg"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <i className="fa fa-youtube-play fa-lg"></i>
            </a>
          </div>

          {/* Footer Links in a Single Line */}
          <div className="flex flex-wrap justify-center space-x-8">
            <a href="#" className="text-base text-center text-gray-300 hover:text-white">Game Rules</a>
            <a href="#" className="text-base text-center text-gray-300 hover:text-white">FAQs</a>
            <a href="#" className="text-base text-center text-gray-300 hover:text-white">About Us</a>
            <a href="#" className="text-base text-center text-gray-300 hover:text-white">News</a>
            <a href="#" className="text-base text-center text-gray-300 hover:text-white">Legal</a>
            <a href="#" className="text-base text-center text-gray-300 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-base text-center text-gray-300 hover:text-white">Contact Us</a>
          </div>

          {/* Payment Methods */}
          <div className="flex space-x-5 justify-center">
            <i className="fa fa-cc-visa fa-lg"></i>
            <i className="fa fa-cc-mastercard fa-lg"></i>
            <i className="fa fa-google-wallet fa-lg"></i>
            <i className="fa fa-cc-apple-pay fa-lg"></i>
            <i className="fa fa-phone fa-lg"></i>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 border-t border-gray-700 pt-6 flex justify-center">
          <p className="text-sm text-gray-400">
            &copy; 2024 Emirates 777. All rights reserved. Amounts in currencies other than AED are approximate and updated hourly.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

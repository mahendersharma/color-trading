import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto py-10 px-6 sm:px-8 lg:px-10">
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-8 sm:space-y-0">

          <div className="flex flex-col space-y-4 sm:space-y-2">
            <img
              alt="Your Company"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              className="h-10 w-10"
            />
            <p className="text-base text-gray-400 max-w-xs">
              Making the world a better place through constructing elegant hierarchies.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-16">
            <div >
              <h3 className="text-base font-semibold text-gray-300 uppercase tracking-wider ">
                Solutions
              </h3>
              <ul className="mt-3 space-y-3">
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Marketing</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Analytics</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Commerce</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Insights</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-semibold text-gray-300 uppercase tracking-wider">
                Support
              </h3>
              <ul className="mt-3 space-y-3">
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Pricing</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Documentation</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Guides</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">API Status</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-semibold text-gray-300 uppercase tracking-wider">
                Company
              </h3>
              <ul className="mt-3 space-y-3">
                <li><a href="#" className="text-base text-gray-300 hover:text-white">About</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Jobs</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Press</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-semibold text-gray-300 uppercase tracking-wider ">
                Legal
              </h3>
              <ul className="mt-3 space-y-3">
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Claim</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Privacy</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Terms</a></li>
              </ul>
            </div>
          </div>

          <div className="flex space-x-5">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                {/* Facebook icon SVG */}
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                {/* Instagram icon SVG */}
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">X (Twitter)</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                {/* Twitter icon SVG */}
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                {/* GitHub icon SVG */}
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">YouTube</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                {/* YouTube icon SVG */}
              </svg>
            </a>
          </div>

        </div>

        <div className="mt-8 border-t border-gray-700 pt-6 flex justify-center">
          <p className="text-sm text-gray-400">
            &copy; 2020 Your Company, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

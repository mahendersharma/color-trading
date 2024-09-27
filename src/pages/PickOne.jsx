import React from 'react'
import ParentComponent from "./ParentComponent";

function PickOne() {
    return (
        <>
        <div className='mx-auto max-w-7xl px-2 py-3 sm:px-3 lg:px-4'>
        <div className="bg-gradient-to-b from-purple-500 to-purple-700 p-4"  style={{borderRadius:'20px'}}>
                {/* Main Container */}
                <div className="flex flex-col md:flex-row justify-between items-center mx-auto max-w-7xl px-4 py-8">
                    
                    {/* Left Side - Logo */}
                    <div className="flex items-center mb-4 md:mb-0">
                        <img
                            style={{ width: '210px' }}
                            src="https://emiratesdraw.com/assets/multi_game/logo/logo_white_Pick1.png"
                            alt="Pick1 Logo"
                            className="w-full h-auto"
                        />
                    </div>

                    {/* Middle - Next Draw Countdown */}
                    <div className="text-center mb-4 md:mb-0">
                        <p className="text-2xl md:text-4xl font-semibold text-white tracking-tight">
                            NEXT DRAW
                        </p>
                        <p className="text-white text-base md:text-lg mt-1">
                            Saturday, 14 Sep 2024
                        </p>

                        <div className="mt-2 flex justify-center space-x-2 md:space-x-4 text-white">
                            {/* Days Block */}
                            <div className="flex flex-col items-center">
                                <div className="bg-white text-purple-600 font-bold text-2xl md:text-4xl px-3 md:px-5 py-1 md:py-2 rounded-md">
                                    00
                                </div>
                                <span className="text-xs md:text-sm mt-1">DAYS</span>
                            </div>

                            {/* Separator */}
                            <div className="flex items-center text-white text-2xl md:text-4xl font-bold">:</div>

                            {/* Hours Block */}
                            <div className="flex flex-col items-center">
                                <div className="bg-white text-purple-600 font-bold text-2xl md:text-4xl px-3 md:px-5 py-1 md:py-2 rounded-md">
                                    02
                                </div>
                                <span className="text-xs md:text-sm mt-1">HOURS</span>
                            </div>

                            {/* Separator */}
                            <div className="flex items-center text-white text-2xl md:text-4xl font-bold">:</div>

                            {/* Minutes Block */}
                            <div className="flex flex-col items-center">
                                <div className="bg-white text-purple-600 font-bold text-2xl md:text-4xl px-3 md:px-5 py-1 md:py-2 rounded-md">
                                    32
                                </div>
                                <span className="text-xs md:text-sm mt-1">MINUTES</span>
                            </div>

                            {/* Separator */}
                            <div className="flex items-center text-white text-2xl md:text-4xl font-bold">:</div>

                            {/* Seconds Block */}
                            <div className="flex flex-col items-center">
                                <div className="bg-white text-purple-600 font-bold text-2xl md:text-4xl px-3 md:px-5 py-1 md:py-2 rounded-md">
                                    27
                                </div>
                                <span className="text-xs md:text-sm mt-1">SECONDS</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Promotion Text */}
                    <div className="text-white text-center md:text-right">
                        <p className="text-base md:text-lg font-bold">Win up to 7x your entry value</p>
                    </div>
                </div>

                {/* Bottom Links */}
                <div className="border-t border-purple-600 mt-8 py-4 text-center">
                    <div className="flex flex-wrap justify-center space-x-2 md:space-x-4 text-white text-xs md:text-sm">
                        <a href="#" className="hover:text-gray-600">Buy Now</a>
                        <a href="#" className="hover:text-gray-600">Scan Coupon</a>
                        <a href="#" className="hover:text-gray-600">How to Play</a>
                        <a href="#" className="hover:text-gray-600">Past Results</a>
                        <a href="#" className="hover:text-gray-600">Winners</a>
                    </div>
                </div>
            </div>

            <div className="border-t mt-8 py-4 text-center bg-white" >
                <div className="flex justify-center space-x-4 text-black text-2xl md:text-4xl font-semibold tracking-tight">
                    Buy Now
                </div>
            </div>

            <div className="min-h-screen p-4 md:p-8 flex justify-center items-center bg-gradient-to-b from-purple-500 to-purple-700"  style={{borderRadius:'20px'}}>
                <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg w-full max-w-4xl">
                    <ParentComponent />
                </div>
            </div>
    </div>
            
        </>
    )
}

export default PickOne

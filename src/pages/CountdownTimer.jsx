import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const targetDate = new Date('2024-09-14T00:00:00Z'); // Set your target date here

        const calculateTimeLeft = () => {
            const now = new Date();
            const difference = targetDate - now;

            if (difference <= 0) {
                // Timer is done
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });
        };

        calculateTimeLeft(); // Calculate immediately
        const timer = setInterval(calculateTimeLeft, 1000); // Update every second

        return () => clearInterval(timer); // Cleanup on unmount
    }, []);

    return (
        <div className="text-center mb-4 md:mb-0">
            <p className="text-2xl md:text-4xl font-semibold text-white tracking-tight">NEXT DRAW</p>
            <p className="text-white text-base md:text-lg mt-1">Saturday, 14 Sep 2024</p>
            <div className="mt-2 flex justify-center space-x-2 md:space-x-4 text-white">
                <div className="flex flex-col items-center">
                    <div className="bg-white text-purple-600 font-bold text-2xl md:text-4xl px-3 md:px-5 py-1 md:py-2 rounded-md">{timeLeft.days}</div>
                    <span className="text-xs md:text-sm mt-1">DAYS</span>
                </div>
                <div className="flex flex-col items-center">
                    <div className="bg-white text-purple-600 font-bold text-2xl md:text-4xl px-3 md:px-5 py-1 md:py-2 rounded-md">{timeLeft.hours}</div>
                    <span className="text-xs md:text-sm mt-1">HOURS</span>
                </div>
                <div className="flex flex-col items-center">
                    <div className="bg-white text-purple-600 font-bold text-2xl md:text-4xl px-3 md:px-5 py-1 md:py-2 rounded-md">{timeLeft.minutes}</div>
                    <span className="text-xs md:text-sm mt-1">MINUTES</span>
                </div>
                <div className="flex flex-col items-center">
                    <div className="bg-white text-purple-600 font-bold text-2xl md:text-4xl px-3 md:px-5 py-1 md:py-2 rounded-md">{timeLeft.seconds}</div>
                    <span className="text-xs md:text-sm mt-1">SECONDS</span>
                </div>
            </div>
        </div>
    );
};

export default CountdownTimer;

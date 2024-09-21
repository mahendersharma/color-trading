import React, { useState, useEffect } from 'react';

const ColorBet = () => {
  const [selectedColor, setSelectedColor] = useState('');
  const [betAmount, setBetAmount] = useState('');
  const [winner, setWinner] = useState('');
  const [timeLeft, setTimeLeft] = useState(20); // 20 seconds
  const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Purple'];

  // Countdown timer effect
  useEffect(() => {
    if (timeLeft === 0) return; // Do nothing if time is up

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          const randomColor = colors[Math.floor(Math.random() * colors.length)];
          setWinner(randomColor);
          alert(randomColor === selectedColor 
            ? 'Congratulations! You won!' 
            : 'Sorry, try again!');
          return 0; // Timer ends
        }
        return prev - 1;
      });
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, [timeLeft, selectedColor]); // Dependencies

  const handleColorChange = (color) => {
    setSelectedColor(color);
    setWinner(''); // Reset winner when selecting a new color
    setTimeLeft(20); // Reset time to 20 seconds
  };

  const handleBetAmountChange = (e) => {
    setBetAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedColor && betAmount) {
      alert(`You bet ${betAmount} on ${selectedColor}!`);
      setWinner(''); // Reset winner message
      setTimeLeft(20); // Reset time when placing a new bet
    } else {
      alert('Please select a color and enter a bet amount.');
    }
  };

  // Change background color based on the winner
  const backgroundColor = winner ? winner.toLowerCase() : 'white';

  return (
    <div className={`p-4 transition-all duration-500`} style={{ backgroundColor }}>
      <h1 className="text-lg font-bold text-center">Color Betting</h1>
      <h2 className="text-center">Time Left: {timeLeft} seconds</h2>
      <form onSubmit={handleSubmit} className="flex flex-col mb-4">
        <div className="mb-4 text-center">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => handleColorChange(color)}
              style={{
                backgroundColor: color.toLowerCase(),
                color: 'white',
                padding: '10px',
                margin: '5px',
                borderRadius: '5px',
                border: 'none',
              }}
            >
              {color}
            </button>
          ))}
        </div>
        <input
          type="number"
          value={betAmount}
          onChange={handleBetAmountChange}
          placeholder="Enter bet amount"
          className="border p-2 mb-4 text-center"
        />
        <button type="submit" className="bg-blue-500 text-white p-2">
          Place Bet
        </button>
      </form>
      {winner && (
        <div className="mt-4 text-center">
          <h2 className="text-lg font-bold">Winner: {winner}</h2>
          <p className={winner === selectedColor ? 'text-green-500' : 'text-red-500'}>
            {winner === selectedColor ? 'Congratulations! You won!' : 'Sorry, you lost!'}
          </p>
        </div>
      )}
    </div>
  );
};

export default ColorBet;

import React, { useState, useEffect } from 'react';

const ImageSlider = () => {
  const images = [
    'https://cms.emiratesdraw.com//assets/6BD12493-0E51-4D2C-8668-E2F5FDCF8DFC?key=webp--clamp-width-1300--quality-100',
    'https://cms.emiratesdraw.com//assets/F775906F-F88C-474B-BE09-795AFAF2DC96?key=webp--clamp-width-1300--quality-100',
    'https://cms.emiratesdraw.com//assets/196C60A3-DD40-46D4-B992-42CE395C2190?key=webp--clamp-width-1300--quality-100',
    'https://cms.emiratesdraw.com//assets/A6DE9CE7-F7B8-4E42-89B4-A417B51AD8B0?key=webp--clamp-width-1300--quality-100'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5000ms = 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full  overflow-hidden">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)`, width: `${100}%`,height:`${90}%` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            <img
              src={image}
              style={{borderRadius:'20px'}}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Dots for navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-white' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
      <main>
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{/* Your content */}</div>
        </main>
    </div>
    
  );
};

export default ImageSlider;

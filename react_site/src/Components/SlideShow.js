import React, { useState, useEffect } from 'react';
import Timer from './Timer';
import CircularProgress from './CircularProgress';

const SlideShow = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  const handleTimerTick = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };



  return (
    <div className="flex justify-center items-center h-96">
      <div className="w-full max-w-2xl">
        <div className="bg-gray-900 aspect-w-16 aspect-h-9 relative border-2 border-black ">
          <img src={images[currentSlide]} alt="Slideshow" className="object-contain w-full h-96" />
      <div className="absolute left-8 lg:left-1 transform -translate-x-1/2 -translate-y-1/2 flex">
        <button
          onClick={goToPrevSlide}
          className="bg-gray-800 text-white rounded-md px-4 py-2 mr-2 focus:outline-none"
        >
          Prev
        </button>
      </div>
      <div className="absolute -right-9 lg:-right-16 transform -translate-x-1/2 -translate-y-1/2 flex">
        <button
          onClick={goToNextSlide}
          className="bg-gray-800 text-white rounded-md px-4 py-2 focus:outline-none"
        >
          Next
        </button>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex">
        <CircularProgress radius={10} strokeWidth={4} tickTime={1000} />
      </div>
        </div>
      </div>
      <Timer onTimerTick={handleTimerTick} tickTime={10000}/>
    </div>
  );
};

export default SlideShow;

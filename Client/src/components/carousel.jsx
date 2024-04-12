import React, { useState, useEffect } from "react";

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isHovered) {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }
    }, 2000); // Change the interval duration as needed

    return () => clearInterval(intervalId);
  }, [images.length, isHovered]);

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className="relative overflow-hidden w-[98%] h-[100%] border-2 border-solid rounded-lg shadow-xl cursor-pointer mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex transition-transform duration-500 ease-in-out h-full">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`w-full  ${index === currentImageIndex ? 'block' : 'hidden'}`}
            style={{ minHeight: "100%", objectFit: "cover" }}
          />
        ))}
      </div>
      <button
        className="absolute top-[50%] left-4 transform -translate-y-1/2 bg-gray-400 hover:bg-gray-600 bg-opacity-50 text-white w-[3rem] rounded-full"
        onClick={goToPrev}
      >
       
        <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          classname="w-[1rem] h-[1rem] "
        >
          <path
            fill-rule="evenodd"
            d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
            clip-rule="evenodd"
          />
        </svg>
        </span>
      </button>
      <button
        className="absolute top-[50%] right-4 transform -translate-y-1/2 bg-gray-400 hover:bg-gray-600 bg-opacity-50 text-white w-[3rem] rounded-full"
        onClick={goToNext}
      >
        <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          classname="w-[1rem] h-[1rem] "
        >
          <path
            fill-rule="evenodd"
            d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
            clip-rule="evenodd"
          />
        </svg>
        </span>
      </button>
    </div>
  );
};

export default Carousel;


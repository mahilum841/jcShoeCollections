import React, { useState, useEffect } from "react";

function Slideshow({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="w-full h-96 bg-gray-200 overflow-hidden relative rounded shadow mt-4">
      {images.length > 0 ? (
        <img src={images[currentIndex]} alt="Slideshow" className="w-full h-full object-" />
      ) : (
        <p className="text-center text-gray-500">No images available</p>
      )}
      <div className="absolute bottom-4 right-4 flex gap-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-blue-500" : "bg-gray-400"}`}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;

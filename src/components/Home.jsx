import React from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate from react-router-dom
import Slideshow from "./Slideshow";

function Home() {
  const navigate = useNavigate();  // Create a navigate function using useNavigate

  const slideshowImages = [
    "/assets/1.jpg",
    "/assets/2.jpg",
    "/assets/3.jpg",
    "/assets/4.jpg",
    "/assets/5.png",
    "/assets/6.jpg",
    "/assets/7.png",
    "/assets/8.png",
  ];

  // Function to navigate to the Shop page
  const goToShop = () => {
    navigate("/shop");  // This will navigate to the /shop route
  };

  return (
    <div className="p-4 mt-16">
      {/* Slideshow Section */}
      <div className="w-full max-w-4xl mx-auto">
        <Slideshow images={slideshowImages} />
      </div>

      {/* Welcome Section */}
      <div className="text-center mt-8">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to JC Shoe Collections</h1>
        <p className="mt-4 text-lg text-gray-600">
          Find your perfect fit from our wide selection of stylish and durable footwear.
        </p>
        <div className="mt-6">
          <button 
            className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition duration-300"
            onClick={goToShop}  // Trigger navigation to the Shop page when clicked
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;

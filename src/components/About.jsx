import React from "react";

function About() {
  return (
    <div className="p-4 mt-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">About Us</h1>
        <p className="text-lg text-gray-600">
          Welcome to JC Shoe Collections! We offer the best footwear for all your needs. Whether you're looking for
          stylish sneakers, comfortable walking shoes, or durable outdoor boots, we have the perfect pair for you.
        </p>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
          <p className="mt-2 text-gray-600">
            Our mission is to provide high-quality footwear that blends comfort and style. We believe that the right pair
            of shoes can elevate your experience, whether it's for work, play, or adventure.
          </p>
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Our Vision</h2>
          <p className="mt-2 text-gray-600">
            At JC Shoe Collections, we aim to become a leading brand in the footwear industry by offering an extensive
            range of styles and sizes that cater to every individual’s unique preferences.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

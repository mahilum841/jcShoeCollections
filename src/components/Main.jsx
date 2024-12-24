import React, { useState } from "react";
import Aside from "./Aside";
import Slideshow from "./Slideshow";
import { useCart } from "../contexts/CartContext";

function Main() {
  const { addToCart } = useCart();
  const [hoveredItem, setHoveredItem] = useState(null);
  const [filters, setFilters] = useState({ brand: "All", type: "All" }); // Added filters state

  const categories = {
    brands: ["All", "Nike", "Adidas", "Puma", "Reebok", "Converse", "Vans"],
    types: ["All", "Running Shoes", "Casual Sneakers", "Boots", "Sandals"],
  };

  const shoes = [
    { id: 1, name: "Nike Air Max 270", desc: "Stylish and comfortable sneakers.", price: "7,999", img: "/1.jpg", brand: "Nike", type: "Casual Sneakers" },
    { id: 2, name: "Adidas Ultraboost", desc: "Perfect running shoes.", price: "9,500", img: "/2.jpg", brand: "Adidas", type: "Running Shoes" },
    { id: 3, name: "Puma RS-X", desc: "Futuristic design.", price: "6,500", img: "/3.jpg", brand: "Puma", type: "Running Shoes" },
    { id: 4, name: "Reebok Nano X1", desc: "Engineered for cross-training.", price: "5,999", img: "/4.jpg", brand: "Reebok", type: "Walking Shoes" },
    { id: 5, name: "Converse Chuck Taylor", desc: "Timeless high-top sneakers.", price: "3,999", img: "/5.jpg", brand: "Converse", type: "Casual Sneakers" },
    { id: 6, name: "Vans Old Skool", desc: "Classic skate shoes.", price: "4,500", img: "/6.jpg", brand: "Vans", type: "Casual Sneakers" },
    { id: 7, name: "New Balance 574", desc: "Iconic sneakers.", price: "6,000", img: "/7.jpg", brand: "New Balance", type: "Walking Shoes" },
    { id: 8, name: "Under Armour HOVR", desc: "High-performance running shoes.", price: "8,000", img: "/8.jpg", brand: "Under Armour", type: "Running Shoes" },
    { id: 9, name: "Fila Disruptor II", desc: "Chunky sneakers.", price: "5,200", img: "/9.jpg", brand: "Fila", type: "Casual Sneakers" },
    { id: 10, name: "Asics Gel-Kayano", desc: "Reliable running shoes.", price: "7,800", img: "/10.jpg", brand: "Asics", type: "Running Shoes" },
    { id: 11, name: "Timberland Boots", desc: "Durable outdoor boots.", price: "10,500", img: "/11.jpg", brand: "Timberland", type: "Boots" },
    { id: 12, name: "Nike ZoomX", desc: "Premium running shoes.", price: "12,999", img: "/12.jpg", brand: "Nike", type: "Running Shoes" },
    { id: 13, name: "Adidas Slides", desc: "Comfortable slip-ons.", price: "1,800", img: "/13.jpg", brand: "Adidas", type: "Slippers" },
  ];

  // Filter shoes based on selected filters
  const filteredShoes = shoes.filter((shoe) => {
    return (
      (filters.brand === "All" || shoe.brand === filters.brand) &&
      (filters.type === "All" || shoe.type === filters.type)
    );
  });

  // Set filter function
  const setFilter = (filter) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filter.type]: filter.value,
    }));
  };

  return (
    <div>
      <div className="flex">
        <Aside categories={categories} setFilter={setFilter} />
        <div className="ml-72 p-4 w-full">
          <Slideshow images={["/assets/1.jpg", "/assets/2.jpg", "/assets/3.jpg", "/assets/4.jpg", "/assets/5.png", "/assets/6.jpg", "/assets/7.png", "/assets/8.png"]} />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            {filteredShoes.map((shoe) => (
              <div
                key={shoe.id}
                className="relative bg-white p-4 shadow rounded hover:scale-105 transition transform duration-300"
              >
                <div
                  className="relative"
                  onMouseEnter={() => setHoveredItem(shoe.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <img
                    src={shoe.img}
                    alt={shoe.name}
                    className="w-full h-40 object-cover mb-2 rounded"
                  />
                  {hoveredItem === shoe.id && (
                    <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-75 flex items-center justify-center p-4">
                      <p className="text-center">{shoe.desc}</p>
                    </div>
                  )}
                </div>
                <h3 className="text-lg font-bold mt-2">{shoe.name}</h3>
                <p className="text-gray-600">₱{shoe.price}</p>
                <button
                  onClick={() => addToCart(shoe)}
                  className="bg-gray-500 text-white px-4 py-2 rounded mt-2"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

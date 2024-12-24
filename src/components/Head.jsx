import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

function Head() {
  const { cart, removeItem, updateQuantity } = useCart(); // Access cart and functions
  const [showCart, setShowCart] = useState(false);

  // Calculate Total Price
  const cartTotal = cart.reduce(
    (total, item) => total + item.quantity * parseFloat(item.price.replace(",", "")),
    0
  );

  return (
    <header className="flex justify-between items-center p-4 bg-[#000000] text-white fixed w-full top-0 left-0 z-20">
      <h1 className="text-2xl font-bold">JC Shoe Collections</h1>
      <nav className="flex gap-4">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/shop" className="hover:text-gray-300">Shop</Link>
        <Link to="/about" className="hover:text-gray-300">About</Link>
        <li>
  <a href="/users" className="hover:text-blue-500">Users</a>
</li>

        <div className="relative">
          <button
            onClick={() => setShowCart(!showCart)}
            className="hover:text-gray-300"
          >
            Cart ({cart.length})
          </button>
          {showCart && (
            <div className="absolute right-0 top-8 bg-white text-black shadow-lg w-80 p-4 rounded">
              <h3 className="font-bold mb-2">Cart Items</h3>
              {cart.length > 0 ? (
                <>
                  <ul>
                    {cart.map((item) => (
                      <li key={item.name} className="flex justify-between mb-2">
                        <span>{item.name}</span>
                        <div className="flex items-center">
                          <button
                            onClick={() => updateQuantity(item.name, item.quantity - 1)}
                            className="px-2 bg-gray-200"
                          >
                            -
                          </button>
                          <span className="px-2">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.name, item.quantity + 1)}
                            className="px-2 bg-gray-200"
                          >
                            +
                          </button>
                          <button
                            onClick={() => removeItem(item.name)}
                            className="ml-2 text-red-600"
                          >
                            Remove
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <p className="font-bold mt-2">Total: ₱{cartTotal.toLocaleString()}</p>
                  <Link to="/cart" className="block text-center bg-gray-800 text-white px-4 py-2 rounded mt-2">
                    Checkout
                  </Link>
                </>
              ) : (
                <p>Your cart is empty.</p>
              )}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Head;

import React, { useState } from "react";
import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom"; // For navigation

function Cart() {
  const { cart, removeItem, updateQuantity } = useCart();
  const [showModal, setShowModal] = useState(false); // To show/hide the modal
  const navigate = useNavigate();

  // Calculate the total price
  const total = cart.reduce(
    (acc, item) => acc + item.quantity * parseFloat(item.price.replace(",", "")),
    0
  );

  // Function to handle proceeding to checkout
  const handleProceedCheckout = () => {
    setShowModal(false); // Close the modal
    navigate("/shop"); // Navigate back to the shop
    alert("Checkout Successful!"); // Show a success message (can be improved with a notification)
  };

  return (
    <div className="p-4 mt-16">
      <h1 className="text-3xl font-bold mb-4 text-center">Your Cart</h1>
      {cart.length > 0 ? (
        <div className="flex justify-center">
          <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
            <ul className="space-y-4">
              {cart.map((item) => (
                <li key={item.name} className="flex items-center justify-between bg-gray-100 p-4 rounded-md shadow-md">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div className="flex flex-col ml-4 w-2/3">
                    <h3 className="font-bold">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                    <p className="font-semibold mt-1">₱{item.price}</p>
                  </div>
                  <div className="flex items-center">
                    <button
                      onClick={() => updateQuantity(item.name, item.quantity - 1)}
                      className="px-3 py-1 text-white bg-gray-600 rounded-full hover:bg-gray-700"
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.name, item.quantity + 1)}
                      className="px-3 py-1 text-white bg-gray-600 rounded-full hover:bg-gray-700"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeItem(item.name)}
                      className="ml-4 text-red-600 hover:text-red-800"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <p className="font-bold mt-4 text-right">Total: ₱{total.toLocaleString()}</p>
            <div className="flex justify-center mt-6">
              <button
                className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-green-600"
                onClick={() => setShowModal(true)} // Show modal when clicking "Proceed to Checkout"
              >
                Proceed to Checkout
              </button>
            </div>

            {/* Modal for Checkout */}
            {showModal && (
              <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-20">
                <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                  <h3 className="text-xl font-bold mb-4">Checkout</h3>
                  <ul>
                    {cart.map((item) => (
                      <li key={item.name} className="flex justify-between border-b py-2">
                        <span>{item.name} x {item.quantity}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="font-bold mt-4">Total: ₱{total.toLocaleString()}</p>
                  <div className="mt-4 flex justify-between">
                    <button
                      className="bg-gray-500 text-white px-4 py-2 rounded"
                      onClick={() => setShowModal(false)} // Close the modal
                    >
                      Cancel
                    </button>
                    <button
                      className="bg-green-500 text-white px-4 py-2 rounded"
                      onClick={handleProceedCheckout} // Proceed to checkout and navigate back to shop
                    >
                      Confirm Checkout
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <p className="text-center">Your cart is empty.</p>
      )}
    </div>
  );
}

export default Cart;

import React from "react";

function Modal({ onCheckout, onClose, isCheckoutConfirmed }) {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Proceed to Checkout</h2>
        <p>Are you sure you want to proceed with the checkout?</p>
        <div className="mt-4 flex justify-between">
          <button
            onClick={onClose} // Close the modal if user cancels
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
          <button
            onClick={onCheckout} // Proceed with checkout
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Yes, Proceed
          </button>
        </div>
        {isCheckoutConfirmed && (
          <div className="mt-4 text-green-600 font-bold">Checkout Successful!</div>
        )}
      </div>
    </div>
  );
}

export default Modal;

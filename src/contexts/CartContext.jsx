import { createContext, useContext, useState } from "react";

// Create CartContext
const CartContext = createContext();

// Custom Hook: Export `useCart` to access the context
export const useCart = () => useContext(CartContext);

// Cart Provider Component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Function to Add Item to Cart
  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.name === item.name);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  // Function to Update Item Quantity
  const updateQuantity = (name, quantity) => {
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.name === name ? { ...cartItem, quantity: Math.max(1, quantity) } : cartItem
      )
    );
  };

  // Function to Remove Item from Cart
  const removeItem = (name) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.name !== name));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

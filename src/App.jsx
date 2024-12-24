import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Head";
import Footer from "./components/Footer";
import Main from "./components/Main";
import About from "./components/About";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Users from "./components/Users";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="flex-1 mt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Main />} />
              <Route path="/about" element={<About />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/users" element={<Users />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;

import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  const [loading, setLoading] = useState(false);

const addToCart = async (id) => {
  if (loading) return; // prevent multiple clicks
  setLoading(true);

  try {
    const response = await fetch('https://fakestoreapi.com/carts/'+id);

    if (response.ok) {
      const data = await response.json();
      console.log("Success! API se ye data mila:", data);

      setCartCount(prev => prev + 1);
      alert("Success: Product added to cart!");
    } else {
      console.error("API ne error diya:", response.statusText);
    }

  } catch (error) {
    console.error("Network Error ya Parsing Error:", error);
  } finally {
    setLoading(false);
  }
};

  return (
    <CartContext.Provider value={{ cartCount, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
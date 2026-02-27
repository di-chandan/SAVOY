import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);

  const addToCart = async (productId, quantity = 1) => {
    if (loading) return;
    setLoading(true);

    try {
      // Fetch the product data
      const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
      
      if (response.ok) {
        const product = await response.json();
        
        // Check if product already in cart
        setCart(prevCart => {
          const existingItem = prevCart.find(item => item.id === productId);
          
          if (existingItem) {
            // Update quantity
            return prevCart.map(item =>
              item.id === productId
                ? { ...item, quantity: item.quantity + quantity }
                : item
            );
          } else {
            // Add new item
            return [...prevCart, { ...product, quantity }];
          }
        });
        
        return true; // Return success status instead of alert
      } else {
        throw new Error('Failed to fetch product');
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, cartCount: cart.length }}>
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => useContext(CartContext);
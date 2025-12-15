import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [currentRestaurant, setCurrentRestaurant] = useState(null);

  const clearCart = () => {
    setCart([]);
    setCurrentRestaurant(null);
  };

  const addToCart = (item, restaurant) => {
    if (currentRestaurant && currentRestaurant.id !== restaurant.id) {
      // Return false to indicate that a restaurant switch confirmation is needed
      return false;
    }

    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });

    if (!currentRestaurant) {
      setCurrentRestaurant(restaurant);
    }

    return true;
  };

  const removeFromCart = (itemId) => {
    setCart(prevCart => {
      const newCart = prevCart.filter(item => item.id !== itemId);
      if (newCart.length === 0) {
        setCurrentRestaurant(null);
      }
      return newCart;
    });
  };

  const updateQuantity = (itemId, quantity) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === itemId
          ? { ...item, quantity: Math.max(0, quantity) }
          : item
      ).filter(item => item.quantity > 0)
    );

    // Check if cart is empty after update and reset restaurant if needed
    setCart(prevCart => {
      if (prevCart.length === 0) {
        setCurrentRestaurant(null);
      }
      return prevCart;
    });
  };

  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{
      cart,
      currentRestaurant,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      cartTotal
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}; 
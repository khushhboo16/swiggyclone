import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../restaurants/PizzaBakers.css";

// Restaurant info
const RESTAURANT_INFO = {
  id: "burger-farm",
  name: "Burger Farm",
  description: "Juicy burgers made with fresh ingredients and love"
};

const menuItems = [
  { id: "bf1", name: "Classic Cheese Burger", price: 149 },
  { id: "bf2", name: "Double Cheese Burger", price: 199 },
  { id: "bf3", name: "Chicken Burger", price: 169 },
  { id: "bf4", name: "BBQ Chicken Burger", price: 189 },
  { id: "bf5", name: "Veggie Supreme Burger", price: 159 },
  { id: "bf6", name: "Paneer Tikka Burger", price: 179 },
  { id: "bf7", name: "French Fries", price: 99 },
  { id: "bf8", name: "Cheese Fries", price: 129 },
  { id: "bf9", name: "Cold Drink", price: 49 },
  { id: "bf10", name: "Milkshake", price: 129 }
];

const BurgerFarm = () => {
  const { cart, addToCart, updateQuantity, cartTotal, currentRestaurant, clearCart } = useCart();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [itemToAdd, setItemToAdd] = useState(null);

  const getItemQuantity = (itemId) => {
    const item = cart.find(cartItem => cartItem.id === itemId);
    return item ? item.quantity : 0;
  };

  const handleAddToCart = (item) => {
    const added = addToCart(item, RESTAURANT_INFO);
    if (!added) {
      setItemToAdd(item);
      setShowConfirmation(true);
    }
  };

  const handleConfirmation = (confirmed) => {
    if (confirmed && itemToAdd) {
      clearCart();
      addToCart(itemToAdd, RESTAURANT_INFO);
    }
    setShowConfirmation(false);
    setItemToAdd(null);
  };

  return (
    <div className="restaurant-page">
      {showConfirmation && (
        <div className="confirmation-modal">
          <div className="confirmation-content">
            <p>Your cart contains dishes from {currentRestaurant.name}. Do you want to discard the selection and add dishes from {RESTAURANT_INFO.name}?</p>
            <div className="confirmation-buttons">
              <button onClick={() => handleConfirmation(false)} className="btn-no">No</button>
              <button onClick={() => handleConfirmation(true)} className="btn-yes">Yes</button>
            </div>
          </div>
        </div>
      )}

      <div className="header">
        <img src="/logos/burger-farm.png" alt="Burger Farm" className="restaurant-logo" />
        <div>
          <h1>{RESTAURANT_INFO.name}</h1>
          <p>{RESTAURANT_INFO.description}</p>
        </div>
      </div>

      <div className="menu">
        <h2>Menu</h2>
        {menuItems.map((item) => (
          <div key={item.id} className="menu-item">
            <div className="menu-item-info">
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
            </div>
            {getItemQuantity(item.id) === 0 ? (
              <button className="add-to-cart-button" onClick={() => handleAddToCart(item)}>
                Add to Cart
              </button>
            ) : (
              <div className="quantity-controls">
                <button onClick={() => updateQuantity(item.id, getItemQuantity(item.id) - 1)}>-</button>
                <span>{getItemQuantity(item.id)}</span>
                <button onClick={() => updateQuantity(item.id, getItemQuantity(item.id) + 1)}>+</button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Floating Cart Button */}
      {cart.length > 0 && (
        <Link 
          to="/orders" 
          className="fixed bottom-6 right-6 bg-orange-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-orange-600 transition-colors flex items-center gap-2"
        >
          <span>View Cart</span>
          <span className="bg-white text-orange-500 px-2 py-1 rounded-full text-sm">
            ₹{cartTotal}
          </span>
        </Link>
      )}
    </div>
  );
};

export default BurgerFarm;

import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../restaurants/PizzaBakers.css";

// Restaurant info
const RESTAURANT_INFO = {
  id: "hk",
  name: "HK",
  description: "Authentic Indian cuisine"
};

const menuItems = [
  { id: "hk1", name: "Dal Tadka", price: 199 },
  { id: "hk2", name: "Veg Manchurian", price: 179 },
  { id: "hk3", name: "Paneer Butter Masala", price: 229 },
  { id: "hk4", name: "Masala Dosa", price: 149 },
  { id: "hk5", name: "Fried Rice", price: 189 },
  { id: "hk6", name: "Chilli Paneer", price: 249 },
  { id: "hk7", name: "Combo Meal", price: 399 }
];

const HK = () => {
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
        <img src="/images/hk.png" alt="HK" className="restaurant-logo" />
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

export default HK;

import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../restaurants/PizzaBakers.css";

// Restaurant info
const RESTAURANT_INFO = {
  id: "nescafe",
  name: "Nescafe",
  description: "Premium coffee and snacks"
};

const menuItems = [
  { id: "nc1", name: "Hot Coffee", price: 50 },
  { id: "nc2", name: "Cold Coffee", price: 60 },
  { id: "nc3", name: "Cappuccino", price: 80 },
  { id: "nc4", name: "Latte", price: 90 },
  { id: "nc5", name: "Mocha", price: 100 },
  { id: "nc6", name: "Espresso", price: 70 },
  { id: "nc7", name: "Sandwich", price: 60 },
  { id: "nc8", name: "Muffin", price: 40 },
  { id: "nc9", name: "Croissant", price: 50 },
  { id: "nc10", name: "Combo Meal", price: 150 }
];

const Nescafe = () => {
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
        <img src="/images/nescafe.png" alt="Nescafe" className="restaurant-logo" />
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

export default Nescafe; 
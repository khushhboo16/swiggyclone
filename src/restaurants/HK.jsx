import React, { useState } from "react";
import "./PizzaBakers.css"; // Ensure CSS is linked properly

const menuItems = [
  { name: "Dal Tadka", price: 240 },
  { name: "Malai Kofta (White Gravy)", price: 260 },
  { name: "Jeera Aloo", price: 200 },
  { name: "Methi Matar Malai", price: 250 },
  { name: "Palak Paneer", price: 300 },
  { name: "Corn Palak", price: 280 },
  { name: "Shahi Paneer (White Gravy)", price: 310 },
  { name: "Channa Masala", price: 270 },
  { name: "Paneer Butter Masala", price: 300 },
  { name: "Sev Tamtar", price: 220 },
  { name: "Mix Vegetable", price: 270 },
];

const accompaniments = [
  { name: "Onion Salad", price: 50 },
  { name: "Extra White Butter", price: 40 },
  { name: "Green Salad (Seasonal)", price: 70 },
  { name: "Half Curd", price: 60 },
  { name: "Full Curd", price: 100 },
  { name: "Roasted Papad", price: 25 },
  { name: "Boondi Raita/Veg. Raita", price: 140 },
  { name: "Masala Papad", price: 50 },
  { name: "Pineapple Raita", price: 170 },
];

const HK = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, item];
      updateTotal(updatedCart);
      return updatedCart;
    });
  };

  const updateTotal = (updatedCart) => {
    const totalPrice = updatedCart.reduce((acc, item) => acc + item.price, 0);
    setTotal(totalPrice);
  };

  const removeFromCart = (itemToRemove) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.name !== itemToRemove.name);
      updateTotal(updatedCart);
      return updatedCart;
    });
  };

  return (
    <div className="restaurant-page">
      <div className="header">
        <img src="/images/hk.png" alt="Highway King" className="restaurant-logo" />
        <div>
          <h1>Highway King</h1>
          <p>Authentic Indian flavors served fresh.</p>
        </div>
      </div>

      <div className="menu">
        <h2>Main Dishes</h2>
        {menuItems.map((item, index) => (
          <div key={index} className="menu-item">
            <div className="menu-item-info">
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
            </div>
            <button className="add-to-cart-button" onClick={() => addToCart(item)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="menu">
        <h2>Accompaniments</h2>
        {accompaniments.map((item, index) => (
          <div key={index} className="menu-item">
            <div className="menu-item-info">
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
            </div>
            <button className="add-to-cart-button" onClick={() => addToCart(item)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="cart">
        <h3>Cart</h3>
        <ul>
          {cart.map((item, index) => (
            <li key={index} className="cart-item">
              {item.name} - ₹{item.price}
              <button className="remove-button" onClick={() => removeFromCart(item)}>Remove</button>
            </li>
          ))}
        </ul>
        <p><strong>Total: ₹{total}</strong></p>
      </div>
    </div>
  );
};

export default HK;

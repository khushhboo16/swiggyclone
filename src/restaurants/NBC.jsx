import React, { useState } from "react";
import "./PizzaBakers.css"; // Ensure CSS is linked properly

const menuItems = [
  { name: "Strawberry Shake", price: 182 },
  { name: "Black Current Shake", price: 182 },
  { name: "Chocolate Shake", price: 182 },
  { name: "Butterscotch Shake", price: 182 },
  { name: "Oreo Shake", price: 196 },
  { name: "KitKat Shake", price: 210 },
  { name: "Red Velvet Shake", price: 224 },
  { name: "Nutella Shake", price: 224 },
  { name: "Brownie Shake", price: 224 },
  { name: "Belgium Crunchy Shake", price: 224 },
  { name: "Blueberry Shake", price: 252 },
  { name: "Rocher Shake", price: 280 },
  { name: "Icy Blue", price: 140 },
  { name: "Litchi Slush", price: 140 },
  { name: "Galaxy Mocktail", price: 182 },
  { name: "Plain Cheese Maggie", price: 140 },
  { name: "Tandoori Maggie", price: 154 },
  { name: "Peri Peri Masala", price: 168 },
  { name: "Cookies", price: 56 },
  { name: "Jumbo Muffin", price: 140 },
  { name: "Brownie", price: 140 },
  { name: "Brownie Shot", price: 168 },
  { name: "Mud Pie Brownie", price: 168 },
];

const NBC = () => {
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
        <img src="/images/nbc.png" alt="NBC" className="restaurant-logo" />
        <div>
          <h1>NBC</h1>
          <p>Delicious shakes, desserts, and snacks to satisfy your cravings!</p>
        </div>
      </div>

      <div className="menu">
        <h2>Menu</h2>
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

export default NBC;

import React, { useState } from "react";
import "./PizzaBakers.css";

const menuItems = [
  { name: "Veg Burger", price: 109 },
  { name: "Go Green Burger", price: 109 },
  { name: "Devil's Chicken Delight", price: 139 },
  { name: "Farm Grilled Chicken", price: 149 },
  { name: "Farm Signature Meal", price: 159 },
];

const BurgerFarm = () => {
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
        <img src="/logos/burger-farm.png" alt="Burger Farm" className="restaurant-logo" />
        <div>
          <h1>Burger Farm</h1>
          <p>Delicious and freshly made burgers just for you!</p>
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

export default BurgerFarm;

import React, { useState } from "react";
import "./PizzaBakers";

const menuItems = [
  { name: "Masala Chaap", price: 160 },
  { name: "Punjabi Chaap", price: 160 },
  { name: "Achari Chaap", price: 160 },
  { name: "Tandoori Chaap", price: 170 },
  { name: "Malai Chaap", price: 170 },
  { name: "Afghani Chaap", price: 170 },
];

const Chatkara = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  // Function to add item to cart
  const addToCart = (item) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, item];
      updateTotal(updatedCart);
      return updatedCart;
    });
  };

  // Function to calculate total price
  const updateTotal = (updatedCart) => {
    const totalPrice = updatedCart.reduce((acc, item) => acc + item.price, 0);
    setTotal(totalPrice);
  };

  // Function to remove item from cart
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
        <img src="/logos/chatkara.png" alt="Chatkara" className="restaurant-logo" />
        <div>
          <h1>Chatkara</h1>
          <p>Delicious chaaps and tikkas made fresh for you!</p>
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

      {/* Cart Section */}
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

export default Chatkara;

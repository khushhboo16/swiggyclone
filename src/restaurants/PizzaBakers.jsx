import React, { useState } from "react";
import "./PizzaBakers.css";

// List of pizzas
const vegPizzas = [
  { name: "MARGHERITA CHEESE", price: 249 },
  { name: "CHEESE & TOMATO", price: 229 },
  { name: "DOUBLE CHEESE MARGHERITA", price: 289 },
  { name: "VEGGIE FRESH", price: 279 },
  { name: "COUNTRY SPECIAL PANEER DO PYAZA", price: 319 },
  { name: "GARDEN FARM", price: 259 },
  { name: "GOURMET VEG", price: 299 },
  { name: "PEPPY PANEER", price: 299 },
  { name: "EXOTICA PARADISE", price: 349 },
  { name: "VEG. MEXICAN GREEN WAVE", price: 319 },
  { name: "PANEER TIKKA", price: 329 },
  { name: "TANDOORI KADHAI PANEER", price: 359 },
  { name: "VEG EXTRAVAGANZA", price: 389 },
];

const nonVegPizzas = [
  { name: "PEPPER BARBEQUE CHICKEN CHEESE AND SPICY CHICKEN", price: 329 },
  { name: "BARBEQUE CHICKEN & ONION", price: 289 },
  { name: "SPICY CHICKEN PEPRIKA", price: 319 },
  { name: "TEXAS BARBEQUE CHICKEN", price: 349 },
  { name: "NEW CHICKEN TIKKA", price: 369 },
  { name: "CHICKEN MEXICAN RED WAVE SL", price: 399 },
  { name: "GOLDEN DELIGHT CHICKEN", price: 389 },
  { name: "KEEMA DO PYAZA", price: 319 },
  { name: "TANDOORI KADHAI CHICKEN", price: 409 },
  { name: "CHICKEN PEPPERONI", price: 369 },
  { name: "OVERLOADED SUPREME CHICKEN", price: 429 },
];

const PizzaBakers = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  // Function to add item to the cart
  const addToCart = (pizza) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, pizza];
      updateTotal(updatedCart); // Recalculate the total price
      return updatedCart;
    });
  };

  // Function to calculate total price of items in the cart
  const updateTotal = (updatedCart) => {
    const totalPrice = updatedCart.reduce((acc, pizza) => acc + pizza.price, 0);
    setTotal(totalPrice);
  };

  // Function to remove item from the cart
  const removeFromCart = (pizzaToRemove) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((pizza) => pizza.name !== pizzaToRemove.name);
      updateTotal(updatedCart); // Recalculate total after removal
      return updatedCart;
    });
  };

  return (
    <div className="restaurant-page">
      <div className="header">
        <img src="/logos/pizza-bakers.png" alt="Pizza Bakers" className="restaurant-logo" />
        <div>
          <h1>Pizza Bakers</h1>
          <p>Enjoy the finest pizza with a variety of vegetarian and non-vegetarian options</p>
        </div>
      </div>

      <div className="menu">
        <h2>Veg Pizzas</h2>
        {vegPizzas.map((pizza, index) => (
          <div key={index} className="menu-item">
            <div className="menu-item-info">
              <h3>{pizza.name}</h3>
              <p>₹{pizza.price}</p>
            </div>
            <button className="add-to-cart-button" onClick={() => addToCart(pizza)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="menu">
        <h2>Non-Veg Pizzas</h2>
        {nonVegPizzas.map((pizza, index) => (
          <div key={index} className="menu-item">
            <div className="menu-item-info">
              <h3>{pizza.name}</h3>
              <p>₹{pizza.price}</p>
            </div>
            <button className="add-to-cart-button" onClick={() => addToCart(pizza)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart Section */}
      <div className="cart">
        <h3>Cart</h3>
        <ul>
          {cart.map((pizza, index) => (
            <li key={index} className="cart-item">
              {pizza.name} - ₹{pizza.price}
              <button className="remove-button" onClick={() => removeFromCart(pizza)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
        <p><strong>Total: ₹{total}</strong></p>
      </div>
    </div>
  );
};

export default PizzaBakers;

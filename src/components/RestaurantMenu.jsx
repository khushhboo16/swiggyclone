import React from 'react';
import { useCart } from '../context/CartContext';

const RestaurantMenu = ({ menuItems, title }) => {
  const { addToCart } = useCart();

  return (
    <div className="menu-section">
      <h2 className="text-2xl font-bold mb-6 text-white">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {menuItems.map((item, index) => (
          <div key={index} className="menu-item bg-white rounded-lg p-4 shadow-md">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <span className="text-orange-600 font-bold">₹{item.price}</span>
            </div>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <button
              onClick={() => addToCart(item)}
              className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu; 
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { FaCreditCard, FaMoneyBillWave } from 'react-icons/fa';
import { ordersAPI } from '../services/api';

const PaymentSelection = () => {
  const [selectedMethod, setSelectedMethod] = useState('');
  const [loading, setLoading] = useState(false);
  const { cart, cartTotal, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handlePlaceOrder = async () => {
    if (!selectedMethod) {
      alert('Please select a payment method.');
      return;
    }

    setLoading(true);
    try {
      const orderData = {
        userId: user._id,
        items: cart,
        total: cartTotal,
        paymentMethod: selectedMethod,
      };

      await ordersAPI.createOrder(orderData);
      clearCart();
      navigate('/order-success');
    } catch (error) {
      console.error('Order failed:', error);
      alert('Failed to place order. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-gray-800 rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Select Payment Method</h2>

        <div className="space-y-4">
          <button
            onClick={() => setSelectedMethod('cash')}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-lg border ${
              selectedMethod === 'cash' ? 'border-orange-500 bg-gray-700' : 'border-gray-600'
            } transition-colors`}
          >
            <div className="flex items-center">
              <FaMoneyBillWave className="text-xl text-orange-500 mr-3" />
              <span className="text-white">Cash on Delivery</span>
            </div>
            {selectedMethod === 'cash' && <div className="h-3 w-3 bg-orange-500 rounded-full"></div>}
          </button>

          <button
            onClick={() => setSelectedMethod('online')}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-lg border ${
              selectedMethod === 'online' ? 'border-orange-500 bg-gray-700' : 'border-gray-600'
            } transition-colors`}
          >
            <div className="flex items-center">
              <FaCreditCard className="text-xl text-orange-500 mr-3" />
              <span className="text-white">Pay Online</span>
            </div>
            {selectedMethod === 'online' && <div className="h-3 w-3 bg-orange-500 rounded-full"></div>}
          </button>
        </div>

        <button
          onClick={handlePlaceOrder}
          disabled={loading}
          className="mt-6 w-full bg-orange-500 text-white font-semibold py-3 rounded-lg hover:bg-orange-600 transition"
        >
          {loading ? 'Placing Order...' : 'Place Order'}
        </button>
      </div>
    </div>
  );
};

export default PaymentSelection;

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ordersAPI } from '../services/api';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Order = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleProceedToOrder = () => {
    if (!user) {
      alert('Please login to proceed with your order');
      navigate('/login');
      return;
    }
    navigate('/payment');
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>
          <div className="bg-white rounded-xl shadow-md p-8 mb-8 text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-orange-100 mb-4">
              <svg className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Your cart is empty</h3>
            <p className="text-gray-500 mb-6">Looks like you haven't added anything to your cart yet</p>
            <Link
              to="/"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              Browse Restaurants
            </Link>
          </div>
          <OrderHistorySection />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>
        
        {/* Cart Items */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <ul className="divide-y divide-gray-200">
            {cart.map((item) => (
              <li key={item.id} className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-medium text-gray-900 truncate">{item.name}</h3>
                    <p className="mt-1 text-gray-500">₹{item.price} × {item.quantity}</p>
                  </div>
                  <div className="ml-4 flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 text-orange-600 hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      >
                        <span className="sr-only">Decrease quantity</span>
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                      </button>
                      <span className="w-8 text-center text-gray-900">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 text-orange-600 hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      >
                        <span className="sr-only">Increase quantity</span>
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-600 hover:text-red-900 focus:outline-none"
                    >
                      <span className="sr-only">Remove</span>
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* Cart Summary */}
          <div className="border-t border-gray-200 px-6 py-4">
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg font-medium text-gray-900">Total:</span>
              <span className="text-xl font-bold text-gray-900">₹{cartTotal}</span>
            </div>
            
            <div className="space-y-4">
              <button
                onClick={handleProceedToOrder}
                className="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                Proceed to Order
              </button>
              <Link
                to="/"
                className="w-full flex justify-center items-center px-6 py-3 border border-gray-300 rounded-md shadow-sm text-base font-medium text-orange-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>

        {/* Order History */}
        <OrderHistorySection />
      </div>
    </div>
  );
};

const OrderHistorySection = () => {
  const [orderHistory, setOrderHistory] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState('');
  const { user } = useAuth();

  React.useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await ordersAPI.myOrders();
        setOrderHistory(response.data);
      } catch (err) {
        console.error('Failed to fetch orders:', err);
        setError('Failed to load order history');
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchOrders();
    } else {
      setLoading(false);
    }
  }, [user]);

  if (!user) {
    return (
      <div className="bg-white rounded-xl shadow-md p-6 text-center">
        <p className="text-gray-600 mb-4">Sign in to view your order history</p>
        <Link
          to="/login"
          className="text-orange-600 hover:text-orange-800 font-medium"
        >
          Login
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Order History</h2>

      {loading && (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
        </div>
      )}
      
      {error && (
        <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      )}

      {!loading && orderHistory.length === 0 && (
        <div className="bg-white rounded-xl shadow-md p-8 text-center">
          <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          <h3 className="mt-2 text-lg font-medium text-gray-900">No orders yet</h3>
          <p className="mt-1 text-gray-500">Your completed orders will appear here</p>
        </div>
      )}

      <div className="space-y-4">
        {orderHistory.map((order) => (
          <div key={order._id} className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2 sm:mb-0">Order #{order._id.slice(-6).toUpperCase()}</h3>
                <div className="flex items-center">
                  <span className="text-sm text-gray-500">
                    {new Date(order.createdAt).toLocaleDateString('en-IN', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </span>
                </div>
              </div>

              <ul className="divide-y divide-gray-200 mb-4">
                {order.items.map((item, idx) => (
                  <li key={idx} className="py-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-gray-900 font-medium">{item.name}</span>
                        <span className="ml-2 text-gray-500 text-sm">× {item.quantity}</span>
                      </div>
                      <span className="text-gray-900">₹{item.price * item.quantity}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                <span className="text-sm text-gray-500">Status: <span className="font-medium text-gray-900">{order.status || 'Completed'}</span></span>
                <div className="text-lg font-bold text-gray-900">₹{order.total}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
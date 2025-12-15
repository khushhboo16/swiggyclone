import React, { createContext, useState, useContext } from 'react';
import { ordersAPI } from '../services/api';

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const [currentOrder, setCurrentOrder] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createOrder = async (orderData) => {
    try {
      setLoading(true);
      const response = await ordersAPI.createOrder(orderData);
      setCurrentOrder(response.data);
      return { success: true, order: response.data };
    } catch (error) {
      setError(error.response?.data?.msg || 'Failed to create order');
      return { success: false, error: error.response?.data?.msg };
    } finally {
      setLoading(false);
    }
  };

  const getMyOrders = async (params = {}) => {
    try {
      setLoading(true);
      const response = await ordersAPI.getMyOrders(params);
      setOrders(response.data.orders);
      return { success: true, orders: response.data.orders };
    } catch (error) {
      setError(error.response?.data?.msg || 'Failed to fetch orders');
      return { success: false, error: error.response?.data?.msg };
    } finally {
      setLoading(false);
    }
  };

  const getOrderById = async (id) => {
    try {
      setLoading(true);
      const response = await ordersAPI.getOrderById(id);
      setCurrentOrder(response.data);
      return { success: true, order: response.data };
    } catch (error) {
      setError(error.response?.data?.msg || 'Failed to fetch order');
      return { success: false, error: error.response?.data?.msg };
    } finally {
      setLoading(false);
    }
  };

  const trackOrder = async (id) => {
    try {
      setLoading(true);
      const response = await ordersAPI.trackOrder(id);
      return { success: true, tracking: response.data };
    } catch (error) {
      setError(error.response?.data?.msg || 'Failed to track order');
      return { success: false, error: error.response?.data?.msg };
    } finally {
      setLoading(false);
    }
  };

  const rateOrder = async (id, rating) => {
    try {
      setLoading(true);
      const response = await ordersAPI.rateOrder(id, rating);
      return { success: true, order: response.data };
    } catch (error) {
      setError(error.response?.data?.msg || 'Failed to rate order');
      return { success: false, error: error.response?.data?.msg };
    } finally {
      setLoading(false);
    }
  };

  const clearError = () => {
    setError(null);
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        currentOrder,
        loading,
        error,
        createOrder,
        getMyOrders,
        getOrderById,
        trackOrder,
        rateOrder,
        clearError
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
}; 
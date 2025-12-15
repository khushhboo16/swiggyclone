import axios from 'axios';

const API_URL = 'http://localhost:4000/api';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if it exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth API
export const authAPI = {
  register: (userData) => api.post('/auth/signup', userData),
  login: (credentials) => api.post('/auth/signin', credentials),
};

// Orders API
export const ordersAPI = {
  createOrder: (orderData) => api.post('/orders', orderData),
  myOrders: () => api.get('/orders/my-orders')
};

// Error handling
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // or use cookies / context
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});  

export default api; 
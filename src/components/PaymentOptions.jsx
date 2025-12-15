import React from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentOptions = ({ amount, onClose }) => {
  const navigate = useNavigate();

  const handlePayment = () => {
    alert('Order placed successfully!');
    onClose();
    navigate('/');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-xl w-96">
        <h2 className="text-2xl font-bold mb-4">Choose Payment Method</h2>
        <div className="space-y-4">
          <button
            onClick={handlePayment}
            className="w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-900"
          >
            Pay with Cash
          </button>
          <button
            onClick={onClose}
            className="w-full border border-gray-300 py-3 rounded-lg hover:bg-gray-50"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentOptions; 
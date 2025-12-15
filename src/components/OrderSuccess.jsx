import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaUtensils } from 'react-icons/fa';

const OrderSuccess = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <div className="text-center">
          <FaCheckCircle className="mx-auto h-16 w-16 text-green-500" />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Order Placed Successfully!
          </h2>
          <div className="mt-4 space-y-4">
            <p className="text-gray-600">
              Our delivery partner will collect cash on delivery.
            </p>
            <div className="flex items-center justify-center text-orange-500">
              <FaUtensils className="mr-2" />
              <p className="text-sm font-medium">Your order is being prepared</p>
            </div>
            <p className="text-gray-600 text-sm">
              Thank you for ordering with Hostel Craves!
            </p>
          </div>
          <div className="mt-8">
            <Link
              to="/"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess; 
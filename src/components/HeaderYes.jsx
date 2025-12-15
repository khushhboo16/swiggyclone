import React from "react";
import { HiUser, HiShoppingCart } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

export default function HeaderYes() {
  const { user, logout } = useAuth();
  const { cart } = useCart();
  const navigate = useNavigate();

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const handleAuthClick = () => {
    if (user) {
      logout();
    } else {
      navigate("/login");
    }
  };

  return (
    <header className="bg-black text-white shadow-lg py-4 px-6 sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo and Title */}
        <Link 
          to="/" 
          className="flex items-center group transition-transform hover:scale-[1.02]"
        >
          <img
            src="/images/logo.png"
            alt="Hostel Craves Logo"
            className="h-16 w-16 mr-4 object-contain transition-all duration-300 group-hover:rotate-[5deg]"
          />
          <h1 className="text-3xl font-bold app-title bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            Hostel Craves
          </h1>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-8 items-center">
          <Link 
            to="/hostel" 
            className="relative group text-base font-semibold tracking-wide hover:text-orange-400 transition-colors duration-300"
          >
            Hostel
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            to="/campus" 
            className="relative group text-base font-semibold tracking-wide hover:text-orange-400 transition-colors duration-300"
          >
            Campus
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            to="/outside-hostel" 
            className="relative group text-base font-semibold tracking-wide hover:text-orange-400 transition-colors duration-300"
          >
            Outside
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            to="/healthy-options" 
            className="relative group text-base font-bold tracking-wide hover:text-orange-400 transition-colors duration-300"
          >
            Healthy Options
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            to="/special-occasions" 
            className="relative group text-base font-semibold tracking-wide hover:text-orange-400 transition-colors duration-300"
          >
            Special Occasions
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>

        {/* Right Side - User & Cart */}
        <div className="flex items-center gap-6">
          {/* Welcome Message */}
          {user && (
            <div className="hidden md:flex text-sm bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent font-medium animate-pulse">
              Welcome, {user.split(" ")[0]}
            </div>
          )}

          {/* User Section */}
          <div
            className="flex items-center gap-2 cursor-pointer group"
            onClick={handleAuthClick}
          >
            <div className="p-2 rounded-full bg-gray-900 group-hover:bg-orange-500 transition-all duration-300">
              <HiUser className="text-xl group-hover:text-white transition-colors" />
            </div>
            <span className="font-semibold text-base tracking-wide group-hover:text-orange-400 transition-colors">
              {user ? "Logout" : "Login"}
            </span>
          </div>

          {/* Cart Icon */}
          <Link to="/orders" className="relative group">
            <div className="p-2 rounded-full bg-gray-900 group-hover:bg-orange-500 transition-all duration-300">
              <HiShoppingCart className="text-xl group-hover:text-white transition-colors" />
            </div>
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold transform group-hover:scale-110 transition-transform">
                {cartItemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
import React from "react";
import { HiUser, HiShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom"; // Import Link

export default function HeaderYes() {
  return (
    <header className="bg-black text-white shadow-md py-4 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center">
          <img src="/images/logo.png" alt="Hostel Craves Logo" className="h-10 w-10 mr-2" />
          <h1 className="text-3xl font-bold">Hostel Craves</h1>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-6 font-medium">
          <Link to="/hostel" className="hover:text-orange-500 transition">Hostel</Link>
          <Link to="/campus" className="hover:text-orange-500 transition">Campus</Link>
          <Link to="/outside-hostel" className="hover:text-orange-500 transition">Outside Hostel</Link>
          <Link to="/student-favorites" className="hover:text-orange-500 transition">Student Favorites</Link>
          <Link to="/healthy-options" className="text-orange-500 font-semibold">Healthy Options</Link>
          <Link to="/special-occasions" className="hover:text-orange-500 transition">Special Occasions</Link>
        </nav>

        {/* Icons Section */}
        <div className="flex items-center gap-4">
          <HiUser className="text-2xl cursor-pointer hover:text-orange-500 transition" />
          <div className="relative">
            <HiShoppingCart className="text-2xl cursor-pointer hover:text-orange-500 transition" />
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">1</span>
          </div>
        </div>
      </div>
    </header>
  );
}

import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Logo and Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="flex items-center">
            <img src="/images/logo.png" alt="Hostel Craves Logo" className="h-8 w-8 mr-2" />
            <h1 className="text-xl font-bold text-white">Hostel Craves</h1>
          </div>
          <p className="text-sm">&copy; {new Date().getFullYear()} Hostel Craves Limited</p>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
          <div>
            <h3 className="font-semibold text-white mb-2">Company</h3>
            <ul>
              <li><a href="#" className="hover:text-orange-500 transition">About Us</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Our Story</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Careers</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Team</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-2">Contact Us</h3>
            <ul>
              <li><a href="#" className="hover:text-orange-500 transition">Help & Support</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Partner with Us</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Ride with Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-2">Legal</h3>
            <ul>
              <li><a href="#" className="hover:text-orange-500 transition">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Cookie Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-2">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="text-white hover:text-orange-500 transition text-xl"><FaInstagram /></a>
              <a href="#" className="text-white hover:text-orange-500 transition text-xl"><FaFacebook /></a>
              <a href="#" className="text-white hover:text-orange-500 transition text-xl"><FaTwitter /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

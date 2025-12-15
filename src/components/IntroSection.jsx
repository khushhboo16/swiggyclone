"use client";
import React from "react";

export default function IntroSection() {
  return (
    <section className="bg-black text-white text-center py-16 px-6 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-15">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500 rounded-full filter blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-orange-600 rounded-full filter blur-[100px] animate-pulse animation-delay-2000"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto transform transition-all duration-500 ease-out">
        <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-6 animate-fade-in">
          <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent transition-all duration-700 hover:from-orange-300 hover:to-orange-500">
            Revolutionizing Rural
          </span>
          <br />
          <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent transition-all duration-700 hover:from-orange-400 hover:to-orange-300">
            Food Delivery
          </span>
        </h2>
        
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-gray-300 animate-fade-in animation-delay-300">
          Hostel Craves is transforming dining experiences by providing diverse meal options to rural communities. 
          Our mission is to ensure everyone has access to convenient and varied dining choices.
        </p>
        
        <div className="mt-10 flex justify-center gap-4 animate-fade-in animation-delay-500">
          <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full shadow-lg hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105 hover:brightness-110 active:scale-95">
            Order Now
          </button>
          <button className="px-8 py-3 border-2 border-orange-500 text-orange-400 font-semibold rounded-full hover:bg-orange-500/10 transition-all duration-300 hover:scale-105 active:scale-95">
            Learn More
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}
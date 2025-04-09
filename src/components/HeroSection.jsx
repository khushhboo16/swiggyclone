// HeroSection.js
import React from "react";

const HeroSection = () => {
  console.log('rendered');
  return (
    
    <section className="bg-black text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        <img src="/images/pic1.png" alt="Delicious Food" className="w-full h-[250px] object-cover rounded-lg" />
        <img src="/images/pic2.png" alt="Kitchen Scene" className="w-full h-[250px] object-cover rounded-lg" />
        <img src="/images/pic3.png" alt="Students Enjoying Meal" className="w-full h-[250px] object-cover rounded-lg" />
      </div>
    </section>
  );
};

export default HeroSection;  // Ensure you're using default export



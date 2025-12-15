import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-black text-white py-12 px-6 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 bg-orange-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-orange-600 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
          Discover Campus Delights
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="group relative overflow-hidden rounded-xl shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-orange-500/20">
            <img 
              src="/images/pic1.png" 
              alt="Delicious Food" 
              className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
              <h3 className="text-xl font-bold text-orange-400 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                Gourmet Meals
              </h3>
            </div>
          </div>
          
          <div className="group relative overflow-hidden rounded-xl shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-orange-500/20">
            <img 
              src="/images/pic2.png" 
              alt="Kitchen Scene" 
              className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
              <h3 className="text-xl font-bold text-orange-400 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                Professional Chefs
              </h3>
            </div>
          </div>
          
          <div className="group relative overflow-hidden rounded-xl shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-orange-500/20">
            <img 
              src="/images/pic3.png" 
              alt="Students Enjoying Meal" 
              className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
              <h3 className="text-xl font-bold text-orange-400 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                Happy Community
              </h3>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full shadow-lg hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105 hover:brightness-110">
            Explore Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
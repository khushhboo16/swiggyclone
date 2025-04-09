import React from 'react';
import './PartnerRestaurants.css';

const PartnerRestaurants = () => {
  return (
    <section className="bg-black text-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">WHAT'S ON YOUR MIND? </h2>
        <p className="text-lg mb-8">
          Discover our partner restaurants, each offering a unique dining experience 
          and a commitment to quality. Explore their specialties and enjoy a diverse 
          range of meal options.
        </p>

        {/* Grid for Images */}
        <div className="grid grid-cols-3 gap-6">
          <img src="/images/chatkara.png" alt="Restaurant 1" className="restaurant-image" />
          <img src="/images/devine.png" alt="Restaurant 2" className="restaurant-image" />
          <img src="/images/nbc.png" alt="Restaurant 3" className="restaurant-image" />
          <img src="/images/hk.png" alt="Restaurant 4" className="restaurant-image" />
          <img src="/images/nescafe.png" alt="Restaurant 5" className="restaurant-image" />
          <img src="/images/teapost.png" alt="Restaurant 6" className="restaurant-image" />
        </div>
      </div>
    </section>
  );
};

export default PartnerRestaurants;

import React from 'react';
import { Link } from 'react-router-dom';
import './PartnerRestaurants.css';

const PartnerRestaurants = () => {
  const restaurants = [
    { name: 'Chatkara', image: '/images/chatkara.png', link: '/restaurant/chatkara' },
    { name: 'Devine', image: '/images/devine.png', link: '/restaurant/devine' },
    { name: 'NBC', image: '/images/nbc.png', link: '/restaurant/nbc' },
    { name: 'Highway King', image: '/images/hk.png', link: '/restaurant/hk' },
    { name: 'Nescafe', image: '/images/nescafe.png', link: '/restaurant/nescafe' },
    { name: 'Tea Post', image: '/images/teapost.png', link: '/restaurant/tea-post' }
  ];

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
          {restaurants.map((restaurant, index) => (
            <Link 
              key={index} 
              to={restaurant.link}
              className="restaurant-link"
            >
              <img 
                src={restaurant.image} 
                alt={restaurant.name} 
                className="restaurant-image hover:scale-105 transition-transform duration-300" 
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerRestaurants;

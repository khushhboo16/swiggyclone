import React from "react";
import { Link } from "react-router-dom";
import "./CampusPage.css"; // Make sure this file path is correct

const outlets = [
  { name: "Nescafe", logo: "/images/nescafe.png", link: "/restaurant/pizza-bakers" },
  { name: "Italian Oven", logo: "/logos/italianoven.png", link: "/restaurant/subway" },
  { name: "Cheffie", logo: "/logos/cheffie.png", link: "/restaurant/belgian-waffle" },
  { name: "Tirupati Dosa", logo: "/logos/dosa.png", link: "/restaurant/zero-degrees" },
];

const CampusPage = () => {
  return (
    <div className="campus-page">
      <h1 className="heading">Campus Outlets</h1>
      <div className="outlets-list">
        {outlets.map((outlet, index) => (
          <Link key={index} to={outlet.link} className="outlet-card">
            <img src={outlet.logo} alt={outlet.name} className="outlet-logo" />
            <span className="outlet-name">{outlet.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CampusPage;

import React from "react";
import { Link } from "react-router-dom";
import "./InsidePage.css";

const outlets = [
  { name: "Highway King", logo: "/images/hk.png", link: "/restaurant/hk" },
  { name: "NBC", logo: "/images/nbc.png", link: "/restaurant/nbc" },
  { name: "Love Over Coffee", logo: "/logos/loc.png", link: "/restaurant/love-over-coffee" },
  { name: "Sambhar-Sa", logo: "/logos/sambharsa.png", link: "/restaurant/sambharsa" },
];

const OutsideCampus = () => {
  return (
    <div className="outside-campus">
      <h1 className="heading">Outside Campus Outlets</h1>
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

export default OutsideCampus;

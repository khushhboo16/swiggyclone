import React from "react";
import { Link } from "react-router-dom"; // Import Link for React navigation
import "./InsidePage.css";

const outlets = [
  { name: "Pizza Bakers", logo: "/logos/pizza-bakers.png", link: "/restaurant/pizza-bakers" },
  { name: "Subway", logo: "/logos/subway.png", link: "/restaurant/subway" },
  { name: "Belgian Waffle", logo: "/logos/belgian-waffle.png", link: "/restaurant/belgian-waffle" },
  { name: "Burger Farm", logo: "/logos/burger-farm.png", link: "/restaurant/burger-farm" },
  { name: "Italian Oven", logo: "/logos/italianoven.png", link: "/restaurant/italian-oven" },
  { name: "Devine", logo: "/images/devine.png", link: "/restaurant/devine" },
  { name: "China Town", logo: "/logos/chinatown.png", link: "/restaurant/china-town" },
  { name: "Tea Post", logo: "/images/teapost.png", link: "/restaurant/tea-post" },
  { name: "Chatkara", logo: "/images/chatkara.png", link: "/restaurant/chatkara" },
];

const InsidePage = () => {
  return (
    <div>
      <h1 className="heading">Inside Outlets</h1>
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

export default InsidePage;
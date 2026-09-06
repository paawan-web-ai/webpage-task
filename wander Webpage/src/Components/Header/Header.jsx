import React from "react";
import "./Header.scss";
const Header = () => {
  return (
    <div className="header-main">
      <div className="header-box">
        <h1>WANDER</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
          soluta veritatis reprehenderit aliquam ea molestiae minima atque
          facere non sint. Repellat.
        </p>
        <div className="button-main">
          <button>Plan Your Trip</button>
          <button>Explore Destinations</button>
        </div>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <div className="nav-main">
      <div className="nav-left">
        <h1>Wander</h1>
        <p>Home</p>
        <p>Dashboard</p>
        <p>Packages</p>
        <p>Blog</p>
        <p>About Us</p>
      </div>
      <div className="nav-right">
        <div className="search-input">
          <input type="search" name="" id="" placeholder="Search" />
          <i className="ri-search-line"></i>
          <button>Book now</button>
        </div>
        <div className="nav-hambar">
          <i className="ri-menu-line"></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

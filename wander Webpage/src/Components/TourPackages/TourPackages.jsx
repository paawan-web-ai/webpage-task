import React from "react";
import "./TourPackages.scss";
const TourPackages = () => {
  return (
    <div className="packages-box">
      <div className="main-packages">
        <div className="tour-packages">
          <div className="tour-header">
            <h3>Tour Packages</h3>
            <p>Affordable customizable and unforgettable adventures</p>
          </div>
          <button>Browse all packages</button>
        </div>
        <div className="island-card">
          <div className="upper-header">
            <h3>Island Hopper Adventure</h3>
          </div>
          <div className="island-img">
            <img
              src="https://images.unsplash.com/photo-1587514342160-aae139aba39d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>

          <div className="bottom-para">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              ad rerum, commodi,
            </p>
          </div>
        </div>
        <div className="northern-card">
          <div className="upper-header">
            <h3>Island Hopper Adventure</h3>
          </div>
          <div className="island-img">
            <img
              src="https://images.unsplash.com/photo-1587514342160-aae139aba39d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="bottom-para">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              ad rerum, commodi,
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourPackages;

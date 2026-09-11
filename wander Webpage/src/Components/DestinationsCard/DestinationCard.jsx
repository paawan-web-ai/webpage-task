import React from "react";
import "./DestinationCard.scss";
const DestinationCard = () => {
  return (
    <div className="main-background">
      <div className="background-heading">
        <h2>Top Destinations</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. A odio
          perferendis beatae?
        </p>
      </div>

      {/* Card */}
      <div className="card-box">
        <div className="main-card">
          <div className="card-img">
            <div className="card-rate">
              <p>
                starts at <span>$4999</span>
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1729091331448-357c6cea157e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div className="card-para">
              <h3>EL Nido</h3>
              <p>Beach paradies | 4.8(12k)</p>
              <p>Palawan, Region</p>
            </div>
          </div>
        </div>
        <div className="main-card">
          <div className="card-img">
            <div className="card-rate">
              <p>
                starts at <span>$4999</span>
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1729091331448-357c6cea157e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div className="card-para">
              <h3>EL Nido</h3>
              <p>Beach paradies | 4.8(12k)</p>
              <p>Palawan, Region</p>
            </div>
          </div>
        </div>
        <div className="main-card">
          <div className="card-img">
            <div className="card-rate">
              <p>
                starts at <span>$4999</span>
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1729091331448-357c6cea157e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div className="card-para">
              <h3>EL Nido</h3>
              <p>Beach paradies | 4.8(12k)</p>
              <p>Palawan, Region</p>
            </div>
          </div>
        </div>
        <div className="main-card">
          <div className="card-img">
            <div className="card-rate">
              <p>
                starts at <span>$4999</span>
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1729091331448-357c6cea157e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div className="card-para">
              <h3>EL Nido</h3>
              <p>Beach paradies | 4.8(12k)</p>
              <p>Palawan, Region</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card-buttons">
        <button>View more</button>
        <div className="button-icons">
          <i class="ri-arrow-left-circle-line"></i>
          <i class="ri-arrow-right-circle-line"></i>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;

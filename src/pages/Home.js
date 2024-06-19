import React from "react";
import { Link } from "react-router-dom";
import "../components/home/Home.css";
import ProofBhawan from "../components/images/ProofBhawan.jpg";

const Home = () => {
  return (
    
    <div className="home-page">
      <div className="section-details">
          <div className="section-name">
            <h1>Radar and Sensor Wing</h1>
          </div>
          <div className="section-about">
            <p>
              The R & S Wing of PXE (Proof and Experimental Establishment), a
              part of DRDO (Defence Research and Development Organization), is
              dedicated to the development and testing of radar and sensor
              technologies. This wing plays a crucial role in advancing India's
              capabilities in surveillance, reconnaissance, and target
              acquisition for defense purposes.
            </p>
            <Link to="/aboutus" className="know-more-link">
              Know More
            </Link>
          </div>
      </div>
     <div className="proof-photo-container">
        <img
          src={ProofBhawan}
          alt="Proof Bhawan"
          className="proof-photo"
        />
      </div>
    </div> 
  );
};

export default Home;

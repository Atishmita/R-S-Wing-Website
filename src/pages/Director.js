import React from "react";
import "../components/director/Director.css";
import directorImage from "../components/images/directorImage.jpg";

const DirectorPage = () => {
  return (
    <div className="director-page">
      <div className="director-details">
        <div>
          <div className="director-name">
            <h1>Shri Subodha Kumar Nayak</h1>
          </div>
          <div className="director-designation">
            <p>Scientist 'G'</p>
          </div>
          <div className="director-about">
          <p>
            Born in the Sambalpur district, Nayak completed his B.Tech in
            Mechanical Engineering from Veer Surendra Sai University of
            Technology (VSSUT) in Burla. He completed his M.Tech degree from
            IIT-Mumbai in aerospace engineering.
          </p></div>
        </div>
        <div className="director-photo-container">
          <img
            src={directorImage}
            alt="Director Photo"
            className="director-photo"
          />
        </div>
      </div>
    </div>
  );
};

export default DirectorPage;

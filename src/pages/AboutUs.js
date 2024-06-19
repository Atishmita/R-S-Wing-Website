import React, { useState } from "react";
import "../components/aboutus/AboutUs.css";
import Home from "../components/images/Home.jpeg";
import india from "../components/images/india.jpg";
import ProofBhawan from "../components/images/ProofBhawan.jpg";
import pxe from "../components/images/pxe.jpg";

const photos = [Home, india, ProofBhawan, pxe];

const AboutUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + photos.length) % photos.length
    );
  };

  return (
    <div className="about-us-page">
      <div className="photo-gallery-card">
        <div className="arrow left-arrow" onClick={handlePrev}>
          &lt;
        </div>
        <div className="photo-container">
          <img
            src={photos[currentIndex]}
            alt={`Photo ${currentIndex + 1}`}
            className="gallery-photo"
          />
        </div>
        <div className="arrow right-arrow" onClick={handleNext}>
          &gt;
        </div>
      </div>
      <div className="about-us-details">
        <div className="about-us-name">
          <h1>About Us</h1>
        </div>
        <div className="about-us-para">
          <p style={{ marginBottom: "20px" }}>
            The Radar and Sensor Wing of PXE (Proof and Experimental
            Establishment), a part of DRDO (Defence Research and Development
            Organization), is dedicated to the development and testing of radar
            and sensor technologies. This wing plays a crucial role in advancing
            India's capabilities in surveillance, reconnaissance, and target
            acquisition for defense purposes.
          </p>
          <p style={{ marginBottom: "20px" }}>
            The R & S Wing focuses on research, development, and evaluation of
            various radar systems, including ground-based, airborne, and naval
            radar systems. These radar systems are designed to detect, track,
            and identify objects in the air, on the ground, and at sea,
            providing critical information for defense operations.
          </p>
          <p style={{ marginBottom: "20px" }}>
            Additionally, the wing specializes in the development of sensor
            technologies, including electro-optical sensors, infrared sensors,
            and acoustic sensors. These sensors play a vital role in gathering
            intelligence, monitoring activities in different environments, and
            enhancing situational awareness for military personnel.
          </p>
          <p>
            The R & S Wing collaborates closely with other research
            establishments, defense agencies, and industry partners to leverage
            expertise and resources for the development of cutting-edge radar
            and sensor technologies. Through continuous research, testing, and
            innovation, the wing contributes to strengthening India's defense
            capabilities and maintaining technological superiority in the field
            of radar and sensor systems.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

import React from "react";
import Button from "../button/Button";
import "./Header.css";
import logo from "../images/logo.png";

function Header() {
  return (
    <>
      <div className="header-container">
        <div className="blue-box">
          <div className="button-container">
            <Button />
          </div>
          <img src={logo} alt="Logo" />
        </div>
      </div>
    </>
  );
}

export default Header;
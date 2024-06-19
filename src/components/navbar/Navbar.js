import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { navItems, sideItems } from "./NavItems";
import Dropdown from "./Dropdown";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      {!showMenu && (
        <nav className="navbar">
          <ul className="nav-items">
            {navItems.map((item) => {
              if (item.title === "Details") {
                return (
                  <li
                    key={item.id}
                    className={item.cName}
                    onMouseEnter={() => setDropdown(true)}
                    onMouseLeave={() => setDropdown(false)}
                  >
                    <Link to={item.path}>{item.title}</Link>
                    {dropdown && <Dropdown />}
                  </li>
                );
              }

              return (
                <li key={item.id} className={item.cName}>
                  <Link to={item.path}>{item.title} </Link>
                </li>
              );
            })}
          </ul>
          <span onClick={() => setShowMenu(!showMenu)} className="three-lines">
            <FiMenu />
          </span>
        </nav>
      )}
      {showMenu && (
        <div className="custom-container">
          <div className="gapping">
            <ul className="custom-flex-column">
              {sideItems.map((item) => (
                <li key={item.id} className="nav-li">
                  <Link onClick={() => setShowMenu(false)} to={item.path}>
                    {item.title}
                  </Link>
                  
                </li>
              ))}
            </ul>
            <span onClick={() => setShowMenu(false)} className="custom-icon">
              <MdClose />
            </span>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;

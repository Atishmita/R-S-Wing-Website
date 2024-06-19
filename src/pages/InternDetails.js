import React from "react";
import "../components/intern/InternDetails.css";
import { yearsDropdown } from "../components/navbar/NavItems";
import { useNavigate } from "react-router-dom";

function InternDetails() {
  const navigate = useNavigate();

  const handleAddDetailsClick = () => {
    navigate("/addDetails");
  };

  const [dropdown, setDropdown] = React.useState(false);

  return (
    <div className="wrap">
      <div className="heading">
        <h2>Intern Details</h2>
        <div
          className="dropdown"
          onMouseEnter={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}
        >
          <button className="button3" type="submit">
            Choose Year
          </button>
          {dropdown && (
            <div className="dropdown-content">
              <ul>
                {yearsDropdown.map((year) => (
                  <li key={year.id}>
                    <a className={year.cName} href={year.path}>
                      {year.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <form>
        <div className="container">
          <label>
            <b>Name</b>
          </label>
          <input type="text" placeholder="Enter Fullname" name="namee" />
          <label>
            <b>Unique ID</b>
          </label>
          <input type="password" placeholder="Enter UniqueId" name="password" />
          <div className="internButtons">
            <button className="button1" type="submit">
              Submit
            </button>
            <button
              className="button2"
              type="button"
              onClick={handleAddDetailsClick}
            >
              Add Details
            </button>
          </div>
          <input type="checkbox" checked="checked" /> Remember me
        </div>

        <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
          <span className="psw">
            Forgot <a href="/#">Unique Id?</a>
          </span>
        </div>
      </form>
    </div>
  );
}

export default InternDetails;

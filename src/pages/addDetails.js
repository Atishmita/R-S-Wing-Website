import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../components/addDetails/addDetails.css"; // Ensure this path is correct

const AddDetails = ({ onAddStudent }) => {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [batch, setBatch] = useState("");
  const [uniqueId, setUniqueId] = useState("");
  const [certificate, setCertificate] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newStudent = {
      name,
      year,
      batch,
      uniqueId,
      certificate,
    };

    if (typeof onAddStudent === "function") {
      onAddStudent(newStudent);
    } else {
      console.error("onAddStudent is not a function");
    }
    
    navigate("/studentManagement");
  };

  return (
    <div className="wraps">
      <div className="AddDetails-heading">
        <h2>Add Details</h2>
      </div>
      <div className="mainform">
        <form className="addDetails-form" onSubmit={handleSubmit}>
          <div className="AddDetails-container">
            <div className="AddDetails-internName">
              <label>
                <b>Intern Name</b>
              </label>
              <input
                type="text"
                placeholder="Enter Fullname"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="AddDetails-others">
              <div className="AddDetails-year">
                <label>
                  <b>Year</b>
                </label>
                <input
                  type="number"
                  placeholder="2024"
                  name="year"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                />
              </div>
              <div className="AddDetails-batch">
                <label>
                  <b>Batch</b>
                </label>
                <input
                  type="number"
                  placeholder="1"
                  name="batch"
                  value={batch}
                  onChange={(e) => setBatch(e.target.value)}
                />
              </div>
            </div>
            <div className="AddDetails-uniqueid">
              <div className="AddDetails-unique">
                <label>
                  <b>Unique ID</b>
                </label>
                <input
                  type="password"
                  placeholder="Enter UniqueId"
                  name="password"
                  value={uniqueId}
                  onChange={(e) => setUniqueId(e.target.value)}
                />
              </div>
              <div className="AddDetails-certificate">
                <label>
                  <b>Upload certificate</b>
                </label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  name="certificate"
                  onChange={(e) => setCertificate(e.target.files[0])}
                />
              </div>
            </div>
            <div>
              <button className="AddDetails-button" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDetails;

import React from "react";
import EmployeeCards from "../components/employee/EmployeeCards";
import "../components/employee/EmployeeManagement.css";

function EmployeeManagement() {
  return (
    <div className="employee-management-container">
      <div className="employee-add-header">
        <h1>Employee Details</h1>
        <div className="add-card-button">
          <span className="plus-icon">+</span>
        </div>
      </div>
      <div className="employee-cards">
        <EmployeeCards />
      </div>
    </div>
  );
}

export default EmployeeManagement;

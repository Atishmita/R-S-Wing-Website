import React from "react";

import "./EmployeeCards.css";

const EmployeeCards = () => {
  const employees = [
    {
      id: "E001",
      name: "Dr. Sankarshan Padhy",
      designation: "Scientist-'F'",
      email: "spadhy@gmail.com",
      photo: "https://via.placeholder.com/150",
    },
    {
      id: "E002",
      name: "Sukromony Lakra",
      designation: "Scientist-'D'",
      email: "sukromonylakra.com",
      photo: "https://via.placeholder.com/150",
    },
    {
      id: "E003",
      name: "Provhat Mandal",
      designation: "Technical Officer - 'A'",
      email: "probhatmandal.com",
      photo: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="card-container">
      {employees.map((employee) => (
        <div className="card" key={employee.id}>
          <div className="scientist-photo">
            <img
              src={employee.photo}
              alt={employee.name}
              className="employee-photo"
            />
          </div>
          <div className="employee-name">
            <h3>{employee.name}</h3>
          </div>
          <div className="employee-details">
            <p>
              <strong>ID:</strong> {employee.id}
            </p>
            <p>
              <strong>Designation:</strong> {employee.designation}
            </p>
            <p>
              <strong>Email:</strong> {employee.email}
            </p>
            <a
              href={`/employeeDetails/${employee.id}`}
              className="know-more-link"
            >
              Know More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmployeeCards;

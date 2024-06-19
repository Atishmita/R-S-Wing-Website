import React, { useState } from "react";
import "../components/studentManagement/StudentManagement.css"; // Ensure this path is correct

const StudentManagement = ({ students }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="Studentslist">
        <h2>Students List</h2>
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th className="serial-number">S.No</th>
              <th className="student-name">Name</th>
              <th>Batch</th>
              <th>Year</th>
              <th className="uniqueid-student">Unique ID</th>
              <th>Certificate</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student, index) => (
              <tr key={index}>
                <td className="serial-number">{index + 1}</td>
                <td>{student.name}</td>
                <td>{student.batch}</td>
                <td>{student.year}</td>
                <td>{student.uniqueId}</td>
                <td>
                  {student.certificate
                    ? student.certificate.name
                    : "No Certificate"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentManagement;

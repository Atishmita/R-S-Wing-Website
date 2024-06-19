import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import InternDetails from "./pages/InternDetails";
import AddDetails from "./pages/addDetails";
import StudentManagement from "./pages/StudentManagement";
import EmployeeManagement from "./pages/EmployeeManagement"; 
import Director from "./pages/Director";
import AboutUs from "./pages/AboutUs";

function App() {
  const [students, setStudents] = useState([]);
 const [employees, setEmployees] = useState([]);

  const handleAddStudent = (student) => {
    setStudents([...students, student]);
  };
  return (
    <>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home}></Route>
          <Route path="/Login" exact Component={Login}></Route>
          <Route path="/interns" exact Component={InternDetails}></Route>
          <Route
            path="/studentManagement"
            element={<StudentManagement students={students} />}
          />
          <Route
            path="/addDetails"
            element={<AddDetails onAddStudent={handleAddStudent} />}
          />
          <Route
            path="/employees"
            element={<EmployeeManagement employees={employees} />}
          />

          <Route path="/contactus" exact Component={Contact}></Route>
          <Route path="/director" element={<Director />} />
          <Route path="aboutus" exact Component={AboutUs} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

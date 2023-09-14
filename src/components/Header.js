import React from "react";
import { Link } from "react-router-dom";
import "./add_style.css";

function Header() {
    return (     
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">CCGIN</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <Link to='/' className="nav-link active" id="item">Home</Link>
        </li>
        {/* <li className="nav-item">
          <Link to='/add_student' className="nav-link active">Add Student</Link>
        </li> */}
        <li className="nav-item">
          <Link to='/view_students' className="nav-link active">Students</Link>
        </li>
        {/* <li className="nav-item">
          <Link to='/add_lecturer' className="nav-link active">Add Lecturers</Link>
        </li> */}
        <li className="nav-item">
          <Link to='/view_lecturers' className="nav-link active">Lecturers</Link>
        </li>
        {/* <li className="nav-item">
          <Link to='/add_instructor' className="nav-link active">Add Instructors</Link>
        </li> */}
        <li className="nav-item">
          <Link to='/view_instructors' className="nav-link active">Books</Link>
        </li>
        {/* <li className="nav-item">
          <Link to='/add_nonacademicstaff' className="nav-link active">Add Non Academic Staff</Link>
        </li> */}
        <li className="nav-item">
          <Link to='/view_nonacademicstaff' className="nav-link active">Workers</Link>
        </li>
        {/* <li className="nav-item">
          <Link to='/add_cleaningstaff' className="nav-link active">Add Cleaning Staff</Link>
        </li> */}
        {/* <li className="nav-item">
          <Link to='/view_cleaningstaff' className="nav-link active">View Cleaning Staff</Link>
        </li> */}
        <li className="nav-item">
          <Link to='/view_signup' className="nav-link active">Sign-up</Link>
        </li>
          </ul>
        </div>
      </div>
    </nav>

    )
}

export default Header;
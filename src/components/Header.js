import React from "react";
import { Link } from "react-router-dom";
import "./add_style.css";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {" "}
        </a>
        <a className="navbar-brand" href="#">
          {" "}
        </a>
        <a className="navbar-brand" href="#">
          CCGIN
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" id="item">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/students" className="nav-link active">
                Students
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/lecturers" className="nav-link active">
                Lecturers
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/books" className="nav-link active">
                Books
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/workers" className="nav-link active">
                Workers
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/view_signup" className="nav-link active">
                Sign-up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;

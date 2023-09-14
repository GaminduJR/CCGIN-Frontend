import React, { Fragment, useState } from "react";
import axios from "axios";
import "./add_style.css";
import Header from "./Header";
import back from "../images/backgound.jpg";

const Home = () => {
  const imgstyle = {
    justifyContent: "center",
    innerWidth: "80px",
  };
  return (
    <div>
      <Header />
      <div className="container">
        <div className="text" style={imgstyle}>
          <h1 className="mt-5">Welcome!!!</h1>
          <p>Registration Platform</p>
        </div>
        <img
          src="https://assets.architecturaldigest.in/photos/624c2654cf7483eb90e638d6/16:9/w_1920,c_limit/Books-1.jpg"
          class="img-fluid"
          alt="Responsive image"
        />
        <form action="#">
          <div className="form-row" />
        </form>
      </div>
    </div>
  );
};

export default Home;

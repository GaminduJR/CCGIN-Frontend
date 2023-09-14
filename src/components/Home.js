import React, { Fragment, useState } from "react";
import axios from "axios";
import "./add_style.css";

import back from "../images/backgound.jpg";

const Home = () => {
  const imgstyle = {
    justifyContent: "center",
    innerWidth: "80px",
  };
  return (
   <div style={{backgroundColor: "black"}}>
      <div className="container">
        <div className="text text-center" style={imgstyle}>
          <h1 className="pt-5 text-light">Library  Management</h1>
          <p></p>
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

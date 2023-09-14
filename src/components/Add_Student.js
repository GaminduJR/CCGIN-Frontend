import axios from "axios";
import React, { useState } from "react";

export default function AddStudent() {
  const [name, setName] = useState({});
  const [ID, setID] = useState({});
  const [email, setEmail] = useState({});
  const [contactNum, setContactNum] = useState({});

  const onSubmit = (e) => {
    // e.preventDefault();
    axios.post("http://localhost:8000/student/save", {name,ID,email,contactNum}).then((res) => {
      if (res.data.success) {
        setName({});
        setID({});
        setEmail({});
        setContactNum({});
        alert("Student added successfully");
      }
    });
  };

  return (
    <div className="col-md-8 mt-4 mx-auto">
      <h1 className="h3 mb-3 font-weight-normal">Add New Student</h1>
      <form className="needs-validation" noValidate>

        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label style={{ marginBottom: "5px" }}>Student Name</label>
          <input
            type="text"
            className="form-control"
            name="studentName"
            placeholder="Enter Student Name"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>        

        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label style={{ marginBottom: "5px" }}>NIC</label>
          <input
            type="text"
            className="form-control"
            name="NIC"
            placeholder="Enter NIC"
            required
            onChange={(e) => setID(e.target.value)}
          />
        </div>

        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label style={{ marginBottom: "5px" }}>Email</label>
          <input
            type="text"
            className="form-control"
            name="email"
            placeholder="Enter Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label style={{ marginBottom: "5px" }}>Contact Number</label>
          <input
            type="text"
            className="form-control"
            name="cNum"
            placeholder="Enter Contact Number"
            required
            onChange={(e) => setContactNum(e.target.value)}
          />
        </div>

        <button
          className="btn btn-success"
          type="submit"
          style={{ marginTop: "15px" }}
          onClick={onSubmit}
        >
          <i className="far fa-check-square"></i>&nbsp; Add
        </button>
      </form>
    </div>
  );
}

import axios from "axios";
import React, { useState } from "react";

export default function AddLibrarian() {
  const [name, setname] = useState({});
  const [NIC, setNIC] = useState({});
  const [email, setemail] = useState({});
  const [contactNum, setcontactNum] = useState({});

  const onSubmit = (e) => {
    // e.preventDefault();
    axios.post("http://localhost:8000/librarian/save", {name,NIC,email,contactNum}).then((res) => {
      if (res.data.success) {
        setname({});
        setNIC({});
        setemail({});
        setcontactNum({});
        alert("librarian added successfully");
      }
    });
  };

  return (
    <div className="col-md-8 mt-4 mx-auto">
      <h1 className="h3 mb-3 font-weight-normal">Add New Librarian</h1>
      <form className="needs-validation" noValidate>

        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label style={{ marginBottom: "5px" }}>Librarian Name</label>
          <input
            type="text"
            className="form-control"
            name="librarianName"
            placeholder="Enter librarian Name"
            required
            onChange={(e) => setname(e.target.value)}
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
            onChange={(e) => setNIC(e.target.value)}
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
            onChange={(e) => setemail(e.target.value)}
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
            onChange={(e) => setcontactNum(e.target.value)}
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

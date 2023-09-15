import axios from "axios";
import React, { useState } from "react";

export default function AddWorker() {
  const [Name, setName] = useState({});
  const [NIC, setNIC] = useState({});
  const [cleaningType, setcleaningType] = useState({});
  const [contactNum, setcontactNum] = useState({});

  const onSubmit = (e) => {
    // e.preventDefault();
    axios.post("http://localhost:8000/worker/save", {Name,NIC,cleaningType,contactNum}).then((res) => {
      if (res.data.success) {
        setName({});
        setNIC({});
        setcleaningType({});
        setcontactNum({});
        alert("worker added successfully");
      }
    });
  };

  return (
    <div className="col-md-8 mt-4 mx-auto">
      <h1 className="h3 mb-3 font-weight-normal">Add New Worker</h1>
      <form className="needs-validation" noValidate>

        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label style={{ marginBottom: "5px" }}>Worker Name</label>
          <input
            type="text"
            className="form-control"
            name="WorkerName"
            placeholder="Enter Worker Name"
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
            onChange={(e) => setNIC(e.target.value)}
          />
        </div>

        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label style={{ marginBottom: "5px" }}>Cleaning Type</label>
          <input
            type="text"
            className="form-control"
            name="cleaningType"
            placeholder="Enter Cleaning Type"
            required
            onChange={(e) => setcleaningType(e.target.value)}
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

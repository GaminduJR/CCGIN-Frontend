import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function EditWorker() {
  const id = useParams().id;
  const [Name, setName] = useState({});
  const [NIC, setNIC] = useState({});
  const [cleaningType, setcleaningType] = useState({});
  const [contactNum, setContactNum] = useState({});

  React.useEffect(() => {
    axios.get(`http://localhost:8000/worker/${id}`).then((res) => {
      console.log("update1");
      if (res.data.success) {
        console.log("update2");
        setName(res.data.worker.Name);
        setNIC(res.data.worker.NIC);
        setcleaningType(res.data.worker.cleaningType);
        setContactNum(res.data.worker.contactNum);
      }
    });
  }, [id]);

  const onSubmit = (e) => {
    axios
      .put(`http://localhost:8000/worker/update/${id}`, {
        Name,
        NIC,
        cleaningType,
        contactNum,
      })
      .then((res) => {
        if (res.data.success) {
          console.log(res.data.success);
          setName({});
          setNIC({});
          setcleaningType({});
          setContactNum({});
        }
      });
  };

  return (
    <div className="col-md-8 mt-4 mx-auto">
      <h1 className="h3 mb-3 font-weight-normal">Edit Worker</h1>
      <form className="needs-validation" noValidate>
        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label style={{ marginBottom: "5px" }}>Worker Name</label>
          <input
            type="text"
            className="form-control"
            name="workerName"
            value={Name}
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
            value={NIC}
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
            value={cleaningType}
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
            value={cleaningType}
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
          <i className="far fa-check-square"></i>&nbsp; Update
        </button>
      </form>
    </div>
  );
}

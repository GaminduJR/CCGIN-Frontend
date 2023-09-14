import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function EditStudent() {
  const id = useParams().id;
  const [name, setName] = useState({});
  const [ID, setID] = useState({});
  const [email, setEmail] = useState({});
  const [contactNum, setContactNum] = useState({});

  React.useEffect(() => {
    axios.get(`http://localhost:8000/student/${id}`).then((res) => {
      console.log("update1");
      if (res.data.success) {
        console.log("update2");
        setName(res.data.student.name);
        setID(res.data.student.ID);
        setEmail(res.data.student.email);
        setContactNum(res.data.student.contactNum);
      }
    });
  }, [id]);

  const onSubmit = (e) => {
    axios
      .put(`http://localhost:8000/student/update/${id}`, {
        name,
        ID,
        email,
        contactNum,
      })
      .then((res) => {
        if (res.data.success) {
          console.log(res.data.success);
          setName({});
          setID({});
          setEmail({});
          setContactNum({});
        }
      });
  };

  return (
    <div className="col-md-8 mt-4 mx-auto">
      <h1 className="h3 mb-3 font-weight-normal">Edit Student</h1>
      <form className="needs-validation" noValidate>
        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label style={{ marginBottom: "5px" }}>Student Name</label>
          <input
            type="text"
            className="form-control"
            name="studentName"
            value={name}
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
            value={ID}
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
            value={email}
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
            value={email}
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

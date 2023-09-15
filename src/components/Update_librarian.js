import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function EditLibrarian() {
  const id = useParams().id;
  const [name, setname] = useState({});
  const [NIC, setNIC] = useState({});
  const [email, setEmail] = useState({});
  const [contactNum, setcontactNum] = useState({});

  React.useEffect(() => {
    axios.get(`http://localhost:8000/librarian/${id}`).then((res) => {
      console.log("update1");
      if (res.data.success) {
        console.log("update2");
        setname(res.data.librarian.name);
        setNIC(res.data.librarian.NIC);
        setEmail(res.data.librarian.email);
        setcontactNum(res.data.librarian.contactNum);
      }
    });
  }, [id]);

  const onSubmit = (e) => {
    axios
      .put(`http://localhost:8000/librarian/update/${id}`, {
        name,
        NIC,
        email,
        contactNum,
      })
      .then((res) => {
        if (res.data.success) {
          console.log(res.data.success);
          setname({});
          setNIC({});
          setEmail({});
          setcontactNum({});
        }
      });
  };

  return (
    <div className="col-md-8 mt-4 mx-auto">
      <h1 className="h3 mb-3 font-weight-normal">Edit Librarian</h1>
      <form className="needs-validation" noValidate>
        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label style={{ marginBottom: "5px" }}>Librarian Name</label>
          <input
            type="text"
            className="form-control"
            name="librarianName"
            value={name}
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
            value={NIC}
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
            value={contactNum}
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
          <i className="far fa-check-square"></i>&nbsp; Update
        </button>
      </form>
    </div>
  );
}

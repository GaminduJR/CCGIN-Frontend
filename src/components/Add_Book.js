import axios from "axios";
import React, { useState } from "react";

export default function AddBook() {
  const [bookName, setbookName] = useState({});
  const [ISBN, setISBN] = useState({});
  const [author, setauthor] = useState({});
  const [bookCategory, setbookCategory] = useState({});

  const onSubmit = (e) => {
    // e.preventDefault();
    axios.post("http://localhost:8000/book/save", {bookName,ISBN,author,bookCategory}).then((res) => {
      if (res.data.success) {
         setbookName({});
         setISBN({});
         setauthor({});
         setbookCategory({});
        alert("Book added successfully");
      }
    });
  };

  return (
    <div className="col-md-8 mt-4 mx-auto">
      <h1 className="h3 mb-3 font-weight-normal">Add New Book</h1>
      <form className="needs-validation" noValidate>

        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label style={{ marginBottom: "5px" }}>Book Name</label>
          <input
            type="text"
            className="form-control"
            name="bookName"
            placeholder="Enter Book Name"
            required
            onChange={(e) => setbookName(e.target.value)}
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
            onChange={(e) => setISBN(e.target.value)}
          />
        </div>

        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label style={{ marginBottom: "5px" }}>Author</label>
          <input
            type="text"
            className="form-control"
            name="author"
            placeholder="Enter Author"
            required
            onChange={(e) => setauthor(e.target.value)}
          />
        </div>

        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label style={{ marginBottom: "5px" }}>Book Category</label>
          <input
            type="text"
            className="form-control"
            name="bookCategory"
            placeholder="Enter Book Category"
            required
            onChange={(e) => setbookCategory(e.target.value)}
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

import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function EditBook() {
  const id = useParams().id;
  const [bookName, setbookName] = useState({});
  const [ISBN, setISBN] = useState({});
  const [author, setAuthor] = useState({});
  const [bookCategory, setBookCategory] = useState({});

  React.useEffect(() => {
    axios.get(`http://localhost:8000/book/${id}`).then((res) => {
      console.log("update1");
      if (res.data.success) {
        console.log("update2");
        setbookName(res.data.book.bookName);
        setISBN(res.data.book.ISBN);
        setAuthor(res.data.book.author);
        setBookCategory(res.data.book.bookCategory);
      }
    });
  }, [id]);

  const onSubmit = (e) => {
    axios
      .put(`http://localhost:8000/book/update/${id}`, {
        bookName,
        ISBN,
        author,
        bookCategory,
      })
      .then((res) => {
        if (res.data.success) {
          console.log(res.data.success);
          setbookName({});
          setISBN({});
          setAuthor({});
          setBookCategory({});
        }
      });
  };

  return (
    <div className="col-md-8 mt-4 mx-auto">
      <h1 className="h3 mb-3 font-weight-normal">Edit Book</h1>
      <form className="needs-validation" noValidate>
        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label style={{ marginBottom: "5px" }}>Book Name</label>
          <input
            type="text"
            className="form-control"
            name="bookName"
            value={bookName}
            required
            onChange={(e) => setbookName(e.target.value)}
          />
        </div>

        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label style={{ marginBottom: "5px" }}>ISBN</label>
          <input
            type="text"
            className="form-control"
            name="ISBN"
            value={ISBN}
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
            value={author}
            required
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label style={{ marginBottom: "5px" }}>Book Category</label>
          <input
            type="text"
            className="form-control"
            name="bookCategory"
            value={bookCategory}
            required
            onChange={(e) => setBookCategory(e.target.value)}
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

import React from "react";
import axios from "axios";

export default function ViewBooks() {
  const [books, setBooks] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    retrieveBooks();
  }, []);

  function retrieveBooks() {
    setIsLoading(true);
    axios
      .get("http://localhost:8000/book/view")
      .then((res) => {
        if (res.data.success) {
            
            setBooks(res.data.existingBooks);
        }
        console.log(res.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  const onDelete = (id) => {
    axios.delete(`http://localhost:8000/book/delete/${id}`).then((res) => {
        retrieveBooks();
      alert("Delete Successfully");
    });
  };

  function filterData(books, searchKey) {
    searchKey = searchKey.toLowerCase();
    const result = books.filter(
      (book) =>
      book.bookName.toLowerCase().includes(searchKey) ||
      book.ISBN.toLowerCase().includes(searchKey) ||
      book.author.toLowerCase().includes(searchKey) ||
      book.bookCategory.toLowerCase().includes(searchKey)
    );
    setBooks(result);
  }

  const handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;
    setIsLoading(true);
    axios
      .get("http://localhost:8000/book/view")
      .then((res) => {
        if (res.data.success) {
          filterData(res.data.existingBook, searchKey);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-9 mt-2 mb-2">
          <h4 className="mt-5">All Books</h4>
        </div>
        <div className="col-lg-3 mt-2 mb-2">
          <input
            className="form-control mt-5"
            type="search"
            placeholder="Search"
            name="searchQuery"
            onChange={handleSearchArea}
          ></input>
        </div>
      </div>
      <table className="table table-hover" style={{ marginTop: "40px" }}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Book Name</th>
            <th scope="col">ISBN</th>
            <th scope="col">author</th>
            <th scope="col">Book Category</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <div className="p-5">Loading...</div>
          ) : (
            books.map((books, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{books.bookName}</td>
                <td>{books.ISBN}</td>
                <td>{books.author}</td>
                <td>{books.bookCategory}</td>
                <td>
                  <a
                    className="btn btn-warning"
                    href={`/books/edit/${books._id}`}
                  >
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <button
                    className="btn btn-danger"
                    onClick={() => onDelete(books._id)}
                  >
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <a
        href="/books/add"
        className="btn btn-success"
        style={{ textDecoration: "none", color: "white" }}
      >
        Add Book
      </a>
    </div>
  );
}

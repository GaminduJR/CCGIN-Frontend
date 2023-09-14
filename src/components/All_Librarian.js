import React from "react";
import axios from "axios";

export default function ViewLibrarians() {
  const [librarians, setLibrarians] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    retrieveLibrarians();
  }, []);

  function retrieveLibrarians() {
    setIsLoading(true);
    axios
      .get("http://localhost:8000/librarian/view")
      .then((res) => {
        if (res.data.success) {
            
            setLibrarians(res.data.existingLibrarian);
        }
        console.log(res.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  const onDelete = (id) => {
    axios.delete(`http://localhost:8000/librarian/delete/${id}`).then((res) => {
        retrieveLibrarians();
      alert("Delete Successfully");
    });
  };

  function filterData(librarians, searchKey) {
    searchKey = searchKey.toLowerCase();
    const result = librarians.filter(
      (librarian) =>
      librarian.name.toLowerCase().includes(searchKey) ||
      librarian.ID.toLowerCase().includes(searchKey) ||
      librarian.email.toLowerCase().includes(searchKey)
    );
    setLibrarians(result);
  }

  const handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;
    setIsLoading(true);
    axios
      .get("http://localhost:8000/librarian/view")
      .then((res) => {
        if (res.data.success) {
          filterData(res.data.existingLibrarian, searchKey);
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
          <h4 className="mt-5">All Librarians</h4>
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
            <th scope="col">Librarian Name</th>
            <th scope="col">NIC</th>
            <th scope="col">Email</th>
            <th scope="col">Contact Number</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <div className="p-5">Loading...</div>
          ) : (
            librarians.map((librarians, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{librarians.name}</td>
                <td>{librarians.NIC}</td>
                <td>{librarians.email}</td>
                <td>{librarians.contactNum}</td>
                <td>
                  <a
                    className="btn btn-warning"
                    href={`http://localhost:8000/librarian/update/${librarians._id}`}
                  >
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <button
                    className="btn btn-danger"
                    onClick={() => onDelete(librarians._id)}
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
        href="/librarians/add"
        className="btn btn-success"
        style={{ textDecoration: "none", color: "white" }}
      >
        Add Librarian
      </a>
    </div>
  );
}

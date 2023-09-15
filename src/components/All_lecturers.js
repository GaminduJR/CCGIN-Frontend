import React from "react";
import axios from "axios";

export default function ViewLecturers() {
  const [lecturers, setLecturers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    retrieveLecturers();
  }, []);

  function retrieveLecturers() {
    setIsLoading(true);
    axios
      .get("http://localhost:8000/lecturer/view")
      .then((res) => {
        if (res.data.success) {
            
            setLecturers(res.data.existingLecturer);
        }
        console.log(res.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  const onDelete = (id) => {
    axios.delete(`http://localhost:8000/lecturer/delete/${id}`).then((res) => {
        retrieveLecturers();
      alert("Delete Successfully");
    });
  };

  function filterData(lecturers, searchKey) {
    searchKey = searchKey.toLowerCase();
    const result = lecturers.filter(
      (lecturer) =>
      lecturer.Name.toLowerCase().includes(searchKey) ||
      lecturer.NIC.toLowerCase().includes(searchKey) ||
      lecturer.email.toLowerCase().includes(searchKey)
    );
    setLecturers(result);
  }

  const handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;
    setIsLoading(true);
    axios
      .get("http://localhost:8000/lecturer/view")
      .then((res) => {
        if (res.data.success) {
          filterData(res.data.existingLecturer, searchKey);
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
          <h4 className="mt-5">All Lecturers</h4>
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
            <th scope="col">Lecturer Name</th>
            <th scope="col">NIC</th>
            <th scope="col">Email</th>
            <th scope="col">Contact Number</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <div className="p-5">Loading...</div>
          ) : (
            lecturers.map((lecturers, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{lecturers.Name}</td>
                <td>{lecturers.NIC}</td>
                <td>{lecturers.email}</td>
                <td>{lecturers.contactNum}</td>
                <td>
                  <a
                    className="btn btn-warning"
                    href={`/lecturers/edit/${lecturers._id}`}
                  >
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <button
                    className="btn btn-danger"
                    onClick={() => onDelete(lecturers._id)}
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
        href="/lecturers/add"
        className="btn btn-success"
        style={{ textDecoration: "none", color: "white" }}
      >
        Add Lecturer
      </a>
    </div>
  );
}

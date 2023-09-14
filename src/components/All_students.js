import React from "react";
import axios from "axios";

export default function ViewStudents() {
  const [students, setStudents] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    retrieveStudents();
  }, []);

  function retrieveStudents() {
    setIsLoading(true);
    axios
      .get("http://localhost:8000/student/view")
      .then((res) => {
        if (res.data.success) {
            
            setStudents(res.data.existingStudent);
        }
        console.log(res.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  const onDelete = (id) => {
    axios.delete(`http://localhost:8000/student/delete/${id}`).then((res) => {
        retrieveStudents();
      alert("Delete Successfully");
    });
  };

  function filterData(students, searchKey) {
    searchKey = searchKey.toLowerCase();
    const result = students.filter(
      (student) =>
      student.planName.toLowerCase().includes(searchKey) ||
      student.payment.toLowerCase().includes(searchKey) ||
      student.category.toLowerCase().includes(searchKey)
    );
    setStudents(result);
  }

  const handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;
    setIsLoading(true);
    axios
      .get("http://localhost:8000/student/view")
      .then((res) => {
        if (res.data.success) {
          filterData(res.data.existingStudent, searchKey);
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
          <h4 className="mt-5">All Students</h4>
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
            <th scope="col">Student Name</th>
            <th scope="col">NIC</th>
            <th scope="col">Email</th>
            <th scope="col">Contact Number</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <div className="p-5">Loading...</div>
          ) : (
            students.map((students, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{students.name}</td>
                <td>{students.ID}</td>
                <td>{students.email}</td>
                <td>{students.contactNum}</td>
                <td>
                  <a
                    className="btn btn-warning"
                    href={`http://localhost:8000/student/update/${students._id}`}
                  >
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <button
                    className="btn btn-danger"
                    onClick={() => onDelete(students._id)}
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
        href="/students/add"
        className="btn btn-success"
        style={{ textDecoration: "none", color: "white" }}
      >
        Add Student
      </a>
    </div>
  );
}

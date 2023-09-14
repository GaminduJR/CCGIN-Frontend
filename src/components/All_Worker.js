import React from "react";
import axios from "axios";

export default function ViewWorkers() {
  const [workers, setWorkers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    retrieveWorkers();
  }, []);

  function retrieveWorkers() {
    setIsLoading(true);
    axios
      .get("http://localhost:8000/worker/view")
      .then((res) => {
        if (res.data.success) {
            
            setWorkers(res.data.existingWorkers);
        }
        console.log(res.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  const onDelete = (id) => {
    axios.delete(`http://localhost:8000/worker/delete/${id}`).then((res) => {
        retrieveWorkers();
      alert("Delete Successfully");
    });
  };

  function filterData(Wokers, searchKey) {
    searchKey = searchKey.toLowerCase();
    const result = Wokers.filter(
      (worker) =>
      worker.Name.toLowerCase().includes(searchKey) ||
      worker.NIC.toLowerCase().includes(searchKey)
    );
    setWorkers(result);
  }

  const handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;
    setIsLoading(true);
    axios
      .get("http://localhost:8000/worker/view")
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
          <h4 className="mt-5">All Wokers</h4>
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
            <th scope="col">Worker Name</th>
            <th scope="col">NIC</th>
            <th scope="col">Cleaning Type</th>
            <th scope="col">Contact Number</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <div className="p-5">Loading...</div>
          ) : (
            workers.map((workers, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{workers.name}</td>
                <td>{workers.NIC}</td>
                <td>{workers.cleaningType}</td>
                <td>{workers.contactNum}</td>
                <td>
                  <a
                    className="btn btn-warning"
                    href={`http://localhost:8000/student/update/${workers._id}`}
                  >
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <button
                    className="btn btn-danger"
                    onClick={() => onDelete(workers._id)}
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
        href="/workers/add"
        className="btn btn-success"
        style={{ textDecoration: "none", color: "white" }}
      >
        Add Worker
      </a>
    </div>
  );
}

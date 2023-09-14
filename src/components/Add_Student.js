import React, { useState } from "react";
import axios from "axios";
import "./add_style.css";
import Header from "./Header";

const AddStudent = () => {
  const [name, setname] = useState("");
  const [ID, setID] = useState("");
  const [email, setemail] = useState("");
  const [contactNum, setcontactNum] = useState("");

  function senddata(e) {
    e.preventDefault();

    const newstudent = {
      name,
      ID,
      email,
      contactNum,
    };

    axios
      .post("http://localhost:8000/student/save", newstudent)
      .then(() => {
        alert("student added");
        setname("");
        setID("");
        setemail("");
        setcontactNum("");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div>
      <Header />
      <section className="h-100 bg-dark">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card card-registration my-4">
                <div className="row g-0">
                  <div className="col-xl-6 d-none d-xl-block">
                    <img
                      src={
                        "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                      }
                      alt="Sample photo"
                      className="img-fluid"
                    />
                  </div>
                  {/* style={{borderRadius:'0.25rem',}} */}
                  {/* style="border-top-left-radius: .25rem; border-bottom-left-radius: .25rem;"  */}
                  <div className="col-xl-6">
                    <div className="card-body p-md-5 text-black">
                      <h3 className="mb-5 text-uppercase">
                        Student registration form
                      </h3>

                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="form3Example1n"
                              className="form-control form-control-lg"
                              onChange={(e) => {
                                setname(e.target.value);
                              }}
                            />
                            <label className="form-label" for="form3Example1n">
                              Name
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="form3Example1m"
                              className="form-control form-control-lg"
                              onChange={(e) => {
                                setID(e.target.value);
                              }}
                            />
                            <label className="form-label" for="form3Example1m">
                              NIC
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="form3Example1m1"
                              className="form-control form-control-lg"
                              onChange={(e) => {
                                setemail(e.target.value);
                              }}
                            />
                            <label className="form-label" for="form3Example1m1">
                              Email
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="form3Example1n1"
                              className="form-control form-control-lg"
                              onChange={(e) => {
                                setcontactNum(e.target.value);
                              }}
                            />
                            <label className="form-label" for="form3Example1n1">
                              Phone Number
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="d-flex justify-content-end pt-3">
                        <button
                          type="button"
                          className="btn btn-warning btn-lg ms-2"
                          onClick={senddata}
                        >
                          Submit form
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddStudent;

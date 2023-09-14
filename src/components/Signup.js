import React, { useState } from "react";
import axios from "axios";
import "./signup.css";
import Header_2 from "./Header";
import Logo2 from "..";

export default function Signup() {
  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const [Username, setUsername] = useState("");
  const [Mobile_NO, setMobile_NO] = useState("");
  const [Temporary_Password, setTemporary_Password] = useState("");

  function senddata(e) {
    e.preventDefault();

    const newsignup = {
      first_name,
      last_name,
      Username,
      Mobile_NO,
      Temporary_Password,
    };

    axios
      .post("http://localhost:8070/signup", newsignup)
      .then(() => {
        alert("Successful Registration");
        setfirst_name("");
        setlast_name("");
        setUsername("");
        setMobile_NO("");
        setTemporary_Password("");
        window.location.href = "./";
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div>
      <Header_2 />

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
                      <h3 className="mb-5 text-uppercase">SignUp</h3>

                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="form3Example1m"
                              className="form-control form-control-lg"
                              onChange={(e) => {
                                setfirst_name(e.target.value);
                              }}
                            />
                            <label className="form-label" for="form3Example1m">
                              First name
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="form3Example1n"
                              className="form-control form-control-lg"
                              onChange={(e) => {
                                setlast_name(e.target.value);
                              }}
                            />
                            <label className="form-label" for="form3Example1n">
                              Last name
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
                                setUsername(e.target.value);
                              }}
                            />
                            <label className="form-label" for="form3Example1m1">
                              Username
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example8"
                          className="form-control form-control-lg"
                          onChange={(e) => {
                            setMobile_NO(e.target.value);
                          }}
                        />
                        <label className="form-label" for="form3Example8">
                          Mobile Number
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form3Example8"
                          className="form-control form-control-lg"
                          onChange={(e) => {
                            setTemporary_Password(e.target.value);
                          }}
                        />
                        <label className="form-label" for="form3Example8">
                          Password
                        </label>
                      </div>

                      <div className="d-flex justify-content-end pt-3">
                        <button
                          type="button"
                          className="btn btn-warning btn-lg ms-2"
                          onClick={senddata}
                        >
                          Submit
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
}
import React, {useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { render } from "@testing-library/react";
import './view_style.css'
import Header from "./Header";

export default function View_signup()
{
    const [signup, setSignup] = useState([])
    const [modeldata, setModeldata] = useState({
        first_name : '',
        last_name : '',
        Username : '',
        Mobile_NO : '',
        Temporary_Password : ''

    })  
 
const getdata = () => {
    fetch('http://localhost:8070/signup/view_signup/')
    .then(response=>response.json())
    .then(res=>setSignup(res))
    
}

    useEffect (() => {
        getdata();
    } , []);
    
    return(
        <div>
         <Header/>
        <div className="container">
            <h1 className="tital">All Signups</h1>
            <table>
                <thead>
                    <tr>
                        <th className="head">
                        f_name&nbsp;&nbsp;&nbsp;
                        </th>

                        <th className="head">
                        &nbsp;&nbsp;l_name&nbsp;&nbsp;&nbsp;
                        </th>
                        <th className="head">
                        &nbsp;&nbsp;Username&nbsp;&nbsp;&nbsp;
                        </th>
                        <th className="head">
                        &nbsp;&nbsp;Mobile_NO&nbsp;&nbsp;&nbsp;
                        </th>
                        <th className="head">
                        T_Password&nbsp;
                        </th>
                    </tr>
                </thead>
                <tbody className="body">
                    {signup.map((names,index)=>
                    <tr key={index}>
                        <td className="data">{names.first_name}</td>
                        <td className="data">{names.last_name}</td>
                        <td className="data">{names.Username}</td>
                        <td className="data">{names.Mobile_NO}</td>
                        <td className="data">{names.Temporary_Password}</td>
                        <td>
                        </td>
                        <br></br><br></br>
                    </tr>
                    )}

                    
                </tbody>
            </table>
            
            </div>
            </div>
    )
} 
import React, {useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { render } from "@testing-library/react";
import './view_style.css'
import Header from "./Header";

export default function All_students()
{
    const [students, setStudents] = useState([])
    const [modeldata, setModeldata] = useState({
        name : '',
        ID : '',
        email : '',
        contactNum : ''

    })  
 
const getdata = () => {
    fetch('http://localhost:8000/student/view/')
    .then(response=>response.json())
    .then(res=>setStudents(res.existingStudent))
   
}

    useEffect (() => {
        getdata();
    } , []);
    
    const delete_student = ((id) => {
        axios.delete("http://localhost:8000/student/delete/" + id).then(()=>{
            alert("student deleted")
          }).catch((err)=>{alert(err)})
    })  
    return(
        <div>
         <Header/>
        <div className="container">
            <h1 className="tital">view Students</h1>
            <table>
                <thead>
                    <tr>
                        <th className="head">
                        Name&nbsp;&nbsp;&nbsp;&nbsp;
                        </th>

                        <th className="head">
                        &nbsp;&nbsp;&nbsp;&nbsp;ID&nbsp;&nbsp;&nbsp;&nbsp;
                        </th>
                        <th className="head">
                        &nbsp;&nbsp;&nbsp;&nbsp;email&nbsp;&nbsp;&nbsp;&nbsp;
                        </th>
                        <th className="head">
                            contactNum&nbsp;
                        </th>
                    </tr>
                </thead>
                <tbody className="body">
                {/* {console.log(students)}; */}
                    {students.map((names,index)=>
                    <tr key={index}>
                        <td className="data">{names.name}</td>
                        <td className="data">{names.ID}</td>
                        <td className="data">{names.email}</td>
                        <td className="data">{names.contactNum}</td>
                        <td>
                            <Link className="link" to={`/update_student/${names._id}`}>update</Link>
                            &nbsp;&nbsp;&nbsp;
                            <button className="delete_button" onClick={() => delete_student(names._id)}>delete</button>
                    
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
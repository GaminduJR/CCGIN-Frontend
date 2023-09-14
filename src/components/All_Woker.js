import React, {useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { render } from "@testing-library/react";
import './view_style.css'
import Header from "./Header";

export default function All_worker()
{
    const [worker, setworker] = useState([])
    const [modeldata, setModeldata] = useState({
        Name : '',
        NIC : '',
        cleaningType : '',
        phoneNum : ''

    })  
 
const getdata = () => {
    fetch('http://localhost:8000/worker/view/')
    .then(response=>response.json())
    .then(res=>setworker(res))
    
}

    useEffect (() => {
        getdata();
    } , []);

const delete_worker = ((id) => {
    axios.delete("http://localhost:8000/worker/delete/" + id).then(()=>{
        alert("worker delete")
        }).catch((err)=>{alert(err)})
})  
    return(
        <div>
         <Header/>
        <div className="container">
            <h1 className="tital">All Cleaning Staff</h1>
            <table>
                <thead>
                    <tr>
                        <th className="head">
                        Name&nbsp;&nbsp;&nbsp;&nbsp;
                        </th>

                        <th className="head">
                        &nbsp;&nbsp;&nbsp;&nbsp;NIC&nbsp;&nbsp;&nbsp;&nbsp;
                        </th>

                        <th className="head">
                        &nbsp;&nbsp;&nbsp;&nbsp;cleaningType&nbsp;&nbsp;&nbsp;&nbsp;
                        </th>

                        <th className="head">
                        W_Hrs&nbsp;
                        </th>
                    </tr>
                </thead>
                <tbody className="body">
                    {worker.map((Names,index)=>
                    <tr key={index}>
                        <td className="data">{Names.Name}</td>
                        <td className="data">{Names.NIC}</td>
                        <td className="data">{Names.cleaningType}</td>
                        <td className="data">{Names.phoneNum}</td>
                        <td>
                            <Link className="link" to={`/update_worker/${Names._id}`}>update</Link>
                            &nbsp;&nbsp;&nbsp;
                            <button className="delete_button" onClick={() => delete_worker(Names._id)}>delete</button>
                    
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
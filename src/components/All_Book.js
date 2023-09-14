import React, {useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { render } from "@testing-library/react";
import './view_style.css'
import Header from "./Header";

export default function All_Book()
{
    const [book, setbook] = useState([])
    const [modeldata, setModeldata] = useState({
        bookName : '',
        ISBN : '',
        author : '',
        bookCategory : ''

    })  
 
const getdata = () => {
    fetch('http://localhost:8000/book/view/')
    .then(response=>response.json())
    .then(res=>setbook(res))
    
}

    useEffect (() => {
        getdata();
    } , []);
    
const delete_book = ((id) => {
    axios.delete("http://localhost:8000/book/delete/" + id).then(()=>{
        alert("book delete")
        }).catch((err)=>{alert(err)})
})  
    return(
        <div>
         <Header/>
        <div className="container">
            <h1 className="tital">All Non Academic Staff</h1>
            <table>
                <thead>
                    <tr>
                        <th className="head">
                        Name&nbsp;&nbsp;&nbsp;&nbsp;
                        </th>

                        <th className="head">
                        &nbsp;&nbsp;&nbsp;&nbsp;ISBN&nbsp;&nbsp;&nbsp;&nbsp;
                        </th>

                        <th className="head">
                        &nbsp;&nbsp;&nbsp;&nbsp;author&nbsp;&nbsp;&nbsp;&nbsp;
                        </th>

                        <th className="head">
                        Work_field(s)&nbsp;
                        </th>
                    </tr>
                </thead>
                <tbody className="body">
                    {book.map((names,index)=>
                    <tr key={index}>
                        <td className="data">{names.bookName}</td>
                        <td className="data">{names.ISBN}</td>
                        <td className="data">{names.author}</td>
                        <td className="data">{names.bookCategory}</td>
                        <td>
                            <Link className="link" to={`/update_book/${names._id}`}>update</Link>
                            &nbsp;&nbsp;&nbsp;
                            <button className="delete_button" onClick={() => delete_book(names._id)}>delete</button>
                    
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
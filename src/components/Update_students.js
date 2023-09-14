import React,{useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import './add_style.css'
import Header from "./Header";

export default function Update_student()
{
    const {id} = useParams()
    const [name , setname]  = useState();
    const [ID , setID]  = useState();
    const [email , setemail]  = useState();
    const [contactNum , setcontactNum]  = useState();

    function senddata(e)
    {
        e.preventDefault();

        const newstudent = {
            name,
            ID,
            email,
            contactNum
        }

      axios.put("http://localhost:8000/student/update/" + id,newstudent).then(()=>{
        alert("student updated")
        setname("");
        setID("");
        setemail("");
        setcontactNum("");
      }).catch((err)=>{alert(err)})
    }

    return(
      <div>
         <Header/>
      <div className="container">
      <div className="text">
         Update Student
      </div>
      <form action="#">
         <div className="form-row">
            <div className="input-data">
               <div className="underline"></div>
               <label className="name"></label>
        <input type="text" className="name_i" placeholder="Your name" onChange={e=>{setname(e.target.value);}}/>
            </div>
            <div className="input-data">
               <div className="underline"></div>
              <label className="ID"></label>
       <input type="number" placeholder="Your ID" onChange={e=>{setID(e.target.value);}}/>
            </div>
         </div>
         <div className="form-row">
            <div className="input-data">
               <div className="underline"></div>
                <label className="email"></label>
       <input type="text" placeholder="Your email" onChange={e=>{setemail(e.target.value);}}/>
            </div>
            </div> 
            <div className="form-row">
            <div className="input-data">
               <div className="underline"></div>
                <label className="contactNum"></label>
       <input type="text" placeholder="Your contactNum" onChange={e=>{setcontactNum(e.target.value);}}/>
            </div>
            </div> 
                  <button className="button" onClick={senddata}>Submit</button>
              
      </form>
      </div>
      </div>
    )

}
import React,{useState} from "react";
import axios from "axios";
import './add_style.css'
import Header from "./Header";

const AddLecturer = () =>
{
    const [name , setname]  = useState("");
    const [NIC , setNIC]  = useState("");
    const [email , setemail]  = useState("");
    const [contactNum , setcontactNum]  = useState("");

    function senddata(e)
    {
        e.preventDefault();

        const newlecturer = {
            name,
            NIC,
            email,
            contactNum
        }

      axios.post("http://localhost:8000/lecturer/save",newlecturer).then(()=>{
        alert("lecturer added")
        setname("");
        setNIC("");
        setemail("");
        setcontactNum("");
      }).catch((err)=>{alert(err)})
    }

    
        
    return(
      <div>
         <Header/>
      <div className="container">
      <div className="text">
         Lecturer Application Form
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
              <label className="NIC"></label>
       <input type="number" placeholder="Your NIC" onChange={e=>{setNIC(e.target.value);}}/>
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
       <input type="text" placeholder="Your lecture course(s)" onChange={e=>{setcontactNum(e.target.value);}}/>
            </div>
            </div> 
                  <button className="button" onClick={senddata}>Submit</button>
              
      </form>
      </div>
      </div>
    );
};

export default AddLecturer;
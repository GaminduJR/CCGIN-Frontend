import React,{useState} from "react";
import axios from "axios";
import './add_style.css'
import Header from "./Header";

const AddWorker = () => 
{
    const [Name , setName]  = useState("");
    const [ID , setage]  = useState("");
    const [cleaningType , setcleaningType]  = useState("");
    const [phoneNum , setphoneNum]  = useState("");

    function senddata(e)
    {
        e.preventDefault();

        const newcleaningstaff = {
            Name,
            ID,
            cleaningType,
            phoneNum
        }

      axios.post("http://localhost:8000/worker/save",newcleaningstaff).then(()=>{
        alert("worker added")
        setName("");
        setage("");
        setcleaningType("");
        setphoneNum("");
      }).catch((err)=>{alert(err)})
    }

    
        
    return(
      <div>
         <Header/>
      <div className="container">
      <div className="text">
         Cleaning Staff Application Form
      </div>
      <form action="#">
         <div className="form-row">
            <div className="input-data">
               <div className="underline"></div>
               <label className="Name"></label>
        <input type="text" className="Name_i" placeholder="Your Name" onChange={e=>{setName(e.target.value);}}/>
            </div>
            <div className="input-data">
               <div className="underline"></div>
              <label className="ID"></label>
       <input type="number" placeholder="Your ID" onChange={e=>{setage(e.target.value);}}/>
            </div>
         </div>
         <div className="form-row">
            <div className="input-data">
               <div className="underline"></div>
                <label className="cleaningType"></label>
       <input type="text" placeholder="Your cleaningType" onChange={e=>{setcleaningType(e.target.value);}}/>
            </div>
            </div>
            <div className="form-row">
            <div className="input-data">
               <div className="underline"></div>
              <label className="phoneNum"></label>
       <input type="number" placeholder="Your working hours(per day)" onChange={e=>{setphoneNum(e.target.value);}}/>
            </div> 
            </div>
                  <button className="button" onClick={senddata}>Submit</button>
              
      </form>
      </div>
      </div>
    )
}

export default AddWorker;
import React,{useState} from "react";
import axios from "axios";
import './add_style.css'
import Header from "./Header";

const AddBook = () => 
{
    const [bookName , setbookName]  = useState("");
    const [ISBN , setISBN]  = useState("");
    const [author , setauthor]  = useState("");
    const [bookCategory , setbookCategory]  = useState("");

    function senddata(e)
    {
        e.preventDefault();

        const newbook = {
            bookName,
            ISBN,
            author,
            bookCategory
        }

      axios.post("http://localhost:8000/book/save",newbook).then(()=>{
        alert("book added")
        setbookName("");
        setISBN("");
        setauthor("");
        setbookCategory("");
      }).catch((err)=>{alert(err)})
    }

    
        
    return(
      <div>
         <Header/>
      <div className="container">
      <div className="text">
         Non Academic Staff Application Form
      </div>
      <form action="#">
         <div className="form-row">
            <div className="input-data">
               <div className="underline"></div>
               <label className="bookName"></label>
        <input type="text" className="name_i" placeholder="Your bookName" onChange={e=>{setbookName(e.target.value);}}/>
            </div>
            <div className="input-data">
               <div className="underline"></div>
              <label className="ISBN"></label>
       <input type="number" placeholder="Your ISBN" onChange={e=>{setISBN(e.target.value);}}/>
            </div>
         </div>
         <div className="form-row">
            <div className="input-data">
               <div className="underline"></div>
                <label className="author"></label>
       <input type="text" placeholder="Your author" onChange={e=>{setauthor(e.target.value);}}/>
            </div>
            </div> 
            <div className="form-row">
            <div className="input-data">
               <div className="underline"></div>
                <label className="bookCategory"></label>
       <input type="text" placeholder="Your working field(s)" onChange={e=>{setbookCategory(e.target.value);}}/>
            </div>
            </div> 
                  <button className="button" onClick={senddata}>Submit</button>
              
      </form>
      </div>
      </div>

    );
};

export default AddBook;

import './App.css';
import AddStudent from './components/Add_Student';
import AllStudent from './components/All_students';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import { BrowserRouter as Router,Routes,Route, BrowserRouter,Navigate } from 'react-router-dom';


import { useEffect, useState } from "react";
import ViewStudents from './components/All_students';






const App = () => {
  var validUsername = 'ruchith';
  var validPassword = '21001766';

  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    if(username==='ruchith') {
      validUsername='ruchith';
      validPassword='21001766';}
    else if(username==='nethmi') {
        validUsername='nethmi';
        validPassword='21000131';}
    else if(username==='praveena') {
      validUsername='praveena';
      validPassword='21001669';}  
    else if(username==='sandani') {
      validUsername='sandani';
      validPassword='21000743';}  
    else if(username==='suruthi') {
      validUsername='suruthi';
      validPassword='21001172';}     
if (username === validUsername && password === validPassword) {
      setLoggedIn(true);
    } else {
      alert('Invalid username or password. Please try again.');
    }
  };
  return (
   <BrowserRouter>
       <div>
          <Routes>
           <Route path='/' element={<Home/>} />
          <Route path='/add_student' element={<AddStudent/>}/>
          <Route path='/view_students' element={<AllStudent/>}/>
          <Route path='/register' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/students' element={<ViewStudents/>}/>
         
          </Routes>
          </div>
        </BrowserRouter>
  );
};

export default App;

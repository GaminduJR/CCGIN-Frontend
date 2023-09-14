
import './App.css';

import AddStudent from './components/Add_Student';
import ViewStudents from './components/All_students';
import EditStudent from './components/Update_students';

import AddLecturer from './components/Add_Lecturer';
import ViewLecturers from './components/All_lecturers';

import AddBook from './components/Add_Book';
import ViewBooks from './components/All_Book';

import AddWorker from './components/Add_Worker';
import ViewWorkers from './components/All_Worker';

import AddLibrarian from './components/Add_Librarian';
import ViewLibrarians from './components/All_Librarian';

import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Header from "./components/Header";
import { BrowserRouter as Router,Routes,Route, BrowserRouter,Navigate } from 'react-router-dom';


import { useEffect, useState } from "react";







const App = () => {
  
  return (
   <BrowserRouter>        
      <Header />
      
          <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/register' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>

          <Route path='/students' element={<ViewStudents/>}/>
          <Route path='/students/add' element={<AddStudent/>}/>
          <Route path='/students/edit/:id' element={<EditStudent/>}/>
         
          <Route path='/lecturers' element={<ViewLecturers/>}/>
          <Route path='/lecturers/add' element={<AddLecturer/>}/>

          <Route path='/books' element={<ViewBooks/>}/>
          <Route path='/books/add' element={<AddBook/>}/>

          <Route path='/workers' element={<ViewWorkers/>}/>
          <Route path='/workers/add' element={<AddWorker/>}/>

          <Route path='/librarians' element={<ViewLibrarians/>}/>
          <Route path='/librarians/add' element={<AddLibrarian/>}/>

          </Routes>
        </BrowserRouter>
  );
};

export default App;

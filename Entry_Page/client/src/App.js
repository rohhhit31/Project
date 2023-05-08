// App.js

import React from 'react';
import {Routes, Route} from 'react-router-dom'

import Login from "./componets/login";
import Signup from "./componets/signup";
import Nav from "./componets/nav";
import Student from "./Pages/Students/Student";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AddCompanyForm from "./Pages/Dashboard/AddCompanyForm";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/account/login" element={<Login/>}/>
        <Route path="/account/signup" element={<Signup/>}/>
        <Route path="/students/add" element={<Student/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/companies/add" element={<AddCompanyForm />} />
      </Routes>
    </div>
  );
}

export default App;

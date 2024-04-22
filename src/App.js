// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage'; 
import UserAction from './components/UserAction'; 
import DoctorAction from './components/DoctorAction'; 
import UserLoginForm from './components/UserLoginForm'; 
import DoctorLoginForm from './components/DoctorLoginForm'; 
import UserRegistrationForm from './components/UserRegistrationForm';
import DoctorRegistrationForm from './components/DoctorRegistrationForm';
import './App.css'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user" element={<UserAction />} />
        <Route path="/doctor" element={<DoctorAction />} />
        <Route path="/user/login" element={<UserLoginForm />} />
        <Route path="/doctor/login" element={<DoctorLoginForm />} />
        <Route path="/user/signup" element={<UserRegistrationForm />} />
        <Route path="/doctor/signup" element={<DoctorRegistrationForm />} />
      </Routes>
    </Router>
  );
}

export default App;

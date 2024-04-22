import React from 'react';
import { useNavigate } from 'react-router-dom';

function DoctorActions() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/doctor/login');
  };

  const handleSignupClick = () => {
    navigate('/doctor/signup');
  };

  return (
    <div>
      <h2>Doctor Actions</h2>
      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleSignupClick}>Sign Up</button>
    </div>
  );
}

export default DoctorActions;

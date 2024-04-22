import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  const handleUserClick = () => {
    navigate('/user');
  };

  const handleDoctorClick = () => {
    navigate('/doctor');
  };

  return (
    <div>
      <h2>Welcome to Your App</h2>
      <button onClick={handleUserClick}>User</button>
      <button onClick={handleDoctorClick}>Doctor</button>
    </div>
  );
}

export default HomePage;

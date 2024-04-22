import React from 'react';
import { useNavigate } from 'react-router-dom';

function UserActions() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/user/login');
  };

  const handleSignupClick = () => {
    navigate('/user/signup');
  };

  return (
    <div>
      <h2>User Actions</h2>
      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleSignupClick}>Sign Up</button>
    </div>
  );
}

export default UserActions;

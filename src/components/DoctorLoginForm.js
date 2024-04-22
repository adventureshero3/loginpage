import React, { useState } from 'react';

const DoctorLoginForm = () => {
  const [formData, setFormData] = useState({
    userName: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/auth/doctor/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Doctor Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="userName" placeholder="Username" onChange={handleInputChange} />
        <input type="password" name="password" placeholder="Password" onChange={handleInputChange} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default DoctorLoginForm;

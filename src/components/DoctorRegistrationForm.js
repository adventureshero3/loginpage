import React, { useState } from 'react';

const DoctorRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    userName: '',
    age: '',
    email: '',
    password: '',
    specialization: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/auth/doctor/register', {
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
      <h2>Doctor Registration</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleInputChange} />
        <input type="text" name="userName" placeholder="Username" onChange={handleInputChange} />
        <input type="number" name="age" placeholder="Age" onChange={handleInputChange} />
        <input type="email" name="email" placeholder="Email" onChange={handleInputChange} />
        <input type="password" name="password" placeholder="Password" onChange={handleInputChange} />
        <input type="text" name="specialization" placeholder="Specialization" onChange={handleInputChange} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default DoctorRegistrationForm;

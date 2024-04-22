import React, { useState } from 'react';

const UserLoginForm = () => {
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
      const response = await fetch('http://localhost:3000/auth/user/login', {
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
    <div style={{height:"300px",width:"700px",background:'white',borderRadius:'20px',padding:'15px',borderColor:'black',display:"flex",flexDirection:'column',alignItems:'center'}}>
      <h2 >User Login</h2>
      <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:'column',alignItems:'center'}}>
        <input type="text" name="userName" placeholder="Username" onChange={handleInputChange} style={{width:"500px"}} />
        <input type="password" name="password" placeholder="Password" onChange={handleInputChange} style={{width:"500px"}}/>
        <button type="submit" style={{width:'100px'}}>Login</button>
      </form>
    </div>
  );
};

export default UserLoginForm;

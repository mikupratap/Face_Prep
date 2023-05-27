import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../App.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(username==="foo" && password==="bar"){
      localStorage.setItem('login' , 'yes')
    
         navigate('/home')
      
    }
    else 
    {
      alert("please enter correct details")
    }
  };

  return (
    <div>
    <div className='conainer1'>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div class="container-fluid">
        <a class="navbar-brand">FacePrep</a>
      </div>
    </nav>
    </div>
 
    <div className="login-page">
   
      <div className="login-form">
        <h2>Login Page</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
    </div>
   
  );
};

export default LoginPage;

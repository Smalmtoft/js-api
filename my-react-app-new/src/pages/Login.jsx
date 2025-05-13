import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = localStorage.getItem('username');
    const storedPass = localStorage.getItem('password');

    if (username === storedUser && password === storedPass) {
      localStorage.setItem('loggedIn', 'true');
      navigate('/doggame');
    } else {
      setError('Sorry, wrong username or password...');
    }
  };

  return (
    <div className="loginPage">
      <h1 className="dogTitle">Log in to look at dogs</h1>
      <form className="loginForm"onSubmit={handleLogin}>
        <input className="loginInput" placeholder="Your username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <input className="loginInput" type="password" placeholder="Your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button className="dogBtn"type="submit">Submit</button>
      </form>
      <p>Want to create an account?</p> 
      <Link to="/register">
        <button className="dogBtn">Go to Register</button>
      </Link>
      <p>{error}</p>
    </div>
  );
};

export default Login;

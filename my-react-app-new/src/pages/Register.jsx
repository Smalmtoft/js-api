import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (password.length < 8) {
      setMessage('Password has to be at least 8 characters');
      return;
    }

    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    setMessage('Yay! You can now look at cute dogs!');
    setTimeout(() => navigate('/'), 1000);
  };

  return (
    <div className="registerPage">
      <h1 className="dogTitle">Register your account</h1>
      <form className="registerForm" onSubmit={handleRegister}>
        <input className="registerInput" placeholder="Your username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input className="registerInput" placeholder="Your password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="dogBtn"type="submit">Register account</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default Register;

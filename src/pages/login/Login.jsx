// Login.js
import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from "react-router-dom";
import newRequest from '../../utils/Request'


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await newRequest.post("/auth/login", { username, password })
      localStorage.setItem("DMEUser", JSON.stringify(res.data))
      navigate('/')
    } catch (err) {
      setError(err.res.data)

    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

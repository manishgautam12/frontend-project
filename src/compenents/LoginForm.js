import React, { useState } from 'react';
import axios from 'axios';
import './login.css'

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Make a POST request to the login API
    axios.post('https://example.com/login', { username, password })
      .then((response) => {
        // Handle successful login
        console.log('Login successful');
      })
      .catch((error) => {
        // Handle login error
        setError('Invalid username or password.');
        console.error(error);
      });
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
      {error && <p>{error}</p>}
    </form>
  );
};

export default LoginForm;

import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Perform login logic, e.g., send data to server
    
    // Reset form fields
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="username" id="Username" value={username} onChange={(e) => setUsername(e.target.value)} required /><br /><br />
        
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br /><br />
        
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default LoginForm;

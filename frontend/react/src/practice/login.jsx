import { useState } from 'react';
import { TextField, Button } from '@mui/material';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here
    console.log('Email:', email);
    console.log('Password:', password);
    // ...
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          id="email"
          label="Email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
          Width="50px"
          margin="normal"
        />
        <br></br>
        <TextField
          id="password"
          label="Password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          required
          Width="50px"
          margin="normal"
          
        />
         <br></br>
        <Button type="submit" variant="contained" color="primary" >
            <a href='successMsg'>Log In</a>
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;

import { useState } from 'react';
import { TextField, Button } from '@mui/material';
import axios from 'axios';

const AccountForm = () => {
  const [username, setusername] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleusernameChange = (event) => {
    setusername(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8800/api/auth/sign-up', {
        username,
        phone,
        email,
        password,
      });

      // Handle the response from the backend if needed
      console.log(response.data);
    } catch (error) {
      // Handle any error that occurs during the request
      console.error(error);
    }
  };

  return (
    <div className="account-form">
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          id="username"
          label="Username"
          value={username}
          onChange={handleusernameChange}
          required
          width="50px"
          margin="normal"
        />
        <br />
        <TextField
          id="phone"
          label="Phone"
          value={phone}
          onChange={handlePhoneChange}
          required
          width="70px"
          margin="normal"
        />
        <br />
        <TextField
          id="email"
          label="Email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
          width="50px"
          margin="normal"
        />
        <br />
        <TextField
          id="password"
          label="Password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          required
          width="90px"
          margin="normal"
        />
        <br />
        <Button type="submit" variant="contained" color="primary">
                Register
        </Button>
      </form>
    </div>
  );
};

export default AccountForm;
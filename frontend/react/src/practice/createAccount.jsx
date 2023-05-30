import { useState } from 'react';
import { TextField, Button } from '@mui/material';



const AccountForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
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

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform account creation logic here
    // For example, you can send an API request to create the account
    console.log('Name:', name);
    console.log('Phone:', phone);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="account-form">
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          id="name"
          label="Name"
          value={name}
          onChange={handleNameChange}
          required
          Width="50px"
          margin="normal"
        />
        <br></br>
        <TextField
          id="phone"
          label="Phone"
          value={phone}
          onChange={handlePhoneChange}
          required
          Width="70px"
          margin="normal"
        />
        <br></br>
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
          Width="90px"
          margin="normal"
          
        />
        <br></br>
        <Button type="submit" variant="contained" color="primary" >
        <a href='login'>Create Account</a>
        </Button>
       
      </form>
    </div>
  );
};

export default AccountForm;


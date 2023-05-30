
import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function CustomForm() {
  const [user, setUser] = useState({ username: '', email: '' });

  const handleUserName = (event) => {
    setUser({ ...user, username: event.target.value });
  }

  const handleEmail = (event) => {
    setUser({ ...user, email: event.target.value });
  }

  function handleSubmit() {
    alert(`User Name is : ${user.username}`);
    alert(`Email is : ${user.email}`);
  }

  return (
    <>
      <TextField
        id="outlined-basic-username"
        label="Username"
        variant="outlined"
        name="username"
        value={user.username}
        onChange={handleUserName}
      />
      <TextField
        id="outlined-basic-email"
        label="Email"
        variant="outlined"
        name="email"
        value={user.email}
        onChange={handleEmail}
      />
      <Button
        variant="contained"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </>
  )
}

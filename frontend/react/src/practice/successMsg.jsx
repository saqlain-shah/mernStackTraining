import React, { useState } from 'react';
import { Snackbar, IconButton } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

const SuccessfulMsg = () => {
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleLogin = () => {
    // Perform login logic
    // Set loginSuccess to true if login is successful
    setLoginSuccess(true);
  };

  const handleCloseSnackbar = () => {
    setLoginSuccess(false);
  };

  return (
    <div className="login-form">
      <h2>Login successfully</h2>
      {/* //<img src="/images/img2" alt="Image Description" /> */}
      <button onClick={handleLogin}>Log In</button>

      <Snackbar
        open={loginSuccess}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="Login Successful"
        action={
          <IconButton size="small" color="inherit" onClick={handleCloseSnackbar}>
            <CheckCircle />
          </IconButton>
        }
      />
    </div>
  );
};

export default SuccessfulMsg;

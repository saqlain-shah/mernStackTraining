import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function ColorTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField label="enter Firt name" color="secondary" focused /><br></br>
      <TextField label="enter last name" color="secondary" focused /><br></br>
      <TextField label="enter phone" color="secondary" focused /><br></br>
      <TextField label="enter email" color="secondary" focused /><br></br>
      <TextField label="enter password" color="secondary" focused /><br></br>
      <TextField label="enter conorm password" color="secondary" focused /><br></br>
      <TextField label="Filled success" variant="filled" color="success" focused /><br></br>
      <TextField
        label="Standard warning"
        variant="standard"
        color="warning"
        focused
      />
    </Box>
  );
}
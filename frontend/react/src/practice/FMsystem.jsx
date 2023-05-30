import React, { useState } from 'react';
import { Typography, TextField, Button, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';

const FightManagementSystem = () => {
  const [fighters, setFighters] = useState([]);
  const [newFighter, setNewFighter] = useState('');
  const [newFatherName, setNewFatherName] = useState('');
  const [newCNIC, setNewCNIC] = useState('');
  const [newAddress, setNewAddress] = useState('');
  const [newPhoneNumber, setNewPhoneNumber] = useState('');

  const addFighter = () => {
    if (newFighter.trim() !== '') {
      const newFighterDetails = {
        name: newFighter,
        fatherName: newFatherName,
        cnic: newCNIC,
        address: newAddress,
        phoneNumber: newPhoneNumber
      };
      setFighters([...fighters, newFighterDetails]);
      setNewFighter('');
      setNewFatherName('');
      setNewCNIC('');
      setNewAddress('');
      setNewPhoneNumber('');
    }
  };

  const removeFighter = (index) => {
    const updatedFighters = [...fighters];
    updatedFighters.splice(index, 1);
    setFighters(updatedFighters);
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>Fight Management System</Typography>
      <TextField
        type="text"
        label="Fighter's Name"
        variant="outlined"
        value={newFighter}
        onChange={(e) => setNewFighter(e.target.value)}
        placeholder="Enter fighter's name"
        fullWidth
        margin="normal"
      />
      <TextField
        type="text"
        label="Fighter's Father Name"
        variant="outlined"
        value={newFatherName}
        onChange={(e) => setNewFatherName(e.target.value)}
        placeholder="Enter fighter's father name"
        fullWidth
        margin="normal"
      />
      <TextField
        type="text"
        label="Fighter's CNIC"
        variant="outlined"
        value={newCNIC}
        onChange={(e) => setNewCNIC(e.target.value)}
        placeholder="Enter fighter's National identity card"
        fullWidth
        margin="normal"
      />
      <TextField
        type="text"
        label="Fighter's Address"
        variant="outlined"
        value={newAddress}
        onChange={(e) => setNewAddress(e.target.value)}
        placeholder="Enter fighter's Address"
        fullWidth
        margin="normal"
      />
      <TextField
        type="text"
        label="Fighter's Phone Number"
        variant="outlined"
        value={newPhoneNumber}
        onChange={(e) => setNewPhoneNumber(e.target.value)}
        placeholder="Enter fighter's phone number"
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={addFighter}><Edit /> Add Fighter</Button>
      <List>
        {fighters.map((fighter, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={fighter.name}
              secondary={
                <>
                  Father Name: {fighter.fatherName}<br />
                  CNIC: {fighter.cnic}<br />
                  Address: {fighter.address}<br />
                  Phone Number: {fighter.phoneNumber}
                </>
              }
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" onClick={() => removeFighter(index)}>
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default FightManagementSystem;

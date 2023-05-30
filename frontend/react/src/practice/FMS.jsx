import React, { useState } from 'react';
import { TextField, Button, Typography, Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
  },
  form: {
    marginBottom: theme.spacing(2),
  },
  flightCard: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    backgroundColor: '#f5f5f5',
    border: '1px solid #ddd',
    borderRadius: 4,
  },
}));

const FlightManagementSystem = () => {
  const classes = useStyles();

  const [flights, setFlights] = useState([]);
  const [flyingFrom, setFlyingFrom] = useState('');
  const [flyingTo, setFlyingTo] = useState('');
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');

  const addFlight = () => {
    const newFlight = {
      flyingFrom,
      flyingTo,
      pickupLocation,
      dropoffLocation,
    };
    setFlights([...flights, newFlight]);
    setFlyingFrom('');
    setFlyingTo('');
    setPickupLocation('');
    setDropoffLocation('');
  };

  return (
    <div className={classes.container}>
      <Typography variant="h4" gutterBottom>
        Flight Management System
      </Typography>

      <Paper className={classes.form}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Flying From"
              value={flyingFrom}
              onChange={(e) => setFlyingFrom(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Flying To"
              value={flyingTo}
              onChange={(e) => setFlyingTo(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Pickup Location"
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Drop-off Location"
              value={dropoffLocation}
              onChange={(e) => setDropoffLocation(e.target.value)}
              fullWidth
            />
          </Grid>
        </Grid>

        <Button variant="contained" color="primary" onClick={addFlight}>
          Add Flight
        </Button>
      </Paper>

      <Typography variant="h5" gutterBottom>
        Flight List
      </Typography>
      {flights.map((flight, index) => (
        <Paper className={classes.flightCard} key={index}>
          <Typography variant="subtitle1">
            Flying From: {flight.flyingFrom}
          </Typography>
          <Typography variant="subtitle1">
            Flying To: {flight.flyingTo}
          </Typography>
          <Typography variant="subtitle1">
            Pickup Location: {flight.pickupLocation}
          </Typography>
          <Typography variant="subtitle1">
            Drop-off Location: {flight.dropoffLocation}
          </Typography>
        </Paper>
      ))}
    </div>
  );
};

export default FlightManagementSystem;

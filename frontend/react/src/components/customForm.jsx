/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export default function CustomForm() {

    const [userName, setUserName] = useState("saqlain")
    const [email, setEmail] = useState("")

    const handleUserName = (event) => {
        setUserName(event.target.value);
    }
    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    function handleSubmit() {
        alert(`User Name is : ${userName}`);
        alert(`Email is : ${email}`);
    }

    return (
        <>

            <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                name="userName"
                value={userName}
                onChange={handleUserName}

            />
            <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                name="email"
                value={email}
                onChange={handleEmail}


            />

            <Button
                variant="contained"
                onClick={handleSubmit}

            >Submit
            </Button>
        </>
    )
}


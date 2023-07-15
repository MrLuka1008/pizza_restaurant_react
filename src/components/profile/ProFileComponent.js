import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

const ProFileComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your form submission logic goes here
    console.log("Form submitted!");
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
  };
  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        label="First Name"
        variant="outlined"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
      <TextField
        label="Last Name"
        variant="outlined"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
      />
      <TextField label="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <Button type="submit" variant="contained" color="primary">
        Save
      </Button>
    </Box>
  );
};

export default ProFileComponent;

import React from "react";
import { Box, TextField, InputLabel, Button } from "@mui/material";

const ProFile = ({ handleSubmit, formData, handleInputChange }) => {
  return (
    <Box
      component="form"
      sx={{
        padding: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        gap: "20px",
      }}
      onSubmit={handleSubmit}
    >
      <InputLabel>First Name</InputLabel>
      <TextField
        id="first-name"
        type="text"
        name="name"
        variant="outlined"
        value={formData.name}
        onChange={handleInputChange}
        required
      />
      <InputLabel htmlFor="last-name">Last Name</InputLabel>
      <TextField
        id="last-name"
        type="text"
        name="lastname"
        variant="outlined"
        value={formData.lastname}
        onChange={handleInputChange}
        required
      />
      <InputLabel htmlFor="email">Email</InputLabel>
      <TextField
        id="email"
        variant="outlined"
        type="email"
        name="gmail"
        value={formData.gmail}
        onChange={handleInputChange}
        required
      />
      <Button type="submit" variant="contained" color="primary">
        save and continue shopping
      </Button>
    </Box>
  );
};

export default ProFile;

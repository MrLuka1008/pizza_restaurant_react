import { TextField } from "@mui/material";
import React from "react";

const MyTextField = ({ value, handleInputChange, name, disabled }) => {
  return (
    <TextField
      id={value}
      name={name}
      variant="outlined"
      value={value}
      onChange={handleInputChange}
      required
      disabled={disabled}
      size="small"
    />
  );
};

export default MyTextField;

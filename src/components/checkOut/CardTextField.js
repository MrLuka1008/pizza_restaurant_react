import React from "react";
import { Box, InputLabel, TextField } from "@mui/material";

const CardTextField = ({ FieldName, value, name, handleInputChange, placeholder }) => {
  return (
    <Box sx={{ display: "flex", width: "100%", alignItems: "center" }}>
      <InputLabel sx={{ width: "30%", fontSize: "14px" }} htmlFor={FieldName}>
        {FieldName}
      </InputLabel>
      <TextField
        sx={{ width: "80%" }}
        id={value}
        name={name}
        variant="outlined"
        value={value}
        onChange={handleInputChange}
        required
        placeholder={placeholder}
      />
    </Box>
  );
};

export default CardTextField;

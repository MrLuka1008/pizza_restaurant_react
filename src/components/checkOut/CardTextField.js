import React from "react";
import { Box, InputLabel, TextField } from "@mui/material";

const CardTextField = ({ FieldName, value, name, handleInputChange, placeholder }) => {
  let validationMessage = "";

  if (name === "cardNumber" && !/^\d{16}$/.test(value)) {
    validationMessage = "Card number is invalid";
  } else if (name === "expiry" && !/^\d{2}\/\d{2}$/.test(value)) {
    validationMessage = "Expiry date is invalid";
  } else if (name === "cvc" && !/^\d{3}$/.test(value)) {
    validationMessage = "CVC is invalid";
  }

  const errorClass = validationMessage !== "" ? "error-input" : "";

  return (
    <Box sx={{ display: "flex", width: "100%", alignItems: "center" }}>
      <InputLabel sx={{ width: "30%", fontSize: "14px" }} htmlFor={FieldName}>
        {FieldName}
      </InputLabel>
      <TextField
        sx={{ width: "80%" }}
        id={name}
        name={name}
        variant="outlined"
        // variant="standard"
        value={value}
        onChange={(e) => handleInputChange(e, name)}
        required
        placeholder={placeholder}
        error={validationMessage !== ""}
        label={validationMessage}
      />
    </Box>
  );
};

export default CardTextField;

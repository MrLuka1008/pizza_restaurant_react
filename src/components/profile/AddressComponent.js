import { Box, Button, Typography } from "@mui/material";
import React from "react";

const AddressComponent = ({ address }) => {
  const { city, fullAddress, phone } = address;

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography>🏙️ City: {city}</Typography>
      <Typography>🏠 Full Address: {fullAddress}</Typography>
      <Typography>📞 Phone: {phone}</Typography>

      <Button>✏️ Edit</Button>
      <Button>🗑️ Delete</Button>
    </Box>
  );
};

export default AddressComponent;

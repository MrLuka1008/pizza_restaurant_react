import { Box, Typography } from "@mui/material";
import React from "react";
import OnClickBtn from "../buttons/OnClickBtn";

const AddressComponent = ({ address, deleteAddress, editAddress }) => {
  const { city, fullAddress, phone } = address;

  const handleDelete = () => {
    deleteAddress();
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", border: "1px solid black", height: "200px" }}>
      <Typography>🏙️ City: {city}</Typography>
      <Typography>🏠 Full Address: {fullAddress}</Typography>
      <Typography>📞 Phone: {phone}</Typography>

      <OnClickBtn text={"✏️ Edit"} functionName={editAddress} />
      <OnClickBtn text={"🗑️ Delete"} functionName={handleDelete} />
    </Box>
  );
};

export default AddressComponent;

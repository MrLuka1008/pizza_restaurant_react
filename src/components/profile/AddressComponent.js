import { Box, Typography } from "@mui/material";
import React from "react";
import OnClickBtn from "../buttons/OnClickBtn";

const AddressComponent = ({ address, deleteAddress, editAddress }) => {
  const { city, fullAddress, phone } = address;

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography>🏙️ City: {city}</Typography>
      <Typography>🏠 Full Address: {fullAddress}</Typography>
      <Typography>📞 Phone: {phone}</Typography>

      <OnClickBtn text={"✏️ Edit"} functionName={editAddress} />
      <OnClickBtn text={"🗑️ Delete"} functionName={deleteAddress} />
    </Box>
  );
};

export default AddressComponent;

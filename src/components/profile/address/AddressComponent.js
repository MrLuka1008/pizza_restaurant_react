import { Box, Typography } from "@mui/material";
import React from "react";
import OnClickBtn from "../../buttons/OnClickBtn";

const AddressComponent = ({ address, deleteAddress, editAddress }) => {
  const { city, fullAddress, phone } = address;

  const handleDelete = () => {
    deleteAddress();
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <Box width={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
        <Typography>🏙️ City: {city}</Typography>
        <Typography>📞 Phone: {phone}</Typography>
      </Box>
      <Typography>🏠 Full Address: {fullAddress}</Typography>

      <Box sx={{ display: "flex", width: "100%", justifyContent: "flex-end" }}>
        <OnClickBtn text={"✏️ Edit"} functionName={editAddress} />
        <OnClickBtn text={"🗑️ Delete"} functionName={handleDelete} />
      </Box>
    </Box>
  );
};

export default AddressComponent;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";

const DeliveryComp = ({ userAddress }) => {
  const [currentAddress, setCurrentAddress] = useState("");

  const handleChange = (event) => {
    setCurrentAddress(event.target.value);
  };

  return (
    <Box>
      {Object.keys(userAddress).map((key) => {
        const address = userAddress[key];
        return (
          <Box key={key} sx={{ display: "flex", flexDirection: "column", width: "20%" }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={currentAddress === address.addressname}
                  onChange={handleChange}
                  value={address.addressname}
                />
              }
            />
            <Box width={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
              <Typography>City: {address.city}</Typography>
              <Typography>Phone: {address.phone}</Typography>
            </Box>
            <Typography>Full Address: {address.fullAddress}</Typography>
            <Link to={"/profile/address"}>Edit</Link>
          </Box>
        );
      })}
    </Box>
  );
};

export default DeliveryComp;

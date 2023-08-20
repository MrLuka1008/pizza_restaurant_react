import { Box, Typography } from "@mui/material";
import React from "react";

const DeliveryComp = ({ userAddress }) => {
  // console.log("userAddress", userAddress);

  return (
    <>
      <Box>
        {Object.keys(userAddress).map((key) => {
          const address = userAddress[key];
          return (
            <Box key={key} sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
              <Box width={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                <Typography>City: {address.city}</Typography>
                <Typography>Phone: {address.phone}</Typography>
              </Box>
              <Typography>Full Address: {address.fullAddress}</Typography>
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default DeliveryComp;

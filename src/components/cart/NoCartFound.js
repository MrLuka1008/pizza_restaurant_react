import { Box, Typography } from "@mui/material";
import React from "react";

const NoCartFound = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "20vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(255, 255, 255, 0.6)",
        borderRadius: " 16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        padding: "25px 0 25px 0",
      }}
    >
      <Typography>No items found in the cart.</Typography>
    </Box>
  );
};

export default NoCartFound;

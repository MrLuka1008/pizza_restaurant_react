import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";

const CartHead = () => {
  const isScreenWidth678 = useMediaQuery("(max-width: 678px)");
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "50px 0 50px 0",
        background: "rgba(255, 255, 255, 0.6)",
        borderRadius: " 16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
      }}
    >
      <Typography sx={{ letterSpacing: "3px", textAlign: "center", width: isScreenWidth678 ? "100px" : "300px" }}>
        Description
      </Typography>
      <Typography sx={{ letterSpacing: "3px", paddingLeft: "30px" }}>Size</Typography>
      <Typography sx={{ letterSpacing: "3px", textAlign: "center", paddingLeft: "50px" }}>Quantity</Typography>
      <Typography sx={{ letterSpacing: "3px", paddingLeft: "20px" }}>Price</Typography>
      <Typography sx={{ letterSpacing: "3px", paddingLeft: "20px" }}>Remove</Typography>
    </Box>
  );
};

export default CartHead;

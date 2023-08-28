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
        padding: "20px 0 20px 0",
        background: "rgba(255, 255, 255, 0.6)",
        fontFamily: "Poppins",
      }}
    >
      <Typography
        sx={{
          letterSpacing: "3px",
          textAlign: "center",
          width: isScreenWidth678 ? "100px" : "300px",
        }}
      >
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

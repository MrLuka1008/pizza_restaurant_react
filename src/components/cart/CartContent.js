import { Box, styled } from "@mui/material";
import React from "react";
import CartHead from "./CartHead";
import CartItem from "./CartItem";
import CartCalculator from "./CartCalculator";

const CartContent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "50px",
      }}
    >
      <CartHead />
      <CartItem />
    </Box>
  );
};

export default CartContent;

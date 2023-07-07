import { Box, styled } from "@mui/material";
import React from "react";
import CartHead from "./CartHead";
import CartItem from "./CartItem";
import CartCalculator from "./CartCalculator";

const CustomBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "50px",
}));

const CartContent = () => {
  return (
    <CustomBox>
      <CartHead />
      <CartItem />
      {/* <CartCalculator /> */}
    </CustomBox>
  );
};

export default CartContent;

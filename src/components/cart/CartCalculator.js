import { ShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, TextField, Typography, styled } from "@mui/material";
import React from "react";

const CustomBox = styled(Box)(() => ({
  border: "1px solid black",
  borderRadius: "10px",
  width: "200px",
}));

const CustomTypography = styled(Typography)(() => ({
  padding: "20px 30px",
  fontSize: "20px",
}));

const CustomButton = styled(Button)(() => ({
  padding: "10px 15px",
  width: "70%",
  fontSize: "16px",
}));

const CartCalculator = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
        background: "rgba(255, 255, 255, 0.6)",
        borderRadius: " 16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
      }}
    >
      <Box sx={{ display: "flex", gap: "50px", padding: "80px", flexWrap: "wrap" }}>
        <CustomBox>
          <CustomTypography>Discount 00$</CustomTypography>
        </CustomBox>
        <CustomBox>
          <CustomTypography>Delivery 20$</CustomTypography>
        </CustomBox>
        <CustomBox>
          <CustomTypography>Subtotal 110$</CustomTypography>
        </CustomBox>
        <CustomBox>
          <CustomTypography>Total 130$</CustomTypography>
        </CustomBox>
      </Box>

      <Box sx={{ display: "flex", width: "100%", alignItems: "center", padding: "20px" }}>
        <Box sx={{ display: "flex", width: "70%", justifyContent: "center" }}>
          <TextField
            sx={{ width: "60%" }}
            id="outlined-required"
            label="Promo code"
            placeholder="please enter promo code"
          />
          <Button variant="contained" sx={{}}>
            Apply Discount
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "30%",
            alignItems: "start",
            justifyContent: "center",
            gap: "15px",
          }}
        >
          <CustomButton variant="contained" endIcon={<ShoppingCartOutlined />}>
            Checkout
          </CustomButton>
          <CustomButton variant="contained">Continue Shopping</CustomButton>
        </Box>
      </Box>
    </Box>
  );
};

export default CartCalculator;

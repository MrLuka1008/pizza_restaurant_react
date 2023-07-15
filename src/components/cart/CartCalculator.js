import React, { useEffect, useState } from "react";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, TextField, Typography, styled } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import apiRequest from "../../api/apiRequest";

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
  border: "2px solid #black",
  color: "black",
  background: "white",
  color: "#e75b1e",
  "&:hover": {
    color: "white",
    background: "#e75b1e",
    boxShadow: "0px 0px 50px -4px #e75b1e",
  },
}));

const CartCalculator = ({ totalPrice }) => {
  const API_URL = "http://localhost:3500/promoCodes";
  const [handleCode, setHandleCode] = useState("");
  const [discountpercent, setDiscountPercent] = useState(0);
  const [newPRice, setNewPrice] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const handleWriteCode = (e) => {
    setHandleCode(e.target.value);
    console.log(handleCode);
    setErrorMessage("");
  };

  const handleDisCount = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();

    try {
      const searchedPromoCode = data.find((item) => item.promocode === handleCode);

      if (searchedPromoCode) {
        setDiscountPercent(searchedPromoCode.discount);
      } else {
        setDiscountPercent(0);
        setErrorMessage("Invalid Promo Code");
      }
    } catch {
      setDiscountPercent(0);
      setErrorMessage("Invalid Promo Code");
    }
  };

  useEffect(() => {
    setNewPrice(totalPrice - totalPrice * (discountpercent / 100));
  }, [totalPrice, discountpercent]);

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
          <CustomTypography>Discount {discountpercent}%</CustomTypography>
        </CustomBox>
        <CustomBox>
          <CustomTypography>Delivery ${20}</CustomTypography>
        </CustomBox>
        <CustomBox>
          <CustomTypography>Subtotal ${newPRice}</CustomTypography>
        </CustomBox>
        <CustomBox>
          <CustomTypography>Total ${newPRice + 20}</CustomTypography>
        </CustomBox>
      </Box>

      <Box sx={{ display: "flex", width: "100%", alignItems: "center", padding: "20px" }}>
        <Box sx={{ display: "flex", width: "70%", justifyContent: "center" }}>
          <TextField
            sx={{ width: "60%" }}
            id="outlined-required"
            label="Promo code"
            placeholder="Please enter promo code"
            value={handleCode}
            onChange={handleWriteCode}
            variant="filled"
            error={Boolean(errorMessage)} // Set error prop based on error message
            helperText={errorMessage} // Set helper text to display error message
          />
          <Button
            variant="contained"
            sx={{ ml: 2, background: discountpercent ? "#e75b1e" : "#e75b1e" }}
            onClick={() => {
              handleDisCount();
            }}
          >
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
          <CustomButton variant="contained" endIcon={<ArrowForwardIcon />}>
            Continue Shopping
          </CustomButton>
        </Box>
      </Box>
    </Box>
  );
};

export default CartCalculator;

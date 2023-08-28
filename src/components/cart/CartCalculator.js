import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, TextField, Typography, styled } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const CustomBox = styled(Box)(() => ({
  border: "1px solid black",
  borderRadius: "10px",
  width: "200px",
}));

const CustomTypography = styled(Typography)(() => ({
  padding: "20px 30px",
  fontSize: "20px",
}));

const CustomButton = styled(
  Button,
  Link
)(() => ({
  padding: "10px 15px",
  width: "70%",
  fontSize: "16px",
  border: "2px solid #black",
  background: "#e75b1e",
  color: "#fff",
  "&:hover": {
    color: "white",
    background: "#e75b1e",
    boxShadow: "0px 0px 50px -4px #e75b1e",
  },
}));

const CartCalculator = ({ totalPrice }) => {
  // const [discountpercent, setDiscountPercent] = useState(0);
  // const [newPRice, setNewPrice] = useState(0);
  const navigate = useNavigate();

  // useEffect(() => {
  //   setNewPrice(totalPrice - totalPrice * (discountpercent / 100));
  // }, [totalPrice, discountpercent]);

  const handleContinueShopping = () => {
    window.scrollTo(0, 0);
    navigate("/menu");
  };

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
          <CustomTypography>Subtotal ${totalPrice}</CustomTypography>
        </CustomBox>
      </Box>

      <Box sx={{ display: "flex", width: "100%", alignItems: "center", padding: "20px" }}>
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
          <Link to={"/checkout"}>
            <Typography variant="button" sx={{ display: "flex" }}>
              Checkout
              <ShoppingCartOutlined />
            </Typography>
          </Link>

          <CustomButton onClick={handleContinueShopping} sx={{ background: "#fff", color: "#e75b1e" }}>
            <Typography variant="button" sx={{ display: "flex" }}>
              Continue Shopping
              <ArrowForwardIcon />
            </Typography>
          </CustomButton>
        </Box>
      </Box>
    </Box>
  );
};

export default CartCalculator;

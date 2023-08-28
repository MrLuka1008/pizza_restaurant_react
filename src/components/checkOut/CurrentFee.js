import React, { useState } from "react";
import { useCurrentPrice, useOrderInfo } from "../../redux";
import { Box, Button, TextField, Typography, styled } from "@mui/material";
import { citys } from "../profile/address/SelectCity";

const CurrentFee = () => {
  const infoOrder = useOrderInfo();
  const total = useCurrentPrice();
  const API_URL = "http://localhost:3500/promoCodes";
  const [handleCode, setHandleCode] = useState("");
  const [discountpercent, setDiscountPercent] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  //   const navigate = useNavigate();

  const handleWriteCode = (e) => {
    setHandleCode(e.target.value);
    console.log(handleCode);
    setErrorMessage("");
  };

  const selectedCityObj = citys.find((cityObj) => cityObj.city === infoOrder.orderAddress.city);
  //   console.log("infoOrder", infoOrder.orderAddress.city);
  //   console.log("selectedCityObj", selectedCityObj.price);

  const deliveryFee = selectedCityObj ? Number(selectedCityObj.price) : 0;

  //   const subtotalPice = Number(test) + total;

  //   console.log("test", test);
  //   console.log("total", subtotalPice);

  //   console.log(subtotalPice);

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

  return (
    <Box sx={{ height: "50vh" }}>
      {/* <Typography>Discount</Typography> */}
      <Typography>Delivery {selectedCityObj ? selectedCityObj.price : 0}</Typography>
      <Typography>Subtotal {total}</Typography>
      <Typography>Total {deliveryFee + total}</Typography>

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
    </Box>
  );
};

export default CurrentFee;

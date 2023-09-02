import React, { useState } from "react";
import { useCurrentPrice, useOrderInfo } from "../../redux";
import { Box, Button, TextField, Typography } from "@mui/material";
import { citys } from "../profile/address/SelectCity";

const CurrentFee = () => {
  const infoOrder = useOrderInfo();
  const total = useCurrentPrice();
  const API_URL = "http://localhost:3500/promoCodes";
  const [handleCode, setHandleCode] = useState("");
  const [discountpercent, setDiscountPercent] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const handleWriteCode = (e) => {
    setHandleCode(e.target.value);
    setErrorMessage("");
  };

  const selectedCityObj = citys.find((cityObj) => cityObj.city === infoOrder.orderAddress.city);

  const deliveryFee = selectedCityObj ? Number(selectedCityObj.price) : 0;

  const discountpercentFee = deliveryFee + total - (deliveryFee + total) * (discountpercent / 100);

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
    <Box sx={{ minHeight: "50vh", borderLeft: "2px solid #f4f4f4", padding: "15px", width: "100%" }}>
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "5px",
          }}
        >
          <Typography sx={{ fontSize: "18px", color: "#000", fontFamily: "Poppins" }}>Order Amount</Typography>
          <Typography sx={{ fontSize: "20px", color: "#000", fontFamily: "Poppins" }}>{total}</Typography>
        </Box>
        <Box
          sx={{
            borderBottom: "2px dashed #000",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "5px",
          }}
        >
          <Typography sx={{ fontSize: "18px", color: "#000", fontFamily: "Poppins" }}>Delivery Fee</Typography>
          <Typography sx={{ fontSize: "20px", color: "#000", fontFamily: "Poppins" }}>
            {selectedCityObj ? selectedCityObj.price : 0}
          </Typography>
        </Box>

        <Box
          sx={{
            borderBottom: "2px dashed #000",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "5px",
          }}
        >
          <Typography>Discount</Typography>
          <Typography>-{discountpercent && (deliveryFee + total) * (discountpercent / 100)}</Typography>
        </Box>
        <Box
          sx={{
            borderBottom: "2px dashed #000",
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            padding: "5px",
          }}
        >
          <Typography sx={{ fontSize: "18px" }}>
            {discountpercent ? discountpercentFee : deliveryFee + total}
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          marginTop: "20px",
          alignItems: "center",
          height: "7vh",
        }}
      >
        <Button
          sx={{
            fontSize: "18px",
            background: "none",
            color: "black",
            fontFamily: "Poppins",
            height: "50px",
            borderBottom: "2px solid #f4f4f4",

            "&:hover": {
              backgroundColor: "#e75b1e",
              color: "#fff",
            },
          }}
          onClick={() => {
            handleDisCount();
          }}
        >
          Discount
        </Button>
        <TextField
          sx={{ width: "50%", display: "block" }}
          id="outlined-required"
          size="small"
          type="text"
          label="Promo code"
          value={handleCode}
          onChange={handleWriteCode}
          variant="standard"
          error={Boolean(errorMessage)}
          helperText={errorMessage}
        />
      </Box>
    </Box>
  );
};

export default CurrentFee;

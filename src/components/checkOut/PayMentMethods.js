import { Box, Typography, Icon } from "@mui/material";
import React, { useState } from "react";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import CardInfo from "./CardInfo";
import { useDispatch } from "react-redux";
import { setCardInfo } from "../../redux/features/placeOrderSlice";

const PayMentMethods = () => {
  const methods = [
    { key: "Card", icon: <CreditCardIcon /> },
    { key: "Cash", icon: <MonetizationOnIcon /> },
  ];
  const [selectedValue, setSelectedValue] = useState("Card");

  const dispatch = useDispatch();

  const handleButtonClick = (key) => {
    setSelectedValue(key);
    dispatch(
      setCardInfo({
        payMenth: key,
      })
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        width: "400px",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: "380px" }}>
        {methods.map((method) => (
          <Box
            key={method.key}
            onClick={() => handleButtonClick(method.key)}
            sx={{
              background: selectedValue === method.key ? "#e75b1e" : "#fff",
              color: selectedValue !== method.key ? "#e75b1e" : "#fff",
              border: "2px solid #f4f4f4",
              width: "100%",
              height: "6vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <Icon sx={{ fontSize: "24px", marginRight: "8px" }}>{method.icon}</Icon>
            <Typography sx={{ fontSize: "20px", fontFamily: "Poppins" }}>{method.key}</Typography>
          </Box>
        ))}
        {selectedValue === "Card" && <CardInfo />}
      </Box>
    </Box>
  );
};

export default PayMentMethods;

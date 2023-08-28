import { Box, Typography, Icon } from "@mui/material";
import React, { useState } from "react";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import CardInfo from "./CardInfo";
import CurrentFee from "./CurrentFee";

const PayMentMethods = () => {
  const methods = [
    { key: "Card", icon: <CreditCardIcon /> },
    { key: "Cash", icon: <MonetizationOnIcon /> },
  ];
  const [selectedValue, setSelectedValue] = useState("Card");

  const handleButtonClick = (key) => {
    setSelectedValue(key);
  };

  return (
    <Box sx={{ display: "flex" }}>
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
              height: "8vh",
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

      <CurrentFee />
    </Box>
  );
};

export default PayMentMethods;

import React, { useState } from "react";
import cards from "../../assets/images/card/Cards.png";
import { Box, FormControl, InputLabel, Alert, Typography, TextField } from "@mui/material";
import CardTextField from "./CardTextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns"; // You can use a different adapter if you prefer
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

const CardInfo = () => {
  const [cardInfo, setCardInfo] = useState({
    nameOnCard: "",
    cardNumber: "",
    ExpiryDate: "",
    securityCode: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCardInfo((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  console.log(cardInfo);

  return (
    <Box sx={{ width: "380px", height: "40vh", border: "2px solid #f4f4f4", padding: "10px" }}>
      <img src={cards} alt="cards" style={{ width: "100%", marginBottom: "20px" }} />

      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", width: "90%" }}>
        <CardTextField
          FieldName={"Card number"}
          value={cardInfo.cardNumber}
          name={"cardNumber"}
          handleInputChange={handleInputChange}
          placeholder={"5421 3455 3145 3245"}
        />
        <Box sx={{ display: "flex", gap: "10px" }}>
          <CardTextField
            FieldName={"Expiry"}
            value={cardInfo.ExpiryDate}
            name={"ExpiryDate"}
            handleInputChange={handleInputChange}
            placeholder={"MM/YY"}
          />
          <CardTextField
            FieldName={"CVC"}
            value={cardInfo.securityCode}
            name={"securityCode"}
            handleInputChange={handleInputChange}
            placeholder={"344"}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default CardInfo;

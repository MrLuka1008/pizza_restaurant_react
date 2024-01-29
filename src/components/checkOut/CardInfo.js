import React, { useEffect, useState } from "react";
import cards from "../../assets/images/card/Cards.png";
import { Box } from "@mui/material";
import CardTextField from "./CardTextField";
import { useDispatch } from "react-redux";

const CardInfo = () => {
  const [cardInfo, setInfocard] = useState({
    isCard: true,
    cardNumber: "",
    expiry: "",
    cvc: "",
  });

  const [validation, setValidation] = useState(false);

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInfocard((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  // let validationMessage = "";

  // console.log(validationMessage);

  // useEffect(() => {
  //   dispatch(setCardInfo(cardInfo));
  // }, [cardInfo, dispatch]);

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
          cardInfo={cardInfo}
        />
        <Box sx={{ display: "flex", gap: "10px" }}>
          <CardTextField
            FieldName={"expiry"}
            value={cardInfo.expiry}
            name={"expiry"}
            handleInputChange={handleInputChange}
            placeholder={"MM/YY"}
            cardInfo={cardInfo}
          />
          <CardTextField
            FieldName={"CVC"}
            value={cardInfo.cvc}
            name={"cvc"}
            handleInputChange={handleInputChange}
            placeholder={"344"}
            cardInfo={cardInfo}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default CardInfo;

import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useOrderInfo } from "../../redux";
import apiRequest from "../../api/apiRequest";
import { useDispatch } from "react-redux";
import { setUserId } from "../../redux/features/placeOrderSlice";

const PlaceOrder = () => {
  const savedOrderInfo = useOrderInfo();
  const dispatch = useDispatch();
  const [validation, setValidation] = useState(false);
  const [orderStatusMessage, setOrderAddress] = useState("");

  useEffect(() => {
    dispatch(setUserId());
  }, [dispatch]);

  const API_URL = `http://localhost:3500/placeOrder`;

  const placeOrderValidation = () => {
    // let orderStatusMessage = "";
    if (savedOrderInfo.orderType === "Delivery") {
      if (savedOrderInfo.orderAddress.streetaddress !== "") {
        setOrderAddress("Good");
        setValidation(true);
      } else {
        setOrderAddress("Please choose an address");
        setValidation(false);
      }
    } else if (savedOrderInfo.orderType === "Pickup") {
      if (savedOrderInfo.pickUpTime !== "") {
        setOrderAddress("Good");
        setValidation(true);
      } else {
        setOrderAddress("Please choose a pickup time");
        setValidation(false);
      }
    } else if (savedOrderInfo.orderType === "InPizzeria") {
      if (
        savedOrderInfo.tableBooking.date === undefined &&
        savedOrderInfo.tableBooking === [] &&
        savedOrderInfo.tableBooking.date === ""
      ) {
        setOrderAddress("Please choose a table and time");
        setValidation(false);
      } else {
        // orderStatusMessage = "Good";
        setOrderAddress("Good");
        setValidation(true);
      }
    }
  };

  const setPlaceOrder = async () => {
    try {
      const postOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(savedOrderInfo),
      };

      const result = await apiRequest(API_URL, postOptions);

      if (result && result.error) {
        console.error("Error placing order:", result.error);
      } else {
        console.log("Order placed successfully!");
      }
    } catch (error) {
      console.error("Error placing order:", error.message);
    }
  };

  console.log("savedOrderInfo.tableBooking.date", savedOrderInfo.tableBooking.date);
  validation ? setPlaceOrder() : console.log(orderStatusMessage);

  return (
    <Box
      onClick={placeOrderValidation}
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: "50px",
      }}
    >
      <Typography
        sx={{
          background: "#e75b1e",
          color: "white",
          display: "inline-block",
          padding: "15px 30px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Place Order
      </Typography>

      <Typography>{orderStatusMessage}</Typography>
    </Box>
  );
};

export default PlaceOrder;

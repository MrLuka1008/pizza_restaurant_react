import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useOrderInfo } from "../../redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../../redux/features/inCartSlice";
import { setCartsZero } from "../../redux/features/counter";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const savedOrderInfo = useOrderInfo();
  const dispatch = useDispatch();
  const [validation, setValidation] = useState(false);
  const [orderStatusMessage, setOrderAddress] = useState("");
  const API_URL = "http://localhost:3500/placeOrder";

  const navigate = useNavigate();

  const setPlaceOrder = async () => {
    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(savedOrderInfo),
    };

    try {
      const response = await fetch(API_URL, postOptions);
      dispatch(setCartsZero());
      dispatch(clearCart());

      if (!response.ok) {
        throw new Error(`Error placing order: ${response.statusText}`);
      }

      console.log("Order placed successfully!");
    } catch (error) {
      console.error(error.message);
    }
    navigate("/order");
  };

  const handlePlaceOrderValidation = () => {
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
      if (savedOrderInfo.tableBooking.isBooking) {
        setOrderAddress("Good");
        setValidation(true);
      } else {
        setOrderAddress("Please choose a table and time");
        setValidation(false);
      }
    }
  };

  useEffect(() => {
    if (validation) {
      setPlaceOrder();
    }
  }, [validation]);

  return (
    <Box
      onClick={handlePlaceOrderValidation}
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

import { Box, Button, Checkbox, FormControlLabel, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import DeliveryComp from "./DeliveryComp";
import PickupComp from "./PickupComp";
import InPizzeriaComp from "./InPizzeriaComp";
import { useCurrentPrice } from "../../redux";
import LoadItems from "./LoadItems";

const MainCheckOut = () => {
  // const [selectedValue, setSelectedValue] = useState("option1");
  const [paymentmethods, setPaymentmethods] = useState("option1");
  const [userAddress, setUserAddress] = useState([]);
  const [infoBookingTable, setInfoBookingTable] = useState([]);

  ///////////
  // const [active, setActive] = useState(null);
  const [selectedValue, setSelectedValue] = useState(null);
  const types = ["Delivery", "Pickup", "InPizzeria"];

  const handleButtonClick = (type) => {
    setSelectedValue(type);
    console.log(selectedValue);
  };

  /////////

  const currentPrice = useCurrentPrice();

  const userId = localStorage.getItem("user_id");

  useEffect(() => {
    const fetchUserAddress = async () => {
      if (selectedValue === "Delivery") {
        try {
          const API_URL = `http://localhost:3500/registerAccount/${userId}`;
          const response = await fetch(API_URL);
          const userinfo = await response.json();

          setUserAddress(userinfo.address);
        } catch (err) {
          console.error("Error fetching user data:", err);
        }
      }
    };

    fetchUserAddress();
  }, [selectedValue, userId]);

  useEffect(() => {
    const fetchBookingTableInfo = async () => {
      if (selectedValue === "InPizzeria") {
        try {
          const API_URL = `http://localhost:3500/bookingtable/${userId}`;
          const response = await fetch(API_URL);
          const bookingData = await response.json();

          setInfoBookingTable(bookingData);
        } catch (err) {
          console.error("Error fetching booking table data:", err);
        }
      }
    };

    fetchBookingTableInfo();
  }, [selectedValue, userId]);

  const handlePayMentChange = (event) => {
    setPaymentmethods(event.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        width: "90%",
        margin: "50px auto",
        padding: "30px",
        borderRadius: "16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
      }}
    >
      <Box width={{ width: "70%", borderRight: "3px solid #f4f4f4" }}>
        <Box>
          {types.map((type) => (
            <Button
              key={type}
              sx={{
                background: selectedValue === type ? "#e75b1e" : "#fff",
                color: selectedValue === type ? "#fff" : "#e75b1e",
                padding: "15px 30px",
                fontSize: "18px",
                fontFamily: "poppins",
                "&:hover": {
                  backgroundColor: "#e75b1e",
                  color: "#fff",
                },
                // "&:focus": {
                //   outline: "none",
                //   background: "#e75b1e",
                //   color: "#fff",
                // },
                border: "2px solid #f4f4f4",
              }}
              onClick={() => handleButtonClick(type)}
            >
              {type}
            </Button>
          ))}
        </Box>

        {selectedValue === "Delivery" && <DeliveryComp userAddress={userAddress} />}
        {selectedValue === "Pickup" && <PickupComp />}
        {selectedValue === "InPizzeria" && <InPizzeriaComp infoBookingTable={infoBookingTable} />}

        <Box sx={{ width: "400px", display: "flex" }}>
          <FormControlLabel
            control={<Checkbox checked={paymentmethods === "option1"} onChange={handlePayMentChange} value="option1" />}
            label="Cash"
          />
          <FormControlLabel
            control={<Checkbox checked={paymentmethods === "option2"} onChange={handlePayMentChange} value="option2" />}
            label="By Card"
          />
        </Box>
        <Button>Place Order</Button>
        <Typography>{currentPrice}</Typography>
      </Box>
      <LoadItems />
    </Box>
  );
};

export default MainCheckOut;

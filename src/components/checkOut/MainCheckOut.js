import { Box, Button, Checkbox, FormControlLabel, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import DeliveryComp from "./DeliveryComp";
import PickupComp from "./PickupComp";
import InPizzeriaComp from "./InPizzeriaComp";
import { useDispatch, useSelector } from "react-redux";

const MainCheckOut = () => {
  const [selectedValue, setSelectedValue] = useState("option1");
  const [paymentmethods, setPaymentmethods] = useState("option1");
  const [userAddress, setUserAddress] = useState([]);
  const [infoBookingTable, setInfoBookingTable] = useState([]);
  const [cartMenu, setCartMenu] = useState([]);

  const currentFee = useSelector((state) => state.currentPrice);

  const userId = localStorage.getItem("user_id");

  useEffect(() => {
    const savedMenu = localStorage.getItem("cartMenu");
    if (savedMenu) {
      setCartMenu(JSON.parse(savedMenu));
    }
  }, []);

  useEffect(() => {
    const fetchUserAddress = async () => {
      if (selectedValue === "option1") {
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
      if (selectedValue === "option3") {
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

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handlePayMentChange = (event) => {
    setPaymentmethods(event.target.value);
  };

  return (
    <Box>
      <Box>
        {cartMenu.map((item, index) => (
          <Typography key={index}>{item.name}</Typography>
        ))}
      </Box>

      <Typography>{currentFee.value}</Typography>

      <Box sx={{ width: "400px", display: "flex" }}>
        <FormControlLabel
          control={<Checkbox checked={selectedValue === "option1"} onChange={handleChange} value="option1" />}
          label="Delivery"
        />
        <FormControlLabel
          control={<Checkbox checked={selectedValue === "option2"} onChange={handleChange} value="option2" />}
          label="Pickup"
        />
        <FormControlLabel
          control={<Checkbox checked={selectedValue === "option3"} onChange={handleChange} value="option3" />}
          label="in pizzeria"
        />
      </Box>

      {selectedValue === "option1" && <DeliveryComp userAddress={userAddress} />}
      {selectedValue === "option2" && <PickupComp />}
      {selectedValue === "option3" && <InPizzeriaComp infoBookingTable={infoBookingTable} />}

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
    </Box>
  );
};

export default MainCheckOut;

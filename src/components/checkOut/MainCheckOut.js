// import { CheckBox } from "@mui/icons-material";
import { Box, Checkbox, FormControlLabel } from "@mui/material";
import React, { useEffect, useState } from "react";
// import apiRequest from "../../api/apiRequest";
import DeliveryComp from "./DeliveryComp";
import PickupComp from "./PickupComp";
import InPizzeriaComp from "./InPizzeriaComp";

const MainCheckOut = () => {
  const [selectedValue, setSelectedValue] = useState("option1");
  const [userAddress, setUserAddress] = useState([]);
  const [infoBookingTable, setInfoBookingTable] = useState([]);

  const userId = localStorage.getItem("user_id");

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

  return (
    <Box>
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
    </Box>
  );
};

export default MainCheckOut;

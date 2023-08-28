import { Box, Button, Typography, Icon } from "@mui/material";
import React, { useEffect, useState } from "react";
import DeliveryComp from "./DeliveryComp";
import PickupComp from "./PickupComp";
import InPizzeriaComp from "./InPizzeriaComp";
import { useCurrentPrice } from "../../redux";
import LoadItems from "./LoadItems";
import PayMentMethods from "./PayMentMethods";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import StorefrontIcon from "@mui/icons-material/Storefront";
import RestaurantIcon from "@mui/icons-material/Restaurant";

const MainCheckOut = () => {
  // const [selectedValue, setSelectedValue] = useState("option1");

  const [userAddress, setUserAddress] = useState([]);
  const [infoBookingTable, setInfoBookingTable] = useState([]);

  ///////////
  // const [active, setActive] = useState(null);
  const [selectedValue, setSelectedValue] = useState("Delivery");
  const types = [
    { key: "Delivery", icon: <LocalShippingIcon /> },
    { key: "Pickup", icon: <StorefrontIcon /> },
    { key: "InPizzeria", icon: <RestaurantIcon /> },
  ];

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
      <Box
        sx={{ width: "70%", borderRight: "3px solid #f4f4f4", display: "flex", flexDirection: "column", gap: "30px" }}
      >
        <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
          {types.map((type) => (
            <Button
              key={type.key}
              sx={{
                background: selectedValue === type.key ? "#e75b1e" : "#fff",
                color: selectedValue === type.key ? "#fff" : "#e75b1e",
                height: "10vh",
                width: "30%",
                fontSize: "18px",
                fontFamily: "Poppins",
                letterSpacing: "2px",
                fontWeight: "700",
                "&:hover": {
                  backgroundColor: "#e75b1e",
                  color: "#fff",
                },
                border: "2px solid #f4f4f4",
              }}
              onClick={() => handleButtonClick(type.key)}
            >
              <Icon sx={{ fontSize: "24px", marginRight: "8px" }}>{type.icon}</Icon>
              <Typography sx={{ fontSize: "20px", fontFamily: "Poppins" }}>{type.key}</Typography>
            </Button>
          ))}
        </Box>

        {selectedValue === "Delivery" && <DeliveryComp userAddress={userAddress} />}
        {selectedValue === "Pickup" && <PickupComp />}
        {selectedValue === "InPizzeria" && <InPizzeriaComp infoBookingTable={infoBookingTable} />}

        <PayMentMethods />
        <Button>Place Order</Button>
        <Typography>{currentPrice}</Typography>
      </Box>
      <LoadItems />
    </Box>
  );
};

export default MainCheckOut;

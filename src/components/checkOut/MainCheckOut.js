import { Box, Button, Typography, Icon } from "@mui/material";
import React, { useEffect, useState } from "react";
import DeliveryComp from "./DeliveryComp";
import PickupComp from "./PickupComp";
import InPizzeriaComp from "./InPizzeriaComp";
import LoadItems from "./LoadItems";
import PayMentMethods from "./PayMentMethods";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import StorefrontIcon from "@mui/icons-material/Storefront";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import { useDispatch } from "react-redux";
import { setOrderType, setTableBooking } from "../../redux/features/placeOrderSlice";
import PlaceOrder from "./PlaceOrder";
import CurrentFee from "./CurrentFee";

const MainCheckOut = () => {
  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = useState("Delivery");
  const [userAddress, setUserAddress] = useState([]);
  const [infoBookingTable, setInfoBookingTable] = useState([]);

  const types = [
    { key: "Delivery", icon: <LocalShippingIcon /> },
    { key: "Pickup", icon: <StorefrontIcon /> },
    { key: "InPizzeria", icon: <RestaurantIcon /> },
  ];

  const handleButtonClick = (type) => {
    setSelectedValue(type);
  };

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
    dispatch(setOrderType(selectedValue));
  }, [selectedValue, userId, dispatch]);

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

  // dispatch(
  //   setTableBooking({
  //     date: infoBookingTable.CalendarDate,
  //     tableValue: infoBookingTable.TableValue,
  //     timeValue: infoBookingTable.TimeValue,
  //   })
  // );

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        width: "95%",
        margin: "20px auto",
        padding: "20px",
        borderRadius: "16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
      }}
    >
      <Box
        sx={{
          width: "400px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",

          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {types.map((type) => (
            <Button
              key={type.key}
              sx={{
                background: selectedValue === type.key ? "#e75b1e" : "#fff",
                color: selectedValue === type.key ? "#fff" : "#e75b1e",
                height: "8vh",
                width: "90%",
                fontFamily: "Poppins",
                "&:hover": {
                  backgroundColor: "#e75b1e",
                  color: "#fff",
                },
                border: "2px solid #f4f4f4",
              }}
              onClick={() => handleButtonClick(type.key)}
            >
              <Icon sx={{ fontSize: "22px", marginRight: "8px", display: "block" }}>{type.icon}</Icon>
              <Typography sx={{ fontSize: "18px", fontFamily: "Poppins", display: "block" }}>{type.key}</Typography>
            </Button>
          ))}
        </Box>

        {selectedValue === "Delivery" && <DeliveryComp userAddress={userAddress} />}
        {selectedValue === "Pickup" && <PickupComp />}
        {selectedValue === "InPizzeria" && <InPizzeriaComp infoBookingTable={infoBookingTable} />}
      </Box>
      <PayMentMethods />

      <LoadItems />
    </Box>
  );
};

export default MainCheckOut;

import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import BookingTableImg from "../../assets/images/bookingTable.png";
import SubmitBtn from "../buttons/SubmitBtn";
import TableChoose from "./TableChoose";
import TimeChoose from "./TimeChoose";
import DayChoose from "./DayChoose";
import apiRequest from "../../api/apiRequest";
import { useNavigate } from "react-router-dom";

const options = [
  { value: 25, label: "Choose Time" },
  { value: 0, label: "I will call" },
  { value: 9, label: "09:00" },
  { value: 10, label: "10:00" },
  { value: 11, label: "11:00" },
  { value: 12, label: "12:00" },
  { value: 13, label: "13:00" },
  { value: 14, label: "14:00" },
  { value: 15, label: "15:00" },
  { value: 16, label: "16:00" },
  { value: 17, label: "17:00" },
  { value: 18, label: "18:00" },
  { value: 19, label: "19:00" },
  { value: 20, label: "20:00" },
  { value: 21, label: "21:00" },
  { value: 22, label: "22:00" },
  { value: 23, label: "23:00" },
  { value: 24, label: "24:00" },
];

const MainBookingTable = () => {
  const API_URL = "http://localhost:3500/bookingtable";
  const userId = localStorage.getItem("user_id");
  const [allInfoBookingTable, setAllInfoBookingTable] = useState({
    CalendarDate: [],
    TableValue: "",
    TimeValue: options[0],
    id: "",
  });

  const navigate = useNavigate();

  const handleDateChange = (newDate) => {
    const newDay = newDate.$D;
    const newMonth = newDate.$M + 1;
    const newYear = newDate.$y;

    setAllInfoBookingTable((prevInfo) => ({
      ...prevInfo,
      CalendarDate: [newDay, newMonth, newYear],
      id: userId,
    }));
  };

  const handleTableChange = (event) => {
    const value = event.target.value;
    setAllInfoBookingTable((prevInfo) => ({
      ...prevInfo,
      TableValue: value,
    }));
  };

  const handleTimeChange = (event) => {
    const value = event.target.value;
    const selectedOption = options.find((option) => option.value === value);

    setAllInfoBookingTable((prevInfo) => ({
      ...prevInfo,
      TimeValue: selectedOption,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const patchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(allInfoBookingTable),
    };

    apiRequest(API_URL, patchOptions);

    navigate("/menu");
    console.log(allInfoBookingTable);
    console.log("userId", userId);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "80%",
        margin: "auto",
        justifyContent: "space-around",
        alignItems: "center",
        gap: "10px",
        padding: "100px",
        background: "rgba(255, 255, 255, 0.6)",
        borderRadius: " 16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
      }}
    >
      <Typography sx={{ fontSize: "24px", textAlign: "center" }}>SELECT DATE AND TIME FOR YOUR RESERVATION</Typography>

      <form
        onSubmit={handleSubmit}
        style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}
      >
        <DayChoose handleDateChange={handleDateChange} />

        <Box
          sx={{
            display: "flex",
            width: "50%",
            flexDirection: "column",
            gap: "30px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TableChoose allInfoBookingTable={allInfoBookingTable} handleTableChange={handleTableChange} />

          <TimeChoose allInfoBookingTable={allInfoBookingTable} handleTimeChange={handleTimeChange} options={options} />

          <SubmitBtn text={"Save and Continue"} />
        </Box>
      </form>

      <Box sx={{ width: "100%", maxWidth: "900px" }}>
        <img src={BookingTableImg} alt="Tableimg" style={{ width: "100%", height: "auto" }} />
      </Box>
    </Box>
  );
};

export default MainBookingTable;

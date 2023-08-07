import React, { useState } from "react";
import { Box, Typography, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import BookingTableImg from "../../assets/images/bookingTable.png";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import SubmitBtn from "../buttons/SubmitBtn";
import { Link } from "react-router-dom";

const MainBookingTable = () => {
  // const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTable, setSelectedTable] = useState(null);
  const [selectedTime, setSelectedTime] = useState(dayjs("2022-04-17T15:30"));

  // Handler for changing the date
  // const handleDateChange = (date) => {
  //   setSelectedDate(date);
  // };

  const handleTableChange = (event) => {
    let value = event.target.value;
    if (value > 14) {
      value = 14;
    }
    setSelectedTable(value);
  };

  const handleTimeChange = (newTime) => {
    setSelectedTime(newTime);
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
      }}
    >
      <Typography sx={{ fontSize: "24px" }}>SELECT DATE AND TIME FOR YOUR RESERVATION</Typography>

      <Box sx={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
        <Box sx={{ width: "350px" }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DateCalendar", "DateCalendar", "DateCalendar"]}>
              <DateCalendar views={["day"]} />
            </DemoContainer>
          </LocalizationProvider>
        </Box>
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
          <FormControl sx={{ width: "300px" }}>
            <InputLabel>Table</InputLabel>
            <Select value={selectedTable} onChange={handleTableChange}>
              <MenuItem value={0}>I will call and And so I booked it</MenuItem>
              <MenuItem value={14}>Free Space</MenuItem>
              <MenuItem value={1}>Table 1, People 4</MenuItem>
              <MenuItem value={2}>Table 2, People 4</MenuItem>
              <MenuItem value={3}>Table 3, People 4</MenuItem>
              <MenuItem value={4}>Table 4, People 4</MenuItem>
              <MenuItem value={5}>Table 5, People 7</MenuItem>
              <MenuItem value={6}>Table 6, People 7</MenuItem>
              <MenuItem value={7}>Table 7, People 6</MenuItem>
              <MenuItem value={8}>Table 8, People 6</MenuItem>
              <MenuItem value={9}>Table 9, People 6</MenuItem>
              <MenuItem value={10}>Table 10, People 6</MenuItem>
              <MenuItem value={11}>Table 11, People 6</MenuItem>
              <MenuItem value={12}>Table 11, People 8</MenuItem>
              <MenuItem value={13}>Table 11, People 8</MenuItem>
            </Select>
          </FormControl>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["TimePicker"]}>
              <TimePicker label="Time" views={["hours"]} value={selectedTime} onChange={handleTimeChange} />
            </DemoContainer>
          </LocalizationProvider>

          <Link to={"/menu"}>
            <SubmitBtn text={"Save and Continue"} />
          </Link>
        </Box>
      </Box>

      <img src={BookingTableImg} alt="Tableimg" />
    </Box>
  );
};

export default MainBookingTable;

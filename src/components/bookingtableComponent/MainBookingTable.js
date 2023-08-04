import React, { useState } from "react";
import { Box, Typography, FormControl, InputLabel, MenuItem, Select, TextField, Button } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

const MainBookingTable = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedPeople, setSelectedPeople] = useState(1);
  const [selectedTime, setSelectedTime] = useState(""); // Use a string to store the time

  // Handler for changing the date
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // Handlers for changing the time
  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handlePeopleChange = (event) => {
    // Ensure the selected value stays within the range of 1 to 20
    let value = event.target.value;
    if (value < 1) {
      value = 1;
    } else if (value > 20) {
      value = 20;
    }
    setSelectedPeople(value);
  };

  // Your data arrays for days and months (example)
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "80%",
        margin: "auto",
        justifyContent: "center",
        alignItems: "center",
        gap: "50px",
      }}
    >
      <Typography>SELECT DATE AND TIME FOR YOUR RESERVATION</Typography>

      <Box>
        <Box sx={{ width: "500px", display: "flex", gap: "30px" }}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Choose Date"
              value={selectedDate}
              onChange={handleDateChange}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  variant="outlined"
                  placeholder="MM/DD/YYYY"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              )}
              inputFormat="MM/dd/yyyy" // Customize the date format as needed
              openTo="day"
              views={["day", "month", "year"]}
            />
          </LocalizationProvider>

          <TextField
            label="Time"
            type="time"
            value={selectedTime}
            onChange={handleTimeChange}
            fullWidth
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300,
            }}
          />

          <FormControl fullWidth>
            <InputLabel>People</InputLabel>
            <Select value={selectedPeople} onChange={handlePeopleChange}>
              {Array.from({ length: 20 }, (_, index) => index + 1).map((num) => (
                <MenuItem key={num} value={num}>
                  {num}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export default MainBookingTable;

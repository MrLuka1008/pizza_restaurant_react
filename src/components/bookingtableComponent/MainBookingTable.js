import { Box, Typography, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";

const MainBookingTable = () => {
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");

  // Handlers for changing the selected day, month, and time
  const handleDayChange = (event) => {
    setSelectedDay(event.target.value);
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
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
    <Box>
      <Typography>SELECT DATE AND TIME FOR YOUR RESERVATION</Typography>

      <Box>
        <Box>
          <FormControl fullWidth>
            <InputLabel>Day</InputLabel>
            <Select value={selectedDay} onChange={handleDayChange}>
              {days.map((day) => (
                <MenuItem key={day} value={day}>
                  {day}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>Month</InputLabel>
            <Select value={selectedMonth} onChange={handleMonthChange}>
              {months.map((month) => (
                <MenuItem key={month} value={month}>
                  {month}
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

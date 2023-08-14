import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { Box } from "@mui/material";

const DayChoose = ({ handleDateChange }) => {
  return (
    <Box sx={{ width: "350px" }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar onChange={(newDate) => handleDateChange(newDate)} views={["day"]} disablePast />
      </LocalizationProvider>
    </Box>
  );
};

export default DayChoose;

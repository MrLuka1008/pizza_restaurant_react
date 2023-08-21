import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const InPizzeriaComp = ({ infoBookingTable }) => {
  return (
    <Box>
      {infoBookingTable && infoBookingTable.CalendarDate ? (
        <Box>
          <Typography>Date: {infoBookingTable.CalendarDate.join("/")}</Typography>
          <Typography>Table Value: {infoBookingTable.TableValue}</Typography>
          <Typography>Time Value: {infoBookingTable.TimeValue.label}</Typography>
          <Typography>ID: {infoBookingTable.id}</Typography>
          <Link to={"/BookingTable"}>Edit</Link>
        </Box>
      ) : (
        <Box>
          <Typography>U have not Booking Table</Typography>

          <Link to={"/BookingTable"}>Booking now</Link>
        </Box>
      )}
    </Box>
  );
};

export default InPizzeriaComp;

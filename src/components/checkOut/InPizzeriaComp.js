import { Box, Typography } from "@mui/material";
import React from "react";

const InPizzeriaComp = ({ infoBookingTable }) => {
  return (
    <Box>
      {infoBookingTable && infoBookingTable.CalendarDate ? (
        <div>
          <p>Date: {infoBookingTable.CalendarDate.join("/")}</p>
          <p>Table Value: {infoBookingTable.TableValue}</p>
          <p>Time Value: {infoBookingTable.TimeValue.label}</p>
          <p>ID: {infoBookingTable.id}</p>
        </div>
      ) : (
        <p>Loading booking information...</p>
      )}
    </Box>
  );
};

export default InPizzeriaComp;

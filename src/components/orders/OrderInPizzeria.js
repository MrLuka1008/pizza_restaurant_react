import { Box, Typography } from "@mui/material";
import React from "react";

const OrderInPizzeria = ({ order }) => {
  let OrderData = {
    day: order.tableBooking.date[0],
    month: order.tableBooking.date[1],
    year: order.tableBooking.date[2],
  };

  return (
    <Box sx={{ width: "250px", border: "1px solid black" }}>
      <Typography>Order Type: {order.orderType}</Typography>
      {order.orderAddress && (
        <Box>
          <Typography sx={{ fontSize: "14px" }}>
            date : {OrderData.day}/{OrderData.month}/{OrderData.year}
          </Typography>
          <Box sx={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
            <Typography sx={{ fontSize: "14px" }}>table: {order.tableBooking.tableValue}</Typography>
            <Typography sx={{ fontSize: "14px" }}>Time: {order.tableBooking.timeValue.value}:00</Typography>
            <Typography sx={{ fontSize: "14px" }}>cardInfo: {order.cardInfo.payMenth}</Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default OrderInPizzeria;

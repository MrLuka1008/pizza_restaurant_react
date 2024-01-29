import { Box, Typography } from "@mui/material";
import React from "react";

const PickUpOrder = ({ order }) => {
  return (
    <Box sx={{ width: "250px", border: "1px solid black" }}>
      <Typography>Order Type: {order.orderType}</Typography>

      <Box>
        <Typography>cardInfo: {order.cardInfo.payMenth}</Typography>
        <Typography>Pick up time: {order.pickUpTime}</Typography>
      </Box>
    </Box>
  );
};

export default PickUpOrder;

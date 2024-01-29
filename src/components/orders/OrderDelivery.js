import { Box, Typography } from "@mui/material";
import React from "react";

const OrderDelivery = ({ order }) => {
  return (
    <Box sx={{ width: "250px", border: "1px solid black" }}>
      <Typography>Order Type: {order.orderType}</Typography>
      {order.orderAddress && (
        <Box>
          <Typography sx={{ fontSize: "14px" }}>Street Address: {order.orderAddress.streetaddress}</Typography>
          <Typography sx={{ fontSize: "14px" }}>Full Address: {order.orderAddress.fullAddress}</Typography>
          <Box sx={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
            <Typography sx={{ fontSize: "14px" }}>City: {order.orderAddress.city}</Typography>
            <Typography sx={{ fontSize: "16px" }}>Phone: {order.orderAddress.phone}</Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default OrderDelivery;

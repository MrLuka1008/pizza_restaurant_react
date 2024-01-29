import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import PickUpOrder from "./PickUpOrder";
import OrderDelivery from "./OrderDelivery";
import OrderInPizzeria from "./OrderInPizzeria";

const YourOrders = () => {
  const API_URL = `http://localhost:3500/placeOrder`;
  const userid = localStorage.getItem("user_id");
  const [order, setInfoOrder] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getOrderList = async () => {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        const userOrder = data.find((item) => item.userId === userid);

        if (userOrder) {
          setInfoOrder(userOrder);
        } else {
          setError("Order not found");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getOrderList();
  }, [API_URL, userid]); // Added dependencies to the useEffect dependency array

  console.log(order);

  return (
    <Box sx={{ width: "100%", margin: "50px auto" }}>
      {isLoading ? (
        <Typography>Loading...</Typography>
      ) : error ? (
        <Typography>Error: {error}</Typography>
      ) : order ? (
        order.orderType === "Pickup" ? (
          <PickUpOrder order={order} />
        ) : order.orderType === "Delivery" ? (
          <OrderDelivery order={order} />
        ) : order.orderType === "InPizzeria" ? (
          <OrderInPizzeria order={order} />
        ) : (
          <Typography>No order data available.</Typography>
        )
      ) : (
        <Typography>No order data available.</Typography>
      )}

      <Box>
        {order &&
          order.OrderList &&
          order.OrderList.map((item, index) => (
            <Box key={index}>
              <Typography>Name: {item.name}</Typography>
              <Typography>Size: {item.size}</Typography>
              <Typography>Quantity: {item.quantity}</Typography>
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default YourOrders;

import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  classicPizzasData,
  dessertsData,
  sodaDrinksData,
  pastaDishesData,
  specialOffersData,
  specialtyPizzasData,
  vegetarianPizzaData,
} from "../../data";
import { useCurrentPrice, useInCart } from "../../redux";

const LoadItems = () => {
  // const test = useInCart();
  const [cartMenu, setCartMenu] = useState([]);
  const savedCartMenu = useInCart();
  const totalPrice = useCurrentPrice();

  console.log(cartMenu);

  const getMenuItems = () => {
    return [
      ...classicPizzasData,
      ...vegetarianPizzaData,
      ...specialtyPizzasData,
      ...pastaDishesData,
      ...dessertsData,
      ...sodaDrinksData,
      ...specialOffersData,
    ];
  };

  useEffect(() => {
    const pizzaItems = getMenuItems();
    const pizzaNamesInCart = savedCartMenu.map((cartItem) => cartItem.name);

    const pizzaItemsInCart = pizzaItems.filter((item) => pizzaNamesInCart.includes(item.name));

    const mergedItems = pizzaItemsInCart.map((pizzaItem) => {
      const cartItem = savedCartMenu.find((item) => item.name === pizzaItem.name);
      return { ...pizzaItem, quantity: cartItem.quantity, currentSize: cartItem.size };
    });

    setCartMenu(mergedItems);
  }, []);

  return (
    <Box
      sx={{
        width: "30%",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "20px",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          padding: "30px",
          height: "80vh",
          overflow: "auto",
          border: "2px solid #f4f4f4",
        }}
      >
        {cartMenu.map((item, index) => (
          <Box
            key={index}
            sx={{
              borderBottom: "2px solid #f4f4f4",
              padding: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <img
              style={{ width: "70px", objectFit: "cover", filter: "drop-shadow(5px 0px 3px #000)" }}
              src={item.image}
              alt="pizza img"
            />
            <Box>
              <Typography sx={{ fontFamily: "poppins" }}>{item.name}</Typography>
            </Box>

            <Box>
              <Typography sx={{ fontFamily: "poppins" }}>X{item.quantity}</Typography>
              <Typography sx={{ fontFamily: "poppins" }}>
                ${item.sizes[item.currentSize].price * item.quantity}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
      <Box sx={{ borderTop: "3px solid #f4f4f4", display: "Flex", width: "100%", padding: "20px", gap: "50px" }}>
        <Typography>Order Price</Typography>
        <Typography>${totalPrice}</Typography>
      </Box>
    </Box>
  );
};

export default LoadItems;

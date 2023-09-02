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
import { useInCart } from "../../redux";
import CurrentFee from "./CurrentFee";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setOrderList } from "../../redux/features/placeOrderSlice";
import PlaceOrder from "./PlaceOrder";

const LoadItems = () => {
  const [cartMenu, setCartMenu] = useState([]);
  const savedCartMenu = useInCart();

  const dispatch = useDispatch();

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

    dispatch(setOrderList(savedCartMenu));
  }, [dispatch, savedCartMenu]);

  return (
    <Box
      sx={{
        width: "400px",
        display: "flex",
        flexDirection: "column",
        padding: "0 20px 0 20px",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          padding: "10px",
          maxHeight: "50vh",
          overflow: "auto",
          border: "2px solid #f4f4f4",
        }}
      >
        {cartMenu.map((item, index) => (
          <Box
            key={index}
            sx={{
              borderBottom: "2px solid #f4f4f4",
              padding: "6px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <img
              style={{ width: "50px", objectFit: "cover", filter: "drop-shadow(5px 0px 3px #000)" }}
              src={item.image}
              alt="pizza img"
            />
            <Box>
              <Typography sx={{ fontFamily: "Poppins" }}>{item.name}</Typography>
            </Box>

            <Box>
              <Typography sx={{ fontFamily: "Poppins" }}>X{item.quantity}</Typography>
              <Typography sx={{ fontFamily: "Poppins" }}>
                ${item.sizes[item.currentSize].price * item.quantity}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
      <Link to={"/cart"} style={{ color: "#e75b1e", fontSize: "16px", fontFamily: "Poppins", padding: "5px" }}>
        Change Order
      </Link>

      <CurrentFee />
      <PlaceOrder />
    </Box>
  );
};

export default LoadItems;

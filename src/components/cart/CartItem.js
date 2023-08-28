import React, { useEffect, useState } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import {
  classicPizzasData,
  dessertsData,
  sodaDrinksData,
  pastaDishesData,
  specialOffersData,
  specialtyPizzasData,
  vegetarianPizzaData,
} from "../../data";
import CartCalculator from "./CartCalculator";
import NoCartFound from "./NoCartFound";
import ChangeSizeBtn from "./ChangeSizeBtn";
import QuantityChange from "./QuantityChange";
import RemoveClick from "./RemoveClick";
import { useDispatch } from "react-redux";
import { setCurrentPrice, useInCart } from "../../redux";

const CartItem = () => {
  const [cartMenu, setCartMenu] = useState([]);
  const savedCartMenu = useInCart();
  const [pizzaSizes, setPizzaSizes] = useState({});
  const isScreenWidth678 = useMediaQuery("(max-width: 678px)");
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState({});

  useEffect(() => {
    // Set the initial pizzaSizes state with default size "m"
    const initialPizzaSizes = savedCartMenu.reduce((sizes, item) => {
      sizes[item.name] = item.size;
      return sizes;
    }, {});

    setPizzaSizes(initialPizzaSizes);
    // setSavedCartMenu(updatedCartMenu);
  }, [savedCartMenu]);

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
    const initialQuantity = savedCartMenu.reduce((quantities, item) => {
      quantities[item.name] = item.quantity || 1;
      return quantities;
    }, {});

    setQuantity(initialQuantity);
  }, [savedCartMenu]);

  useEffect(() => {
    const filteredItems = getMenuItems().filter((item) => {
      return savedCartMenu.some((cartItem) => cartItem.name === item.name);
    });
    if (filteredItems.length > 0) {
      const totalPrice = filteredItems.reduce((acc, item) => {
        const cartItem = savedCartMenu.find((cartItem) => cartItem.name === item.name);
        if (cartItem && item.sizes && item.sizes[cartItem.size]) {
          return acc + item.sizes[cartItem.size].price * cartItem.quantity;
        }
        return acc;
      }, 0);
      setCartMenu(filteredItems);
      setTotalPrice(totalPrice);
      dispatch(setCurrentPrice(totalPrice));
    }
  }, [savedCartMenu, dispatch]);

  return (
    <>
      {cartMenu.length > 0 ? (
        cartMenu.map((item) => (
          <Box
            key={item.name}
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-around",
              alignItems: "center",
              background: "rgba(255, 255, 255, 0.6)",
              borderRadius: " 16px",
              borderBottom: "2px solid #f4f4f4",
              padding: "14px 0 14px 0",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                flexWrap: "wrap",
                width: isScreenWidth678 ? "100px" : "250px",
                justifyContent: "center",
              }}
            >
              {isScreenWidth678 ? null : <img src={item.image} alt="img" style={{ width: "80px" }} />}

              <Typography sx={{ fontSize: "20px" }}>{item.name}</Typography>
              <Typography>{item.category}</Typography>
            </Box>

            <ChangeSizeBtn item={item} pizzaSizes={pizzaSizes} />

            <QuantityChange item={item} quantity={quantity} />

            <Typography>
              $
              {item.sizes[pizzaSizes[item.name]]
                ? item.sizes[pizzaSizes[item.name]].price * quantity[item.name]
                : "Price error change size"}
            </Typography>

            <RemoveClick item={item} />
          </Box>
        ))
      ) : (
        <NoCartFound />
      )}

      <CartCalculator totalPrice={totalPrice} />
    </>
  );
};

export default CartItem;

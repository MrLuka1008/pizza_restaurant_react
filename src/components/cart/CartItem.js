import React, { useEffect, useState } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import classicPizzasData from "../../data/classicPizzasData";
import dessertsData from "../../data/dessertsData";
import sodaDrinksData from "../../data/sodaDrinksData";
import pastaDishesData from "../../data/pastaDishesData";
import specialOffersData from "../../data/specialOffersData";
import specialtyPizzasData from "../../data/specialtyPizzasData";
import vegetarianPizzaData from "../../data/vegetarianPizzaData";
import CartCalculator from "./CartCalculator";
import NoCartFound from "./NoCartFound";
import ChangeSizeBtn from "./ChangeSizeBtn";
import QuantityChange from "./QuantityChange";
import RemoveClick from "./RemoveClick";

const CartItem = () => {
  const [pizzaSizes, setPizzaSizes] = useState({});
  const [quantity, setQuantity] = useState({});
  const isScreenWidth678 = useMediaQuery("(max-width: 678px)");
  const [cartMenu, setCartMenu] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [savedCartMenu, setSavedCartMenu] = useState(() => JSON.parse(localStorage.getItem("cartMenu")) || []);

  useEffect(() => {
    const updatedCartMenu = JSON.parse(localStorage.getItem("cartMenu")) || [];

    // Set the initial pizzaSizes state with default size "m"
    const initialPizzaSizes = updatedCartMenu.reduce((sizes, item) => {
      sizes[item.name] = item.size;
      return sizes;
    }, {});

    const initialQuantity = updatedCartMenu.reduce((quantities, item) => {
      quantities[item.name] = item.quantity || 1;
      return quantities;
    }, {});

    setQuantity(initialQuantity);
    setPizzaSizes(initialPizzaSizes);
    setSavedCartMenu(updatedCartMenu);
  }, []);

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
    }
  }, [savedCartMenu, quantity]);

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
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(5px)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              padding: "25px 0 25px 0",
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

            <ChangeSizeBtn
              item={item}
              pizzaSizes={pizzaSizes}
              setPizzaSizes={setPizzaSizes}
              setSavedCartMenu={setSavedCartMenu}
              savedCartMenu={savedCartMenu}
            />

            <QuantityChange
              item={item}
              quantity={quantity}
              setQuantity={setQuantity}
              savedCartMenu={savedCartMenu}
              setSavedCartMenu={setSavedCartMenu}
              setTotalPrice={setTotalPrice}
            />

            <Typography>
              $
              {item.sizes[pizzaSizes[item.name]]
                ? item.sizes[pizzaSizes[item.name]].price * quantity[item.name]
                : "jjj"}
            </Typography>

            <RemoveClick
              item={item}
              savedCartMenu={savedCartMenu}
              pizzaSizes={pizzaSizes}
              setCartMenu={setCartMenu}
              setSavedCartMenu={setSavedCartMenu}
              setTotalPrice={setPizzaSizes}
            />
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

import React, { useEffect, useState } from "react";
import { Box, Typography, ToggleButtonGroup, ToggleButton, TextField, IconButton, useMediaQuery } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import classicPizzasData from "../../data/classicPizzasData";
import dessertsData from "../../data/dessertsData";
import sodaDrinksData from "../../data/sodaDrinksData";
import pastaDishesData from "../../data/pastaDishesData";
import specialOffersData from "../../data/specialOffersData";
import specialtyPizzasData from "../../data/specialtyPizzasData";
import vegetarianPizzaData from "../../data/vegetarianPizzaData";
import CartCalculator from "./CartCalculator";

const CartItem = () => {
  const [pizzaSizes, setPizzaSizes] = useState({});
  // const [quantity, setQuantity] = useState(1);
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
    setPizzaSizes(initialPizzaSizes);
    setSavedCartMenu(updatedCartMenu);
  }, []);

  const handleSizeChange = (event, newPizzaSize, itemName) => {
    if (newPizzaSize) {
      setPizzaSizes((prevSizes) => ({
        ...prevSizes,
        [itemName]: newPizzaSize,
      }));

      const updatedCartItems = savedCartMenu.map((item) => {
        console.log(item);
        if (item.name === itemName) {
          return { ...item, size: newPizzaSize };
        }
        return item;
      });

      localStorage.setItem("cartMenu", JSON.stringify(updatedCartItems));
      setSavedCartMenu(updatedCartItems);
    }
  };

  const handleQuantityChange = (event, newQuantity, itemName) => {
    if (!isNaN(newQuantity)) {
      setQuantity((prevQuantity) => ({
        ...prevQuantity,
        [itemName]: newQuantity,
      }));

      const updatedCartItems = savedCartMenu.map((item) => {
        if (item.name === itemName) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      });

      localStorage.setItem("cartMenu", JSON.stringify(updatedCartItems));
      setSavedCartMenu(updatedCartItems);

      // Calculate the total price
      const totalPrice = updatedCartItems.reduce((acc, item) => {
        if (item.sizes && item.sizes[item.size]) {
          return acc + item.sizes[item.size].price * item.quantity;
        }
        return acc;
      }, 0);
      setTotalPrice(totalPrice);
    }
  };

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

  const handleRemoveClick = (itemToRemove) => {
    const updatedCartItems = savedCartMenu.filter((item) => item.name !== itemToRemove.name);

    // Calculate the new total price after removing the item
    const newTotalPrice = updatedCartItems.reduce((acc, item) => {
      const size = pizzaSizes[item.name];
      if (item.sizes && item.sizes[size]) {
        return acc + item.sizes[size].price;
      }
      return acc;
    }, 0);

    localStorage.setItem("cartMenu", JSON.stringify(updatedCartItems));

    if (updatedCartItems.length === 0) {
      setCartMenu([]);
    }
    setSavedCartMenu(updatedCartItems);
    setTotalPrice(newTotalPrice);
  };

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
            <ToggleButtonGroup
              value={item.size}
              exclusive
              onChange={(event, newSize) => handleSizeChange(event, newSize, item.name)}
              aria-label="Pizza Size"
            >
              {Object.keys(item.sizes).map((size) =>
                item.sizes[pizzaSizes[item.name]] ? (
                  <ToggleButton
                    key={size}
                    value={size}
                    aria-label={size.toUpperCase()}
                    sx={{
                      // fontWeight: size === item.size ? "bold" : "normal",
                      color: size === pizzaSizes[item.name] ? "#e75b1e" : "inherit",
                    }}
                  >
                    {size.toUpperCase()} - ${item.sizes[size].price}
                  </ToggleButton>
                ) : (
                  <ToggleButton
                    key={size}
                    value={size}
                    aria-label={size.toUpperCase()}
                    sx={{ fontWeight: size === item.size ? "bold" : "normal" }}
                  >
                    {size.toUpperCase()} - ${item.sizes[size].price}
                  </ToggleButton>
                )
              )}
            </ToggleButtonGroup>

            <TextField
              variant="outlined"
              type="number"
              value={quantity[item.name] || 1}
              onChange={(event) => handleQuantityChange(event, event.target.value, item.name)}
              inputProps={{ min: 1, max: 20 }}
            />

            <Typography>
              ${item.sizes[pizzaSizes[item.name]] ? item.sizes[pizzaSizes[item.name]].price * quantity[item.name] : ""}
            </Typography>

            <IconButton onClick={() => handleRemoveClick(item)}>
              <CloseIcon />
            </IconButton>
          </Box>
        ))
      ) : (
        <p>No items found in the cart.</p>
      )}

      <CartCalculator totalPrice={totalPrice} />
    </>
  );
};

export default CartItem;

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
  const [pizzaSize, setPizzaSize] = useState("m");
  const [quantity, setQuantity] = useState(1);
  const isScreenWidth678 = useMediaQuery("(max-width: 678px)");
  const [cartMenu, setCartMenu] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  // const [current, setCurrent] = useState("l");

  // const handleSizeChange = (event, newPizzaSize) => {
  //   if (newPizzaSize !== null) {
  //     setPizzaSize(newPizzaSize);
  //   }
  // };

  const savedCartMenu = JSON.parse(localStorage.getItem("cartMenu")) || [];

  //
  const handleSizeChange = (event, newPizzaSize, itemName) => {
    if (newPizzaSize) {
      const updatedCartItems = savedCartMenu.map((item) => {
        if (item.name === itemName) {
          return { ...item, size: newPizzaSize };
        }
        return item;
      });

      console.log("save cart", savedCartMenu);
      console.log("my test", updatedCartItems);

      // setPizzaSize(`${newPizzaSize}`);
      // const totalPrice = updatedCartItems.reduce((acc, item) => acc + item.price, 0);

      localStorage.setItem("cartMenu", JSON.stringify(updatedCartItems));

      // setCartMenu(updatedCartItems);
      // setTotalPrice(totalPrice);
    }
  };

  //

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);

    if (!isNaN(newQuantity)) {
      setQuantity(newQuantity);
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
          return acc + item.sizes[cartItem.size].price;
        }
        return acc;
      }, 0);
      setCartMenu(filteredItems);
      setTotalPrice(totalPrice);
    }
  }, []);

  const handleRemoveClick = (itemToRemove) => {
    const test = savedCartMenu.filter((item) => item.name !== itemToRemove.name);
    const updatedCartItems = cartMenu.filter((item) => item.name !== itemToRemove.name);

    setTotalPrice(totalPrice - itemToRemove.price);

    localStorage.setItem("cartMenu", JSON.stringify(test));

    // Update the cartMenu state
    setCartMenu(updatedCartItems);
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
              {Object.keys(item.sizes).map((size) => (
                <ToggleButton
                  key={size}
                  value={size}
                  aria-label={size.toUpperCase()}
                  sx={{ fontWeight: size === item.size ? "bold" : "normal" }}
                >
                  {size.toUpperCase()} - ${item.sizes[size].price}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>

            {/* <ToggleButtonGroup value={pizzaSize} exclusive onChange={handleSizeChange} aria-label="Pizza Size">
              <ToggleButton value="s" aria-label="Small">
                S
              </ToggleButton>
              <ToggleButton value="m" aria-label="Medium">
                M
              </ToggleButton>
              <ToggleButton value="l" aria-label="Extra Large">
                L
              </ToggleButton>
            </ToggleButtonGroup> */}
            <TextField
              variant="outlined"
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              inputProps={{ min: 1, max: 20 }}
            />

            <Typography>${item.sizes && item.sizes[pizzaSize] && item.sizes[pizzaSize].price}</Typography>

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

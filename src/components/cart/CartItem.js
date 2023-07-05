import React, { useEffect, useState } from "react";
import { Box, Typography, ToggleButtonGroup, ToggleButton, TextField, IconButton, useMediaQuery } from "@mui/material";
// import pepperoni from "../../assets/images/pepperoni.png";
import CloseIcon from "@mui/icons-material/Close";
import classicPizzasData from "../../data/classicPizzasData";
import dessertsData from "../../data/dessertsData";
import sodaDrinksData from "../../data/sodaDrinksData";
import pastaDishesData from "../../data/pastaDishesData";
import specialOffersData from "../../data/specialOffersData";
import specialtyPizzasData from "../../data/specialtyPizzasData";
import vegetarianPizzaData from "../../data/vegetarianPizzaData";

const CartItem = () => {
  const [pizzaSize, setPizzaSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const isScreenWidth678 = useMediaQuery("(max-width: 678px)");
  const [cartMenu, setCartMenu] = useState([]);

  const handleSizeChange = (event, newPizzaSize) => {
    if (newPizzaSize !== null) {
      setPizzaSize(newPizzaSize);
    }
  };

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
    const savedCartMenu = JSON.parse(localStorage.getItem("cartMenu"));
    const filteredItems = getMenuItems().filter((item) => savedCartMenu.includes(item.name));
    if (filteredItems) {
      setCartMenu(filteredItems);
    }
  }, []);

  // const inCartItems = JSON.parse(localStorage.getItem("cartMenu")) || [];

  // console.log("filteredItems", filteredItems);

  // const handleRemoveClick = (itemToRemove) => {
  //   const updatedCartItems = inCartItems.filter((itemName) => itemName !== itemToRemove.name);
  //   // console.log("itemToRemove", itemToRemove);
  //   // console.log("inCartItems", inCartItems);
  //   localStorage.setItem("cartMenu", JSON.stringify(updatedCartItems));
  //   console.log("new items", updatedCartItems);

  //   // Set the updated cart items to local storage or update state as needed
  // };
  const handleRemoveClick = (itemToRemove) => {
    const updatedCartItems = cartMenu.filter((item) => item.name !== itemToRemove.name);

    // Update the cart items in local storage
    localStorage.setItem("cartMenu", JSON.stringify(updatedCartItems));

    // Update the cartMenu state
    setCartMenu(updatedCartItems);
  };

  //

  //

  return (
    <>
      {cartMenu.length > 0 ? (
        cartMenu.map((item) => (
          <Box
            // key={item}
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
            <ToggleButtonGroup value={pizzaSize} exclusive onChange={handleSizeChange} aria-label="Pizza Size">
              <ToggleButton value="S" aria-label="Small">
                S
              </ToggleButton>
              <ToggleButton value="M" aria-label="Medium">
                M
              </ToggleButton>
              <ToggleButton value="X" aria-label="Extra Large">
                L
              </ToggleButton>
            </ToggleButtonGroup>
            <TextField
              variant="outlined"
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              inputProps={{ min: 1, max: 20 }}
            />

            <Typography>${item.price}</Typography>

            <IconButton onClick={() => handleRemoveClick(item)}>
              <CloseIcon />
            </IconButton>
          </Box>
        ))
      ) : (
        <p>No items found in the cart.</p>
      )}
    </>
  );
};

export default CartItem;

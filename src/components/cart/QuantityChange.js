import { TextField } from "@mui/material";
import React from "react";

const QuantityChange = ({ item, quantity, setQuantity, savedCartMenu, setSavedCartMenu, setTotalPrice }) => {
  const handleQuantityChange = (event, newQuantity, itemName) => {
    if (!isNaN(newQuantity)) {
      setQuantity((prevQuantity) => ({
        ...prevQuantity,
        [itemName]: newQuantity,
      }));

      const updatedCartItems = savedCartMenu.map((item) => {
        if (item.name === itemName) {
          // console.log(quantity[item.name]);
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

  return (
    <TextField
      variant="outlined"
      type="number"
      value={quantity[item.name] || 1}
      onChange={(event) => handleQuantityChange(event, event.target.value, item.name)}
      inputProps={{ min: 1, max: 20 }}
    />
  );
};

export default QuantityChange;

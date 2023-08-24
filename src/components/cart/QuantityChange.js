import { TextField } from "@mui/material";
import React from "react";
import { changeItemQuantity } from "../../redux/features/inCartSlice";
import { useDispatch } from "react-redux";

const QuantityChange = ({ item, quantity }) => {
  const dispatch = useDispatch();

  const handleQuantityChange = (newQuantity) => {
    if (!isNaN(newQuantity)) {
      dispatch(changeItemQuantity({ name: item.name, quantity: parseInt(newQuantity) }));
    }
  };

  return (
    <TextField
      variant="outlined"
      type="number"
      value={quantity[item.name] || 1}
      onChange={(event) => handleQuantityChange(event.target.value)}
      inputProps={{ min: 1, max: 20 }}
    />
  );
};

export default QuantityChange;

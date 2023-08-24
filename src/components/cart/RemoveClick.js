import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../redux/features/inCartSlice";

const RemoveClick = ({ item, savedCartMenu, pizzaSizes, setCartMenu, setSavedCartMenu, setTotalPrice }) => {
  const dispatch = useDispatch();

  // const handleRemoveClick = (itemToRemove) => {
  //   const updatedCartItems = savedCartMenu.filter((item) => item.name !== itemToRemove.name);

  //   // Calculate the new total price after removing the item
  //   const newTotalPrice = updatedCartItems.reduce((acc, item) => {
  //     const size = pizzaSizes[item.name];
  //     if (item.sizes && item.sizes[size]) {
  //       return acc + item.sizes[size].price;
  //     }
  //     return acc;
  //   }, 0);

  //   localStorage.setItem("cartMenu", JSON.stringify(updatedCartItems));

  //   if (updatedCartItems.length === 0) {
  //     setCartMenu([]);
  //   }

  //   setSavedCartMenu(updatedCartItems);
  //   setTotalPrice(newTotalPrice);
  // };

  return (
    <IconButton onClick={() => dispatch(removeItemFromCart(item))}>
      <CloseIcon />
    </IconButton>
  );
};

export default RemoveClick;

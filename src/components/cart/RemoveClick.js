import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../redux/features/inCartSlice";
import { setCartsLength, useCartLength, useInCart } from "../../redux";

const RemoveClick = ({ item }) => {
  const dispatch = useDispatch();
  const inCart = useInCart();
  dispatch(setCartsLength(inCart.length));

  return (
    <IconButton onClick={() => dispatch(removeItemFromCart(item))}>
      <CloseIcon />
    </IconButton>
  );
};

export default RemoveClick;

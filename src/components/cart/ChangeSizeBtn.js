import React from "react";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { changeSizeItemInCart } from "../../redux/features/inCartSlice";

const ChangeSizeBtn = ({ item, pizzaSizes, setPizzaSizes, setSavedCartMenu, savedCartMenu }) => {
  const dispatch = useDispatch();

  // const handleSizeChange = (event, newPizzaSize, itemName) => {
  //   if (newPizzaSize) {
  //     setPizzaSizes((prevSizes) => ({
  //       ...prevSizes,
  //       [itemName]: newPizzaSize,
  //     }));

  //     // const updatedCartItems = savedCartMenu.map((item) => {
  //     //   console.log(item);
  //     //   if (item.name === itemName) {
  //     //     return { ...item, size: newPizzaSize };
  //     //   }
  //     //   return item;
  //     // });

  //     localStorage.setItem("cartMenu", JSON.stringify(updatedCartItems));
  //     setSavedCartMenu(updatedCartItems);
  //   }
  // };

  const handleSizeChange = (newSize) => {
    if (newSize !== item.size) {
      dispatch(changeSizeItemInCart({ name: item.name, size: newSize }));

      // Assuming you have a redux action that persists the cart to localStorage
      // You can dispatch that action here to update localStorage if needed
    }
  };

  return (
    <ToggleButtonGroup
      value={item.size}
      exclusive
      // onChange={(event, newSize) => handleSizeChange(event, newSize, item.name)}
      // onChange={(item, newSize) => dispatch(changeSizeItemInCart(item.name, newSize))}
      // onChange={(event, newSize) => dispatch(changeSizeItemInCart({ name: event.name, size: newSize }))}
      onChange={(event, newSize) => handleSizeChange(newSize)}
      aria-label="Pizza Size"
    >
      {Object.keys(item.sizes).map((size) =>
        item.sizes[pizzaSizes[item.name]] ? (
          <ToggleButton
            key={size}
            value={size}
            aria-label={size.toUpperCase()}
            sx={{
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
  );
};

export default ChangeSizeBtn;

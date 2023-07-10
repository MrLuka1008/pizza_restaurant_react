import React from "react";
import { ToggleButtonGroup, ToggleButton, TextField, IconButton, useMediaQuery } from "@mui/material";

const ChangeSizeBtn = ({ item, pizzaSizes, setPizzaSizes, setSavedCartMenu, savedCartMenu }) => {
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

  return (
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

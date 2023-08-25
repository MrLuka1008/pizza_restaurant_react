import React from "react";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { changeSizeItemInCart } from "../../redux/features/inCartSlice";

const ChangeSizeBtn = ({ item, pizzaSizes }) => {
  const dispatch = useDispatch();

  const handleSizeChange = (newSize) => {
    if (newSize !== item.size) {
      dispatch(changeSizeItemInCart({ name: item.name, size: newSize }));
    }
  };

  return (
    <ToggleButtonGroup
      value={item.size}
      exclusive
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

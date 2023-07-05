import { TextField } from "@mui/material";
import React from "react";

const MenuSearchBar = ({ searchInput, handleChange }) => {
  return (
    <>
      <TextField
        onChange={handleChange}
        value={searchInput}
        id="filled-search"
        label="Search field"
        type="search"
        variant="filled"
      />
    </>
  );
};

export default MenuSearchBar;

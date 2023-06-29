import { TextField } from "@mui/material";
import React, { useState } from "react";
import classicPizzasData from "../../data/classicPizzasData";
import dessertsData from "../../data/dessertsData";
import sodaDrinks from "../../data/sodaDrinksData";
import pastaDishes from "../../data/pastaDishesData";
import specialOffers from "../../data/specialOffersData";
import specialtyPizzas from "../../data/specialtyPizzasData";
import vegetarianPizza from "../../data/vegetarianPizza";

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

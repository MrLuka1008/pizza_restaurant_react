import React, { useEffect, useState } from "react";
import { Box, List, TextField, ListItem } from "@mui/material";
import styled from "@emotion/styled";

import { makeStyles } from "@mui/styles";
import MenuPizzaCard from "../cards/MenuPizzaCard";
import classicPizzasData from "../../data/classicPizzasData";
import dessertsData from "../../data/dessertsData";
import sodaDrinksData from "../../data/sodaDrinksData";
import pastaDishesData from "../../data/pastaDishesData";
import specialOffersData from "../../data/specialOffersData";
import specialtyPizzasData from "../../data/specialtyPizzasData";
import vegetarianPizzaData from "../../data/vegetarianPizzaData";

const CustomBox = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  padding: "100px",
  position: "relative",
}));

const CustomSmallBox = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  width: "70%",
  gap: "30px",
  padding: "50px",
  background: "rgba(255, 255, 255, 0.6)",
  borderRadius: " 16px",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(5px)",
  border: "1px solid rgba(255, 255, 255, 0.3)",
}));

const LeftBox = styled(Box)(() => ({
  position: "sticky",
  top: 0,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  padding: "20px",
  width: "30%",
  borderRadius: "16px",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(5px)",
  border: "1px solid rgba(255, 255, 255, 0.3)",
}));

const useStyles = makeStyles((theme) => ({
  listItem: {
    marginTop: "20px",
    fontSize: "22px",
    fontWeight: "700",
    cursor: "pointer",
  },
  emoji: {
    fontSize: "24px",
    marginRight: "8px",
  },
  box: {
    display: "flex",
    flexDirection: "column",
  },
  active: {
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(5px)",
    borderBottom: "2px solid #e75b1e",
    border: "1px solid rgba(255, 255, 255, 0.3)",
  },
}));

const MenuContent = () => {
  const classes = useStyles();
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchInput, setSearchInput] = useState("");

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const getMenuItems = () => {
    switch (activeCategory) {
      case "All":
        return [
          ...classicPizzasData,
          ...vegetarianPizzaData,
          ...specialtyPizzasData,
          ...pastaDishesData,
          ...dessertsData,
          ...sodaDrinksData,
          ...specialOffersData,
        ];
      case "Classic Pizzas":
        return classicPizzasData;
      case "Vegetarian Pizzas":
        return vegetarianPizzaData;
      case "Specialty Pizzas":
        return specialtyPizzasData;
      case "Pasta Dishes":
        return pastaDishesData;
      case "Desserts":
        return dessertsData;
      case "Soda Drinks":
        return sodaDrinksData;
      case "Special Offers":
        return specialOffersData;
      default:
        return [];
    }
  };

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const filteredItems = getMenuItems().filter((item) => item.name.toLowerCase().includes(searchInput.toLowerCase()));

  ///
  const [cartMenu, setCartMenu] = useState(() => {
    const savedCartMenu = localStorage.getItem("cartMenu");
    return savedCartMenu ? JSON.parse(savedCartMenu) : [];
  });

  const handleAddItem = (pizza) => {
    setCartMenu((prevMenu) => [...prevMenu, pizza.name]);
  };

  useEffect(() => {
    localStorage.setItem("cartMenu", JSON.stringify(cartMenu));
  }, [cartMenu]);

  //

  return (
    <CustomBox>
      <LeftBox>
        <TextField
          onChange={handleChange}
          value={searchInput}
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
        />
        <List>
          <ListItem
            className={`${classes.listItem} ${activeCategory === "All" ? classes.active : ""}`}
            onClick={() => handleCategoryClick("All")}
          >
            <span role="img" aria-label="Pizza Slice" className={classes.emoji}>
              🌍
            </span>
            All
          </ListItem>
          <ListItem
            className={`${classes.listItem} ${activeCategory === "Classic Pizzas" ? classes.active : ""}`}
            onClick={() => handleCategoryClick("Classic Pizzas")}
          >
            <span role="img" aria-label="Pizza Slice" className={classes.emoji}>
              🍕
            </span>
            Classic Pizzas
          </ListItem>
          <ListItem
            className={`${classes.listItem} ${activeCategory === "Vegetarian Pizzas" ? classes.active : ""}`}
            onClick={() => handleCategoryClick("Vegetarian Pizzas")}
          >
            <span role="img" aria-label="Broccoli" className={classes.emoji}>
              🥦
            </span>
            Vegetarian Pizzas
          </ListItem>
          <ListItem
            className={`${classes.listItem} ${activeCategory === "Specialty Pizzas" ? classes.active : ""}`}
            onClick={() => handleCategoryClick("Specialty Pizzas")}
          >
            <span role="img" aria-label="Sparkles" className={classes.emoji}>
              ✨
            </span>
            Specialty Pizzas
          </ListItem>
          <ListItem
            className={`${classes.listItem} ${activeCategory === "Pasta Dishes" ? classes.active : ""}`}
            onClick={() => handleCategoryClick("Pasta Dishes")}
          >
            <span role="img" aria-label="Pasta" className={classes.emoji}>
              🍝
            </span>
            Pasta Dishes
          </ListItem>
          <ListItem
            className={`${classes.listItem} ${activeCategory === "Desserts" ? classes.active : ""}`}
            onClick={() => handleCategoryClick("Desserts")}
          >
            <span role="img" aria-label="Cake" className={classes.emoji}>
              🍰
            </span>
            Desserts
          </ListItem>
          <ListItem
            className={`${classes.listItem} ${activeCategory === "Soda Drinks" ? classes.active : ""}`}
            onClick={() => handleCategoryClick("Soda Drinks")}
          >
            <span role="img" aria-label="Soda" className={classes.emoji}>
              🥤
            </span>
            Soda Drinks
          </ListItem>
          <ListItem
            className={`${classes.listItem} ${activeCategory === "Special Offers" ? classes.active : ""}`}
            onClick={() => handleCategoryClick("Special Offers")}
          >
            <span role="img" aria-label="Fire" className={classes.emoji}>
              🔥
            </span>
            Special Offers
          </ListItem>
        </List>
      </LeftBox>
      <CustomSmallBox>
        {Array.isArray(filteredItems) ? (
          filteredItems.map((item, index) => (
            <MenuPizzaCard key={index} category={[item]} handleAddItem={handleAddItem} />
          ))
        ) : (
          <p>No items found.</p>
        )}
      </CustomSmallBox>
    </CustomBox>
  );
};

export default MenuContent;

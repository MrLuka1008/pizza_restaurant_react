import React, { useState } from "react";
import { Box, List, TextField, ListItem } from "@mui/material";
import styled from "@emotion/styled";

import { makeStyles } from "@mui/styles";
import MenuPizzaCard from "../cards/MenuPizzaCard";
import classicPizzasData from "../../data/classicPizzasData";
import dessertsData from "../../data/dessertsData";
import sodaDrinks from "../../data/sodaDrinksData";
import pastaDishes from "../../data/pastaDishesData";
import specialOffers from "../../data/specialOffersData";
import specialtyPizzas from "../../data/specialtyPizzasData";
import vegetarianPizza from "../../data/vegetarianPizza";

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
  flexWrap: "wrap",
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

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const getMenuItems = () => {
    switch (activeCategory) {
      case "All":
        return (
          <>
            <MenuPizzaCard category={classicPizzasData} />
            <MenuPizzaCard category={vegetarianPizza} />
            <MenuPizzaCard category={specialtyPizzas} />
            <MenuPizzaCard category={pastaDishes} />
            <MenuPizzaCard category={dessertsData} />
            <MenuPizzaCard category={sodaDrinks} />
            <MenuPizzaCard category={specialOffers} />
          </>
        );
      case "Classic Pizzas":
        return <MenuPizzaCard category={classicPizzasData} />;
      case "Vegetarian Pizzas":
        return <MenuPizzaCard category={vegetarianPizza} />;
      case "Specialty Pizzas":
        return <MenuPizzaCard category={specialtyPizzas} />;
      case "Pasta Dishes":
        return <MenuPizzaCard category={pastaDishes} />;
      case "Desserts":
        return <MenuPizzaCard category={dessertsData} />;
      case "Soda Drinks":
        return <MenuPizzaCard category={sodaDrinks} />;
      case "Special Offers":
        return <MenuPizzaCard category={specialOffers} />;
      default:
        return null;
    }
  };

  console.log(activeCategory);

  return (
    <CustomBox>
      <LeftBox>
        <TextField id="filled-search" label="Search field" type="search" variant="filled" />
        <List className={classes.list}>
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
      <CustomSmallBox>{getMenuItems()}</CustomSmallBox>
    </CustomBox>
  );
};

export default MenuContent;

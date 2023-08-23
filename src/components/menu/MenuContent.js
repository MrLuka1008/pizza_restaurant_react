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
import { useDispatch } from "react-redux";
import { setCartsLength } from "../../redux/features/counter";
import MaxQuantityDialog from "./MaxQuantityDialog";

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
  width: "90%",
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
  height: "105vh",
  padding: "20px",
  maxWidth: "250px",
  borderRadius: "16px",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(5px)",
  border: "1px solid rgba(255, 255, 255, 0.3)",
}));

const useStyles = makeStyles((theme) => ({
  listItem: {
    marginTop: "20px",
    fontSize: "20px",
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

const categories = [
  { label: "All", emoji: "🌍" },
  { label: "Classic Pizzas", emoji: "🍕" },
  { label: "Vegetarian Pizzas", emoji: "🥦" },
  { label: "Specialty Pizzas", emoji: "✨" },
  { label: "Pasta Dishes", emoji: "🍝" },
  { label: "Desserts", emoji: "🍰" },
  { label: "Soda Drinks", emoji: "🥤" },
  { label: "Special Offers", emoji: "🔥" },
];

const MenuContent = () => {
  const classes = useStyles();
  const [searchInput, setSearchInput] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const dispatch = useDispatch();

  const [maxQuantityReached, setMaxQuantityReached] = useState(false);

  const handleCloseDialog = () => {
    setMaxQuantityReached(false);
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    window.scrollTo(0, 200);
  };

  const getMenuItems = () => {
    switch (activeCategory) {
      case "all":
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
        return [
          ...classicPizzasData,
          ...vegetarianPizzaData,
          ...specialtyPizzasData,
          ...pastaDishesData,
          ...dessertsData,
          ...sodaDrinksData,
          ...specialOffersData,
        ];
    }
  };

  const handleChange = (e) => {
    setActiveCategory("All");
    setSearchInput(e.target.value);
  };

  const filteredItems = getMenuItems().filter((item) => item.name.toLowerCase().includes(searchInput.toLowerCase()));

  const [cartMenu, setCartMenu] = useState(() => {
    const savedCartMenu = localStorage.getItem("cartMenu");
    return savedCartMenu ? JSON.parse(savedCartMenu) : [];
  });

  const handleAddItem = (pizza) => {
    const existingItemIndex = cartMenu.findIndex((item) => item.name === pizza.name);

    if (existingItemIndex !== -1) {
      const updatedCartMenu = [...cartMenu];
      if (updatedCartMenu[existingItemIndex].quantity < 20) {
        updatedCartMenu[existingItemIndex].quantity += 1;
        localStorage.setItem("cartMenu", JSON.stringify(updatedCartMenu));
        setCartMenu(updatedCartMenu);
      } else {
        setMaxQuantityReached(true);
      }
    } else {
      const updatedCartMenu = [...cartMenu, { name: pizza.name, size: "m", quantity: 1 }];
      localStorage.setItem("cartMenu", JSON.stringify(updatedCartMenu));
      setCartMenu(updatedCartMenu);
    }
  };

  useEffect(() => {
    localStorage.setItem("cartMenu", JSON.stringify(cartMenu));
    dispatch(setCartsLength());
  }, [cartMenu, dispatch]);

  if (filteredItems.length === 0) {
    console.log("Array is empty");
  } else {
    console.log("Array is not empty");
  }

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
          {categories.map((category) => (
            <ListItem
              key={category.label}
              className={`${classes.listItem} ${activeCategory === category.label ? classes.active : ""}`}
              onClick={() => handleCategoryClick(category.label)}
            >
              <span role="img" aria-label={category.label} className={classes.emoji}>
                {category.emoji}
              </span>
              {category.label}
            </ListItem>
          ))}
        </List>
      </LeftBox>
      <MaxQuantityDialog maxQuantityReached={maxQuantityReached} handleCloseDialog={handleCloseDialog} />
      <CustomSmallBox>
        {filteredItems.length !== 0 ? (
          filteredItems.map((item, index) => (
            <MenuPizzaCard key={index} category={[item]} handleAddItem={handleAddItem} />
          ))
        ) : (
          <Box>
            <p style={{ fontSize: "30px" }}>No items found.</p>
          </Box>
        )}
      </CustomSmallBox>
    </CustomBox>
  );
};

export default MenuContent;

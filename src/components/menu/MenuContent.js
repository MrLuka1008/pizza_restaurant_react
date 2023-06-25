import React, { useEffect, useState } from "react";
import { Box, List, Typography, Button, TextField, ListItem } from "@mui/material";
import styled from "@emotion/styled";
import StarIcon from "@mui/icons-material/Star";
import AttachMoneyTwoToneIcon from "@mui/icons-material/AttachMoneyTwoTone";

const BoxStyle = styled(Box)(() => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  flexShrink: "1",
  flexBasis: "240px",
  boxShadow: "0px 1px 50px -20px rgba(0,0,0,1)",
  borderRadius: "50px",
  width: "27%",
  padding: "30px 70px 100px 70px",
  "&:hover": {
    boxShadow: "0px 1px 50px -20px rgba(231, 91, 30, 1)",
  },
}));

const AddBtn = styled(Button)(() => ({
  position: "absolute",
  bottom: "0",
  right: "0",
  borderRadius: "0 0 50px 0",
  background: "#e75b1e",
  padding: "3px 30px",
  fontSize: "45px",
  "&:hover": {
    background: "#983d16",
  },
}));

const CustomBox = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const CustomSmallBox = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  width: "60%",
}));

const MenuContent = () => {
  const API_URL = "http://localhost:3500/topPizza";
  const [topPizza, setTopPizza] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        const listItems = await response.json();

        setTopPizza(listItems);
      } catch (err) {}
    };

    fetchItems();
  }, []);

  return (
    <CustomBox>
      <Box>
        <TextField id="filled-search" label="Search field" type="search" variant="filled" />
        <List>
          <ListItem>
            <span role="img" aria-label="Pizza Slice">
              🍕
            </span>{" "}
            Classic Pizzas
          </ListItem>
          <ListItem>
            <span role="img" aria-label="Broccoli">
              🥦
            </span>{" "}
            Vegetarian Pizzas
          </ListItem>
          <ListItem>
            <span role="img" aria-label="Sparkles">
              ✨
            </span>{" "}
            Specialty Pizzas
          </ListItem>
          <ListItem>
            <span role="img" aria-label="Pasta">
              🍝
            </span>{" "}
            Pasta Dishes
          </ListItem>
          <ListItem>
            <span role="img" aria-label="Cake">
              🍰
            </span>{" "}
            Desserts
          </ListItem>
          <ListItem>
            <span role="img" aria-label="Soda">
              🥤
            </span>{" "}
            Soda Drinks
          </ListItem>
          <ListItem>
            <span role="img" aria-label="Fire">
              🔥
            </span>{" "}
            Special Offers
          </ListItem>
        </List>
      </Box>
      <CustomSmallBox>
        {topPizza.map((pizza, index) => (
          <BoxStyle key={index}>
            <Typography
              fontSize={"25px"}
              letterSpacing={"2px"}
              fontWeight={"700"}
              color={"black"}
              fontFamily={"Italiana, serif"}
            >
              {pizza.name}
            </Typography>
            <img src={pizza.image} style={{ width: "auto", height: "200px" }} alt="Pizza" />
            <Box sx={{ position: "absolute", left: "15px", bottom: "10px" }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <StarIcon sx={{ fill: "#e75b1e", fontSize: "35px" }} />
                <h1>{pizza.star}</h1>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <AttachMoneyTwoToneIcon sx={{ fontSize: "30px" }} />
                <h1>{pizza.price}</h1>
              </Box>
            </Box>
            <AddBtn variant="contained" color="primary">
              +
            </AddBtn>
          </BoxStyle>
        ))}
      </CustomSmallBox>
    </CustomBox>
  );
};

export default MenuContent;

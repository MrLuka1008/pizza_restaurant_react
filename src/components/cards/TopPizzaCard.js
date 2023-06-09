import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import styled from "@emotion/styled";
import StarIcon from "@mui/icons-material/Star";
import AttachMoneyTwoToneIcon from "@mui/icons-material/AttachMoneyTwoTone";
import peperoniImg from "../../assets/images/pepperoni.png";

const BoxStyle = styled(Box)(() => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  flexShrink: "1",
  flexBasis: "240px",
  boxShadow: "0px 1px 50px -20px rgba(0,0,0,1)",
  borderRadius: "50px",
  width: "24%",
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

export default function TopPizzaCard() {
  const API_URL = "http://localhost:3500/topPizza";
  const [topPizza, setTopPizza] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        const listItems = await response.json();
        console.log(listItems);
        setTopPizza(listItems);
      } catch (err) {
        console.log(err.stack);
      }
    };

    fetchItems();
  }, []);

  return (
    <>
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
    </>
  );
}

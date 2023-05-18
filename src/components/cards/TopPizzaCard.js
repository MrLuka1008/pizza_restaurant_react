import React from "react";
import { Box, Button, Typography } from "@mui/material";
import styled from "@emotion/styled";
import pepperoniImg from "../../assets/images/pepperoni.png";
import cheeseImg from "../../assets/images/Cheese.png";
import margheritaImg from "../../assets/images/margherita.png";
import veggieImg from "../../assets/images/Veggie.png";

const BoxStyle = styled(Box)(() => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "150px",
}));

const pizzaData = [
  {
    name: "Pepperoni",
    image: pepperoniImg,
    description: "With pizza sauce, mozzarella cheese, and pepperoni.",
    price: "$20",
  },
  {
    name: "Cheese",
    image: cheeseImg,
    description: "With pizza sauce, mozzarella cheese, and pepperoni.",
    price: "$16",
  },
  {
    name: "margherita",
    image: margheritaImg,
    description: "With pizza sauce, mozzarella cheese, and pepperoni.",
    price: "$18",
  },
  {
    name: "Cheese",
    image: veggieImg,
    description: "With pizza sauce, mozzarella cheese, and pepperoni.",
    price: "$14",
  },
];

export default function TopPizzaCard() {
  return (
    <>
      {pizzaData.map((pizza, index) => (
        <BoxStyle key={index}>
          <Typography fontSize={"25px"} fontWeight={"700"} color={"black"}>
            {pizza.name}
          </Typography>
          <img src={pizza.image} style={{ width: "auto", height: "200px" }} alt="Pizza" />
          <Typography variant="subtitle1">{pizza.description}</Typography>
          <Typography variant="h6">{pizza.price}</Typography>
          <Button variant="contained" color="primary">
            Add to Cart
          </Button>
        </BoxStyle>
      ))}
    </>
  );
}

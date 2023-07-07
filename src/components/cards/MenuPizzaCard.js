import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import styled from "@emotion/styled";
import StarIcon from "@mui/icons-material/Star";
import AttachMoneyTwoToneIcon from "@mui/icons-material/AttachMoneyTwoTone";

const BoxStyle = styled(Box)(() => ({
  height: "350px",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  paddingTop: "30px",
  alignItems: "center",
  flexShrink: "1",
  flexBasis: "240px",
  boxShadow: "0px 1px 50px -20px rgba(0,0,0,1)",
  borderRadius: "50px",
  width: "24%",
  textAlign: "center",
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
  fontSize: "40px",

  "&:hover": {
    background: "#983d16",
  },
}));

export default function MenuPizzaCard({ category, handleAddItem }) {
  return (
    <>
      {category.map((pizza, index) => (
        <BoxStyle key={index}>
          <Typography fontSize={"22px"} fontWeight={"700"} color={"black"} fontFamily={"Italiana, serif"}>
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
              <h1>{pizza.sizes.m.price}</h1>
            </Box>
          </Box>
          <AddBtn variant="contained" color="primary" onClick={() => handleAddItem(pizza)}>
            +
          </AddBtn>
        </BoxStyle>
      ))}
    </>
  );
}

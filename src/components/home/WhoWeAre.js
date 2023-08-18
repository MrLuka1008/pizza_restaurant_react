import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import oldPizza from "../../assets/images/WhoWeAre/Old_Pizzeria_-_Napoli.jpg";
import MakePizza from "../../assets/images/WhoWeAre/pizzeria.jpg";
import PizzaForTogether from "../../assets/images/WhoWeAre/togetherpizza.jpg";

const sections = [
  {
    imgSrc: oldPizza,
    title: "History Of Pizzeria",
    content: `Probably the oldest pizzeria in the world to still operate to this day is Antica Pizzeria Port'Alba in Naples, Italy. The restaurant was founded in 1738 as a catering place for merchants...`,
  },
  {
    imgSrc: MakePizza,
    title: "What We Do",
    content: `We serve delicious pizza and more At our cozy pizzeria restaurant, we take pride in crafting mouthwatering pizzas and a variety of delectable dishes to satisfy your cravings.Nestled in a charming corner, our intimate pizzeria...`,
  },
  {
    imgSrc: PizzaForTogether,
    title: "Our Specialties",
    content: `Indulge in the Culinary Delights Discover our signature creations that have won the hearts of our patrons. From our hand-tossed artisanal pizzas to our chef-inspired pasta dishes, each bite is a testament to our passion for quality and flavor. Join us in savoring the essence of our carefully crafted menu...`,
  },
];

const PizzeriaInfo = () => {
  const isMobile = useMediaQuery(`(max-width: 768px)`);

  return (
    <Box sx={{ height: "100vh", textAlign: "center", fontFamily: "Poppins" }}>
      <Typography sx={{ fontSize: "40px", margin: "100px" }}>Who We Are !</Typography>
      <Box sx={{ display: "flex", width: "90%", margin: "auto", justifyContent: "space-around", flexWrap: "wrap" }}>
        {sections.map((section, index) => (
          <Box key={index} sx={{ maxWidth: "400px", fontSize: "14px" }}>
            <img src={section.imgSrc} style={{ width: "100%" }} alt={section.title} />
            <Typography sx={{ fontSize: "22px", padding: "10px" }}>{section.title}</Typography>
            <Typography sx={{ fontSize: "14px", display: isMobile ? "none" : "block" }}>{section.content}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default PizzeriaInfo;

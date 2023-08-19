import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import oldPizza from "../../assets/images/WhoWeAre/Old_Pizzeria_-_Napoli.jpg";
import MakePizza from "../../assets/images/WhoWeAre/pizzeria.jpg";
import PizzaForTogether from "../../assets/images/WhoWeAre/togetherpizza.jpg";
import Mobile from "./MobileWhoWeAre";

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
    title: "Our Team",
    content: `At Little Caesars, we believe that crafting the perfect slice of pizza is an art that requires dedication, skill, and a whole lot of love. Allow us to introduce you to the fantastic team behind the scenes who work tirelessly....`,
  },
];

const PizzeriaInfo = () => {
  const isLeptop = useMediaQuery(`(max-width: 1025px)`);

  return (
    <Box sx={{ textAlign: "center", fontFamily: "Poppins", padding: "50px" }}>
      <Typography sx={{ fontSize: "40px", margin: "100px auto", fontFamily: "Poppins", whiteSpace: "nowrap" }}>
        WHO WE ARE !
      </Typography>

      {!isLeptop ? (
        <Box
          sx={{
            display: "flex",
            width: "90%",
            margin: "auto",
            justifyContent: "space-around",
            flexWrap: "wrap",
            gap: "40px",
          }}
        >
          {sections.map((section, index) => (
            <Box
              key={index}
              sx={{
                maxWidth: "350px",
                height: "78vh",
                flex: "1",
                fontSize: "14px",
                boxShadow: "0px 1px 50px -20px rgba(0,0,0,1)",
                borderRadius: "20px",
                position: "relative",
              }}
            >
              <img
                src={section.imgSrc}
                style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "20px 20px 0 0" }}
                alt={section.title}
              />
              <Typography
                sx={{
                  fontSize: "22px",
                  padding: "20px 20px 10px 20px",
                  textAlign: "start",
                  fontWeight: "700",
                  position: "relative",
                  fontFamily: "Poppins",
                }}
              >
                {section.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  padding: "20px",
                  textAlign: "start",
                }}
              >
                {section.content}
              </Typography>

              <Typography
                sx={{ position: "absolute", left: "20px", bottom: "20px", cursor: "pointer", fontFamily: "Poppins" }}
              >
                Continue reading...
              </Typography>
            </Box>
          ))}
        </Box>
      ) : (
        <Mobile sections={sections} />
      )}
    </Box>
  );
};

export default PizzeriaInfo;

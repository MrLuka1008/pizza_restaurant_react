import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import reviewsOne from "../../../assets/images/reviewsImg/ReviewsOne.jpg";
import reviewsTwo from "../../../assets/images/reviewsImg/ReviewsTwo.jpeg";
import reviewsThree from "../../../assets/images/reviewsImg/ReviewsThree.jpg";

const ReviewsUsers = [
  {
    name: "Luna",
    Img: reviewsOne,
    Description:
      "If you're looking for pizza that's made with love, look no further. The team at Little Caesars really knows how to create a masterpiece. The crust is divine, and the combinations they come up with are unique and delicious. It's like they've unlocked the secret to pizza perfection!",
    rate: "10/10",
  },
  {
    name: "Nike",
    Img: reviewsTwo,
    Description:
      "Not only is the pizza incredible, but the staff at Little Caesars make you feel like family. The warm and welcoming atmosphere adds to the overall experience. I love bringing my kids here – they enjoy watching the chefs at work and savoring every bite. A must-visit for pizza enthusiasts!",
    rate: "10/10",
  },

  {
    name: "Josh",
    Img: reviewsThree,
    Description:
      "I stumbled upon Little Caesars and consider it a hidden gem. The quality, taste, and variety of their pizzas are outstanding. I appreciate that they offer both classic favorites and innovative options. It's clear that they put thought and creativity into every menu item.",
    rate: "10/10",
  },
];

const ReviewsUsersComp = () => {
  const isMobile = useMediaQuery(`(max-width: 768px)`);
  const isLeptop = useMediaQuery(`(max-width: 1025px)`);
  return (
    <Box
      sx={{
        width: "100%",
        gap: "30px",
        display: "flex",
        justifyContent: "space-between",
        padding: "36px",
        alignItems: "center",
        flexDirection: isMobile ? "column" : "row",
      }}
    >
      {ReviewsUsers.map((user) => (
        <Box sx={{ width: isMobile ? "100%" : "400px" }}>
          <Typography sx={{ fontSize: isMobile ? "16px" : "22px", marginBottom: "10px" }}>
            {user.name.toLocaleUpperCase()}
          </Typography>
          <img
            src={user.Img}
            alt={user.name}
            style={{
              width: isMobile ? "50%" : "100%",
              height: isMobile ? "20vh" : "30vh",
              objectFit: "cover",
              borderRadius: isMobile ? "20px" : "20px",
            }}
          />
          <Typography sx={{ fontSize: "14px", textAlign: "center" }}>{user.Description}</Typography>
          <Typography>{user.rate}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default ReviewsUsersComp;

import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import peoplegroupePizza from "../../../assets/images/reviewsImg/PeoplegroupePizza.jpg";
import ReviewsUsersComp from "./ReviewsUsersComp";

const Reviews = () => {
  const isMobile = useMediaQuery(`(max-width: 768px)`);
  const isLeptop = useMediaQuery(`(max-width: 1025px)`);
  return (
    <Box sx={{ textAlign: "center", fontFamily: "Poppins", padding: "50px", display: "flex", flexDirection: "column" }}>
      <Typography sx={{ fontSize: "40px", margin: "50px auto", fontFamily: "Poppins", whiteSpace: "nowrap" }}>
        Reviews
      </Typography>

      <Box
        sx={{
          display: "flex",
          width: "90%",
          margin: "auto",
          flexDirection: "column",
          boxShadow: "0px 1px 50px -20px rgba(0,0,0,1)",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            padding: "16px",
            flexWrap: isLeptop ? "wrap" : "nowrap",
            flexDirection: isMobile ? "column" : "row",
          }}
        >
          <img
            src={peoplegroupePizza}
            alt="peoplegroupe"
            style={{ width: "100%", height: "30vh", objectFit: "cover", flex: isLeptop ? "" : "1" }}
          />
          <Typography sx={{ fontSize: "16px", fontFamily: "Poppins", margin: "20px", minWidth: "250px" }}>
            <span style={{ fontSize: "28px", fontWeight: "700" }}>Dear Valued Guests</span> We are beyond thrilled to
            express our sincerest gratitude for your unwavering support and love for our pizza at Little Caesars. Your
            smiles, feedback, and repeat visits have filled our hearts with immense joy and motivation. To each and
            every one of you who has savored a slice, indulged in a pie, or delighted in our flavors, we want you to
            know that your satisfaction is what fuels our passion. Seeing your enjoyment is our greatest reward and
            reminds us why we do what we do with so much dedication.
          </Typography>
        </Box>

        <ReviewsUsersComp />
      </Box>
    </Box>
  );
};

export default Reviews;

import React from "react";
import { Box, Typography } from "@mui/material";

const Mobile = ({ sections }) => (
  <Box
    sx={{
      display: "grid",
      gap: "20px",
      alignItems: "center",
    }}
  >
    {sections.map((section, index) => (
      <Box key={index} sx={{ minWidth: "350px", fontSize: "14px", textAlign: "center", position: "relative" }}>
        <Typography
          sx={{
            fontSize: "38px",
            fontFamily: "Poppins",
            fontWeight: "700",
            position: "absolute",
            color: "white",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            whiteSpace: "nowrap",
            cursor: "pointer",
            "&:hover::after": {
              content: '""',
              display: "block",
              position: "absolute",
              width: "100%",
              height: "2px",
              background: "#fff",
              bottom: "0",
              left: 0,
            },
          }}
        >
          {section.title}
        </Typography>

        <Box
          sx={{
            background: `linear-gradient(rgba(31, 31, 31, 0.76), rgba(31, 31, 31, 0.76)), url(${section.imgSrc})`,
            width: "100%",
            minHeight: "25vh",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></Box>
      </Box>
    ))}
  </Box>
);

export default Mobile;

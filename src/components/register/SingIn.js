import React, { useState } from "react";
import LoginIn from "./LoginIn";
import RegisterForm from "./RegisterForm";
import { Box, Button, Typography, styled } from "@mui/material";

const CustomBox = styled(Box)(({ isLeft }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "6.5rem",
  right: isLeft ? "100px" : "700px", // Adjust the positioning as per your layout
  width: "44%",
  background: "rgb(231, 91, 30)",
  position: "absolute",
  height: "70vh",
  zIndex: "2",
  transition: "right 0.5s ease", // Add transition for smooth movement
}));

const CustomButton = styled(Button)(() => ({
  fontSize: "16px",
  padding: "15px 15px",
  background: "#fff",
  color: "#e75b1e",

  "&:hover": {
    color: "white",
    boxShadow: "0px 2px 0px #fff",
  },
}));

const SingIn = () => {
  const [isLeft, setIsLeft] = useState(false);

  const handleSignIn = () => {
    setIsLeft(!isLeft);
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        padding: "150px",
        position: "relative",
      }}
    >
      <RegisterForm />
      <CustomBox isLeft={isLeft}>
        {isLeft ? (
          <>
            <Typography color={"white"} sx={{ fontFamily: "Italiana, serif" }} variant="h3">
              Welcome Back!
            </Typography>
            <Typography color={"white"} variant="h5" textAlign={"center"}>
              To keep connected with us please login with your <br /> persona info
            </Typography>
          </>
        ) : (
          <>
            <Typography color={"white"} sx={{ fontFamily: "Italiana, serif" }} variant="h3">
              Hello, Friend!
            </Typography>
            <Typography color={"white"} variant="h5" textAlign={"center"}>
              Enter your detail and start journey <br /> with us
            </Typography>
          </>
        )}

        <CustomButton onClick={handleSignIn}>{isLeft ? "SIGN IN" : "Register"}</CustomButton>
      </CustomBox>
      <LoginIn />
    </div>
  );
};

export default SingIn;

import React, { useState } from "react";
import LoginIn from "./LoginIn";
import RegisterForm from "./RegisterForm";
import { Box, Button, Typography, styled } from "@mui/material";

const CustomBox = styled(Box)(({ isLeft }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  // left: isLeft ? "0" : "auto",
  // right: isLeft ? "auto" : "0",
  right: isLeft ? "0" : "calc(100% - 50%)",
  width: "50%",
  background: "rgb(231, 91, 30)",
  position: "absolute",
  height: "70vh",
  zIndex: "2",
  // transition: "left 0.5s ease, right 0.5s ease", // Add transition for smooth movement
  transition: "right 1s ease",
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

  const handleToggleBox = () => {
    setIsLeft(!isLeft);
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <RegisterForm />
      <CustomBox isLeft={isLeft}>
        {isLeft ? (
          <>
            <Typography color="white" sx={{ fontFamily: "Italiana, serif" }} variant="h3">
              Welcome Back!
            </Typography>
            <Typography color="white" variant="h5" textAlign="center">
              To keep connected with us please login with your <br /> persona info
            </Typography>
          </>
        ) : (
          <>
            <Typography color="white" sx={{ fontFamily: "Italiana, serif" }} variant="h3">
              Hello, Friend!
            </Typography>
            <Typography color="white" variant="h5" textAlign="center">
              Enter your details and start your journey <br /> with us
            </Typography>
          </>
        )}

        <CustomButton onClick={handleToggleBox}>{isLeft ? "SIGN IN" : "Register"}</CustomButton>
      </CustomBox>
      <LoginIn />
    </div>
  );
};

export default SingIn;

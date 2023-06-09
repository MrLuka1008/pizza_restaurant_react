import { Button, TextField, Typography, styled } from "@mui/material";
import React from "react";

const CustomButton = styled(Button)(() => ({
  marginLeft: "10px",
  fontSize: "14px",
  padding: "15px 15px",
  background: "#e75b1e",
  color: "white",
  "&:hover": {
    color: "#e75b1e",
    boxShadow: "0px 2px 0px #e75b1e",
  },
}));

const LoginIn = () => {
  return (
    <div
      style={{
        width: "50%",
        background: "rgba(255, 255, 255, 0.6)",
        borderRadius: " 16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
      }}
    >
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "45px",
          justifyContent: "center",

          height: "70vh",
          padding: "50px",
        }}
      >
        <Typography
          variant="h3"
          color={"#e75b1e"}
          fontWeight={"700"}
          marginBottom={"50px"}
          sx={{ fontFamily: "Italiana, serif" }}
        >
          Sing In
        </Typography>
        <TextField type="email" name="gmail" placeholder="Gmail" />
        <TextField type="text" name="password" placeholder="password" required />
        <CustomButton type="submit">LoginIn</CustomButton>
      </form>
    </div>
  );
};

export default LoginIn;

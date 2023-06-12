import { Button, TextField, Typography, styled } from "@mui/material";
import React, { useState } from "react";

const CustomButton = styled(Button)(() => ({
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
  const API_URL = "http://localhost:3500/registerAccount";
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("gmail");
    const password = formData.get("password");

    console.log(email);
    console.log(password);

    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Failed to fetch account data");
      }
      const data = await response.json();

      const matchedAccount = data.find((account) => account.gmail === email && account.password === password);

      if (matchedAccount) {
        console.log("Login  successful");
        // Perform necessary actions for successful login
      } else {
        setErrorMessage("Invalid email or password");
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div
      style={{
        minWidth: "50%",
        background: "rgba(255, 255, 255, 0.6)",
        borderRadius: " 16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
      }}
    >
      <form
        onSubmit={handleLogin}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          height: "70vh",
          padding: "50px",
        }}
      >
        <Typography variant="h3" color={"#e75b1e"} fontWeight={"700"} sx={{ fontFamily: "Italiana, serif" }}>
          Sign In
        </Typography>
        <TextField type="email" name="gmail" placeholder="Email" required />
        <TextField type="password" name="password" placeholder="Password" required />
        <CustomButton type="submit">Login</CustomButton>
        {errorMessage && (
          <Typography variant="body1" color="error">
            {errorMessage}
          </Typography>
        )}
      </form>
    </div>
  );
};

export default LoginIn;

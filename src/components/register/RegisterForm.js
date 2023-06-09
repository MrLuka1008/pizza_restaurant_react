import React, { useState } from "react";
import apiRequest from "../../api/apiRequest";
import { Button, TextField, Typography, styled } from "@mui/material";

const CustomButton = styled(Button)(() => ({
  marginLeft: "10px",
  fontSize: "16px",
  padding: "15px 15px",
  background: "#e75b1e",
  color: "white",
  "&:hover": {
    color: "#e75b1e",
    boxShadow: "0px 2px 0px #e75b1e",
  },
}));

const RegisterForm = () => {
  const API_URL = "http://localhost:3500/registerAccount";

  const [fetchError, setFetchError] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    gmail: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);

    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    const result = await apiRequest(API_URL, postOptions);
    if (result) setFetchError(result);
  };

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
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "center",
          padding: "60px",
          height: "70vh",
        }}
      >
        <Typography
          variant="h3"
          color={"#e75b1e"}
          fontWeight={"700"}
          marginBottom={"50px"}
          sx={{ fontFamily: "Italiana, serif" }}
        >
          Create Account
        </Typography>
        <TextField type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} />
        <TextField type="email" name="gmail" placeholder="Gmail" value={formData.gmail} onChange={handleInputChange} />
        <TextField
          type="text"
          name="password"
          placeholder="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        <CustomButton type="submit">Register</CustomButton>
      </form>
    </div>
  );
};

export default RegisterForm;

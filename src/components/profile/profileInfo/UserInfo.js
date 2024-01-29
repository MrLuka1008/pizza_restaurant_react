import React, { useEffect, useState } from "react";
import { Box, InputLabel, Typography } from "@mui/material";
import miniLogo from "../../../assets/images/miniLogo.png";
import SubmitBtn from "../../buttons/SubmitBtn";
import { ArrowDownward } from "@mui/icons-material";
import MyTextField from "./MyTextField";

const UserInfo = () => {
  const API_URL = "http://localhost:3500/registerAccount";

  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    gmail: "",
    city: "",
    address: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const userId = localStorage.getItem("user_id");

  useEffect(() => {
    const getInfoUser = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();

        const user = data.find((account) => account.id === userId);

        if (user) {
          setFormData({
            name: user.name,
            lastname: user.lastname,
            gmail: user.gmail,
            city: user.city,
            address: user.address,
          });

          // setSelectedCountry(user.city);
        }
      } catch (error) {
        console.log("Error fetching user data:", error);
      }
    };

    if (userId) {
      getInfoUser();
    }
  }, [userId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const patchOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    try {
      const response = await fetch(`${API_URL}/${userId}`, patchOptions);

      if (response.ok) {
        console.log("Data updated successfully!");
      } else {
        console.log("Failed to update data. Status:", response.status);
      }
    } catch (error) {
      console.log("Error updating data:", error);
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        padding: "20px",
        height: "100vh",
      }}
    >
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // justifyContent: "space-around",
          justifyContent: "center",
          gap: "10px",
          width: "50%",
        }}
        onSubmit={handleSubmit}
      >
        <InputLabel>First Name</InputLabel>
        <MyTextField value={formData.name} handleInputChange={handleInputChange} name={"name"} />

        <InputLabel htmlFor="last-name">Last Name</InputLabel>
        <MyTextField value={formData.lastname} handleInputChange={handleInputChange} name={"lastname"} />

        <InputLabel htmlFor="email">Email</InputLabel>
        <MyTextField value={formData.gmail} handleInputChange={handleInputChange} name={"gmail"} disabled={true} />

        <InputLabel htmlFor="email">New password</InputLabel>
        <MyTextField value={formData.password} handleInputChange={handleInputChange} name={"password"} />
        <SubmitBtn text={"save and continue shopping"} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          width: "50%",
          height: "50vh",
          background: "#e75b1e",
          borderRadius: " 16px",
          textAlign: "center",
        }}
      >
        <img style={{ width: "150px" }} alt="logo" src={miniLogo}></img>
      </Box>
    </Box>
  );
};

export default UserInfo;

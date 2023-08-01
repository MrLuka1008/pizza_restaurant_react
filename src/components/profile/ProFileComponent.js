import React, { useEffect, useState } from "react";
import ProFile from "./ProFile";
import ProfileAddress from "./ProfileAddress";
import { Box } from "@mui/material";

const ProFileComponent = () => {
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
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "80%",
          alignItems: "center",
          flexDirection: "column",
          borderRadius: "16px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(5px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
        }}
      >
        <ProFile handleSubmit={handleSubmit} formData={formData} handleInputChange={handleInputChange} />

        <ProfileAddress formData={formData} />
      </Box>
    </Box>
  );
};

export default ProFileComponent;

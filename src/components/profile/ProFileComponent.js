import React, { useEffect, useState } from "react";
import ProFile from "./ProFile";
import ProfileAddress from "./ProfileAddress";
import { Box, List, ListItem, Typography } from "@mui/material";
import AddressComponent from "./AddressComponent";

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

  const addressArray = Object.entries(formData.address).map(([key, value]) => ({ [key]: value }));

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "50px",
      }}
    >
      <ProFile handleSubmit={handleSubmit} formData={formData} handleInputChange={handleInputChange} />

      <ProfileAddress />

      <Box
        sx={{
          background: "rgba(255, 255, 255, 0.6)",
          borderRadius: " 16px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(5px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
        }}
      >
        {addressArray.map((addressObj, index) => (
          <List key={index}>
            <ListItem>
              <Typography>{Object.keys(addressObj)[0].toUpperCase()}</Typography>
              <AddressComponent address={Object.values(addressObj)[0]} />
            </ListItem>
          </List>
        ))}
      </Box>
    </Box>
  );
};

export default ProFileComponent;

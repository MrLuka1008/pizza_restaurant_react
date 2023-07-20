import React, { useEffect, useState } from "react";
import { Box, TextField, Typography, FormControl, InputLabel, Select, MenuItem, Button } from "@mui/material";
import apiRequest from "../../api/apiRequest";

const ProFileComponent = () => {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [address, setAddress] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [shippingPrice, setShippingPrice] = useState(0);
  const API_URL = "http://localhost:3500/registerAccount";

  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    gmail: "",
    city: "",
    address: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    console.log(formData);
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

    const putOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    try {
      const response = await fetch(`${API_URL}/${userId}`, putOptions);
      if (response.ok) {
        console.log("Data updated successfully!");
      } else {
        console.log("Failed to update data. Status:", response.status);
      }
    } catch (error) {
      console.log("Error updating data:", error);
    }
  };

  const handleCountryChange = (event) => {
    const country = event.target.value;
    setSelectedCountry(country);

    const shippingPrices = {
      tbilisi: 5,
      kutaisi: 8,
      batumi: 10,
      rustavi: 6,
      gori: 7,
      zugdidi: 9,
      poti: 10,
      khashuri: 7,
      telavi: 6,
    };

    setShippingPrice(shippingPrices[country] || 0); // Set the shipping price for the selected country
  };

  return (
    <Box
      component="form"
      sx={{
        padding: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        gap: "20px",
      }}
      onSubmit={handleSubmit}
    >
      <InputLabel>First Name</InputLabel>
      <TextField
        id="first-name"
        type="text"
        name="name"
        variant="outlined"
        value={formData.name}
        onChange={handleInputChange}
        required
      />
      <InputLabel htmlFor="last-name">Last Name</InputLabel>
      <TextField
        id="last-name"
        type="text"
        name="lastname"
        variant="outlined"
        value={formData.lastname}
        onChange={handleInputChange}
        required
      />
      <InputLabel htmlFor="email">Email</InputLabel>
      <TextField
        id="email"
        variant="outlined"
        type="email"
        name="gmail"
        value={formData.gmail}
        onChange={handleInputChange}
        required
      />
      <FormControl sx={{ minWidth: 225 }}>
        <InputLabel htmlFor="country-select">Select City</InputLabel>
        <Select
          value={selectedCountry}
          onChange={handleCountryChange}
          label="Select City"
          inputProps={{
            name: "country",
            id: "country-select",
          }}
        >
          <MenuItem value="tbilisi">tbilisi</MenuItem>
          <MenuItem value="kutaisi">kutaisi</MenuItem>
          <MenuItem value="batumi">batumi</MenuItem>
          <MenuItem value="rustavi">rustavi</MenuItem>
          <MenuItem value="gori">gori</MenuItem>
          <MenuItem value="zugdidi">zugdidi</MenuItem>
          <MenuItem value="poti">poti</MenuItem>
          <MenuItem value="khashuri">khashuri</MenuItem>
          <MenuItem value="telavi">telavi</MenuItem>
        </Select>
      </FormControl>
      <InputLabel htmlFor="address">Full Address</InputLabel>
      <TextField
        id="address"
        name="address"
        variant="outlined"
        value={formData.address}
        onChange={handleInputChange}
        required
      />
      {selectedCountry && (
        <Typography variant="body1">
          Shipping Price to {selectedCountry.toUpperCase()}: ${shippingPrice}
        </Typography>
      )}
      <Button type="submit" variant="contained" color="primary">
        save and continue shopping
      </Button>
    </Box>
  );
};

export default ProFileComponent;

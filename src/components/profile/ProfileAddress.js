import React, { useState } from "react";
import { Box, TextField, FormControl, InputLabel, Select, MenuItem, Button } from "@mui/material";

const ProfileAddress = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const API_URL = "http://localhost:3500/registerAccount";
  // const [phone, setPhone] = useState("");
  // const [stateFullAddress, setStateFullAddress] = useState("");
  // const [shippingPrice, setShippingPrice] = useState(0);

  const [address, setAddress] = useState({ city: "", fullAddress: "", phone: "" });
  const [addresses, setAddresses] = useState([]);
  const userId = localStorage.getItem("user_id");

  const handleCountryChange = (event) => {
    const country = event.target.value;
    setSelectedCountry(country);

    // const shippingPrices = {
    //   tbilisi: 5,
    //   kutaisi: 8,
    //   batumi: 10,
    //   rustavi: 6,
    //   gori: 7,
    //   zugdidi: 9,
    //   poti: 10,
    //   khashuri: 7,
    //   telavi: 6,
    // };

    setAddress((prevAddress) => ({
      ...prevAddress,
      city: country,
    }));

    // setShippingPrice(shippingPrices[country] || 0); // Set the shipping price for the selected country
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  setAddresses((prevAddresses) => [...prevAddresses, address]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const patchOptions = {
      method: "PATCH", // Use PATCH method to update the data
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addresses),
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

  console.log(addresses);
  return (
    <Box
      component="form"
      sx={{
        padding: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
      onSubmit={handleSubmit}
    >
      <FormControl sx={{ minWidth: 225 }}>
        <InputLabel htmlFor="country-select">Select City</InputLabel>
        <Select
          value={selectedCountry}
          onChange={handleCountryChange}
          name="city"
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
        name="fullAddress"
        variant="outlined"
        value={address.fullAddress}
        onChange={handleInputChange}
        required
      />
      <InputLabel htmlFor="Phone">Phone</InputLabel>
      <TextField
        id="Phone"
        name="phone"
        variant="outlined"
        value={address.phone}
        onChange={handleInputChange}
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Add new address
      </Button>
    </Box>
  );
};

export default ProfileAddress;

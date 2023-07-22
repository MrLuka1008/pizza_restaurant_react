import React, { useState } from "react";
import { Box, TextField, Typography, FormControl, InputLabel, Select, MenuItem, Button } from "@mui/material";

const ProfileAddress = ({ handleSubmit, formData, handleInputChange, setFormData }) => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [shippingPrice, setShippingPrice] = useState(0);

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

    setFormData((prevFormData) => ({
      ...prevFormData,
      city: country,
    }));

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

export default ProfileAddress;

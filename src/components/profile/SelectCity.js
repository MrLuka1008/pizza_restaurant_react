import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import React from "react";

const SelectCity = ({ selectedCountry, handleCountryChange }) => {
  return (
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
  );
};

export default SelectCity;

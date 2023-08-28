import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import React from "react";

export const citys = [
  {
    city: "tbilisi",
    price: "12",
  },
  {
    city: "kutaisi",
    price: "8",
  },
  {
    city: "batumi",
    price: "12",
  },
  {
    city: "telavi",
    price: "10",
  },
];

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
        {citys.map((cityObj) => (
          <MenuItem key={cityObj.city} value={cityObj.city}>
            {cityObj.city.toUpperCase()}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectCity;

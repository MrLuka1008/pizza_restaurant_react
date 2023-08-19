import { CheckBox } from "@mui/icons-material";
import { Box, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React, { useEffect, useState } from "react";
import apiRequest from "../../api/apiRequest";

const MainCheckOut = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const userId = localStorage.getItem("user_id");
  const API_URL = `http://localhost:3500/registerAccount/${userId}`;

  //   const listItems = await restestponse.json();
  //   const response = apiRequest(API_URL);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        const userinfo = await response.json();

        console.log(userinfo);
      } catch (err) {}
    };

    fetchItems();
  }, []);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <Box>
      <FormGroup sx={{ width: "400px" }}>
        <FormControlLabel
          control={<Checkbox checked={selectedValue === "option1"} onChange={handleChange} value="option1" />}
          label="Delivery"
        />
        <FormControlLabel
          control={<Checkbox checked={selectedValue === "option2"} onChange={handleChange} value="option2" />}
          label="Pickup"
        />
        <FormControlLabel
          control={<Checkbox checked={selectedValue === "option3"} onChange={handleChange} value="option3" />}
          label="in pizzeria"
        />
      </FormGroup>
    </Box>
  );
};

export default MainCheckOut;

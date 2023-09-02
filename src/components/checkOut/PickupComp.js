import React, { useState } from "react";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useDispatch } from "react-redux";
import { setPickUpTime } from "../../redux/features/placeOrderSlice";

const options = [
  { value: 25, label: "Choose Time" },
  { value: 0, label: "I will call" },
  { value: 9, label: "09:00" },
  { value: 10, label: "10:00" },
  { value: 11, label: "11:00" },
  { value: 12, label: "12:00" },
  { value: 13, label: "13:00" },
  { value: 14, label: "14:00" },
  { value: 15, label: "15:00" },
  { value: 16, label: "16:00" },
  { value: 17, label: "17:00" },
  { value: 18, label: "18:00" },
  { value: 19, label: "19:00" },
  { value: 20, label: "20:00" },
  { value: 21, label: "21:00" },
  { value: 22, label: "22:00" },
  { value: 23, label: "23:00" },
  { value: 24, label: "24:00" },
];

const PickupComp = () => {
  const [selectedTime, setSelectedTime] = useState(""); // State to hold the selected time
  const dispatch = useDispatch();

  const handleTimeChange = (event) => {
    const value = event.target.value;
    setSelectedTime(value); // Update the selected time state
  };
  dispatch(setPickUpTime(selectedTime));

  return (
    <Box>
      <FormControl sx={{ width: "200px" }}>
        <InputLabel>Time</InputLabel>
        <Select value={selectedTime} onChange={handleTimeChange} required>
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value} disabled={option.value === 25}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default PickupComp;

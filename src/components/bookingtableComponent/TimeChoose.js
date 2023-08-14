import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const TimeChoose = ({ allInfoBookingTable, handleTimeChange, options }) => {
  return (
    <FormControl sx={{ width: "200px" }}>
      <InputLabel>Time</InputLabel>
      <Select value={allInfoBookingTable.TimeValue.value} onChange={handleTimeChange} required>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value} disabled={option.value === 25}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default TimeChoose;

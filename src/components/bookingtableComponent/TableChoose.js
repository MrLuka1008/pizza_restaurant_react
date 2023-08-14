import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import React from "react";

const TableChoose = ({ allInfoBookingTable, handleTableChange }) => {
  return (
    <FormControl sx={{ width: "300px" }}>
      <InputLabel>Table</InputLabel>
      <Select value={allInfoBookingTable.TableValue} onChange={handleTableChange} required>
        <MenuItem value={0}>I will call and And so I booked it</MenuItem>
        <MenuItem value={14}>Free Space</MenuItem>
        <MenuItem value={1}>Table 1, People 4</MenuItem>
        <MenuItem value={2}>Table 2, People 4</MenuItem>
        <MenuItem value={3}>Table 3, People 4</MenuItem>
        <MenuItem value={4}>Table 4, People 4</MenuItem>
        <MenuItem value={5}>Table 5, People 7</MenuItem>
        <MenuItem value={6}>Table 6, People 7</MenuItem>
        <MenuItem value={7}>Table 7, People 6</MenuItem>
        <MenuItem value={8}>Table 8, People 6</MenuItem>
        <MenuItem value={9}>Table 9, People 6</MenuItem>
        <MenuItem value={10}>Table 10, People 6</MenuItem>
        <MenuItem value={11}>Table 11, People 6</MenuItem>
        <MenuItem value={12}>Table 11, People 8</MenuItem>
        <MenuItem value={13}>Table 11, People 8</MenuItem>
      </Select>
    </FormControl>
  );
};

export default TableChoose;
